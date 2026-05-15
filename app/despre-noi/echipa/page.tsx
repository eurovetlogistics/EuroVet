import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Echipă",
  description:
    "Cunoaște echipa Eurovet Logistics: profesioniști din transport, depozitare și operațiuni, dedicați performanței zilnice.",
  path: "/despre-noi/echipa",
});

const TEAM = [
  {
    name: "Andrei Marinescu",
    role: "CEO & Fondator",
    bio: "Peste 18 ani în logistică internațională. A construit Eurovet pornind de la un singur vehicul până la operațiunile actuale.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cristina Dobre",
    role: "COO",
    bio: "Coordonează operațiunile zilnice — flotă, depozite, dispecerat. Crede că fiecare detaliu contează.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Răzvan Popescu",
    role: "Director Comercial",
    bio: "Construiește relații de parteneriat pe termen lung. Vorbește 4 limbi și a negociat contracte în peste 20 de țări.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mihaela Stan",
    role: "Director Financiar",
    bio: "Asigură stabilitatea financiară și transparența pentru toți partenerii noștri. Disciplinată, riguroasă, mereu la zi.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bogdan Ionescu",
    role: "Manager Operațiuni",
    bio: "Coordonează dispeceratul 24/7 și se asigură că fiecare expediție ajunge la destinație conform planului.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elena Dumitrescu",
    role: "Manager Depozit",
    bio: "Gestionează operațiunile WMS și coordonează echipa de picking & packing din depozitele Eurovet.",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Florin Matei",
    role: "Manager IT & Digitalizare",
    bio: "Implementează soluțiile TMS și GPS care oferă clienților vizibilitate end-to-end asupra expedițiilor.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ioana Preda",
    role: "Customer Success Manager",
    bio: "Punctul de contact al clienților strategici. Se asigură că fiecare experiență cu Eurovet depășește așteptările.",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  },
];

const DEPARTMENTS = [
  {
    title: "Operațiuni & Dispecerat",
    count: "24",
    text: "Echipa care coordonează fiecare expediție 24/7, monitorizează rutele și comunică proactiv cu clienții.",
  },
  {
    title: "Șoferi profesioniști",
    count: "85+",
    text: "Conducători auto cu certificări internaționale, instruiți periodic pe siguranță, ADR și conducere defensivă.",
  },
  {
    title: "Depozit & Logistică",
    count: "30",
    text: "Operatori WMS, manipulatori și coordonatori care țin sub control fluxurile de marfă din depozite.",
  },
  {
    title: "Comercial & Customer Care",
    count: "12",
    text: "Account manageri și consultanți care transformă brief-urile clienților în soluții logistice fezabile.",
  },
];

export default function EchipaPage() {
  return (
    <>
      <PageHero
        eyebrow="Echipă"
        title="Oamenii care fac Eurovet să funcționeze impecabil în fiecare zi"
        description="O echipă de peste 150 de profesioniști — șoferi, dispeceri, operatori, manageri — uniți de aceeași pasiune pentru logistică bine făcută."
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Despre noi", href: "/despre-noi" },
          { label: "Echipă" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="eyebrow">Oamenii noștri</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Echipa de management
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="group rounded-3xl overflow-hidden border border-border bg-white card-hover">
                  {/* 9:16 portrait */}
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* gradient overlay bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                    {/* name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-semibold text-white text-lg leading-tight">
                        {p.name}
                      </p>
                      <p className="text-sm text-accent font-medium mt-0.5">
                        {p.role}
                      </p>
                    </div>
                  </div>
                  {/* bio + links */}
                  <div className="p-5">
                    <p className="text-sm text-muted leading-relaxed">
                      {p.bio}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="h-8 w-8 rounded-full border border-border inline-flex items-center justify-center text-brand-900 hover:bg-brand-50 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        aria-label="Email"
                        className="h-8 w-8 rounded-full border border-border inline-flex items-center justify-center text-brand-900 hover:bg-brand-50 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-base">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <span className="eyebrow">Departamente</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Echipele care livrează zi de zi
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="rounded-3xl bg-white border border-border p-7 h-full">
                  <div className="text-4xl font-bold text-accent">
                    {d.count}
                  </div>
                  <h3 className="mt-3 font-semibold text-brand-900 text-lg">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Vrei să faci parte din echipa Eurovet?"
        text="Suntem mereu deschiși la profesioniști care împărtășesc valorile noastre. Aplică acum la posturile deschise."
        primaryLabel="Vezi posturi deschise"
        primaryHref="/despre-noi/cariera"
      />
    </>
  );
}
