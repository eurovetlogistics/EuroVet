const PARTNERS = [
  "DHL",
  "Maersk",
  "Schenker",
  "Kuehne+Nagel",
  "DSV",
  "GEFCO",
  "Dachser",
  "Geodis",
  "FM Logistic",
  "Rhenus",
];

export function Partners() {
  return (
    <section className="bg-white py-14 md:py-16 border-y border-border">
      <div className="container-base">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted mb-8">
          Parteneri și clienți care au încredere în noi
        </p>
        <div className="relative overflow-hidden mask-fade">
          <div className="flex gap-12 marquee-track w-max">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={i}
                className="font-display text-2xl md:text-3xl font-bold text-brand-900/30 hover:text-brand-900 transition-colors whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }
      `}</style>
    </section>
  );
}
