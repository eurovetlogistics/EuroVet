import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { connectDB, isDbAvailable } from "@/lib/db";
import { BlogPost } from "@/lib/models";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PatchSchema = z.object({
  title: z.string().min(3).max(200).optional(),
  slug: z
    .string()
    .min(2)
    .max(200)
    .regex(/^[a-z0-9-]+$/, "Slug invalid")
    .optional(),
  excerpt: z.string().min(10).max(500).optional(),
  content: z.string().min(20).optional(),
  coverImage: z.string().url().optional(),
  category: z.string().min(2).max(80).optional(),
  tags: z.array(z.string()).optional(),
  author: z.string().optional(),
  published: z.boolean().optional(),
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

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const blocked = await guard();
  if (blocked) return blocked;
  const { id } = await params;
  const doc = await BlogPost.findById(id).lean();
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post: doc });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const blocked = await guard();
  if (blocked) return blocked;
  const { id } = await params;
  const body = await req.json();
  const parsed = PatchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Date invalide." },
      { status: 400 }
    );
  }
  await BlogPost.findByIdAndUpdate(id, parsed.data);
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const blocked = await guard();
  if (blocked) return blocked;
  const { id } = await params;
  await BlogPost.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
