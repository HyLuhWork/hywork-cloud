import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { verifyPassword, SESSION_COOKIE_NAME } from "@/lib/auth";
import { createSession } from "@/lib/session";
import { verifyMfaToken } from "@/lib/mfa";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  mfaToken: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = schema.safeParse(await req.json());
  if (!body.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }
  const { email, password, mfaToken } = body.data;

  const user = await prisma.user.findFirst({ where: { email } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: "E-mail ou senha inválidos." }, { status: 401 });
  }
  if (!user.isActive) {
    return NextResponse.json(
      { error: "Usuário desativado por inatividade. Contate um administrador." },
      { status: 403 },
    );
  }

  if (user.mfaEnabled) {
    if (!mfaToken) {
      return NextResponse.json({ mfaRequired: true }, { status: 200 });
    }
    if (!user.mfaSecret || !verifyMfaToken(user.mfaSecret, mfaToken)) {
      return NextResponse.json({ error: "Código MFA inválido." }, { status: 401 });
    }
  }

  const cookieValue = await createSession(user.id, user.tenantId, req.headers.get("user-agent"));
  await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, cookieValue, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
