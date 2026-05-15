"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function DeletePostButton({ id }: { id: string }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  async function remove() {
    if (!confirm("Ștergi acest articol definitiv?")) return;
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    start(() => router.refresh());
  }
  return (
    <button
      onClick={remove}
      disabled={pending}
      className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-red-200 text-red-700 hover:bg-red-50 disabled:opacity-60"
    >
      <Trash2 className="w-3.5 h-3.5" /> Șterge
    </button>
  );
}
