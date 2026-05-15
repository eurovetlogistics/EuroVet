import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare a websiteului Eurovet Logistics.",
  path: "/termeni-si-conditii",
});

export default function Page() {
  return (
    <LegalLayout title="Termeni și condiții" updated="14 mai 2026">
      <h2>1. Acceptarea termenilor</h2>
      <p>
        Accesarea și utilizarea websiteului Eurovet Logistics implică acceptarea
        integrală a prezentelor Termeni și Condiții. Dacă nu ești de acord cu
        aceștia, te rugăm să nu folosești siteul.
      </p>

      <h2>2. Despre noi</h2>
      <p>Websiteul este operat de {SITE.legalName}.</p>
      <ul>
        <li>
          Adresă: {SITE.address.street}, {SITE.address.city},{" "}
          {SITE.address.county}
        </li>
        <li>
          E-mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>Telefon: {SITE.phone}</li>
      </ul>

      <h2>3. Scopul websiteului</h2>
      <p>Websiteul are rol informativ și prezintă:</p>
      <ul>
        <li>serviciile logistice oferite;</li>
        <li>informații de contact;</li>
        <li>posibilitatea de a solicita oferte;</li>
        <li>informații despre companie.</li>
      </ul>
      <p>
        Websiteul nu reprezintă un magazin online și nu generează contracte
        automat. Orice colaborare se stabilește doar prin contract semnat între
        părți.
      </p>

      <h2>4. Utilizarea websiteului</h2>
      <p>Utilizatorul se obligă să:</p>
      <ul>
        <li>folosească siteul doar în scopuri legale;</li>
        <li>nu încerce accesarea neautorizată a serverelor;</li>
        <li>nu transmită informații false sau incomplete;</li>
        <li>nu afecteze funcționarea siteului.</li>
      </ul>
      <p>
        Eurovet Logistics își rezervă dreptul de a restricționa accesul
        utilizatorilor care încalcă aceste reguli.
      </p>

      <h2>5. Conținutul websiteului</h2>
      <p>
        Toate materialele de pe site (texte, imagini, logouri, elemente grafice)
        sunt proprietatea Eurovet Logistics și sunt protejate de legislația
        privind drepturile de autor.
      </p>
      <p>
        Este interzisă: copierea, distribuirea, modificarea, utilizarea
        comercială fără acordul scris al Eurovet Logistics.
      </p>

      <h2>6. Solicitări de ofertă și comunicări</h2>
      <p>Prin completarea formularelor de contact sau ofertare:</p>
      <ul>
        <li>confirmi că datele furnizate sunt reale;</li>
        <li>
          ești de acord să fii contactat pentru a primi informațiile solicitate.
        </li>
      </ul>
      <p>
        Transmiterea unui formular nu reprezintă o comandă fermă și nu creează
        obligații contractuale pentru Eurovet Logistics.
      </p>

      <h2>7. Protecția datelor personale</h2>
      <p>Prelucrarea datelor personale se face conform:</p>
      <ul>
        <li>
          <a href="/politica-confidentialitate">
            Politicii de Confidențialitate Eurovet Logistics
          </a>
          ;
        </li>
        <li>
          <a href="/politica-cookie">Politicii Cookie Eurovet Logistics</a>;
        </li>
        <li>GDPR și legislației naționale.</li>
      </ul>

      <h2>8. Cookieuri</h2>
      <p>
        Websiteul utilizează cookieuri pentru funcționare, analiză și
        personalizare. Detalii complete în{" "}
        <a href="/politica-cookie">Politica Cookie</a>.
      </p>

      <h2>9. Limitarea răspunderii</h2>
      <p>Eurovet Logistics nu poate fi responsabilă pentru:</p>
      <ul>
        <li>erori tehnice ale websiteului;</li>
        <li>întreruperi temporare ale serviciilor online;</li>
        <li>pierderi rezultate din utilizarea informațiilor de pe site;</li>
        <li>conținutul altor siteuri către care există linkuri externe.</li>
      </ul>

      <h2>10. Linkuri către alte websiteuri</h2>
      <p>
        Siteul poate conține linkuri către siteuri externe. Eurovet Logistics nu
        este responsabilă pentru conținutul sau politicile acestora.
      </p>

      <h2>11. Modificarea termenilor</h2>
      <p>
        Eurovet Logistics poate modifica acești Termeni și Condiții oricând.
        Versiunea actualizată va fi publicată pe website și va intra în vigoare
        imediat.
      </p>

      <h2>12. Legea aplicabilă</h2>
      <p>
        Termenii și Condițiile sunt guvernați de legislația din România. Orice
        litigiu va fi soluționat de instanțele competente din România.
      </p>

      <h2>13. Contact</h2>
      <ul>
        <li>
          Adresă: {SITE.address.street}, {SITE.address.city},{" "}
          {SITE.address.county}
        </li>
        <li>
          E-mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>Telefon: {SITE.phone}</li>
      </ul>
    </LegalLayout>
  );
}
