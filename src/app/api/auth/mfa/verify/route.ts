import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { verifyMfaToken } from "@/lib/mfa";
import { prisma } from "@/lib/prisma";

const schema = z.object({ token: z.string().min(6).max(6) });

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  if (!session.user.mfaSecret) {
    return NextResponse.json({ error: "Nenhum cadastro de MFA em andamento." }, { status: 400 });
  }

  const body = schema.safeParse(await req.json());
  if (!body.success) return NextResponse.json({ error: "Código inválido." }, { status: 400 });

  if (!verifyMfaToken(session.user.mfaSecret, body.data.token)) {
    return NextResponse.json({ error: "Código incorreto." }, { status: 401 });
  }

  await prisma.user.update({ where: { id: session.user.id }, data: { mfaEnabled: true } });
  return NextResponse.json({ ok: true });
}
