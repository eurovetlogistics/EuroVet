import { NextResponse } from "next/server";
import { z } from "zod";
import { saveContactSubmission } from "@/lib/repo";
import { sendContactEmails } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(160).optional().or(z.literal("")),
  subject: z.string().max(200).optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
  consent: z.literal(true),
  website: z.string().optional(), // honeypot
});

// Simple in-memory rate limit (per IP)
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Prea multe cereri. Te rugăm să încerci mai târziu." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Date invalide. Verifică formularul și încearcă din nou." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot — pretend success silently
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const userAgent = req.headers.get("user-agent") || undefined;

    const submission = {
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      company: data.company || undefined,
      subject: data.subject || undefined,
      message: data.message,
      consent: data.consent,
      ip,
      userAgent,
    };

    // Save to DB if available, otherwise no-op
    try {
      await saveContactSubmission(submission);
    } catch (e) {
      console.error("[contact] DB save failed:", e);
    }

    // Send emails if SMTP configured
    try {
      await sendContactEmails(submission);
    } catch (e) {
      console.error("[contact] Mail send failed:", e);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Unhandled error:", e);
    return NextResponse.json(
      { error: "A apărut o eroare. Te rugăm să încerci mai târziu." },
      { status: 500 }
    );
  }
}
