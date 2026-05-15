import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import {
  Award,
  Heart,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Despre noi",
  description:
    "Eurovet Logistics — o companie românească de logistică și transport rutier internațional. Profesionalism, fiabilitate, soluții integrate la standarde europene.",
  path: "/despre-noi",
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

const TIMELINE = [
  {
    year: "2010",
    title: "Înființarea companiei",
    text: "Eurovet pornește cu o flotă mică, dar cu ambiție mare: livrări sigure pe rutele europene.",
  },
  {
    year: "2014",
    title: "Extindere națională",
    text: "Deschidem primul depozit în zona București-Ilfov și lansăm serviciile de distribuție.",
  },
  {
    year: "2017",
    title: "Certificări internaționale",
    text: "Obținem ISO 9001 și aderăm la programe europene de calitate logistică.",
  },
  {
    year: "2020",
    title: "Digitalizare",
    text: "Implementăm TMS, WMS și portal client pentru vizibilitate end-to-end.",
  },
  {
    year: "2023",
    title: "Flotă Euro 6 100%",
    text: "Tranziție completă către vehicule cu emisii reduse, în pas cu obiectivele europene.",
  },
  {
    year: "2026",
    title: "Hub regional",
    text: "Eurovet devine partener strategic pentru companii din toată Europa Centrală și de Est.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title="O echipă pasionată de logistică, dedicată succesului tău"
        description="De peste 15 ani, Eurovet Logistics conectează afaceri europene prin soluții de transport și logistică integrate, livrate cu profesionalism și predictibilitate."
        breadcrumbs={[{ label: "Acasă", href: "/" }, { label: "Despre noi" }]}
      />

      <section className="section bg-white">
        <div className="container-base grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/transport.png"
                alt="Operațiunile Eurovet"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Povestea noastră</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                De la primul transport la un partener logistic de încredere
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Eurovet Logistics s-a născut din pasiunea pentru transport și
                  convingerea că logistica europeană are nevoie de parteneri
                  locali serioși, care înțeleg ritmul afacerilor și ridică
                  ștacheta calității.
                </p>
                <p>
                  Astăzi, suntem o echipă unită, cu o flotă proprie modernă și o
                  rețea de parteneri verificați, capabili să livrăm pe toate
                  coridoarele majore ale Uniunii Europene, dar și dincolo de
                  granițele acesteia.
                </p>
                <p>
                  Misiunea noastră este simplă: să transformăm logistica într-un
                  avantaj competitiv real pentru fiecare client.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      {/* Mission, vision */}
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

      {/* Values */}
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

      {/* Timeline */}
      <section className="section bg-surface">
        <div className="container-base">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="eyebrow">Drumul nostru</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Etape definitorii din evoluția Eurovet
              </h2>
            </Reveal>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div
                    className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div className="md:text-right pl-12 md:pl-0 md:pr-12 relative">
                      <span className="absolute left-4 md:left-auto md:right-[-9px] top-2 h-4 w-4 rounded-full bg-accent ring-4 ring-surface" />
                      <span className="text-sm font-semibold text-accent">
                        {t.year}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold text-brand-900">
                        {t.title}
                      </h3>
                    </div>
                    <p className="text-muted pl-12 md:pl-12">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vrei să afli mai multe despre cum lucrăm?"
        text="Hai să stabilim o întâlnire — îți prezentăm flota, depozitul și echipa care va lucra pentru tine."
        primaryLabel="Programează o întâlnire"
      />
    </>
  );
}
