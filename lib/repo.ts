import { connectDB, isDbAvailable } from "./db";
import { BlogPost, Service, ContactSubmission } from "./models";
import { POSTS, type BlogPost as BlogPostType } from "./data/posts";
import { SERVICES, type Service as ServiceType } from "./data/services";

/* ------------------------------ SERVICES ------------------------------ */

export async function getAllServices(): Promise<ServiceType[]> {
  if (isDbAvailable()) {
    await connectDB();
    const docs = await Service.find().sort({ order: 1, title: 1 }).lean<ServiceType[]>();
    if (docs && docs.length) return docs;
  }
  return SERVICES;
}

export async function getServiceBySlugRepo(slug: string): Promise<ServiceType | null> {
  if (isDbAvailable()) {
    await connectDB();
    const doc = await Service.findOne({ slug }).lean<ServiceType | null>();
    if (doc) return doc;
  }
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

/* -------------------------------- BLOG -------------------------------- */

export async function getAllPosts(): Promise<BlogPostType[]> {
  if (isDbAvailable()) {
    await connectDB();
    const docs = await BlogPost.find({ published: true })
      .sort({ publishedAt: -1 })
      .lean<BlogPostType[]>();
    if (docs && docs.length) return docs;
  }
  return [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlugRepo(slug: string): Promise<BlogPostType | null> {
  if (isDbAvailable()) {
    await connectDB();
    const doc = await BlogPost.findOne({ slug }).lean<BlogPostType | null>();
    if (doc) return doc;
  }
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getRelatedPostsRepo(
  slug: string,
  limit = 3
): Promise<BlogPostType[]> {
  const all = await getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];
  return all.filter((p) => p.slug !== slug && p.category === current.category).slice(0, limit);
}

export async function getCategories(): Promise<string[]> {
  const all = await getAllPosts();
  return Array.from(new Set(all.map((p) => p.category)));
}

/* --------------------------- CONTACT SUBMISSIONS --------------------------- */

export async function saveContactSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  consent: boolean;
  ip?: string;
  userAgent?: string;
}) {
  if (!isDbAvailable()) {
    console.info("[contact] DB not configured, submission logged only");
    return null;
  }
  await connectDB();
  return await ContactSubmission.create(data);
}
