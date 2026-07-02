"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Lightbulb, Sparkles, Target } from "lucide-react";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { KeyFeaturesGrid } from "@/components/case-study/key-features-grid";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import { getArticleBySlug } from "@/content/knowledge/articles";
import { getCaseStudyBySlug } from "@/content/projects";
import { cn } from "@/lib/utils";
import type { AIExperiment } from "@/types/ai-labs";

export function ExperimentCard({ experiment, index }: { experiment: AIExperiment; index: number }) {
  const [open, setOpen] = React.useState(false);
  const Icon = experiment.icon;
  const panelId = `experiment-panel-${index}`;
  const triggerId = `experiment-trigger-${index}`;

  const relatedProject = experiment.relatedProjectSlug
    ? getCaseStudyBySlug(experiment.relatedProjectSlug)
    : undefined;
  const relatedArticle = experiment.relatedArticleSlug
    ? getArticleBySlug(experiment.relatedArticleSlug)
    : undefined;

  return (
    <div className="border-border bg-card shadow-subtle hover:shadow-panel rounded-2xl border transition-shadow duration-300 ease-out-quart">
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="focus-visible:outline-brand flex w-full items-start justify-between gap-4 rounded-2xl p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6"
      >
        <div className="flex gap-4">
          <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
            <Icon className="size-5" aria-hidden />
          </span>
          <div className="flex flex-col gap-2">
            <Badge variant="brand" className="w-fit">
              {experiment.category}
            </Badge>
            <h3 className="text-base font-semibold tracking-tight">{experiment.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {experiment.businessProblem}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {experiment.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "text-muted-foreground mt-1 size-5 shrink-0 transition-transform duration-300 ease-out-quart",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-border flex flex-col gap-6 border-t px-5 py-6 sm:px-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <p className="text-brand flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                    <Target className="size-3.5" aria-hidden />
                    Objective
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {experiment.objective}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-brand flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                    <Sparkles className="size-3.5" aria-hidden />
                    AI Approach
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {experiment.aiApproach}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {experiment.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <ArchitectureDiagram diagram={experiment.architecture} />

              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-wide uppercase">Business Impact</p>
                <KeyFeaturesGrid features={experiment.businessImpact} />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="border-gold/25 bg-gold/8 flex flex-col gap-1.5 rounded-xl border p-4">
                  <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                    <Lightbulb className="size-3.5" aria-hidden />
                    Lessons Learned
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {experiment.lessonsLearned.map((lesson) => (
                      <li key={lesson}>{lesson}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide uppercase">
                    Future Enhancements
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {experiment.futureEnhancements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {relatedProject || relatedArticle ? (
                <div className="border-border flex flex-wrap gap-3 border-t pt-4">
                  {relatedProject ? (
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="border-border bg-surface hover:bg-muted inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium"
                    >
                      Grounded in: {relatedProject.title} Case Study
                    </Link>
                  ) : null}
                  {relatedArticle ? (
                    <Link
                      href={`/knowledge/${relatedArticle.slug}`}
                      className="border-border bg-surface hover:bg-muted inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium"
                    >
                      Related Knowledge Hub Article
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
