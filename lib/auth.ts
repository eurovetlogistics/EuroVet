import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { connectDB, isDbAvailable } from "./db";
import { AdminUser } from "./models";

const COOKIE_NAME = "eurovet_admin";
const ALG = "HS256";

function getKey() {
  const secret = process.env.AUTH_SECRET || "dev-only-insecure-secret-change-me";
  return new TextEncoder().encode(secret);
}

export type AdminSession = { sub: string; email: string; name: string };

export async function signSession(payload: AdminSession) {
  return await new SignJWT(payload as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getKey());
}

export async function verifySession(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, getKey());
    return payload as unknown as AdminSession;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<AdminSession | null> {
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return await verifySession(token);
}

export async function setSessionCookie(token: string) {
  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}

/** Validates credentials against DB or env fallback. */
export async function validateAdminCredentials(email: string, password: string) {
  const envEmail = process.env.ADMIN_EMAIL;
  const envPassword = process.env.ADMIN_PASSWORD;

  if (isDbAvailable()) {
    await connectDB();
    const user = await AdminUser.findOne({ email: email.toLowerCase() }).lean<{
      _id: unknown;
      email: string;
      passwordHash: string;
      name: string;
    } | null>();
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      return { sub: String(user._id), email: user.email, name: user.name };
    }
  }

  // Fallback to env credentials (useful for first login / no DB)
  if (
    envEmail &&
    envPassword &&
    email.toLowerCase() === envEmail.toLowerCase() &&
    password === envPassword
  ) {
    return { sub: "env-admin", email: envEmail, name: "Administrator" };
  }
  return null;
}

export const SESSION_COOKIE = COOKIE_NAME;
