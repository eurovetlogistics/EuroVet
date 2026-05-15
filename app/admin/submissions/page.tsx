import { connectDB, isDbAvailable } from "@/lib/db";
import { ContactSubmission } from "@/lib/models";
import { formatDate } from "@/lib/utils";
import { SubmissionRow } from "./SubmissionRow";
import { Inbox } from "lucide-react";

export const dynamic = "force-dynamic";

type Submission = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  status: "new" | "read" | "archived";
  createdAt: string;
};

async function getSubmissions(): Promise<Submission[]> {
  if (!isDbAvailable()) return [];
  try {
    await connectDB();
    const docs = await ContactSubmission.find()
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();
    return docs.map((d) => {
      const doc = d as unknown as Record<string, unknown>;
      return {
        _id: String(doc._id),
        name: String(doc.name ?? ""),
        email: String(doc.email ?? ""),
        phone: doc.phone ? String(doc.phone) : undefined,
        company: doc.company ? String(doc.company) : undefined,
        subject: doc.subject ? String(doc.subject) : undefined,
        message: String(doc.message ?? ""),
        status: (doc.status as Submission["status"]) ?? "new",
        createdAt: new Date(doc.createdAt as string | Date).toISOString(),
      };
    });
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function SubmissionsPage() {
  const submissions = await getSubmissions();
  const dbConfigured = isDbAvailable();

  return (
    <div className="p-8 max-w-6xl">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-brand-950">Mesaje de contact</h1>
        <p className="text-muted mt-1">
          {submissions.length} mesaje înregistrate
        </p>
      </header>

      {!dbConfigured && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          MongoDB nu este configurat. Setează <code>MONGODB_URI</code> pentru a
          păstra mesajele primite.
        </div>
      )}

      {submissions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center">
          <Inbox className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
          <p className="text-muted">Niciun mesaj încă.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Expeditor</th>
                <th className="px-5 py-3">Subiect</th>
                <th className="px-5 py-3">Data</th>
                <th className="px-5 py-3 text-right">Acțiuni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {submissions.map((s) => (
                <SubmissionRow
                  key={s._id}
                  s={{ ...s, createdAtFormatted: formatDate(s.createdAt) }}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
