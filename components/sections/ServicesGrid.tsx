import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/data/services";

export function ServicesGrid({
  services,
  title = "Servicii integrate de logistică & transport",
  eyebrow = "Servicii",
  description = "Acoperim toate verigile lanțului tău de aprovizionare: transport rutier internațional, depozitare, vamă, distribuție și soluții complete de supply chain.",
  showCta = true,
}: {
  services: Service[];
  title?: string;
  eyebrow?: string;
  description?: string;
  showCta?: boolean;
}) {
  return (
    <section className="section bg-surface">
      <div className="container-base">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                {description}
              </p>
            </Reveal>
          </div>
          {showCta && (
            <Reveal delay={0.15}>
              <Link href="/servicii" className="btn btn-outline-dark">
                Toate serviciile <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
