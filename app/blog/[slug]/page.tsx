import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import {
  getAllPosts,
  getPostBySlugRepo,
  getRelatedPostsRepo,
} from "@/lib/repo";
import { buildMetadata } from "@/lib/seo";
import { formatDate, readingTime } from "@/lib/utils";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlugRepo(slug);
  if (!post) return buildMetadata({ title: "Articol", noindex: true });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = await getPostBySlugRepo(slug);
  if (!post) notFound();

  const related = await getRelatedPostsRepo(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.svg` },
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Script
        id={`ld-post-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section bg-white">
        <div className="container-base max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.publishedAt)}
            </span>
            <span>·</span>
            <span>{readingTime(post.content)} min citire</span>
            <span>·</span>
            <span>de {post.author}</span>
          </div>

          <div className="relative mt-8 aspect-square rounded-3xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              quality={95}
              sizes="(min-width: 1280px) 896px, (min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className="prose prose-custom prose-lg mt-12 max-w-none prose-headings:text-brand-900 prose-a:text-brand-700 prose-strong:text-brand-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags?.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-muted" />
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-surface border border-border text-brand-900"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-900 font-medium"
            >
              <ArrowLeft className="h-4 w-4" /> Înapoi la blog
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bg-surface">
          <div className="container-base">
            <h2 className="heading text-2xl md:text-4xl text-brand-900 mb-10">
              Articole conexe
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
