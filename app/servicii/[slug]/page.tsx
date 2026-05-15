import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { getAllServices, getServiceBySlugRepo } from "@/lib/repo";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { slug: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = await getServiceBySlugRepo(slug);
  if (!service) return buildMetadata({ title: "Serviciu", noindex: true });
  return buildMetadata({
    title: service.title,
    description: service.short,
    path: `/servicii/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const service = await getServiceBySlugRepo(slug);
  if (!service) notFound();

  const Icon =
    (
      Icons as unknown as Record<
        string,
        React.ComponentType<{ className?: string }>
      >
    )[service.icon] || Icons.Box;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    provider: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    areaServed: "EU",
  };

  return (
    <>
      <Script
        id={`ld-service-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Serviciu"
        title={service.title}
        description={service.short}
        image={service.image}
        breadcrumbs={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: service.title },
        ]}
      />

      {/* Detailed presentation */}
      <section className="section bg-white">
        <div className="container-base grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="h-14 w-14 rounded-2xl bg-brand-50 text-brand-700 inline-flex items-center justify-center">
                <Icon className="h-7 w-7" />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-6 text-3xl md:text-4xl text-brand-900">
                Despre acest serviciu
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="heading mt-12 text-2xl text-brand-900">
                Beneficii cheie
              </h3>
            </Reveal>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {service.benefits.map((b, i) => (
                <Reveal key={i} delay={i * 0.04} as="li">
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
                    <CheckCircle2 className="h-5 w-5 text-brand-700 mt-0.5 shrink-0" />
                    <span className="text-brand-900 text-sm">{b}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-[0_30px_60px_-30px_rgba(15,30,61,0.15)]">
              <h3 className="font-semibold text-brand-900 text-lg">
                Cere o ofertă pentru acest serviciu
              </h3>
              <p className="mt-2 text-sm text-muted">
                Răspuns în maxim 4 ore lucrătoare cu o ofertă personalizată.
              </p>
              <Link
                href={`/contact?subject=${encodeURIComponent(service.title)}`}
                className="btn btn-primary mt-6 w-full"
              >
                Solicită ofertă <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/servicii"
                className="btn btn-outline-dark mt-3 w-full"
              >
                Toate serviciile
              </Link>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted mb-3">
                  Avantaje incluse
                </p>
                <ul className="space-y-2 text-sm text-brand-900">
                  <li>✓ Ofertă transparentă, fără costuri ascunse</li>
                  <li>✓ Manager de cont dedicat</li>
                  <li>✓ Tracking în timp real</li>
                  <li>✓ Asigurare CMR</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      {service.process?.length > 0 && (
        <section className="section bg-surface">
          <div className="container-base">
            <div className="max-w-2xl mb-14">
              <Reveal>
                <span className="eyebrow">Cum lucrăm</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                  Procesul nostru, pas cu pas
                </h2>
              </Reveal>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.process.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-3xl border border-border bg-white p-7 h-full card-hover">
                    <div className="text-accent font-display text-3xl font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 font-semibold text-brand-900 text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why us recap */}
      <section className="section bg-white">
        <div className="container-base grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">De ce Eurovet</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
                Profesioniști în logistică, alături de tine
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted text-lg">
                Combinăm experiența echipei, flota proprie modernă și tehnologia
                avansată pentru a livra rezultate constante, indiferent de
                complexitatea proiectului.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link href="/despre-noi" className="btn btn-dark mt-8">
                Despre Eurovet <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {service.faqs?.length > 0 && (
        <FAQ
          items={service.faqs}
          title={`Întrebări frecvente despre ${service.title.toLowerCase()}`}
        />
      )}

      {/* Inline contact form */}
      <section className="section bg-surface">
        <div className="container-base grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="heading mt-4 text-3xl md:text-5xl text-brand-900">
              Hai să discutăm despre {service.title.toLowerCase()}
            </h2>
            <p className="mt-5 text-muted text-lg">
              Completează formularul și un consultant Eurovet îți va trimite o
              ofertă personalizată în maxim 4 ore lucrătoare.
            </p>
          </div>
          <ContactForm subjectDefault={service.title} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
