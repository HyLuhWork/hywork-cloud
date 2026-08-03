import { authenticator } from "otplib";
import QRCode from "qrcode";

export function generateMfaSecret(): string {
  return authenticator.generateSecret();
}

export function verifyMfaToken(secret: string, token: string): boolean {
  return authenticator.check(token, secret);
}

export async function generateMfaQrCode(email: string, secret: string): Promise<string> {
  const otpauthUrl = authenticator.keyuri(email, "HyWork", secret);
  return QRCode.toDataURL(otpauthUrl);
}

export interface MfaPolicySettings {
  mfaEnabled: boolean;
  mfaPolicy: string; // "OPTIONAL" | "REQUIRED_ALL" | "REQUIRED_BY_ROLE"
  mfaRequiredRoles: string; // comma-separated UserRole values
}

/** Tenant's MFA policy requires this specific user to have MFA enrolled. */
export function isMfaRequiredForUser(settings: MfaPolicySettings, userRole: string): boolean {
  if (!settings.mfaEnabled) return false;
  if (settings.mfaPolicy === "REQUIRED_ALL") return true;
  if (settings.mfaPolicy === "REQUIRED_BY_ROLE") {
    const roles = settings.mfaRequiredRoles
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);
    return roles.includes(userRole);
  }
  return false; // OPTIONAL
}

/** Tenant requires MFA for this user and they haven't enrolled yet -> must set up before continuing. */
export function mfaSetupRequired(settings: MfaPolicySettings, userRole: string, userMfaEnabled: boolean): boolean {
  return isMfaRequiredForUser(settings, userRole) && !userMfaEnabled;
}
