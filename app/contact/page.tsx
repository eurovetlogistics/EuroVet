import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactează echipa Eurovet Logistics pentru ofertă personalizată: email, telefon, adresă și formular de contact.",
  path: "/contact",
});

type SP = { subject?: string };

export default async function ContactPage(props: {
  searchParams: Promise<SP>;
}) {
  const sp = await props.searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Hai să discutăm despre logistica ta"
        description="Echipa noastră îți răspunde rapid cu o ofertă personalizată, indiferent de complexitatea proiectului."
        breadcrumbs={[{ label: "Acasă", href: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-white">
        <div className="container-base">
          {/* Info strip */}
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-6 mb-14">
              <a
                href="mailto:contact@eurovetgroup.com"
                className="flex items-center gap-4 p-6 rounded-2xl border border-border hover:shadow-md transition-shadow group"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted">
                    Email
                  </div>
                  <div className="mt-0.5 font-semibold text-brand-900">
                    contact@eurovetgroup.com
                  </div>
                </div>
              </a>
              <a
                href="tel:+40752221316"
                className="flex items-center gap-4 p-6 rounded-2xl border border-border hover:shadow-md transition-shadow group"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted">
                    Telefon
                  </div>
                  <div className="mt-0.5 font-semibold text-brand-900">
                    +40 752 221 316
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted">
                    Adresă
                  </div>
                  <div className="mt-0.5 font-semibold text-brand-900">
                    Strada Buiacului nr. 2, Mogoșoaia
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Formular + Hartă */}
          <div className="grid lg:grid-cols-2 gap-10">
            <Reveal>
              <ContactForm subjectDefault={sp.subject} />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden border border-border h-full min-h-[500px]">
                <iframe
                  title="Locație Eurovet Logistics"
                  className="w-full h-full min-h-[500px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234!2d26.012!3d44.559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20490cf47c341%3A0x75a45b2d2daf6646!2sStrada%20Buiacului%202%2C%20Mogo%C8%99oaia!5e0!3m2!1sro!2sro!4v1600000000000"
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
