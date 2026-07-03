import { Brain, Network, TrendingUp, Users } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { executiveMetrics } from "@/lib/content";

const highlightIcons = [Users, Network, Brain, TrendingUp];

export function ExecutiveSummary() {
  const highlights = executiveMetrics.slice(0, 4);

  return (
    <section id="summary" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Executive Summary"
          title="Sixteen years turning operational complexity into advantage"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              A supply chain executive who has scaled logistics networks across
              Amazon, Reliance Retail, and IBO — owning multi-million dollar P&amp;Ls,
              leading teams of 90 or more, and building the AI-powered planning
              platforms that now run day-to-day operations.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              What sets this profile apart is the combination: deep operational
              credibility earned on the warehouse floor and in the transportation
              yard, paired with the technical fluency to independently
              architect and ship AI products — not sponsor them, build them.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              Every claim on this site is traceable to a specific project, case
              study, or credential — nothing here is generic positioning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((metric, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div
                  key={metric.label}
                  className="border-border bg-card shadow-subtle flex flex-col gap-2 rounded-2xl border p-5"
                >
                  <Icon className="text-brand size-4" aria-hidden />
                  <span className="text-xl font-semibold tracking-tight">
                    <AnimatedCounter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
