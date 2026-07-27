import crypto from "crypto";
import bcrypt from "bcryptjs";

const SESSION_SECRET = process.env.SESSION_SECRET ?? "dev-only-secret-change-me";
export const SESSION_COOKIE_NAME = "hywork_session";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

function sign(value: string): string {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export function sha256(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

/** Builds the signed cookie value for a session id: `<id>.<hmac>`. */
export function signSessionCookie(sessionId: string): string {
  return `${sessionId}.${sign(sessionId)}`;
}

/** Verifies the cookie's signature and returns the embedded session id, or null. */
export function verifySessionCookie(cookieValue: string): string | null {
  const [sessionId, signature] = cookieValue.split(".");
  if (!sessionId || !signature) return null;
  const expected = sign(sessionId);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  return sessionId;
}
