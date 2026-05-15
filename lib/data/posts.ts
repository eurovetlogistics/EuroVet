export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown-light HTML
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
};

export const CATEGORIES = [
  "Logistică",
  "Transport",
  "Supply Chain",
  "Industrie",
] as const;

export const POSTS: BlogPost[] = [
  {
    slug: "tendinte-logistica-europa-2026",
    title: "Tendințe în logistica europeană: ce aduce 2026 pentru transportatori",
    excerpt:
      "De la digitalizare la tranziția verde, analizăm principalele direcții care modelează industria de transport în Europa.",
    content: `
<p>Industria logistică europeană traversează una dintre cele mai accelerate perioade de transformare. Companiile care vor crește în 2026 sunt cele care investesc deja astăzi în trei direcții majore: <b>digitalizare end-to-end</b>, <b>sustenabilitate</b> și <b>reziliența lanțului de aprovizionare</b>.</p>

<h2>1. Digitalizare end-to-end</h2>
<p>Vizibilitatea în timp real nu mai este un avantaj competitiv, ci o cerință de bază. Clienții așteaptă tracking precis, ETA dinamic și raportare automată. Sistemele TMS și WMS moderne, integrate cu telematica vehiculelor, devin standardul minim.</p>

<h2>2. Tranziția verde</h2>
<p>Reglementările europene impun reducerea emisiilor, iar marii beneficiari includ tot mai des criterii ESG în deciziile de procurement. Investiția în vehicule Euro 6, optimizarea rutelor și raportarea CO₂ sunt deja obligatorii.</p>

<h2>3. Reziliență prin diversificare</h2>
<p>După șocurile post-pandemice, lanțurile de aprovizionare europene s-au reconfigurat. Apare un nou model: <i>nearshoring</i> regional, cu noduri logistice în Europa Centrală și de Est, inclusiv România.</p>

<h2>Concluzie</h2>
<p>Eurovet Logistics investește continuu în tehnologie, flotă și oameni pentru a oferi clienților noștri exact ce înseamnă logistica europeană la standarde 2026: transparentă, sustenabilă, sigură.</p>
    `,
    coverImage:
      "/blog1.png",
    category: "Logistică",
    tags: ["tendințe", "europa", "digitalizare"],
    author: "Echipa Eurovet",
    publishedAt: "2026-04-21",
  },
  {
    slug: "cum-alegi-partener-transport-international",
    title: "Cum alegi partenerul potrivit pentru transport internațional",
    excerpt:
      "5 criterii esențiale pe care trebuie să le verifici înainte de a semna un contract de transport.",
    content: `
<p>Alegerea unui partener de transport internațional poate face diferența între o operațiune fluidă și pierderi semnificative. Iată 5 criterii esențiale pe care le recomandăm clienților noștri.</p>

<h2>1. Acoperire geografică reală</h2>
<p>Verifică nu doar harta, ci și rutele frecvente, partenerii locali și capacitatea pe coridoarele de care ai nevoie.</p>

<h2>2. Flotă proprie vs subcontractare</h2>
<p>O flotă proprie oferă control mai bun asupra calității și termenelor. Subcontractarea poate fi avantajoasă, dar trebuie făcută cu parteneri verificați.</p>

<h2>3. Asigurări și conformitate</h2>
<p>Cere dovada asigurării CMR, autorizațiilor de transport și a certificărilor (ISO, AEO, GDP unde se aplică).</p>

<h2>4. Tehnologie</h2>
<p>Tracking real-time, portal client, integrări API. Lipsa lor înseamnă vizibilitate redusă și costuri ascunse.</p>

<h2>5. Comunicare & dispecerat</h2>
<p>Un dispecerat 24/7 cu rol de single point of contact economisește ore prețioase în situații critice.</p>

<p>Eurovet Logistics îndeplinește toate aceste criterii și oferă transparență totală în fiecare etapă a colaborării.</p>
    `,
    coverImage:
      "/blog2.png",
    category: "Transport",
    tags: ["transport", "ghid", "B2B"],
    author: "Echipa Eurovet",
    publishedAt: "2026-03-12",
  },
  {
    slug: "optimizarea-costurilor-supply-chain",
    title: "Optimizarea costurilor în supply chain: 7 pârghii pe care le poți activa azi",
    excerpt:
      "Strategii concrete pentru a reduce cheltuielile operaționale fără a compromite calitatea livrării.",
    content: `
<p>Reducerea costurilor în supply chain nu înseamnă tăieri brutale, ci optimizare inteligentă. Iată 7 pârghii cu impact rapid.</p>

<h2>1. Consolidarea expedițiilor</h2>
<p>Combinarea comenzilor LTL în FTL-uri poate reduce costul per kilogram cu până la 30%.</p>

<h2>2. Optimizarea rutelor</h2>
<p>Algoritmii moderni de rutare reduc kilometrii parcurși cu 8-15%.</p>

<h2>3. Cross-docking</h2>
<p>Eliminarea stocării temporare scade costurile de manipulare și depozitare.</p>

<h2>4. Negociere cu mai mulți operatori</h2>
<p>Diversificarea bazei de furnizori menține presiunea competitivă pe prețuri.</p>

<h2>5. Automatizare picking</h2>
<p>Sistemele WMS și pick-to-light reduc erorile și timpii operaționali.</p>

<h2>6. Planificare bazată pe date</h2>
<p>Forecasting precis reduce stocurile blocate și costurile de obsolescence.</p>

<h2>7. Outsourcing strategic</h2>
<p>Externalizarea operațiunilor non-core către un 3PL poate reduce costurile cu 10-25%.</p>

<p>La Eurovet Logistics aplicăm aceste principii zilnic, pentru a livra clienților noștri logistică performantă la cost competitiv.</p>
    `,
    coverImage:
      "/blog3.png",
    category: "Supply Chain",
    tags: ["costuri", "optimizare", "3PL"],
    author: "Echipa Eurovet",
    publishedAt: "2026-02-08",
  },
  {
    slug: "rolul-romaniei-ca-hub-logistic",
    title: "România, hub logistic regional: oportunități pentru companii",
    excerpt:
      "Poziția strategică a României o transformă într-un nod logistic-cheie pentru Europa Centrală și de Est.",
    content: `
<p>Cu acces direct la coridoarele paneuropene, port la Marea Neagră și forță de muncă calificată, România devine tot mai des prima opțiune pentru hub-uri regionale.</p>

<h2>Avantaje competitive</h2>
<ul>
<li>Coridoarele rutiere TEN-T (IV și IX) traversează țara</li>
<li>Portul Constanța — poarta UE spre Asia Centrală</li>
<li>Cost operațional sub media UE</li>
<li>Aderarea integrală la Schengen accelerează tranzitul</li>
</ul>

<h2>Sectoare beneficiare</h2>
<p>Automotive, FMCG, retail, e-commerce și pharma sunt doar câteva dintre industriile care au mutat operațiuni de distribuție în România.</p>

<h2>Cum te poate ajuta Eurovet</h2>
<p>Avem expertiza, depozitele și rețeaua necesare pentru a-ți construi un hub regional eficient, fie că vorbim de distribuție națională sau export către piețele vecine.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    category: "Industrie",
    tags: ["românia", "hub", "investiții"],
    author: "Echipa Eurovet",
    publishedAt: "2026-01-19",
  },
  {
    slug: "ghid-incoterms-2020-pentru-importatori",
    title: "Ghid Incoterms 2020 pentru importatori",
    excerpt:
      "Înțelegerea corectă a Incoterms te poate scuti de costuri ascunse și conflicte cu furnizorii.",
    content: `
<p>Incoterms definesc clar responsabilitățile vânzătorului și cumpărătorului. Iată cele mai folosite pentru importurile în România.</p>

<h2>EXW — Ex Works</h2>
<p>Vânzătorul pune marfa la dispoziție în depozitul său. Cumpărătorul preia toate costurile și riscurile. Ideal când ai parteneri logistici de încredere precum Eurovet.</p>

<h2>FCA — Free Carrier</h2>
<p>Vânzătorul livrează către transportatorul desemnat de cumpărător. Mai echilibrat decât EXW, recomandat de ICC.</p>

<h2>CIP — Carriage and Insurance Paid To</h2>
<p>Vânzătorul plătește transportul și asigurarea până la destinație. Cumpărătorul preia riscul la predarea către primul transportator.</p>

<h2>DAP — Delivered at Place</h2>
<p>Vânzătorul livrează la locația convenită; cumpărătorul se ocupă de vămuirea de import.</p>

<h2>DDP — Delivered Duty Paid</h2>
<p>Maximum de responsabilitate pentru vânzător, inclusiv vama de import. Confortabil pentru cumpărător, dar adesea mai scump.</p>

<p>Echipa noastră vamală te poate ghida în alegerea celui mai potrivit Incoterm pentru fiecare flux.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    category: "Transport",
    tags: ["incoterms", "import", "vamă"],
    author: "Echipa Eurovet",
    publishedAt: "2025-12-04",
  },
  {
    slug: "depozitare-moderna-wms",
    title: "De ce un sistem WMS modern este esențial în 2026",
    excerpt:
      "Un Warehouse Management System bine implementat poate dubla eficiența unui depozit.",
    content: `
<p>Sistemele WMS au evoluat de la simple unelte de inventar la platforme complete de orchestrare operațională.</p>

<h2>Vizibilitate în timp real</h2>
<p>Stoc, locație, status — totul accesibil instant, prin portal sau API.</p>

<h2>Eficiență operațională</h2>
<p>Strategii de putaway și picking optimizate reduc deplasările cu 20-40%.</p>

<h2>Trasabilitate completă</h2>
<p>Loturi, date de expirare, batch-uri — esențial pentru pharma și FMCG.</p>

<h2>Integrare</h2>
<p>API-uri standard pentru ERP, ecommerce și TMS.</p>

<p>Eurovet operează depozitele pe sistem WMS modern, oferind clienților vizibilitate completă și SLA-uri garantate.</p>
    `,
    coverImage: "/depozitare.png",
    category: "Logistică",
    tags: ["depozitare", "WMS", "tehnologie"],
    author: "Echipa Eurovet",
    publishedAt: "2025-11-15",
  },
];

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return POSTS
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
