import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { LEGAL_LINKS, NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80 mt-16">
      <div className="container-base pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/EurovetSVGs1.png"
              alt="Eurovet Logistics"
              width={180}
              height={54}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              Soluții complete de logistică și transport rutier internațional la
              standarde europene. Construim împreună lanțuri de aprovizionare
              eficiente, transparente și scalabile.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent" />
                {SITE.email}
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent" />
                {SITE.phone}
              </a>
              <span className="inline-flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>
                  {SITE.address.street}, {SITE.address.city},{" "}
                  {SITE.address.county}, {SITE.address.country}
                </span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Navigare
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Conectează-te
            </h4>
            <div className="flex gap-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">{SITE.hours}</p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. Toate drepturile
            rezervate.
          </span>
          <span>Site realizat cu ❤ pentru profesioniștii din logistică.</span>
        </div>
      </div>
    </footer>
  );
}
