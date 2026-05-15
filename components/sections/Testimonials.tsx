"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Andrei Popescu",
    role: "Director Operațiuni, RetailCo SA",
    text: "Eurovet ne-a fost partener de încredere de peste 4 ani. Livrările sunt mereu la timp, iar comunicarea cu dispeceratul este excelentă. Au transformat logistica noastră într-un avantaj competitiv.",
  },
  {
    name: "Maria Ionescu",
    role: "Supply Chain Manager, IndustryGroup",
    text: "Profesionalism la cel mai înalt nivel. Au gestionat impecabil expediții complexe către piețele DACH. Recomand fără rezerve.",
  },
  {
    name: "Cristian Marcu",
    role: "CEO, AutoParts EU",
    text: "Soluția lor integrată de depozitare și distribuție ne-a redus costurile cu 18%. Echipă serioasă, KPI lunari, transparență totală.",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-surface">
      <div className="container-base">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Testimoniale</span>
          <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
            Clienții ne recomandă
          </h2>
          <p className="mt-5 text-muted text-lg">
            Peste 200 de companii din România și Europa au ales Eurovet ca
            partener logistic strategic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl border border-border bg-white p-7 md:p-8 card-hover"
            >
              <Quote className="h-8 w-8 text-accent/70 absolute -top-4 left-7 bg-surface rounded-full p-1" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <p className="mt-5 text-brand-900 leading-relaxed">{t.text}</p>
              <div className="mt-7 pt-5 border-t border-border">
                <div className="font-semibold text-brand-900">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
