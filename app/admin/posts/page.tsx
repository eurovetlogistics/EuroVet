import Link from "next/link";
import { Plus, Pencil, FileText } from "lucide-react";
import { connectDB, isDbAvailable } from "@/lib/db";
import { BlogPost } from "@/lib/models";
import { POSTS } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import { DeletePostButton } from "./DeletePostButton";

export const dynamic = "force-dynamic";

type PostRow = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  publishedAt: string;
  fromDb: boolean;
};

async function getPosts(): Promise<PostRow[]> {
  if (isDbAvailable()) {
    try {
      await connectDB();
      const docs = await BlogPost.find().sort({ createdAt: -1 }).lean();
      if (docs.length) {
        return docs.map((d) => {
          const doc = d as unknown as Record<string, unknown>;
          return {
            _id: String(doc._id),
            title: String(doc.title ?? ""),
            slug: String(doc.slug ?? ""),
            category: String(doc.category ?? ""),
            published: Boolean(doc.published),
            publishedAt: new Date(
              doc.publishedAt as string | Date,
            ).toISOString(),
            fromDb: true,
          };
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  return POSTS.map((p) => ({
    _id: p.slug,
    title: p.title,
    slug: p.slug,
    category: p.category,
    published: true,
    publishedAt: p.publishedAt,
    fromDb: false,
  }));
}

export default async function AdminPosts() {
  const posts = await getPosts();
  const dbConfigured = isDbAvailable();

  return (
    <div className="p-8 max-w-6xl">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-950">Articole blog</h1>
          <p className="text-muted mt-1">{posts.length} articole</p>
        </div>
        <Link href="/admin/posts/new" className="btn btn-primary">
          <Plus className="w-4 h-4" /> Articol nou
        </Link>
      </header>

      {!dbConfigured && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          MongoDB nu este configurat — vezi articolele demo. Setează{" "}
          <code>MONGODB_URI</code> pentru a edita / publica articole noi.
        </div>
      )}

      {posts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center">
          <FileText className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
          <p className="text-muted">Niciun articol încă.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3">Titlu</th>
                <th className="px-5 py-3">Categorie</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Publicat</th>
                <th className="px-5 py-3 text-right">Acțiuni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {posts.map((p) => (
                <tr key={p._id} className="hover:bg-neutral-50">
                  <td className="px-5 py-3">
                    <div className="font-medium text-brand-950">{p.title}</div>
                    <div className="text-xs text-muted">/{p.slug}</div>
                  </td>
                  <td className="px-5 py-3 text-neutral-700">{p.category}</td>
                  <td className="px-5 py-3">
                    {p.published ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                        Publicat
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-neutral-200 text-neutral-700">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-muted text-xs">
                    {formatDate(p.publishedAt)}
                  </td>
                  <td className="px-5 py-3 text-right">
                    {p.fromDb ? (
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/admin/posts/${p._id}`}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100"
                        >
                          <Pencil className="w-3.5 h-3.5" /> Editează
                        </Link>
                        <DeletePostButton id={p._id} />
                      </div>
                    ) : (
                      <span className="text-xs text-muted">demo</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
