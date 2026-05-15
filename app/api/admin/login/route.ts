import { NextResponse } from "next/server";
import { z } from "zod";
import { signSession, setSessionCookie, validateAdminCredentials } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(200),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Date invalide." }, { status: 400 });
    }
    const session = await validateAdminCredentials(
      parsed.data.email,
      parsed.data.password
    );
    if (!session) {
      return NextResponse.json(
        { error: "Email sau parolă incorectă." },
        { status: 401 }
      );
    }
    const token = await signSession(session);
    await setSessionCookie(token);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Eroare server." }, { status: 500 });
  }
}
