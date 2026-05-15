import nodemailer from "nodemailer";
import { SITE } from "./site";

export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
};

export async function sendContactEmails(p: ContactPayload) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[mailer] SMTP not configured — skipping send");
    return { skipped: true };
  }

  const from = process.env.SMTP_FROM || `${SITE.name} <${SITE.email}>`;
  const to = process.env.CONTACT_TO || SITE.email;

  // Internal notification
  await transporter.sendMail({
    from,
    to,
    replyTo: p.email,
    subject: `[${SITE.name}] Cerere nouă: ${p.subject || "Contact website"}`,
    html: `
      <h2>Cerere nouă de pe site</h2>
      <p><b>Nume:</b> ${escape(p.name)}</p>
      <p><b>Email:</b> ${escape(p.email)}</p>
      <p><b>Telefon:</b> ${escape(p.phone || "-")}</p>
      <p><b>Companie:</b> ${escape(p.company || "-")}</p>
      <p><b>Subiect:</b> ${escape(p.subject || "-")}</p>
      <p><b>Mesaj:</b><br>${escape(p.message).replace(/\n/g, "<br>")}</p>
    `,
  });

  // Auto-reply to client
  await transporter.sendMail({
    from,
    to: p.email,
    subject: `Mulțumim pentru mesaj — ${SITE.name}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0a1628">
        <h2 style="color:#0f1e3d">Mulțumim, ${escape(p.name)}!</h2>
        <p>Am primit mesajul tău și echipa ${SITE.name} te va contacta în cel mai scurt timp,
        de regulă în maxim 24 de ore lucrătoare.</p>
        <p style="background:#f7f8fb;padding:16px;border-radius:12px">
          <b>Mesajul tău:</b><br>${escape(p.message).replace(/\n/g, "<br>")}
        </p>
        <p>Cu stimă,<br>Echipa ${SITE.name}</p>
        <hr style="border:none;border-top:1px solid #e5e9f0;margin:20px 0">
        <small style="color:#5b6677">${SITE.legalName} · ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.county}</small>
      </div>
    `,
  });

  return { skipped: false };
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
