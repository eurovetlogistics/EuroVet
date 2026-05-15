import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { connectDB, isDbAvailable } from "@/lib/db";
import { BlogPost } from "@/lib/models";
import { PostForm } from "../PostForm";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!isDbAvailable()) notFound();
  await connectDB();
  const doc = (await BlogPost.findById(id).lean()) as Record<
    string,
    unknown
  > | null;
  if (!doc) notFound();

  const publishedAt = doc.publishedAt
    ? new Date(doc.publishedAt as string | Date).toISOString().slice(0, 16)
    : new Date().toISOString().slice(0, 16);

  return (
    <div className="p-8">
      <Link
        href="/admin/posts"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand-950 mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Înapoi la articole
      </Link>
      <h1 className="text-3xl font-bold text-brand-950 mb-6">
        Editare articol
      </h1>
      <PostForm
        postId={id}
        initial={{
          title: String(doc.title ?? ""),
          slug: String(doc.slug ?? ""),
          excerpt: String(doc.excerpt ?? ""),
          content: String(doc.content ?? ""),
          coverImage: String(doc.coverImage ?? ""),
          category: String(doc.category ?? ""),
          tags: Array.isArray(doc.tags)
            ? (doc.tags as string[]).join(", ")
            : "",
          author: String(doc.author ?? "Echipa Eurovet"),
          published: Boolean(doc.published),
          publishedAt,
        }}
      />
    </div>
  );
}
