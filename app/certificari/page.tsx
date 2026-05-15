import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  FileBadge2,
  Leaf,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Certificări și documente",
  description:
    "Eurovet Logistics operează în conformitate cu cele mai înalte standarde europene: ISO 9001, GDP, AEO, asigurare CMR și licențe complete de transport.",
  path: "/certificari",
});

const CERTS = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    text: "Sistem de management al calității, auditat anual de organism acreditat.",
  },
  {
    icon: Leaf,
    title: "ISO 14001:2015",
    text: "Sistem de management al mediului — operațiuni sustenabile, emisii reduse.",
  },
  {
    icon: BadgeCheck,
    title: "AEO – Operator Economic Autorizat",
    text: "Statut AEO pentru proceduri vamale simplificate și siguranța lanțului de aprovizionare.",
  },
  {
    icon: Award,
    title: "Licență comunitară de transport",
    text: "Autorizație pentru transport rutier de mărfuri în întreaga Uniune Europeană.",
  },
  {
    icon: FileBadge2,
    title: "Asigurare CMR",
    text: "Acoperire integrală pentru fiecare expediție internațională, conform Convenției CMR.",
  },
  {
    icon: ScrollText,
    title: "GDP – Good Distribution Practice",
    text: "Conformitate pentru transportul produselor farmaceutice (la cerere).",
  },
];

const DOCS = [
  {
    title: "Certificat ONRC",
    description:
      "Certificat constatator emis de Oficiul Național al Registrului Comerțului.",
  },
  {
    title: "Polița de asigurare CMR",
    description:
      "Document oficial de asigurare a mărfurilor în transport internațional.",
  },
  {
    title: "Licență comunitară",
    description: "Autorizația pentru transport rutier internațional.",
  },
  {
    title: "Certificate ISO",
    description:
      "Atestări ale sistemelor de management al calității și mediului.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calitate & conformitate"
        title="Certificări și documente Eurovet Logistics"
        description="Operăm conform celor mai exigente standarde europene de calitate, mediu și siguranță logistică. Toate documentele noastre sunt disponibile la cerere."
        breadcrumbs={[{ label: "Acasă", href: "/" }, { label: "Certificări" }]}
      />

      <section className="section bg-white">
        <div className="container-base">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="eyebrow">Certificări</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Standarde europene, atestate independent
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg">
                Calitatea noastră este garantată prin audituri externe regulate
                și prin certificările deținute de la organisme recunoscute.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-white p-7 h-full card-hover">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 inline-flex items-center justify-center">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-semibold text-brand-900 text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {c.text}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Activă
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-base">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <span className="eyebrow">Documente companie</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Documente disponibile la cerere
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOCS.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border border-border p-6 h-full">
                  <h3 className="font-semibold text-brand-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted">{d.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Dorești copii ale documentelor sau certificărilor?"
        text="Trimitem rapid orice document oficial necesar pentru procesul tău de procurement sau audit."
        primaryLabel="Solicită documente"
        primaryHref="/contact?subject=Solicitare%20documente"
      />
    </>
  );
}
