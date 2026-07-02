import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { architectureDiagrams } from "@/content/ai-labs/architecture-diagrams";

export function ArchitectureOverviewTeaser() {
  const preview = architectureDiagrams.slice(0, 4);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              AI Architecture Library
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              How these systems are actually built
            </h2>
          </div>
          <Link
            href="/ai-labs/architecture"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View all diagrams
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {preview.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href="/ai-labs/architecture"
                className="group border-border bg-card shadow-subtle hover:shadow-panel hover:border-brand/30 flex flex-col gap-3 rounded-2xl border p-5 transition-all duration-300 ease-out-quart"
              >
                <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-9 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="text-sm font-semibold tracking-tight">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
