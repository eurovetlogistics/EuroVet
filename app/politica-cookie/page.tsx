import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politica de cookie",
  description:
    "Politica de utilizare a cookieurilor pe website-ul Eurovet Logistics.",
  path: "/politica-cookie",
});

export default function Page() {
  return (
    <LegalLayout title="Politica de cookie" updated="14 mai 2026">
      <p>
        Siteul Eurovet Logistics utilizează cookieuri pentru funcționarea
        corectă a platformei, pentru analiză statistică și, cu acordul
        utilizatorului, pentru personalizarea conținutului și a reclamelor.
      </p>
      <p>
        Utilizatorii pot accepta, respinge sau modifica preferințele privind
        cookieurile din panoul de consimțământ sau din setările browserului.
        Consimțământul poate fi retras în orice moment, iar retragerea nu
        afectează legalitatea prelucrării anterioare. Dezactivarea anumitor
        cookieuri poate limita funcționalitatea siteului.
      </p>
      <p>
        Cookieurile pot fi stocate pe dispozitiv pentru durata sesiunii sau
        pentru o perioadă determinată, în funcție de setările browserului sau
        până la ștergerea manuală de către utilizator.
      </p>

      <h2>Tipuri de cookieuri folosite</h2>
      <ul>
        <li>
          <b>Esențiale</b> — necesare pentru funcționarea de bază a siteului.
        </li>
        <li>
          <b>Preferințe</b> — memorează opțiunile vizitatorului (limbă,
          regiune).
        </li>
        <li>
          <b>Statistice</b> — ne ajută să înțelegem cum este utilizat siteul.
        </li>
        <li>
          <b>Marketing</b> — folosite pentru personalizarea reclamelor (doar cu
          acord).
        </li>
      </ul>

      <p>
        Unele cookieuri pot fi furnizate de terți, precum Google Analytics,
        utilizate doar cu acordul utilizatorului.
      </p>

      <h2>Gestionarea cookieurilor</h2>
      <p>
        Poți modifica setările browserului pentru a respinge sau șterge
        cookieurile. Detalii pentru fiecare browser găsești în secțiunea de
        ajutor a acestuia.
      </p>

      <p>
        Pentru informații despre protecția datelor și drepturile utilizatorilor,
        vă rugăm să consultați{" "}
        <a href="/politica-confidentialitate">Politica de Confidențialitate</a>.
      </p>
    </LegalLayout>
  );
}
