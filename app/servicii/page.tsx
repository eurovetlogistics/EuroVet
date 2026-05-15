import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { SERVICES as ALL_SERVICES } from "@/lib/data/services";

const DISPLAYED_SLUGS = [
  "depozitare-warehousing",
  "transport-rutier-international",
  "etichetare-ambalare",
  "supply-chain-management",
];
const SERVICES = ALL_SERVICES.filter((s) => DISPLAYED_SLUGS.includes(s.slug));
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Servicii logistice și de transport",
  description:
    "Transport rutier internațional, expediții, depozitare, vamă, transport expres, distribuție națională și soluții complete de supply chain.",
  path: "/servicii",
});

export default async function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicii"
        title="Soluții complete de logistică și transport"
        description="De la transport rutier internațional la depozitare WMS și management al lanțului de aprovizionare — un singur partener pentru toate nevoile tale."
        breadcrumbs={[{ label: "Acasă", href: "/" }, { label: "Servicii" }]}
      />

      <section className="section bg-surface">
        <div className="container-base flex flex-col gap-10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link
                href={`/servicii/${s.slug}`}
                className="group flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-border bg-white hover:shadow-2xl hover:shadow-brand-900/10 transition-shadow"
              >
                {/* Imagine 1:1 — alternează stânga/dreapta */}
                <div
                  className={`lg:w-[500px] xl:w-[560px] shrink-0 aspect-square overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={560}
                    height={560}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center gap-8 p-10 lg:p-16 flex-1">
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-900 leading-tight">
                      {s.title}
                    </h2>
                    <p className="mt-5 text-lg text-muted leading-relaxed">
                      {s.short}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-base text-brand-900"
                      >
                        <CheckCircle2 className="h-5 w-5 text-brand-700 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-base font-semibold text-brand-700 group-hover:gap-3 transition-all">
                    Citește mai mult <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
