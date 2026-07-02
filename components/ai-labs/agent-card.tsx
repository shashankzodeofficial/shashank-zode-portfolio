"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import { cn } from "@/lib/utils";
import type { AIAgent } from "@/types/ai-labs";

export function AgentCard({ agent, index }: { agent: AIAgent; index: number }) {
  const [open, setOpen] = React.useState(false);
  const Icon = agent.icon;
  const panelId = `agent-panel-${index}`;
  const triggerId = `agent-trigger-${index}`;

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
            <Badge variant="outline" className="w-fit">
              Reference Architecture
            </Badge>
            <h3 className="text-base font-semibold tracking-tight">{agent.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {agent.businessPurpose}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {agent.tags.map((tag) => (
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
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Inputs
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {agent.inputs.map((input) => (
                      <li key={input} className="flex gap-2">
                        <ArrowRight className="text-brand mt-0.5 size-3.5 shrink-0" aria-hidden />
                        {input}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Outputs
                  </p>
                  <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                    {agent.outputs.map((output) => (
                      <li key={output} className="flex gap-2">
                        <ArrowRight className="text-brand mt-0.5 size-3.5 shrink-0" aria-hidden />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ArchitectureDiagram diagram={agent.workflow} />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Recommended Models
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.recommendedModels.map((model) => (
                      <Tag key={model}>{model}</Tag>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Integration Points
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.integrationPoints.map((point) => (
                      <Tag key={point}>{point}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-gold/25 bg-gold/8 flex flex-col gap-1.5 rounded-xl border p-4">
                <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="size-3.5" aria-hidden />
                  Expected Business Impact
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {agent.businessImpact}
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-semibold tracking-wide uppercase">
                  Future Enhancements
                </p>
                <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm leading-relaxed">
                  {agent.futureEnhancements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
