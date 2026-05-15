"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = { value: number; suffix?: string; label: string; prefix?: string };

const STATS: Stat[] = [
  { value: 30, suffix: "+", label: "țări deservite în Europa" },
  { value: 12000, suffix: "+", label: "expediții livrate anual" },
  { value: 99.4, suffix: "%", label: "rată livrare la termen" },
  { value: 24, suffix: "/7", label: "dispecerat și suport" },
];

export function Stats() {
  return (
    <section className="bg-white">
      <div className="container-base py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, suffix, prefix }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (spanRef.current) {
          spanRef.current.textContent = formatNumber(v, value);
        }
      },
    });
    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center md:text-left"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-brand-900 tracking-tight">
        {prefix}
        <span ref={spanRef}>0</span>
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-muted">{label}</div>
    </motion.div>
  );
}

function formatNumber(current: number, target: number) {
  if (Number.isInteger(target))
    return Math.round(current).toLocaleString("ro-RO");
  return current.toFixed(1).replace(".", ",");
}
