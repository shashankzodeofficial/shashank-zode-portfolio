import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { aiAgents } from "@/content/ai-labs/agents";
import { aiExperiments } from "@/content/ai-labs/experiments";
import { prompts } from "@/content/ai-labs/prompts";
import { caseStudies } from "@/content/projects";

export function AILabsStats() {
  return (
    <section className="border-border border-t py-14">
      <div className="container-executive">
        <KpiShowcase
          kpis={[
            {
              display: String(caseStudies.length),
              label: "Live AI Projects",
              description: "Independently architected, shipped end-to-end",
            },
            {
              display: String(aiExperiments.length),
              label: "AI Experiments",
              description: "Real business problems, real approaches",
            },
            {
              display: String(prompts.length),
              label: "Prompt Library Entries",
              description: "Copy-ready, across 14 categories",
            },
            {
              display: String(aiAgents.length),
              label: "AI Agent Architectures",
              description: "Reference designs with guardrails",
            },
          ]}
        />
      </div>
    </section>
  );
}
