"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const KEY = "eurovet_cookie_consent_v1";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setShow(true);
    } catch {}
  }, []);

  function persist(value: "all" | "essential") {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 inset-x-4 md:bottom-6 md:right-6 md:left-auto md:max-w-md z-[60]"
        >
          <div className="rounded-2xl border border-border bg-white shadow-2xl shadow-brand-900/15 p-5">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center shrink-0">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-brand-900">
                  Setări cookieuri
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Folosim cookieuri esențiale pentru funcționarea siteului și,
                  cu acordul tău, cookieuri statistice și de marketing. Detalii
                  în{" "}
                  <Link
                    href="/politica-cookie"
                    className="text-brand-900 underline"
                  >
                    Politica de cookie
                  </Link>
                  .
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => persist("all")}
                    className="btn btn-primary text-sm py-2 px-4"
                  >
                    Accept toate
                  </button>
                  <button
                    onClick={() => persist("essential")}
                    className="btn btn-outline-dark text-sm py-2 px-4"
                  >
                    Doar esențiale
                  </button>
                </div>
              </div>
              <button
                aria-label="Închide"
                onClick={() => persist("essential")}
                className="text-muted hover:text-brand-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
