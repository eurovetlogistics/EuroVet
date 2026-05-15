import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts, getAllServices } from "@/lib/repo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/despre-noi",
    "/servicii",
    "/certificari",
    "/blog",
    "/contact",
    "/politica-confidentialitate",
    "/termeni-si-conditii",
    "/politica-cookie",
    "/gdpr",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const [services, posts] = await Promise.all([getAllServices(), getAllPosts()]);

  const serviceRoutes = services.map((s) => ({
    url: `${base}/servicii/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
