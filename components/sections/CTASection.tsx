import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Pregătit să-ți optimizezi logistica?",
  text = "Echipa Eurovet îți răspunde în maxim 4 ore lucrătoare cu o ofertă personalizată, transparentă și competitivă.",
  primaryHref = "/contact",
  primaryLabel = "Cere ofertă acum",
  secondaryHref = "/servicii",
  secondaryLabel = "Vezi serviciile",
}: {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="container-base">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-6 sm:px-12 md:px-16 py-16 md:py-24 text-white">
          <Image
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/60" />
          <div className="absolute inset-0 bg-grid opacity-10" />

          <div className="relative max-w-3xl">
            <Reveal>
              <span className="eyebrow eyebrow-dark">Începe astăzi</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading mt-4 text-3xl md:text-5xl">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-white/75">{text}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href={primaryHref} className="btn btn-primary">
                  {primaryLabel} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={secondaryHref} className="btn btn-outline">
                  {secondaryLabel}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
