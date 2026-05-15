"use client";

import { useRouter, usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function BlogFilters({
  categories,
  initialQ,
  initialCat,
}: {
  categories: string[];
  initialQ?: string;
  initialCat?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [q, setQ] = useState(initialQ || "");
  const [cat, setCat] = useState(initialCat || "");

  function update(next: { q?: string; cat?: string }) {
    const params = new URLSearchParams();
    const newQ = next.q !== undefined ? next.q : q;
    const newCat = next.cat !== undefined ? next.cat : cat;
    if (newQ) params.set("q", newQ);
    if (newCat) params.set("cat", newCat);
    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          update({ q });
        }}
        className="relative flex-1 max-w-md"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută în articole..."
          className="w-full rounded-full border border-border bg-white pl-11 pr-10 py-3 text-brand-900 outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
        />
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              update({ q: "" });
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 inline-flex items-center justify-center rounded-full hover:bg-surface text-muted"
            aria-label="Șterge"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </form>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setCat("");
            update({ cat: "" });
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            !cat
              ? "bg-brand-900 text-white border-brand-900"
              : "bg-white text-brand-900 border-border hover:border-brand-900"
          }`}
        >
          Toate
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCat(c);
              update({ cat: c });
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              cat === c
                ? "bg-brand-900 text-white border-brand-900"
                : "bg-white text-brand-900 border-border hover:border-brand-900"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
