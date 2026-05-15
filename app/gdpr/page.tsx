import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "GDPR — Drepturile tale",
  description:
    "Informații GDPR și formular de exercitare a drepturilor utilizatorilor Eurovet Logistics.",
  path: "/gdpr",
});

export default function Page() {
  return (
    <LegalLayout
      title="GDPR — Drepturile tale ca persoană vizată"
      eyebrow="Protecția datelor"
      description="Eurovet Logistics respectă pe deplin Regulamentul (UE) 2016/679 privind protecția datelor cu caracter personal."
      updated="14 mai 2026"
    >
      <h2>Cine este operatorul</h2>
      <p>
        {SITE.legalName}, cu sediul în {SITE.address.street},{" "}
        {SITE.address.city}, {SITE.address.county}, este operatorul datelor tale
        cu caracter personal colectate prin intermediul acestui website și prin
        interacțiunile comerciale.
      </p>

      <h2>Drepturile tale GDPR</h2>
      <ul>
        <li>
          <b>Dreptul de acces</b> — poți afla ce date deținem despre tine.
        </li>
        <li>
          <b>Dreptul la rectificare</b> — poți solicita corectarea datelor
          inexacte.
        </li>
        <li>
          <b>Dreptul la ștergere</b> („dreptul de a fi uitat”).
        </li>
        <li>
          <b>Dreptul la restricționarea prelucrării</b>.
        </li>
        <li>
          <b>Dreptul la portabilitatea datelor</b>.
        </li>
        <li>
          <b>Dreptul la opoziție</b> — în special pentru marketing direct.
        </li>
        <li>
          <b>Dreptul de a-ți retrage consimțământul</b> oricând.
        </li>
        <li>
          <b>Dreptul de a depune o plângere</b> la Autoritatea Națională de
          Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
        </li>
      </ul>

      <h2>Cum îți poți exercita drepturile</h2>
      <p>
        Trimite o solicitare scrisă la{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> sau prin poștă la
        sediul nostru. Vom răspunde în maxim 30 de zile calendaristice de la
        primirea cererii, conform GDPR.
      </p>
      <p>
        Pentru a putea procesa cererea, este posibil să îți solicităm informații
        suplimentare pentru a-ți confirma identitatea.
      </p>

      <h2>Securitatea datelor</h2>
      <p>
        Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea
        datelor cu caracter personal împotriva accesului neautorizat, pierderii
        sau distrugerii. În caz de incident de securitate, vom notifica
        autoritățile competente și persoanele afectate conform GDPR.
      </p>

      <h2>Mai multe informații</h2>
      <p>
        Pentru detalii complete consultă{" "}
        <a href="/politica-confidentialitate">Politica de Confidențialitate</a>{" "}
        și <a href="/politica-cookie">Politica de Cookie</a>.
      </p>
    </LegalLayout>
  );
}
