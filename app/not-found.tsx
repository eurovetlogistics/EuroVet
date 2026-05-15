import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">
      <div className="text-center max-w-xl">
        <div className="text-[120px] font-bold leading-none text-gradient bg-clip-text">
          404
        </div>
        <h1 className="text-3xl font-bold mt-4">Pagina nu a fost găsită</h1>
        <p className="text-white/70 mt-3">
          Pagina pe care o cauți nu există sau a fost mutată. Te invităm să
          revii la pagina principală.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" /> Înapoi la pagina principală
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Contactează-ne
          </Link>
        </div>
      </div>
    </main>
  );
}
