"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Copy, ShieldAlert, Sparkles } from "lucide-react";

import { Tag } from "@/components/common/tag";
import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { cn } from "@/lib/utils";
import type { AIUseCase } from "@/types/knowledge";

export function AIUseCaseCard({ useCase, index }: { useCase: AIUseCase; index: number }) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const Icon = useCase.icon;
  const panelId = `ai-use-case-panel-${index}`;
  const triggerId = `ai-use-case-trigger-${index}`;

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(useCase.promptTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can fail in unsupported contexts; the template remains selectable as text.
    }
  };

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
            <h3 className="text-base font-semibold tracking-tight">{useCase.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{useCase.businessProblem}</p>
            <div className="flex flex-wrap gap-1.5">
              {useCase.tags.map((tag) => (
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
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">Business Context</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.businessContext}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">Recommended Solution</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.recommendedSolution}</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-semibold tracking-wide text-foreground uppercase">Implementation Steps</p>
                <ol className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                  {useCase.implementationSteps.map((step, i) => (
                    <li key={step} className="flex gap-2">
                      <span className="text-brand font-semibold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {useCase.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <KpiShowcase kpis={useCase.kpis} />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">Business Impact</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.businessImpact}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-foreground uppercase">
                    <ShieldAlert className="text-destructive size-3.5" aria-hidden />
                    Risks
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1 text-sm leading-relaxed">
                    {useCase.risks.map((risk) => (
                      <li key={risk}>{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-gold/25 bg-gold/8 flex flex-col gap-1.5 rounded-xl border p-4">
                <p className="text-xs font-semibold tracking-wide text-foreground uppercase">Lessons Learned</p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  &ldquo;{useCase.lessonsLearned}&rdquo;
                </p>
              </div>

              <div className="border-border bg-surface flex flex-col gap-3 rounded-xl border p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                    <Sparkles className="text-brand size-3.5" aria-hidden />
                    Prompt Template
                  </p>
                  <button
                    type="button"
                    onClick={copyPrompt}
                    className="border-border bg-card hover:bg-muted focus-visible:outline-brand inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5" aria-hidden />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" aria-hidden />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">
                  {useCase.promptTemplate}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
