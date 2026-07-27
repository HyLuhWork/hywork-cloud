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

/** Tenant requires MFA and this user hasn't enrolled yet -> must set up before continuing. */
export function mfaSetupRequired(mfaPolicy: string, userMfaEnabled: boolean): boolean {
  return mfaPolicy === "REQUIRED" && !userMfaEnabled;
}
