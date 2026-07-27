import { prisma } from "@/lib/prisma";
import type { SecuritySettings } from "@prisma/client";

/**
 * Every tenant gets a settings row with schema defaults the first time it's
 * requested, so environments that never touched the Security Center still
 * enforce sane policy (session timeout on, MFA optional, etc).
 */
export async function getSecuritySettings(tenantId: string): Promise<SecuritySettings> {
  const existing = await prisma.securitySettings.findUnique({ where: { tenantId } });
  if (existing) return existing;

  return prisma.securitySettings.create({ data: { tenantId } });
}

export type SecuritySettingsInput = Partial<
  Pick<
    SecuritySettings,
    | "sessionTimeoutEnabled"
    | "sessionTimeoutValue"
    | "sessionTimeoutUnit"
    | "inactiveUserDeactivationEnabled"
    | "inactiveUserDeactivationDays"
    | "devicePolicy"
    | "passwordMinLength"
    | "passwordMaxLength"
    | "passwordRequireUppercase"
    | "passwordRequireLowercase"
    | "passwordRequireNumber"
    | "passwordRequireSpecialChar"
    | "passwordHistoryEnabled"
    | "passwordHistoryCount"
    | "mfaPolicy"
  >
>;

export async function updateSecuritySettings(
  tenantId: string,
  input: SecuritySettingsInput,
): Promise<SecuritySettings> {
  await getSecuritySettings(tenantId); // ensure row exists
  return prisma.securitySettings.update({ where: { tenantId }, data: input });
}

export function sessionTimeoutMs(settings: SecuritySettings): number | null {
  if (!settings.sessionTimeoutEnabled) return null;
  const multiplier = settings.sessionTimeoutUnit === "HOURS" ? 60 * 60 * 1000 : 60 * 1000;
  return settings.sessionTimeoutValue * multiplier;
}
