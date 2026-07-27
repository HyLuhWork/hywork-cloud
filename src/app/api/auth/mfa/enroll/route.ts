import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { generateMfaSecret, generateMfaQrCode } from "@/lib/mfa";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

  const secret = generateMfaSecret();
  await prisma.user.update({ where: { id: session.user.id }, data: { mfaSecret: secret } });

  const qrCodeDataUrl = await generateMfaQrCode(session.user.email, secret);
  return NextResponse.json({ secret, qrCodeDataUrl });
}
