import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { getSecuritySettings, updateSecuritySettings } from "@/lib/security-settings";

const schema = z.object({
  sessionTimeoutEnabled: z.boolean().optional(),
  sessionTimeoutValue: z.number().int().min(1).max(999).optional(),
  sessionTimeoutUnit: z.enum(["MINUTES", "HOURS"]).optional(),

  inactiveUserDeactivationEnabled: z.boolean().optional(),
  inactiveUserDeactivationDays: z.number().int().min(1).max(3650).optional(),

  devicePolicy: z.enum(["MULTIPLE", "SINGLE"]).optional(),

  passwordMinLength: z.number().int().min(4).max(128).optional(),
  passwordMaxLength: z.number().int().min(4).max(256).nullable().optional(),
  passwordRequireUppercase: z.boolean().optional(),
  passwordRequireLowercase: z.boolean().optional(),
  passwordRequireNumber: z.boolean().optional(),
  passwordRequireSpecialChar: z.boolean().optional(),

  passwordHistoryEnabled: z.boolean().optional(),
  passwordHistoryCount: z.number().int().min(1).max(24).optional(),

  mfaPolicy: z.enum(["OPTIONAL", "REQUIRED"]).optional(),
});

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  if (session.user.role !== "ADMIN") return NextResponse.json({ error: "Acesso negado." }, { status: 403 });

  const settings = await getSecuritySettings(session.tenant.id);
  return NextResponse.json(settings);
}

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  if (session.user.role !== "ADMIN") return NextResponse.json({ error: "Acesso negado." }, { status: 403 });

  const body = schema.safeParse(await req.json());
  if (!body.success) {
    return NextResponse.json({ error: "Dados inválidos.", details: body.error.flatten() }, { status: 400 });
  }

  if (
    body.data.passwordMaxLength != null &&
    body.data.passwordMinLength != null &&
    body.data.passwordMaxLength < body.data.passwordMinLength
  ) {
    return NextResponse.json(
      { error: "O comprimento máximo não pode ser menor que o mínimo." },
      { status: 400 },
    );
  }

  const settings = await updateSecuritySettings(session.tenant.id, body.data);
  return NextResponse.json(settings);
}
