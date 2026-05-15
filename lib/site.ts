export const SITE = {
  name: "Eurovet Logistics",
  legalName: "Eurovet Logistics SRL",
  shortName: "Eurovet",
  domain: "eurovetlogistics.ro",
  url: process.env.SITE_URL || "https://eurovetlogistics.ro",
  description:
    "Soluții logistice și de transport rutier internațional la nivel european. Rapid, sigur, profesional. Eurovet Logistics — partenerul tău de încredere.",
  tagline: "Soluții de logistică și transport, la standarde europene.",
  email: "contact@eurovetgroup.com",
  phone: "+40 752 221 316",
  phoneHref: "tel:+40752221316",
  address: {
    street: "Strada Buiacului nr. 2",
    city: "Mogoșoaia",
    county: "Ilfov",
    country: "România",
    postalCode: "077135",
  },
  hours: "Luni – Vineri, 09:00 – 18:00",
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/certificari", label: "Certificări" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const ABOUT_LINKS = [
  {
    href: "/despre-noi/cine-suntem",
    label: "Cine suntem?",
    short: "Povestea Eurovet și valorile care ne ghidează.",
  },
  {
    href: "/despre-noi/de-ce-noi",
    label: "De ce noi?",
    short: "Avantajele care ne diferențiază pe piață.",
  },
  {
    href: "/despre-noi/echipa",
    label: "Echipă",
    short: "Oamenii din spatele operațiunilor Eurovet.",
  },
  {
    href: "/despre-noi/cariera",
    label: "Carieră",
    short: "Posturi deschise și beneficii pentru noii colegi.",
  },
  {
    href: "/despre-noi/parteneri",
    label: "Parteneri",
    short: "Companiile cu care construim succes împreună.",
  },
] as const;

export const LEGAL_LINKS = [
  { href: "/politica-confidentialitate", label: "Politica de confidențialitate" },
  { href: "/termeni-si-conditii", label: "Termeni și condiții" },
  { href: "/politica-cookie", label: "Politica de cookie" },
  { href: "/gdpr", label: "GDPR" },
] as const;
