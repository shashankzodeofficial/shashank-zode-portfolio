import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { aiExperiments } from "@/content/ai-labs/experiments";

export function ExperimentsHighlight() {
  const preview = aiExperiments.slice(0, 3);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              AI Experiments
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              Practical experiments, real business problems
            </h2>
          </div>
          <Link
            href="/ai-labs/experiments"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View all experiments
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {preview.map((experiment) => {
            const Icon = experiment.icon;
            return (
              <Link
                key={experiment.slug}
                href="/ai-labs/experiments"
                className="group border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-3 rounded-2xl border p-6 transition-shadow"
              >
                <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-10 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-5" aria-hidden />
                </span>
                <Badge variant="outline" className="w-fit">
                  {experiment.category}
                </Badge>
                <h3 className="text-sm font-semibold tracking-tight">{experiment.title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                  {experiment.objective}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
