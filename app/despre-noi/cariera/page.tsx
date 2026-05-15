import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import {
  MapPin,
  Briefcase,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Users,
  Coffee,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Carieră",
  description:
    "Posturi deschise la Eurovet Logistics. Alătură-te unei echipe profesioniste, cu beneficii reale și oportunități de creștere în logistică.",
  path: "/despre-noi/cariera",
});

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Salariu competitiv",
    text: "Pachet salarial peste media pieței, plus bonusuri de performanță trimestriale.",
  },
  {
    icon: HeartPulse,
    title: "Asigurare medicală privată",
    text: "Abonament Regina Maria sau MedLife pentru tine și familia ta.",
  },
  {
    icon: GraduationCap,
    title: "Training & dezvoltare",
    text: "Cursuri de specialitate, certificări internaționale, plan de carieră individual.",
  },
  {
    icon: Coffee,
    title: "Mediu prietenos",
    text: "Echipă unită, evenimente trimestriale, birouri moderne și echipamente noi.",
  },
  {
    icon: Calendar,
    title: "Concediu suplimentar",
    text: "Zile libere extra pentru evenimente importante și flexibilitate pe weekend.",
  },
  {
    icon: Users,
    title: "Cultură deschisă",
    text: "Comunicare directă, decizii rapide, fiecare opinie contează.",
  },
];

const JOBS = [
  {
    title: "Șofer profesionist Cat. C+E (rute internaționale)",
    department: "Operațiuni",
    location: "București / Mogoșoaia",
    type: "Normă întreagă",
  },
  {
    title: "Dispecer transport internațional",
    department: "Dispecerat",
    location: "București",
    type: "Normă întreagă",
  },
  {
    title: "Operator WMS depozit",
    department: "Logistică",
    location: "Mogoșoaia",
    type: "Normă întreagă",
  },
  {
    title: "Account Manager B2B",
    department: "Comercial",
    location: "București (hibrid)",
    type: "Normă întreagă",
  },
  {
    title: "Coordonator Servicii Vamale",
    department: "Vamă",
    location: "București",
    type: "Normă întreagă",
  },
  {
    title: "Specialist Marketing Digital",
    department: "Marketing",
    location: "București (hibrid)",
    type: "Normă întreagă",
  },
];

export default function CarieraPage() {
  return (
    <>
      <PageHero
        eyebrow="Carieră"
        title="Construiește-ți cariera într-o companie unde munca ta contează cu adevărat"
        description="Suntem mereu în căutare de profesioniști pasionați de logistică. Oferim un mediu stabil, beneficii reale și oportunități clare de creștere."
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Despre noi", href: "/despre-noi" },
          { label: "Carieră" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="eyebrow">Beneficii</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                De ce să alegi Eurovet
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-white p-7 h-full card-hover">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-brand-900 text-lg">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {b.text}
                  </p>
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
              <span className="eyebrow">Posturi deschise</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Alătură-te echipei
              </h2>
            </Reveal>
          </div>

          <div className="space-y-3">
            {JOBS.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.04}>
                <div className="group rounded-2xl bg-white border border-border p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand-700/30 hover:shadow-md transition-all">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-900 text-lg">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-primary text-sm py-2.5 px-5 inline-flex items-center gap-2 self-start md:self-auto"
                  >
                    Aplică
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-3xl bg-brand-950 text-white p-8 md:p-10 text-center">
              <h3 className="heading text-2xl md:text-3xl">
                Nu găsești postul potrivit?
              </h3>
              <p className="mt-3 text-white/75 max-w-xl mx-auto">
                Trimite-ne CV-ul tău. Construim mereu echipa pentru pozițiile
                viitoare și te contactăm când apare oportunitatea potrivită.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary mt-6 inline-flex items-center gap-2"
              >
                Trimite CV-ul tău
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ai întrebări despre posturile deschise?"
        text="Echipa noastră de HR îți răspunde la orice nelămurire — telefonic sau pe email."
        primaryLabel="Contactează-ne"
      />
    </>
  );
}
