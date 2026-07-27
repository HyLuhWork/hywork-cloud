import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { deactivateInactiveUsers } from "@/lib/deactivate-inactive-users";

/**
 * Runs the inactive-user deactivation sweep for the caller's tenant. There is
 * no cron runner in this app, so this is meant to be hit by an external
 * scheduler (e.g. a daily cron calling this route) or triggered manually by
 * an admin from the Security Center.
 */
export async function POST() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  if (session.user.role !== "ADMIN") return NextResponse.json({ error: "Acesso negado." }, { status: 403 });

  const result = await deactivateInactiveUsers(session.tenant.id);
  return NextResponse.json(result);
}
