import { redirect } from "next/navigation";
import { getSession, type ActiveSession } from "@/lib/session";
import { mfaSetupRequired } from "@/lib/mfa";

/** Server-side guard for pages under the authenticated app shell. */
export async function requireUser(): Promise<ActiveSession> {
  const session = await getSession();
  if (!session) redirect("/login");
  if (mfaSetupRequired(session.settings, session.user.role, session.user.mfaEnabled)) {
    redirect("/mfa/setup");
  }
  return session;
}

/** Guard for admin-only areas, like Configurações → Segurança. */
export async function requireAdmin(): Promise<ActiveSession> {
  const session = await requireUser();
  if (session.user.role !== "ADMIN") redirect("/home");
  return session;
}
