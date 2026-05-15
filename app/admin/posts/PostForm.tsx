"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save } from "lucide-react";

export type PostFormValues = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string;
  author: string;
  published: boolean;
  publishedAt: string;
};

export function PostForm({
  initial,
  postId,
}: {
  initial: PostFormValues;
  postId?: string;
}) {
  const router = useRouter();
  const [v, setV] = useState<PostFormValues>(initial);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function set<K extends keyof PostFormValues>(
    key: K,
    value: PostFormValues[K],
  ) {
    setV((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const payload = {
        ...v,
        tags: v.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        publishedAt: v.publishedAt
          ? new Date(v.publishedAt).toISOString()
          : new Date().toISOString(),
      };
      const res = await fetch(
        postId ? `/api/admin/posts/${postId}` : "/api/admin/posts",
        {
          method: postId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error || "Salvare eșuată.");
      } else {
        router.push("/admin/posts");
        router.refresh();
      }
    } catch {
      setErr("Eroare de rețea.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 max-w-3xl">
      {err && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {err}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Titlu *
          </label>
          <input
            required
            value={v.title}
            onChange={(e) => set("title", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:border-accent-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Slug *
          </label>
          <input
            required
            value={v.slug}
            onChange={(e) => set("slug", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 font-mono text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Categorie *
          </label>
          <input
            required
            value={v.category}
            onChange={(e) => set("category", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Imagine cover (URL) *
          </label>
          <input
            required
            value={v.coverImage}
            onChange={(e) => set("coverImage", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Autor
          </label>
          <input
            value={v.author}
            onChange={(e) => set("author", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Tags (separate prin virgulă)
          </label>
          <input
            value={v.tags}
            onChange={(e) => set("tags", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-950 mb-1">
            Data publicării
          </label>
          <input
            type="datetime-local"
            value={v.publishedAt}
            onChange={(e) => set("publishedAt", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>

        <div className="flex items-end">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={v.published}
              onChange={(e) => set("published", e.target.checked)}
              className="w-4 h-4"
            />
            Publicat
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-950 mb-1">
          Excerpt *
        </label>
        <textarea
          required
          rows={3}
          value={v.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          className="w-full rounded-lg border border-neutral-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-950 mb-1">
          Conținut (HTML) *
        </label>
        <textarea
          required
          rows={18}
          value={v.content}
          onChange={(e) => set("content", e.target.value)}
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 font-mono text-xs"
        />
        <p className="text-xs text-muted mt-1">
          Acceptă HTML: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;a&gt;, etc.
        </p>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {postId ? "Salvează modificările" : "Publică articolul"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/posts")}
          className="text-sm text-muted hover:text-brand-950"
        >
          Anulează
        </button>
      </div>
    </form>
  );
}
