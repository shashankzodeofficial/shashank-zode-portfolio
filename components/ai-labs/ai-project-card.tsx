import { CheckCircle2, Lightbulb, Sparkles, Target } from "lucide-react";

import { ProjectActionLinks } from "@/components/ai-labs/project-action-links";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import type { CaseStudy } from "@/types/project";

export function AIProjectCard({ study }: { study: CaseStudy }) {
  const Icon = study.icon;

  return (
    <div
      id={study.slug}
      className="border-border bg-card shadow-panel scroll-mt-24 flex flex-col gap-6 rounded-2xl border p-6 sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span className="bg-brand-muted text-brand flex size-12 shrink-0 items-center justify-center rounded-xl">
            <Icon className="size-6" aria-hidden />
          </span>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand">{study.category}</Badge>
              <Badge variant="outline">{study.status}</Badge>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{study.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{study.tagline}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <span className="text-brand flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
            <Target className="size-3.5" aria-hidden />
            Business Problem
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {study.businessChallenge}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-brand flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="size-3.5" aria-hidden />
            Solution Approach
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {study.solutionOverview}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-wide uppercase">AI Technologies Used</span>
        <div className="flex flex-wrap gap-1.5">
          {study.aiTechnologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wide uppercase">Key Features</span>
          <ul className="flex flex-col gap-1.5">
            {study.keyFeatures.slice(0, 3).map((feature) => (
              <li key={feature.title} className="text-muted-foreground flex gap-2 text-sm">
                <CheckCircle2 className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
                {feature.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wide uppercase">Business Impact</span>
          <ul className="flex flex-col gap-1.5">
            {study.businessImpact.slice(0, 3).map((impact) => (
              <li key={impact.title} className="text-muted-foreground flex gap-2 text-sm">
                <Lightbulb className="text-gold mt-0.5 size-4 shrink-0" aria-hidden />
                {impact.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {study.kpis.slice(0, 4).map((kpi) => (
          <div key={kpi.label} className="border-border bg-surface rounded-xl border p-3">
            <p className="text-lg font-semibold tracking-tight">{kpi.display}</p>
            <p className="text-muted-foreground text-xs">{kpi.label}</p>
          </div>
        ))}
      </div>

      {study.lessonsLearned[0] ? (
        <div className="border-gold/25 bg-gold/8 rounded-xl border p-4">
          <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
            Lesson Learned
          </p>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed italic">
            &ldquo;{study.lessonsLearned[0]}&rdquo;
          </p>
        </div>
      ) : null}

      {study.futureRoadmap[0] ? (
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-wide uppercase">What&apos;s Next</span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {study.futureRoadmap[0].title} — {study.futureRoadmap[0].description}
          </p>
        </div>
      ) : null}

      <div className="border-border border-t pt-6">
        <ProjectActionLinks slug={study.slug} links={study.links} />
      </div>
    </div>
  );
}
