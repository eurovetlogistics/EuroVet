import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";
import { BlogCard } from "@/components/sections/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { getAllServices, getAllPosts } from "@/lib/repo";
import { SITE } from "@/lib/site";

export default async function HomePage() {
  const [services, posts] = await Promise.all([
    getAllServices(),
    getAllPosts(),
  ]);
  const featuredServices = services.slice(0, 6);
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <Hero />
      <Stats />

      {/* Servicii 4 carduri cu imagini 1:1 */}
      <section className="section bg-surface">
        <div className="container-base">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow">CE FACEM</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Soluțiile noastre
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                slug: "depozitare-warehousing",
                title: "Depozitare",
                desc: "Depozitare eficientă, utilizând tehnologii moderne și sisteme de gestionare pentru optimizarea spațiului și asigurarea unei distribuții rapide și precise.",
                img: "/depozitare.png",
              },
              {
                slug: "transport-rutier-international",
                title: "Transport",
                desc: "Transport rapid, sigur și eficient cu soluții și tehnologii actuale pentru optimizarea traseelor și servicii personalizate.",
                img: "/transport.png",
              },
              {
                slug: "etichetare-ambalare",
                title: "Etichetare și ambalare",
                desc: "Etichetarea și ambalarea joacă un rol crucial în identificarea, informarea și protejarea produselor, astfel implementăm procese de siguranță pentru un output calitativ.",
                img: "/ambalare.png",
              },
              {
                slug: "supply-chain-management",
                title: "Optimizarea lanțului de aprovizionare",
                desc: "Acest demers implică strategii integrate pentru a maximiza performanța operațională și a aduce beneficii semnificative în întregul lanț de aprovizionare.",
                img: "/optimizare.png",
              },
            ].map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <Link
                  href={`/servicii/${s.slug}`}
                  className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-white hover:shadow-xl hover:shadow-brand-900/10 transition-shadow h-full"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
                    <h3 className="font-semibold text-brand-900 text-2xl leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-base font-medium text-brand-700 group-hover:gap-3 transition-all">
                      Citește mai mult <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Fleet section */}
      <section className="relative section overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Flota de camioane Eurovet"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/60 to-brand-950/90" />
        </div>

        <div className="container-base relative text-center">
          <Reveal>
            <span className="eyebrow eyebrow-dark">Flota Eurovet</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading mt-4 text-3xl md:text-5xl text-white max-w-3xl mx-auto">
              Vehicule moderne, întreținute la standarde europene
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              Operăm cu o flotă proprie de tractoare și semiremorci Euro 6,
              echipate cu tehnologie de telematică și sisteme de monitorizare a
              temperaturii. Investim continuu în modernizare pentru a asigura
              eficiență, siguranță și sustenabilitate.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { k: "Tractoare Euro 6", v: "100%" },
              { k: "Vârsta medie a flotei", v: "< 3 ani" },
              { k: "Monitorizare GPS", v: "24/7" },
              { k: "Asigurare CMR", v: "Inclusă" },
            ].map((b, i) => (
              <Reveal delay={0.08 * i} key={i}>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors">
                  <div className="text-4xl md:text-5xl font-display font-bold text-white">
                    {b.v}
                  </div>
                  <div className="text-sm text-white/55 mt-3 uppercase tracking-wider">
                    {b.k}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company presentation */}
      <section className="section bg-white">
        <div className="container-base grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Despre Eurovet</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Construim relații, nu doar transporturi
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                Eurovet Logistics este o companie românească cu rădăcini în
                transportul european, care îmbină tradiția cu tehnologia. De
                peste un deceniu și jumătate construim parteneriate solide,
                bazate pe respect, transparență și execuție impecabilă.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link href="/despre-noi" className="btn btn-dark mt-8">
                Despre compania noastră <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Misiune",
                text: "Să furnizăm soluții logistice eficiente, sigure și predictibile, transformând lanțul de aprovizionare al clienților într-un avantaj competitiv real.",
              },
              {
                title: "Viziune",
                text: "Să devenim referința regională pentru logistică integrată în Europa Centrală și de Est.",
              },
              {
                title: "Valori",
                text: "Integritate, profesionalism, inovație, respect pentru oameni și pentru mediu.",
              },
              {
                title: "Angajament",
                text: "Investim continuu în flotă, tehnologie și echipă pentru a depăși așteptările clienților.",
              },
            ].map((b, i) => (
              <Reveal delay={0.05 * i} key={i}>
                <div className="rounded-2xl border border-border bg-surface p-6 h-full">
                  <h3 className="font-semibold text-brand-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Partners />

      {/* Recent blog */}
      <section className="section bg-white">
        <div className="container-base">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Reveal>
                <span className="eyebrow">Blog</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                  Ultimele articole din industrie
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/blog" className="btn btn-outline-dark">
                Toate articolele <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {recentPosts.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Contact preview */}
      <section className="section bg-surface">
        <div className="container-base">
          {/* Header */}
          <div className="text-center mb-12">
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Hai să discutăm despre logistica ta
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
                Echipa noastră îți răspunde rapid cu o ofertă personalizată,
                indiferent de complexitatea proiectului.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-brand-900">
                <a
                  href="mailto:contact@eurovetgroup.com"
                  className="inline-flex items-center gap-3"
                >
                  <span className="h-10 w-10 rounded-xl bg-white inline-flex items-center justify-center border border-border">
                    <Mail className="h-4 w-4 text-brand-700" />
                  </span>
                  contact@eurovetgroup.com
                </a>
                <a
                  href="tel:+40752221316"
                  className="inline-flex items-center gap-3"
                >
                  <span className="h-10 w-10 rounded-xl bg-white inline-flex items-center justify-center border border-border">
                    <Phone className="h-4 w-4 text-brand-700" />
                  </span>
                  +40 752 221 316
                </a>
                <span className="inline-flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl bg-white inline-flex items-center justify-center border border-border">
                    <MapPin className="h-4 w-4 text-brand-700" />
                  </span>
                  Strada Buiacului nr. 2, Mogoșoaia
                </span>
              </div>
            </Reveal>
          </div>

          {/* Formular + Hartă */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white rounded-3xl border border-border p-8 md:p-10 h-full">
                <ContactForm />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden border border-border min-h-[500px] h-full">
                <iframe
                  title="Locație Eurovet Logistics"
                  className="w-full h-full min-h-[500px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5!2d26.0079!3d44.5605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20490cf47c341%3A0x75a45b2d2daf6646!2sStrada%20Buiacului%202%2C%20Mogo%C8%99oaia!5e0!3m2!1sro!2sro!4v1700000000000"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
