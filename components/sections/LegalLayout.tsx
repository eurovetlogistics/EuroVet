import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";

export function LegalLayout({
  title,
  eyebrow = "Documente legale",
  description,
  children,
  updated,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  updated?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[{ label: "Acasă", href: "/" }, { label: title }]}
      />
      <section className="section bg-white">
        <div className="container-base max-w-3xl">
          {updated && (
            <p className="text-sm text-muted mb-8">
              Ultima actualizare: <b className="text-brand-900">{updated}</b>
            </p>
          )}
          <div className="prose prose-custom prose-lg max-w-none prose-headings:text-brand-900 prose-a:text-brand-700 prose-strong:text-brand-900">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
