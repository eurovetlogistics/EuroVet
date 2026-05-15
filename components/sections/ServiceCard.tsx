import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/data/services";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon =
    (
      Icons as unknown as Record<
        string,
        React.ComponentType<{ className?: string }>
      >
    )[service.icon] || Icons.Box;

  return (
    <Reveal delay={index * 0.05}>
      <Link
        href={`/servicii/${service.slug}`}
        className="card-hover group relative block h-full overflow-hidden rounded-3xl border border-border bg-white p-7 md:p-8"
      >
        <div className="flex items-start justify-between">
          <div className="h-14 w-14 rounded-2xl bg-brand-50 text-brand-700 inline-flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors">
            <Icon className="h-7 w-7" />
          </div>
          <ArrowRight className="h-5 w-5 text-muted group-hover:text-brand-900 group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-brand-900 leading-snug">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.short}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
          Detalii serviciu <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </Reveal>
  );
}
