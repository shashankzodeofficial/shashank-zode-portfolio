"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { RoadmapPhase } from "@/types/ai-labs";

export function AIRoadmapTimelineItem({
  phase,
  index,
}: {
  phase: RoadmapPhase;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);
  const Icon = phase.icon;
  const panelId = `roadmap-panel-${index}`;
  const triggerId = `roadmap-trigger-${index}`;

  return (
    <li className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <span
          className="bg-brand shadow-glow-brand relative z-10 mt-1.5 flex size-3 shrink-0 rounded-full"
          aria-hidden
        />
      </div>

      <div className="border-border bg-card shadow-subtle hover:shadow-panel ease-out-quart mb-8 flex-1 rounded-2xl border transition-shadow duration-300">
        <button
          id={triggerId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="focus-visible:outline-brand flex w-full items-start justify-between gap-4 rounded-2xl p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6"
        >
          <div className="flex gap-4">
            <span className="bg-brand-muted text-brand flex size-10 shrink-0 items-center justify-center rounded-xl">
              <Icon className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="border-border bg-surface text-muted-foreground w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium">
                {phase.period}
              </span>
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                {phase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "text-muted-foreground ease-out-quart mt-1 size-5 shrink-0 transition-transform duration-300",
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
              <div className="border-border flex flex-col gap-2 border-t px-5 py-6 sm:px-6">
                <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                  Capabilities
                </p>
                <ul className="flex flex-col gap-1.5">
                  {phase.capabilities.map((capability) => (
                    <li key={capability} className="text-muted-foreground flex gap-2 text-sm">
                      <CheckCircle2 className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </li>
  );
}
