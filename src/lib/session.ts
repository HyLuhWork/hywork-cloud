import { cookies } from "next/headers";
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { SESSION_COOKIE_NAME, sha256, signSessionCookie, verifySessionCookie } from "@/lib/auth";
import { getSecuritySettings, sessionTimeoutMs } from "@/lib/security-settings";
import type { User, Tenant, SecuritySettings } from "@prisma/client";

export interface ActiveSession {
  sessionId: string;
  user: User;
  tenant: Tenant;
  settings: SecuritySettings;
}

/**
 * Creates a new device session for the user. When the tenant's device policy
 * is SINGLE, every other active session for the user is revoked first so a
 * new login always wins over stale ones elsewhere.
 */
export async function createSession(
  userId: string,
  tenantId: string,
  userAgent: string | null,
): Promise<string> {
  const settings = await getSecuritySettings(tenantId);

  if (settings.devicePolicy === "SINGLE") {
    await prisma.session.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  const session = await prisma.session.create({
    data: {
      userId,
      tenantId,
      userAgent,
      tokenHash: "",
    },
  });

  const tokenHash = sha256(session.id);
  await prisma.session.update({ where: { id: session.id }, data: { tokenHash } });

  return signSessionCookie(session.id);
}

/**
 * Resolves the current request's session, enforcing the tenant's inactivity
 * timeout. Returns null when there is no session, it was revoked (e.g. by a
 * single-device login elsewhere), or it expired from inactivity — in which
 * case the underlying row is revoked so the cookie can never be replayed.
 */
export const getSession = cache(async (): Promise<ActiveSession | null> => {
  const cookieStore = cookies();
  const raw = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!raw) return null;

  const sessionId = verifySessionCookie(raw);
  if (!sessionId) return null;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: { include: { tenant: true } } },
  });
  if (!session || session.revokedAt) return null;
  if (!session.user.isActive) return null;

  const settings = await getSecuritySettings(session.tenantId);
  const timeout = sessionTimeoutMs(settings);
  if (timeout !== null) {
    const idleFor = Date.now() - session.lastActivityAt.getTime();
    if (idleFor > timeout) {
      await prisma.session.update({ where: { id: session.id }, data: { revokedAt: new Date() } });
      return null;
    }
  }

  await prisma.session.update({ where: { id: session.id }, data: { lastActivityAt: new Date() } });

  return {
    sessionId: session.id,
    user: session.user,
    tenant: session.user.tenant,
    settings,
  };
});

export async function revokeSession(sessionId: string): Promise<void> {
  await prisma.session.update({ where: { id: sessionId }, data: { revokedAt: new Date() } });
}
