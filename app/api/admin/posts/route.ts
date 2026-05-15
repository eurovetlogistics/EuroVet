import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { connectDB, isDbAvailable } from "@/lib/db";
import { BlogPost } from "@/lib/models";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PostSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/, "Slug invalid"),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(20),
  coverImage: z.string().url(),
  category: z.string().min(2).max(80),
  tags: z.array(z.string()).default([]),
  author: z.string().default("Echipa Eurovet"),
  published: z.boolean().default(true),
  publishedAt: z.string().datetime().optional(),
});

async function guard() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDbAvailable())
    return NextResponse.json({ error: "DB indisponibil" }, { status: 503 });
  await connectDB();
  return null;
}

export async function GET() {
  const blocked = await guard();
  if (blocked) return blocked;
  const docs = await BlogPost.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ posts: docs });
}

export async function POST(req: Request) {
  const blocked = await guard();
  if (blocked) return blocked;
  const body = await req.json();
  const parsed = PostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Date invalide." },
      { status: 400 }
    );
  }
  const exists = await BlogPost.findOne({ slug: parsed.data.slug });
  if (exists)
    return NextResponse.json(
      { error: "Slug deja folosit." },
      { status: 409 }
    );
  const doc = await BlogPost.create(parsed.data);
  return NextResponse.json({ ok: true, id: String(doc._id) });
}
