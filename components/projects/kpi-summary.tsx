import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { projectsKpiSummary } from "@/content/projects";

export function KpiSummary() {
  return (
    <section className="border-border border-t py-14">
      <div className="container-executive">
        <KpiShowcase kpis={projectsKpiSummary} />
      </div>
    </section>
  );
}
