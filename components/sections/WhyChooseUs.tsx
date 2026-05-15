import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M24 14v4M24 30v4M18 24h-4M34 24h-4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 20l-2-2M30 28l-2-2M28 20l2-2M18 30l2-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="24"
          r="4"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 34c0-4.418 3.582-8 8-8s8 3.582 8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Optimizarea costurilor",
    text: "Optimizarea costurilor în logistica întărește eficiența operațională prin strategii economice, maximizând profitabilitatea și consolidând competitivitatea printr-un lanț de aprovizionare eficient.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="28"
          width="8"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <rect
          x="20"
          y="18"
          width="8"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <rect
          x="34"
          y="8"
          width="8"
          height="34"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M10 20L20 14l8 6 10-12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="8" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "Tehnologie modernă",
    text: "Implementarea tehnologiei moderne în logistica companiei, optimizează traseele, reduce erorile și crește vizibilitatea în timp real, maximizând eficiența și satisfacția clienților.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 6L28.5 17H40L30.5 23.5L34 34.5L24 28L14 34.5L17.5 23.5L8 17H19.5L24 6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 6L24 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          opacity="0.4"
        />
        <circle cx="24" cy="28" r="2.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "Expertiză în industrie",
    text: "Asigurarea unui flux rapid, precis și competitiv care redefinește eficiența prin automatizare, analiză predictivă și optimizarea lanțului de aprovizionare.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-base">
        <Reveal>
          <div className="text-center mb-4">
            <span className="eyebrow">De ce Eurovet</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="heading text-center text-3xl md:text-5xl text-brand-900">
            Operațiuni logistice Eurovet
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-muted text-lg max-w-2xl mx-auto">
            Profesionalism, viteză și predictibilitate
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {REASONS.map((r, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-border hover:shadow-lg hover:shadow-brand-900/5 transition-shadow h-full">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-brand-50 text-brand-700 inline-flex items-center justify-center">
                  {r.icon}
                </div>
                <h3 className="font-semibold text-brand-900 text-lg">
                  {r.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
