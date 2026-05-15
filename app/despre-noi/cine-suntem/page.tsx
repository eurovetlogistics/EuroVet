import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Heart,
  Users,
  Target,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Cine suntem?",
  description:
    "Eurovet Logistics — companie românească specializată în transport rutier internațional și logistică integrată. Află povestea, misiunea și valorile noastre.",
  path: "/despre-noi/cine-suntem",
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integritate",
    text: "Lucrăm transparent, onorăm angajamentele și protejăm interesele clienților.",
  },
  {
    icon: Award,
    title: "Profesionalism",
    text: "Standarde înalte de execuție în fiecare etapă, de la dispecerat la livrare.",
  },
  {
    icon: Lightbulb,
    title: "Inovație",
    text: "Adoptăm tehnologii care aduc valoare reală operațiunilor logistice.",
  },
  {
    icon: Heart,
    title: "Respect",
    text: "Pentru oameni, parteneri, comunitate și mediu.",
  },
  {
    icon: Users,
    title: "Echipă",
    text: "Investim în profesioniști care fac diferența zi de zi.",
  },
  {
    icon: Target,
    title: "Orientare către client",
    text: "Construim soluții personalizate, nu vindem servicii standard.",
  },
];

export default function CineSuntemPage() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title="O companie românească construită pe încredere și performanță"
        description="Suntem Eurovet Logistics — un partener strategic pentru companii care au nevoie de o logistică predictibilă, sigură și scalabilă pe toată harta Europei."
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Despre noi", href: "/despre-noi" },
          { label: "Cine suntem?" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-base grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/depozitare.png"
                alt="Operațiunile Eurovet"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Cine suntem</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Mai mult decât o companie de transport — un partener logistic
                complet
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Eurovet Logistics este o companie românească cu rădăcini
                  solide în industria transportului rutier internațional.
                  Combinăm experiența unei echipe verificate de peste un deceniu
                  cu agilitatea și viteza unei structuri moderne.
                </p>
                <p>
                  Operăm o flotă proprie Euro 6, gestionăm depozite moderne în
                  zona București-Ilfov și colaborăm cu o rețea de parteneri
                  verificați la nivel european. Astfel putem oferi soluții
                  integrate end-to-end, sub un singur contract.
                </p>
                <p>
                  Misiunea noastră este să transformăm logistica într-un avantaj
                  competitiv real pentru fiecare client — prin profesionalism,
                  transparență și o atenție constantă la detalii.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-base grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-brand-950 text-white p-8 md:p-10 h-full">
              <span className="eyebrow eyebrow-dark">Misiunea noastră</span>
              <h3 className="heading mt-4 text-2xl md:text-3xl">
                Logistică predictibilă, transparentă și sigură pentru fiecare
                client.
              </h3>
              <p className="mt-5 text-white/75">
                Construim soluții logistice integrate care reduc complexitatea
                operațională a clienților și le permit să se concentreze pe
                creșterea afacerii.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-white border border-border p-8 md:p-10 h-full">
              <span className="eyebrow">Viziunea noastră</span>
              <h3 className="heading mt-4 text-2xl md:text-3xl text-brand-900">
                Să fim referința regională pentru logistică integrată în CEE.
              </h3>
              <p className="mt-5 text-muted">
                Punem accent pe sustenabilitate, inovație tehnologică și
                dezvoltarea oamenilor — pilonii pe care construim viitorul
                companiei.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="eyebrow">Valorile noastre</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Principiile care ne ghidează zilnic
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-white p-7 h-full card-hover">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-brand-900 text-lg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Hai să ne cunoaștem mai bine"
        text="Programează o întâlnire la sediul nostru sau o discuție online — îți prezentăm flota, depozitul și echipa."
        primaryLabel="Contactează-ne"
      />
    </>
  );
}
