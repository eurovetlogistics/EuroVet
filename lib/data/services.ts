export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name
  image: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "transport-rutier-international",
    title: "Transport rutier internațional",
    short:
      "Transport de mărfuri pe rute europene cu flotă proprie modernă și șoferi experimentați.",
    description:
      "Asigurăm servicii de transport rutier internațional pe toate rutele majore din Uniunea Europeană, cu o flotă proprie modernă, conformă cu cele mai recente norme Euro. Coordonăm fiecare expediție end-to-end, monitorizăm în timp real și garantăm livrări la termen, indiferent de complexitatea operațiunii.",
    icon: "Truck",
    image: "/transport.png",
    benefits: [
      "Acoperire completă în UE și SEE",
      "Flotă proprie Euro 6 cu echipamente moderne",
      "Monitorizare GPS și raportare în timp real",
      "Asigurare CMR pentru fiecare expediție",
      "Echipă de dispecerat 24/7",
    ],
    process: [
      { title: "Cerere & ofertă", description: "Analizăm cererea și emitem o ofertă transparentă în maxim 4 ore." },
      { title: "Planificare", description: "Stabilim ruta optimă, alocăm vehicul și șofer, programăm încărcarea." },
      { title: "Execuție", description: "Tracking GPS în timp real, comunicare proactivă cu beneficiarul." },
      { title: "Livrare & raportare", description: "POD digital, raportare completă și facturare promptă." },
    ],
    faqs: [
      { q: "În ce țări operați?", a: "Operăm în toate statele UE, inclusiv UK, Norvegia, Elveția, precum și în Turcia și Balcanii de Vest." },
      { q: "Ce tipuri de marfă transportați?", a: "Mărfuri generale, paletizate, FTL și LTL, mărfuri ADR (în baza autorizațiilor specifice) și transport refrigerat la cerere." },
      { q: "Oferiți asigurare?", a: "Da, fiecare expediție este acoperită prin asigurare CMR conform reglementărilor europene." },
    ],
  },
  {
    slug: "expeditii-internationale",
    title: "Expediții internaționale (Freight Forwarding)",
    short:
      "Soluții multimodale optimizate pentru rapiditate, siguranță și costuri competitive.",
    description:
      "Coordonăm expediții complexe rutiere, maritime, aeriene și intermodale. Negociem cu o rețea extinsă de parteneri verificați și construim cea mai eficientă rută pentru marfa ta, gestionând documentele, asigurarea și formalitățile vamale.",
    icon: "Globe2",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Rețea globală de parteneri agreați",
      "Soluții FCL, LCL, aeriene și rutiere",
      "Gestionare integrală a documentelor",
      "Optimizare cost-rapiditate",
      "Vizibilitate completă asupra expediției",
    ],
    process: [
      { title: "Analiză", description: "Evaluăm volumul, ruta și termenele." },
      { title: "Strategie multimodală", description: "Alegem combinația optimă rutier/maritim/aerian." },
      { title: "Coordonare", description: "Gestionăm furnizorii și formalitățile." },
      { title: "Confirmare livrare", description: "Furnizăm documentele și raportarea finală." },
    ],
    faqs: [
      { q: "Pot urmări expediția?", a: "Da, oferim acces la portal de tracking și updateuri proactive." },
      { q: "Gestionați și exporturi extra-UE?", a: "Absolut, inclusiv documentația și vămuirea." },
    ],
  },
  {
    slug: "depozitare-warehousing",
    title: "Depozitare & Warehousing",
    short:
      "Spații de depozitare moderne, securizate, cu management al stocurilor pe sistem WMS.",
    description:
      "Punem la dispoziție spații de depozitare în zona București-Ilfov, dotate cu rafturi industriale, sisteme antiincendiu și acces controlat. Gestionăm stocurile pe sistem WMS, oferim picking, repackaging și pregătire pentru distribuție.",
    icon: "Warehouse",
    image:
      "/depozitare.png",
    benefits: [
      "Spații moderne și securizate 24/7",
      "Management WMS al stocurilor",
      "Picking, packing & repackaging",
      "Cross-docking",
      "Pregătire pentru distribuție",
    ],
    process: [
      { title: "Recepție", description: "Verificare cantitativă și calitativă la intrare." },
      { title: "Stocare", description: "Locație optimă în depozit, etichetare WMS." },
      { title: "Operare", description: "Picking & packing conform comenzilor primite." },
      { title: "Expediere", description: "Pregătire documente, încărcare, livrare." },
    ],
    faqs: [
      { q: "Care este capacitatea de depozitare?", a: "Putem găzdui de la câteva paleți la operațiuni de mii de paleți, scalabil." },
      { q: "Oferiți și manipulare specială?", a: "Da, inclusiv repackaging, etichetare și kitting." },
    ],
  },
  {
    slug: "etichetare-ambalare",
    title: "Etichetare și ambalare",
    short:
      "Etichetarea și ambalarea joacă un rol crucial în identificarea, informarea și protejarea produselor, astfel implementăm procese de siguranță pentru un output calitativ.",
    description:
      "Etichetarea și ambalarea joacă un rol crucial în identificarea, informarea și protejarea produselor. Implementăm procese riguroase de siguranță pentru un output calitativ, adaptat cerințelor fiecărui client și destinații de livrare.",
    icon: "Package",
    image: "/ambalare.png",
    benefits: [
      "Etichetare personalizată conform standardelor",
      "Ambalare protectoare pentru transport",
      "Conformitate cu reglementările UE",
      "Linii dedicate de repackaging",
      "Control calitate la fiecare etapă",
    ],
    process: [
      { title: "Recepție materiale", description: "Verificăm materialele de ambalare și instrucțiunile clientului." },
      { title: "Procesare", description: "Etichetare și ambalare conform specificațiilor agreate." },
      { title: "Control calitate", description: "Verificare finală și aprobare înainte de expediere." },
      { title: "Expediere", description: "Predare către transportator cu documentele complete." },
    ],
    faqs: [
      { q: "Puteți ambala produse fragile?", a: "Da, folosim materiale de ambalare specializate pentru produse fragile sau cu gabarit special." },
      { q: "Oferiți etichetare în mai multe limbi?", a: "Da, adaptăm etichetele conform cerințelor fiecărei piețe de destinație." },
    ],
  },
  {
    slug: "servicii-vamale",
    title: "Servicii vamale",
    short:
      "Vămuire rapidă import/export, consultanță tarifară și gestionarea documentelor.",
    description:
      "Echipa noastră de specialiști gestionează formalitățile vamale pentru import, export și tranzit. Oferim consultanță tarifară, întocmim declarații vamale, ne ocupăm de avize, certificate de origine și de toate documentele necesare.",
    icon: "FileCheck2",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Vămuire import/export/tranzit",
      "Consultanță tarifară și clasificare NC",
      "Gestionare avize și certificate",
      "Procesare rapidă a documentelor",
      "Reducerea timpilor de oprire în vamă",
    ],
    process: [
      { title: "Documentare", description: "Verificăm și pregătim setul complet de documente." },
      { title: "Declarație vamală", description: "Întocmim declarația în sistem electronic." },
      { title: "Procesare", description: "Reprezentăm clientul în relația cu autoritățile vamale." },
      { title: "Eliberare", description: "Finalizăm operațiunea și predăm documentele." },
    ],
    faqs: [
      { q: "Sunteți comisionar vamal autorizat?", a: "Da, lucrăm cu parteneri agreați și certificați AEO." },
    ],
  },
  {
    slug: "transport-expres",
    title: "Transport expres",
    short:
      "Soluții urgente, dedicate, cu pickup în maxim 2 ore și livrare în regim direct.",
    description:
      "Pentru livrări critice oferim transport expres dedicat: vehicul rezervat exclusiv pentru marfa ta, fără opriri intermediare, cu pickup rapid și șofer suplimentar acolo unde e nevoie pentru a respecta termenele cele mai strânse.",
    icon: "Zap",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Pickup în maxim 2 ore",
      "Vehicul dedicat exclusiv mărfii tale",
      "Șofer dublu pentru rute lungi",
      "Disponibilitate 24/7",
      "Comunicare directă cu dispeceratul",
    ],
    process: [
      { title: "Cerere urgentă", description: "Răspuns telefonic imediat și ofertă în 30 minute." },
      { title: "Mobilizare", description: "Alocăm cel mai apropiat vehicul disponibil." },
      { title: "Transport direct", description: "Cursă fără opriri intermediare." },
      { title: "Livrare confirmată", description: "POD imediat după predarea mărfii." },
    ],
    faqs: [
      { q: "Cât de repede puteți ridica marfa?", a: "În medie 1-2 ore în zona București-Ilfov, în funcție de disponibilitate." },
    ],
  },
  {
    slug: "solutii-logistice-integrate",
    title: "Soluții logistice integrate",
    short:
      "Pachete complete: depozitare, transport, distribuție, returnări — un singur partener.",
    description:
      "Integrăm toate verigile lanțului tău de aprovizionare într-un serviciu unitar. De la recepție la depozit, picking, expediere, transport, distribuție și gestiunea retururilor — sub un singur contract și un singur punct de contact.",
    icon: "Boxes",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Un singur partener pentru tot lanțul",
      "Reducerea costurilor operaționale",
      "Vizibilitate end-to-end",
      "SLA-uri garantate",
      "Scalabilitate pe sezonalitate",
    ],
    process: [
      { title: "Audit logistic", description: "Mapăm fluxurile actuale și identificăm optimizări." },
      { title: "Design soluție", description: "Construim un model integrat personalizat." },
      { title: "Implementare", description: "Onboarding gradual, fără disruption." },
      { title: "Operare & îmbunătățire", description: "KPI lunari, optimizare continuă." },
    ],
    faqs: [
      { q: "Putem începe doar cu o parte din servicii?", a: "Da, soluția poate scala pe măsură ce extindeți colaborarea." },
    ],
  },
  {
    slug: "distributie-nationala",
    title: "Distribuție națională",
    short:
      "Capilarizare în toată România, livrări B2B și B2C cu rețea proprie și parteneri.",
    description:
      "Acoperim întregul teritoriu al României printr-o rețea proprie completată cu parteneri locali. Gestionăm livrările pe ultimul kilometru, programări orare, livrări cu confirmare și retururi.",
    icon: "MapPinned",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Acoperire 100% în România",
      "Livrare cu programare orară",
      "Confirmare electronică POD",
      "Gestionare retururi",
      "SLA dedicat per client",
    ],
    process: [
      { title: "Plan de distribuție", description: "Hartăm rutele optime și frecvențele." },
      { title: "Pregătire comenzi", description: "Picking și pregătire în depozit." },
      { title: "Livrare", description: "Distribuție pe ruta optimă, cu confirmare." },
      { title: "Raportare", description: "Statistici și KPI lunari." },
    ],
    faqs: [
      { q: "Aveți livrări în aceeași zi?", a: "Da, în zona București-Ilfov și în orașele mari, în baza programărilor." },
    ],
  },
  {
    slug: "supply-chain-management",
    title: "Optimizarea lanțului de aprovizionare",
    short:
      "Acest demers implică strategii integrate pentru a maximiza performanța operațională și a aduce beneficii semnificative în întregul lanț de aprovizionare.",
    description:
      "Acest demers implică strategii integrate pentru a maximiza performanța operațională și a aduce beneficii semnificative în întregul lanț de aprovizionare. Oferim analiză, planificare și implementare de soluții end-to-end.",
    icon: "Network",
    image: "/optimizare.png",
    benefits: [
      "Optimizare costuri operaționale",
      "Vizibilitate completă a fluxurilor",
      "Forecasting bazat pe date",
      "Reducerea stocurilor blocate",
      "Echipă dedicată per cont",
    ],
    process: [
      { title: "Diagnostic", description: "Analiză operațională și financiară." },
      { title: "Strategie", description: "Roadmap de optimizare clar prioritizat." },
      { title: "Implementare", description: "Execuție etapizată cu KPI măsurabili." },
      { title: "Operare", description: "Management continuu și îmbunătățire." },
    ],
    faqs: [
      { q: "Cui se adresează acest serviciu?", a: "Companiilor mid-market și enterprise care doresc să-și optimizeze logistica." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
