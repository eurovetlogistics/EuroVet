"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export function FAQ({
  items,
  title = "Întrebări frecvente",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="section bg-white">
      <div className="container-base max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-border rounded-3xl border border-border bg-white">
          {items.map((item, i) => (
            <FaqRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6 md:px-8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-5 md:py-6 flex items-start justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-900 text-base md:text-lg">
          {item.q}
        </span>
        <span
          className={`shrink-0 h-9 w-9 rounded-full border border-border inline-flex items-center justify-center transition-transform ${
            open
              ? "rotate-45 bg-brand-900 text-white border-brand-900"
              : "text-brand-900"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
