import bcrypt from "bcryptjs";
import type { SecuritySettings } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export interface PasswordValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validates a candidate password against the tenant's configured complexity
 * rules. Used for signup, change-password, and reset-password alike so the
 * three flows can never drift apart.
 */
export function validatePasswordComplexity(
  password: string,
  settings: SecuritySettings,
): PasswordValidationResult {
  const errors: string[] = [];

  if (password.length < settings.passwordMinLength) {
    errors.push(`A senha deve ter no mínimo ${settings.passwordMinLength} caracteres.`);
  }
  if (settings.passwordMaxLength && password.length > settings.passwordMaxLength) {
    errors.push(`A senha deve ter no máximo ${settings.passwordMaxLength} caracteres.`);
  }
  if (settings.passwordRequireUppercase && !/[A-Z]/.test(password)) {
    errors.push("A senha deve conter ao menos uma letra maiúscula.");
  }
  if (settings.passwordRequireLowercase && !/[a-z]/.test(password)) {
    errors.push("A senha deve conter ao menos uma letra minúscula.");
  }
  if (settings.passwordRequireNumber && !/[0-9]/.test(password)) {
    errors.push("A senha deve conter ao menos um número.");
  }
  if (settings.passwordRequireSpecialChar && !/[^A-Za-z0-9]/.test(password)) {
    errors.push("A senha deve conter ao menos um caractere especial.");
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Checks the candidate password against the user's stored password history,
 * honoring the tenant's reuse-window setting.
 */
export async function isPasswordReused(
  userId: string,
  password: string,
  settings: SecuritySettings,
): Promise<boolean> {
  if (!settings.passwordHistoryEnabled || settings.passwordHistoryCount <= 0) return false;

  const history = await prisma.passwordHistory.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: settings.passwordHistoryCount,
  });

  for (const entry of history) {
    if (await bcrypt.compare(password, entry.passwordHash)) return true;
  }
  return false;
}

/**
 * Records a new password hash in history and trims entries beyond what the
 * tenant's policy requires keeping around.
 */
export async function recordPasswordHistory(userId: string, passwordHash: string): Promise<void> {
  await prisma.passwordHistory.create({ data: { userId, passwordHash } });

  const keep = await prisma.passwordHistory.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { id: true },
  });
  const toDelete = keep.slice(20).map((entry) => entry.id); // hard cap regardless of policy
  if (toDelete.length > 0) {
    await prisma.passwordHistory.deleteMany({ where: { id: { in: toDelete } } });
  }
}
