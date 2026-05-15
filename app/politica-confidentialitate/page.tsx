import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate Eurovet Logistics — prelucrarea datelor personale conform GDPR.",
  path: "/politica-confidentialitate",
});

export default function Page() {
  return (
    <LegalLayout title="Politica de confidențialitate" updated="14 mai 2026">
      <h2>1. Cine suntem și cum ne poți contacta</h2>
      <p>
        {SITE.legalName} prelucrează datele tale cu caracter personal în mod
        legal, transparent și sigur, conform GDPR și legislației românești.
      </p>
      <ul>
        <li>
          Contact protecția datelor:{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          Adresă: {SITE.address.street}, {SITE.address.city},{" "}
          {SITE.address.county}
        </li>
        <li>Telefon: {SITE.phone}</li>
      </ul>

      <h2>2. Ce date colectăm despre tine</h2>
      <p>
        Colectăm doar informațiile necesare pentru a putea oferi serviciile
        noastre.
      </p>
      <h3>Date furnizate direct de tine</h3>
      <ul>
        <li>nume și prenume;</li>
        <li>funcție / companie;</li>
        <li>telefon;</li>
        <li>e-mail;</li>
        <li>date din CV (dacă aplici pentru un job);</li>
        <li>date necesare pentru contracte și facturare.</li>
      </ul>
      <h3>Date colectate automat prin website</h3>
      <ul>
        <li>adresa IP;</li>
        <li>tipul browserului și sistemului de operare;</li>
        <li>paginile vizitate și durata sesiunii;</li>
        <li>cookieuri (detalii în Politica Cookie).</li>
      </ul>
      <h3>Date colectate prin supraveghere video</h3>
      <ul>
        <li>imaginea ta video, în scop de securitate.</li>
      </ul>
      <p>
        Nu colectăm date sensibile (origine etnică, sănătate, opinii politice
        etc.).
      </p>

      <h2>3. Cum colectăm datele</h2>
      <ul>
        <li>când ne contactezi sau devii client;</li>
        <li>când aplici la un job;</li>
        <li>
          când vizitezi sediul sau depozitele noastre (supraveghere video);
        </li>
        <li>prin platforme de recrutare;</li>
        <li>automat, prin cookieuri și tehnologii similare.</li>
      </ul>

      <h2>4. De ce prelucrăm datele tale</h2>
      <ul>
        <li>pentru a furniza serviciile logistice;</li>
        <li>pentru comunicare și relații contractuale;</li>
        <li>pentru recrutare și selecție personal;</li>
        <li>pentru securitatea spațiilor;</li>
        <li>pentru funcționarea și optimizarea websiteului;</li>
        <li>pentru marketing (doar cu acordul tău).</li>
      </ul>

      <h2>5. Care este temeiul legal</h2>
      <ul>
        <li>executarea unui contract;</li>
        <li>interes legitim (ex. securitate, prevenirea fraudelor);</li>
        <li>consimțământ (ex. marketing, cookieuri neesențiale);</li>
        <li>obligații legale (ex. contabilitate, arhivare).</li>
      </ul>

      <h2>6. Cui putem transmite datele</h2>
      <p>
        Transmiterea se face doar dacă este necesar și doar către parteneri care
        asigură protecția datelor.
      </p>
      <h3>Parteneri și furnizori</h3>
      <ul>
        <li>furnizori IT și hosting;</li>
        <li>contabili, avocați, consultanți;</li>
        <li>firme de securitate (supraveghere video);</li>
        <li>furnizori de servicii logistice conexe.</li>
      </ul>
      <h3>Autorități publice</h3>
      <p>Doar când legea ne obligă (ex. ANAF, poliție, instanțe).</p>

      <h2>7. Transferuri internaționale</h2>
      <p>
        Nu transferăm date în afara UE/SEE, cu excepția unor servicii IT (ex.
        Microsoft, Google). În aceste cazuri folosim Clauze Contractuale
        Standard și măsuri adecvate de protecție.
      </p>

      <h2>8. Cookieuri și tehnologii similare</h2>
      <ul>
        <li>funcționarea corectă a siteului;</li>
        <li>analiză statistică;</li>
        <li>personalizare și marketing (cu acordul tău).</li>
      </ul>
      <p>
        Detalii complete găsești în{" "}
        <a href="/politica-cookie">Politica Cookie Eurovet Logistics</a>.
      </p>

      <h2>9. Cum protejăm datele tale</h2>
      <ul>
        <li>control strict al accesului;</li>
        <li>criptare și securizare servere;</li>
        <li>politici interne de confidențialitate;</li>
        <li>instruirea personalului;</li>
        <li>monitorizarea sistemelor IT.</li>
      </ul>
      <p>
        În caz de incident, notificăm autoritățile și persoanele afectate
        conform GDPR.
      </p>

      <h2>10. Cât timp păstrăm datele</h2>
      <ul>
        <li>date contractuale: 4 ani după încetarea relației;</li>
        <li>date pe baza consimțământului: până la retragere;</li>
        <li>date din recrutare: 6–12 luni;</li>
        <li>imagini video: 30 zile;</li>
        <li>
          date colectate prin interes legitim: până la exercitarea dreptului de
          opoziție.
        </li>
      </ul>

      <h2>11. Drepturile tale GDPR</h2>
      <p>Ai dreptul la:</p>
      <ul>
        <li>acces la date;</li>
        <li>rectificare;</li>
        <li>ștergere („dreptul de a fi uitat”);</li>
        <li>restricționare;</li>
        <li>portabilitate;</li>
        <li>opoziție;</li>
        <li>retragerea consimțământului;</li>
        <li>plângere la ANSPDCP.</li>
      </ul>
      <p>
        Solicitările se trimit la:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>12. Contact</h2>
      <p>Pentru orice întrebare privind protecția datelor:</p>
      <ul>
        <li>
          {SITE.legalName}: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          Adresă: {SITE.address.street}, {SITE.address.city},{" "}
          {SITE.address.county}
        </li>
        <li>Telefon: {SITE.phone}</li>
      </ul>
    </LegalLayout>
  );
}
