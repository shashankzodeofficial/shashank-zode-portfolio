import { MetricCard } from "@/components/cards/metric-card";
import { SectionHeader } from "@/components/common/section-header";
import { executiveMetrics } from "@/lib/content";

export function ExecutiveMetrics() {
  return (
    <section id="metrics" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Track record"
          title="Executive impact, by the numbers"
          description="Every figure here traces back to a specific role, initiative, or P&L — not aspirational marketing."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executiveMetrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
