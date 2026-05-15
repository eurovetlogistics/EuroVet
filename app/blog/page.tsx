import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { getAllPosts, getCategories } from "@/lib/repo";
import { buildMetadata } from "@/lib/seo";
import { BlogFilters } from "./BlogFilters";

export const metadata: Metadata = buildMetadata({
  title: "Blog logistică & transport",
  description:
    "Articole despre logistică, transport rutier internațional, supply chain, optimizare costuri și tendințe în industrie.",
  path: "/blog",
});

type SP = { q?: string; cat?: string };

export default async function BlogPage(props: { searchParams: Promise<SP> }) {
  const sp = await props.searchParams;
  const q = typeof sp.q === "string" ? sp.q.toLowerCase() : "";
  const cat = typeof sp.cat === "string" ? sp.cat : "";

  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getCategories(),
  ]);

  const filtered = posts.filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const matchesCat = !cat || p.category === cat;
    return matchesQ && matchesCat;
  });

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights din lumea logisticii"
        description="Analize, ghiduri și tendințe pentru profesioniștii din transport, supply chain și operațiuni logistice."
        breadcrumbs={[{ label: "Acasă", href: "/" }, { label: "Blog" }]}
      />

      <section className="section bg-white">
        <div className="container-base">
          <BlogFilters categories={categories} initialQ={q} initialCat={cat} />

          {filtered.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-border bg-surface p-12 text-center">
              <p className="text-muted">
                Nu am găsit articole pentru filtrele selectate.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
