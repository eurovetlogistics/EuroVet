import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PostForm } from "../PostForm";

export default function NewPostPage() {
  return (
    <div className="p-8">
      <Link
        href="/admin/posts"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand-950 mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Înapoi la articole
      </Link>
      <h1 className="text-3xl font-bold text-brand-950 mb-6">Articol nou</h1>
      <PostForm
        initial={{
          title: "",
          slug: "",
          excerpt: "",
          content: "<h2>Subtitlu</h2>\n<p>Începe aici...</p>",
          coverImage: "",
          category: "",
          tags: "",
          author: "Echipa Eurovet",
          published: true,
          publishedAt: new Date().toISOString().slice(0, 16),
        }}
      />
    </div>
  );
}
