import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { Partners } from "@/components/sections/Partners";
import { buildMetadata } from "@/lib/seo";
import { Handshake, Globe2, ShieldCheck, Quote, Star } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Parteneri",
  description:
    "Companiile cu care colaborăm — clienți, transportatori și parteneri strategici care au încredere în Eurovet Logistics.",
  path: "/despre-noi/parteneri",
});

const PILLARS = [
  {
    icon: Handshake,
    title: "Parteneriate pe termen lung",
    text: "Construim relații solide, bazate pe încredere și performanță constantă, nu pe contracte de o singură expediție.",
  },
  {
    icon: Globe2,
    title: "Rețea europeană extinsă",
    text: "Colaborăm cu transportatori și operatori logistici verificați în peste 25 de țări europene.",
  },
  {
    icon: ShieldCheck,
    title: "Standarde verificate",
    text: "Fiecare partener este auditat anual pe criterii de calitate, conformitate și reputație în industrie.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Eurovet a transformat modul în care gestionăm logistica externă. Comunicarea proactivă și transparența ne-au permis să eliminăm 80% din e-mailurile zilnice.",
    name: "Alexandru Ionescu",
    role: "Supply Chain Manager",
    company: "Producător FMCG",
  },
  {
    quote:
      "Lucrăm cu Eurovet de peste 5 ani. Disciplina operațională și respectarea termenelor sunt remarcabile. Recomand fără rezerve.",
    name: "Diana Mateescu",
    role: "Procurement Director",
    company: "Distribuitor IT",
  },
  {
    quote:
      "În momentele critice — vârf de sezon, livrări urgente — Eurovet a fost mereu la înălțime. Echipa lor înțelege ce înseamnă „termen ferm”.",
    name: "Mihai Vasile",
    role: "Logistics Lead",
    company: "Producător auto-componente",
  },
];

const INDUSTRIES = [
  "FMCG & Retail",
  "Auto & componente",
  "Farmaceutice",
  "Construcții",
  "E-commerce",
  "Industrie agro-alimentară",
  "Mobilier & decor",
  "Echipamente industriale",
];

export default function ParteneriPage() {
  return (
    <>
      <PageHero
        eyebrow="Parteneri"
        title="Construim împreună lanțuri logistice solide pentru afaceri europene"
        description="Suntem alături de companii din producție, distribuție, retail și e-commerce care vor un partener logistic de încredere pe termen lung."
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Despre noi", href: "/despre-noi" },
          { label: "Parteneri" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="eyebrow">Filozofia noastră</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Cum construim parteneriatele Eurovet
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-white p-7 h-full card-hover">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-brand-900 text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners />

      <section className="section bg-surface">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="eyebrow">Testimoniale</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Ce spun partenerii noștri
              </h2>
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="rounded-3xl bg-white border border-border p-7 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="mt-4 text-brand-900 leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-1 text-accent mb-2">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="font-semibold text-brand-900">{t.name}</div>
                    <div className="text-sm text-muted">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-base grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/optimizare.png"
                alt="Industrii deservite"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Industrii</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Industrii pentru care livrăm zilnic
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg">
                Avem experiență dovedită în sectoare cu cerințe specifice de
                logistică. Adaptăm fluxurile la particularitățile fiecărei
                industrii.
              </p>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind} delay={0.1 + i * 0.03}>
                  <span className="px-4 py-2 rounded-full bg-surface border border-border text-brand-900 text-sm font-medium">
                    {ind}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vrei să devii partener Eurovet?"
        text="Hai să discutăm cum putem construi împreună o colaborare logistică solidă și predictibilă."
        primaryLabel="Cere o întâlnire"
      />
    </>
  );
}
