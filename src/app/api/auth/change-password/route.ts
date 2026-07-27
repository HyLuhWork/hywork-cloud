import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { hashPassword, verifyPassword } from "@/lib/auth";
import { getSecuritySettings } from "@/lib/security-settings";
import { validatePasswordComplexity, isPasswordReused, recordPasswordHistory } from "@/lib/password-policy";

const schema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

  const body = schema.safeParse(await req.json());
  if (!body.success) return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  const { currentPassword, newPassword } = body.data;

  const valid = await verifyPassword(currentPassword, session.user.passwordHash);
  if (!valid) return NextResponse.json({ error: "Senha atual incorreta." }, { status: 401 });

  const settings = await getSecuritySettings(session.tenant.id);

  const complexity = validatePasswordComplexity(newPassword, settings);
  if (!complexity.valid) {
    return NextResponse.json({ error: "Senha não atende à política.", details: complexity.errors }, { status: 400 });
  }

  if (await isPasswordReused(session.user.id, newPassword, settings)) {
    return NextResponse.json(
      { error: `Esta senha já foi utilizada recentemente. Escolha uma diferente das últimas ${settings.passwordHistoryCount}.` },
      { status: 400 },
    );
  }

  const passwordHash = await hashPassword(newPassword);
  await prisma.user.update({ where: { id: session.user.id }, data: { passwordHash } });
  await recordPasswordHistory(session.user.id, passwordHash);

  return NextResponse.json({ ok: true });
}
