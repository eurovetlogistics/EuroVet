import Image from "next/image";
import Link from "next/link";

export function PageHero({
  title,
  eyebrow,
  description,
  image = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=80",
  breadcrumbs,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 text-white pt-32 md:pt-40 pb-16 md:pb-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/85 to-brand-950" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container-base relative">
        {breadcrumbs && (
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-5">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-white/30">/</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow eyebrow-dark">{eyebrow}</span>}
        <h1 className="heading mt-3 text-4xl md:text-6xl max-w-4xl text-gradient">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-white/75 text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
