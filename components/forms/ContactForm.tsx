"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ subjectDefault }: { subjectDefault?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot anti-spam
    if (data.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      company: String(data.get("company") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok)
        throw new Error(json?.error || "A apărut o eroare. Încearcă din nou.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Eroare necunoscută");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold text-emerald-900">
          Mesaj trimis cu succes!
        </h3>
        <p className="mt-2 text-emerald-800">
          Mulțumim! Echipa noastră te va contacta în maxim 24 de ore lucrătoare.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 btn btn-outline-dark"
        >
          Trimite alt mesaj
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-white p-6 md:p-8 shadow-[0_30px_60px_-30px_rgba(15,30,61,0.15)]"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Nume complet *"
          name="name"
          required
          autoComplete="name"
          placeholder="ex: Ion Popescu"
        />
        <Field
          label="Email *"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="ex: ion@companie.ro"
        />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="ex: +40 752 221 316"
        />
        <Field
          label="Companie"
          name="company"
          autoComplete="organization"
          placeholder="ex: Compania SRL"
        />
      </div>
      <Field
        className="mt-4"
        label="Subiect"
        name="subject"
        defaultValue={subjectDefault}
        placeholder="ex: Solicitare ofertă transport internațional"
      />
      <div className="mt-4">
        <label className="block text-sm font-medium text-brand-900 mb-1.5">
          Mesaj *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-brand-900 outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100 transition"
          placeholder="Descrie pe scurt nevoia ta logistică..."
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-border accent-brand-900"
        />
        <span>
          Sunt de acord cu prelucrarea datelor mele personale conform{" "}
          <a
            href="/politica-confidentialitate"
            className="text-brand-900 underline"
          >
            Politicii de confidențialitate
          </a>{" "}
          și GDPR.
        </span>
      </label>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary mt-6 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Se trimite..." : "Trimite mesajul"}
      </button>
    </form>
  );
}

function Field({
  label,
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-brand-900 mb-1.5">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-brand-900 outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100 transition"
      />
    </div>
  );
}
