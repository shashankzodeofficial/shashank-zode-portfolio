"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ShieldAlert, Sparkles } from "lucide-react";

import { Tag } from "@/components/common/tag";
import { cn } from "@/lib/utils";
import type { LLMApplication } from "@/types/ai-labs";

function humanize(slug: string) {
  return slug
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export function LLMApplicationCard({
  application,
  index,
}: {
  application: LLMApplication;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);
  const Icon = application.icon;
  const panelId = `llm-app-panel-${index}`;
  const triggerId = `llm-app-trigger-${index}`;

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
            <h3 className="text-base font-semibold tracking-tight">{application.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {application.businessProblem}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {application.tags.map((tag) => (
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
              <div className="flex flex-col gap-1.5">
                <p className="text-brand flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="size-3.5" aria-hidden />
                  AI Workflow
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {application.aiWorkflow}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Expected Outputs
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {application.expectedOutputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Business Benefits
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {application.businessBenefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="border-destructive/25 bg-destructive/5 flex flex-col gap-1.5 rounded-xl border p-4">
                  <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                    <ShieldAlert className="text-destructive size-3.5" aria-hidden />
                    Risks
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {application.risks.map((risk) => (
                      <li key={risk}>{risk}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Best Practices
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {application.bestPractices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {application.relatedSlugs.length > 0 ? (
                <div className="border-border flex flex-wrap items-center gap-2 border-t pt-4">
                  <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Related
                  </span>
                  {application.relatedSlugs.map((slug) => (
                    <Tag key={slug}>{humanize(slug)}</Tag>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
