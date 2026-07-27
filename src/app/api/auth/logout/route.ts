import { NextResponse } from "next/server";
import { getSession, revokeSession } from "@/lib/session";
import { SESSION_COOKIE_NAME } from "@/lib/auth";

export async function POST() {
  const session = await getSession();
  if (session) await revokeSession(session.sessionId);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return res;
}
