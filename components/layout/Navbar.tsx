"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, ABOUT_LINKS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data/services";
import { cn } from "@/lib/utils";

type DropdownItem = { href: string; label: string; short?: string };

const FEATURED_SLUGS = [
  "depozitare-warehousing",
  "transport-rutier-international",
  "etichetare-ambalare",
  "supply-chain-management",
];

const SERVICES_ITEMS: DropdownItem[] = SERVICES.filter((s) =>
  FEATURED_SLUGS.includes(s.slug),
).map((s) => ({
  href: `/servicii/${s.slug}`,
  label: s.title,
  short: s.short,
}));

const ABOUT_ITEMS: DropdownItem[] = ABOUT_LINKS.map((a) => ({
  href: a.href,
  label: a.label,
  short: a.short,
}));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const dropdownFor = (
    label: string,
  ): { items: DropdownItem[]; allHref: string; allLabel: string } | null => {
    if (label === "Servicii")
      return {
        items: SERVICES_ITEMS,
        allHref: "/servicii",
        allLabel: "Vezi toate serviciile →",
      };
    if (label === "Despre noi")
      return {
        items: ABOUT_ITEMS,
        allHref: "/despre-noi",
        allLabel: "Vezi pagina principală →",
      };
    return null;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,30,61,0.12)]"
          : "bg-brand-950/40 backdrop-blur-md",
      )}
    >
      <div className="container-base flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo dark={scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const dd = dropdownFor(l.label);
            if (dd) {
              const isOpen = activeDropdown === l.label;
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => openDropdown(l.label)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={l.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      scrolled
                        ? "text-brand-900 hover:bg-brand-50"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {l.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </Link>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2 w-80"
                      >
                        <div className="rounded-2xl bg-white shadow-xl border border-brand-900/8 overflow-hidden p-2">
                          {dd.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-brand-50 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-brand-900 group-hover:text-brand-700">
                                {item.label}
                              </span>
                              {item.short && (
                                <span className="text-xs text-muted mt-0.5 line-clamp-1">
                                  {item.short}
                                </span>
                              )}
                            </Link>
                          ))}
                          <div className="border-t border-border mt-2 pt-2">
                            <Link
                              href={dd.allHref}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-brand-700 hover:bg-brand-50 transition-colors"
                            >
                              {dd.allLabel}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  scrolled
                    ? "text-brand-900 hover:bg-brand-50"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium",
              scrolled ? "text-brand-900" : "text-white",
            )}
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link href="/contact" className="btn btn-primary text-sm py-2.5 px-5">
            Cere ofertă
          </Link>
        </div>

        <button
          aria-label="Meniu"
          className={cn(
            "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border",
            scrolled
              ? "border-brand-900/15 text-brand-900"
              : "border-white/30 text-white",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-brand-900/10 bg-white"
          >
            <div className="container-base py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => {
                const dd = dropdownFor(l.label);
                if (dd) {
                  const expanded = mobileExpanded === l.label;
                  return (
                    <div key={l.href}>
                      <button
                        onClick={() =>
                          setMobileExpanded(expanded ? null : l.label)
                        }
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-brand-900 hover:bg-surface font-medium"
                      >
                        {l.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-1 flex flex-col gap-0.5">
                              {dd.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileExpanded(null);
                                  }}
                                  className="px-3 py-2 rounded-lg text-sm text-brand-800 hover:bg-surface"
                                >
                                  {item.label}
                                </Link>
                              ))}
                              <Link
                                href={dd.allHref}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileExpanded(null);
                                }}
                                className="px-3 py-2 rounded-lg text-sm font-medium text-brand-700"
                              >
                                Vezi toate →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-xl text-brand-900 hover:bg-surface font-medium"
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2"
              >
                Cere ofertă
              </Link>
              <a
                href={SITE.phoneHref}
                className="text-sm text-muted mt-2 inline-flex items-center gap-2 px-3"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo({ dark }: { dark: boolean }) {
  return (
    <Image
      src="/EurovetSVGs1.png"
      alt="Eurovet Logistics"
      width={160}
      height={48}
      className={cn(
        "h-10 w-auto object-contain transition-all duration-300",
        dark ? "" : "brightness-0 invert",
      )}
      priority
    />
  );
}
