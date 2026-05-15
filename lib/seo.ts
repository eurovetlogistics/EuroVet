import type { Metadata } from "next";
import { SITE } from "./site";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  noindex,
}: SeoInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const desc = description || SITE.description;
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const ogImage =
    image ||
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80";

  return {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description: desc,
      siteName: SITE.name,
      locale: "ro_RO",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postalCode,
      addressCountry: "RO",
    },
    sameAs: Object.values(SITE.social),
  };
}
