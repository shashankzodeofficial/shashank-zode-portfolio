"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Lightbulb, Target } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ExecutivePrinciple } from "@/types/thought-leadership";

export function PrincipleCard({
  principle,
  index,
}: {
  principle: ExecutivePrinciple;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);
  const Icon = principle.icon;
  const panelId = `principle-panel-${index}`;
  const triggerId = `principle-trigger-${index}`;

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
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold tracking-tight">{principle.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {principle.description}
            </p>
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
            <div className="border-border flex flex-col gap-5 border-t px-5 py-6 sm:px-6">
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                  Business Application
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.businessApplication}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-brand flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                  <Target className="size-3.5" aria-hidden />
                  Leadership Example
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.leadershipExample}
                </p>
              </div>
              <div className="border-gold/25 bg-gold/8 flex flex-col gap-1.5 rounded-xl border p-4">
                <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                  <Lightbulb className="size-3.5" aria-hidden />
                  Executive Takeaway
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  &ldquo;{principle.executiveTakeaway}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
