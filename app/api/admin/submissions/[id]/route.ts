import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { connectDB, isDbAvailable } from "@/lib/db";
import { ContactSubmission } from "@/lib/models";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function guard() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDbAvailable())
    return NextResponse.json({ error: "DB indisponibil" }, { status: 503 });
  await connectDB();
  return null;
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const blocked = await guard();
  if (blocked) return blocked;
  const { id } = await params;
  const body = await req.json();
  const allowed = ["new", "read", "archived"];
  if (!allowed.includes(body.status))
    return NextResponse.json({ error: "Status invalid." }, { status: 400 });
  await ContactSubmission.findByIdAndUpdate(id, { status: body.status });
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const blocked = await guard();
  if (blocked) return blocked;
  const { id } = await params;
  await ContactSubmission.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
