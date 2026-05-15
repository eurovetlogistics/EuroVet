import Link from "next/link";
import { FileText, Inbox, Briefcase, ArrowRight } from "lucide-react";
import { getAllPosts, getAllServices } from "@/lib/repo";
import { connectDB, isDbAvailable } from "@/lib/db";
import { ContactSubmission } from "@/lib/models";

export const dynamic = "force-dynamic";

async function getCounts() {
  const [posts, services] = await Promise.all([
    getAllPosts(),
    getAllServices(),
  ]);
  let submissions = 0;
  let newSubmissions = 0;
  if (isDbAvailable()) {
    try {
      await connectDB();
      submissions = await ContactSubmission.countDocuments({});
      newSubmissions = await ContactSubmission.countDocuments({
        status: "new",
      });
    } catch {}
  }
  return {
    posts: posts.length,
    services: services.length,
    submissions,
    newSubmissions,
  };
}

export default async function AdminDashboard() {
  const counts = await getCounts();
  const cards = [
    {
      label: "Articole blog",
      value: counts.posts,
      icon: FileText,
      href: "/admin/posts",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      label: "Servicii",
      value: counts.services,
      icon: Briefcase,
      href: "/servicii",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      label: "Mesaje contact",
      value: counts.submissions,
      sub: `${counts.newSubmissions} noi`,
      icon: Inbox,
      href: "/admin/submissions",
      color: "bg-accent-500/10 text-accent-600",
    },
  ];

  return (
    <div className="p-8 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-brand-950">Dashboard</h1>
        <p className="text-muted mt-1">
          Bine ai revenit. Iată o privire de ansamblu asupra activității.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.label}
              href={c.href}
              className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-accent-500 group-hover:translate-x-0.5 transition" />
              </div>
              <div className="mt-5">
                <div className="text-3xl font-bold text-brand-950">
                  {c.value}
                </div>
                <div className="text-sm text-muted mt-1">{c.label}</div>
                {c.sub && (
                  <div className="text-xs text-accent-600 font-medium mt-2">
                    {c.sub}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 bg-white rounded-2xl border border-neutral-200 p-6">
        <h2 className="font-semibold text-brand-950 mb-3">Acțiuni rapide</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/posts/new" className="btn btn-primary">
            <FileText className="w-4 h-4" /> Articol nou
          </Link>
          <Link href="/admin/submissions" className="btn btn-outline">
            <Inbox className="w-4 h-4" /> Vezi mesajele
          </Link>
        </div>
      </section>
    </div>
  );
}
