"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Trash2, Mail, Phone } from "lucide-react";

type Submission = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  status: "new" | "read" | "archived";
  createdAtFormatted: string;
};

const STATUS_STYLES: Record<Submission["status"], string> = {
  new: "bg-accent-500/10 text-accent-700 border-accent-500/20",
  read: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  archived: "bg-neutral-200 text-neutral-600 border-neutral-300",
};

const STATUS_LABEL: Record<Submission["status"], string> = {
  new: "Nou",
  read: "Citit",
  archived: "Arhivat",
};

export function SubmissionRow({ s }: { s: Submission }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(s.status);
  const [, startTransition] = useTransition();
  const router = useRouter();

  async function updateStatus(next: Submission["status"]) {
    setStatus(next);
    await fetch(`/api/admin/submissions/${s._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    startTransition(() => router.refresh());
  }

  async function remove() {
    if (!confirm("Ștergi acest mesaj definitiv?")) return;
    await fetch(`/api/admin/submissions/${s._id}`, { method: "DELETE" });
    startTransition(() => router.refresh());
  }

  return (
    <>
      <tr
        className="hover:bg-neutral-50 cursor-pointer"
        onClick={() => {
          setOpen((o) => !o);
          if (status === "new") updateStatus("read");
        }}
      >
        <td className="px-5 py-3">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${STATUS_STYLES[status]}`}
          >
            {STATUS_LABEL[status]}
          </span>
        </td>
        <td className="px-5 py-3">
          <div className="font-medium text-brand-950">{s.name}</div>
          <div className="text-xs text-muted">{s.email}</div>
        </td>
        <td className="px-5 py-3 text-neutral-700">{s.subject || "—"}</td>
        <td className="px-5 py-3 text-muted text-xs">{s.createdAtFormatted}</td>
        <td className="px-5 py-3 text-right">
          <ChevronDown
            className={`w-4 h-4 inline-block text-neutral-400 transition ${open ? "rotate-180" : ""}`}
          />
        </td>
      </tr>
      {open && (
        <tr className="bg-neutral-50/60">
          <td colSpan={5} className="px-5 py-5">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-white rounded-xl border border-neutral-200 p-4">
                <div className="text-xs text-muted mb-2">Mesaj</div>
                <p className="text-sm whitespace-pre-line text-neutral-800">
                  {s.message}
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${s.email}`}
                  className="flex items-center gap-2 text-brand-900 hover:text-accent-600"
                >
                  <Mail className="w-4 h-4" /> {s.email}
                </a>
                {s.phone && (
                  <a
                    href={`tel:${s.phone}`}
                    className="flex items-center gap-2 text-brand-900 hover:text-accent-600"
                  >
                    <Phone className="w-4 h-4" /> {s.phone}
                  </a>
                )}
                {s.company && (
                  <div className="text-muted">Companie: {s.company}</div>
                )}
                <div className="pt-2 flex flex-wrap gap-2">
                  <select
                    value={status}
                    onChange={(e) =>
                      updateStatus(e.target.value as Submission["status"])
                    }
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs border border-neutral-300 rounded-lg px-2 py-1.5"
                  >
                    <option value="new">Nou</option>
                    <option value="read">Citit</option>
                    <option value="archived">Arhivat</option>
                  </select>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      remove();
                    }}
                    className="text-xs inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-red-200 text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Șterge
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
