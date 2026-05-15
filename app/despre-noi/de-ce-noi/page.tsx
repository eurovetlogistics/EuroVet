import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import {
  Truck,
  Clock,
  ShieldCheck,
  TrendingDown,
  Headphones,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "De ce noi?",
  description:
    "Descoperă avantajele care ne diferențiază: flotă proprie modernă, dispecerat 24/7, transparență end-to-end și prețuri competitive.",
  path: "/despre-noi/de-ce-noi",
});

const REASONS = [
  {
    icon: Truck,
    title: "Flotă proprie Euro 6",
    text: "Vehicule moderne, cu emisii reduse, întreținute în service-uri autorizate. Niciun outsourcing pe operațiunile critice.",
  },
  {
    icon: Clock,
    title: "Dispecerat 24/7",
    text: "Echipă disponibilă non-stop, cu timp mediu de răspuns sub 15 minute. Comunicăm proactiv, nu doar reactiv.",
  },
  {
    icon: ShieldCheck,
    title: "Asigurare CMR completă",
    text: "Fiecare expediție este acoperită prin asigurare CMR conformă reglementărilor europene. Fără surprize.",
  },
  {
    icon: TrendingDown,
    title: "Costuri optimizate",
    text: "Negociem fiecare rută în avantajul tău și îți propunem variante multimodale care reduc cheltuielile cu 10–25%.",
  },
  {
    icon: Headphones,
    title: "Account manager dedicat",
    text: "Un singur punct de contact care îți cunoaște afacerea și anticipează nevoile tale logistice.",
  },
  {
    icon: Sparkles,
    title: "Tehnologie modernă",
    text: "TMS, WMS, GPS în timp real și portal client pentru vizibilitate end-to-end asupra fiecărei expediții.",
  },
];

const COMPARE = [
  "Răspuns la cerere de ofertă în maxim 4 ore",
  "Tracking GPS în timp real, accesibil din portalul client",
  "Documente digitalizate (POD, CMR) trimise în aceeași zi",
  "Echipă proprie de șoferi instruiți și certificați",
  "Flexibilitate pe rute non-standard și expediții urgente",
  "Raportare lunară cu KPI și recomandări de optimizare",
];

export default function DeCeNoiPage() {
  return (
    <>
      <PageHero
        eyebrow="De ce Eurovet"
        title="Avantajele care ne diferențiază în piața logistică europeană"
        description="Suntem partenerul potrivit pentru companii care vor mai mult decât transport: predictibilitate, transparență și un partener care înțelege business-ul tău."
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Despre noi", href: "/despre-noi" },
          { label: "De ce noi?" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="eyebrow">6 motive</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                De ce ne aleg companiile serioase
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-white p-7 h-full card-hover">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-brand-900 text-lg">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-base grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/transport.png"
                alt="Standardul Eurovet"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Standardul Eurovet</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Ce primești de la noi, garantat
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg">
                Fiecare colaborare cu Eurovet vine cu un set de standarde clare,
                aplicabile din prima zi. Niciun compromis, niciun „mai vedem
                noi".
              </p>
            </Reveal>
            <ul className="mt-8 space-y-3">
              {COMPARE.map((c, i) => (
                <Reveal key={c} delay={0.1 + i * 0.04}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-brand-900">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Ești gata să lucrezi cu un partener logistic serios?"
        text="Cere o ofertă personalizată — răspundem în maxim 4 ore, cu o propunere clară și transparentă."
        primaryLabel="Cere ofertă"
      />
    </>
  );
}
