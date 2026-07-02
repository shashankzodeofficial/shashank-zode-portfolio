"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { CareerTimelineEntry } from "@/types";

export function CareerTimelineItem({
  entry,
  index,
}: {
  entry: CareerTimelineEntry;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);
  const panelId = `timeline-panel-${index}`;
  const triggerId = `timeline-trigger-${index}`;

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
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="border-border bg-surface text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs font-medium">
                {entry.period}
              </span>
              <span className="text-brand text-xs font-semibold tracking-wide uppercase">
                {entry.stage}
              </span>
            </div>
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">
              {entry.role}
            </h3>
            <p className="text-muted-foreground text-sm">{entry.organization}</p>
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
              <div className="border-border grid grid-cols-1 gap-5 border-t px-5 py-6 sm:grid-cols-2 sm:px-6">
                <div className="flex flex-col gap-1.5">
                  <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                    Business Challenge
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {entry.challenge}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                    Transformation
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {entry.transformation}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                    Leadership Lesson
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    &ldquo;{entry.lesson}&rdquo;
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                    Business Impact
                  </p>
                  <p className="text-foreground text-sm leading-relaxed font-medium">
                    {entry.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </li>
  );
}
