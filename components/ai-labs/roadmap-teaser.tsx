import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { aiRoadmap } from "@/content/ai-labs/roadmap";

export function RoadmapTeaser() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              AI Roadmap
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              From AI-assisted operations to executive copilots
            </h2>
          </div>
          <Link
            href="/ai-labs/roadmap"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View the full roadmap
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="scrollbar-none flex gap-4 overflow-x-auto pb-2">
          {aiRoadmap.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.title}
                className="border-border bg-card shadow-subtle flex w-56 shrink-0 flex-col gap-3 rounded-2xl border p-5"
              >
                <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  {phase.period}
                </span>
                <span className="bg-brand-muted text-brand flex size-9 items-center justify-center rounded-xl">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="text-sm font-semibold tracking-tight">{phase.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
