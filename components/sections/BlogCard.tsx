import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/data/posts";
import { formatDate, readingTime } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.05} as="article" className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-900">
            {post.category}
          </span>
        </div>
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted/40" />
            <span>{readingTime(post.content)} min citire</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-brand-900 leading-snug line-clamp-2 group-hover:text-brand-700">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 group-hover:text-brand-900 mt-auto pt-4">
            Citește articolul <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
