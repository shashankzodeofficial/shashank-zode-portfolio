import { ArrowRight } from "lucide-react";

import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { Tag } from "@/components/common/tag";
import type { AutomationProject } from "@/types/ai-labs";

export function AutomationProjectCard({ project }: { project: AutomationProject }) {
  const Icon = project.icon;

  return (
    <div className="border-border bg-card shadow-panel flex flex-col gap-6 rounded-2xl border p-6 sm:p-8">
      <div className="flex gap-4">
        <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
          <Icon className="size-5" aria-hidden />
        </span>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.businessChallenge}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="border-border bg-surface flex flex-col gap-1.5 rounded-xl border p-4">
          <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Before
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.existingProcess}
          </p>
        </div>
        <ArrowRight className="text-brand mx-auto size-5 rotate-90 sm:rotate-0" aria-hidden />
        <div className="border-brand/25 bg-brand-muted/40 flex flex-col gap-1.5 rounded-xl border p-4">
          <span className="text-brand text-xs font-semibold tracking-wide uppercase">
            After
          </span>
          <p className="text-foreground text-sm leading-relaxed">{project.automatedProcess}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {project.benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-3">
            <span className="bg-brand-muted text-brand flex size-9 shrink-0 items-center justify-center rounded-lg">
              <benefit.icon className="size-4" aria-hidden />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">{benefit.title}</span>
              <span className="text-muted-foreground text-xs leading-relaxed">
                {benefit.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <KpiShowcase kpis={project.kpis} />
    </div>
  );
}
