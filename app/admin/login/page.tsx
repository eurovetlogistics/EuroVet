"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Autentificare eșuată.");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      setError("Eroare de rețea.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-500/20 text-accent-400 mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold text-white">Panou administrare</h1>
          <p className="text-white/60 mt-2">Eurovet Logistics</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass-dark rounded-2xl p-8 space-y-5 border border-white/10"
        >
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-500/60"
              placeholder="admin@eurovetgroup.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Parolă
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-500/60"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Se autentifică..." : "Autentificare"}
          </button>

          <p className="text-xs text-white/40 text-center pt-2">
            Acces restricționat. Toate acțiunile sunt jurnalizate.
          </p>
        </form>
      </div>
    </main>
  );
}
