"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Database, LineChart, Workflow, type LucideIcon } from "lucide-react";

import { easeOutExpo, viewportOnce } from "@/lib/motion";

const stages: { icon: LucideIcon; label: string; detail: string }[] = [
  { icon: Database, label: "Data Sources", detail: "WMS, TMS, ERP, IoT feeds" },
  { icon: Workflow, label: "Pipeline", detail: "Cleaning, enrichment, joins" },
  { icon: Brain, label: "AI / ML Models", detail: "Forecasting, optimization" },
  { icon: LineChart, label: "Insights", detail: "Dashboards, alerts" },
  { icon: Bot, label: "Action", detail: "Automation, agents" },
];

/** Layered AI pipeline illustration — data flows left to right through five stages. */
export function AiArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div
      className={`border-border bg-card shadow-panel hover:shadow-elevated rounded-3xl border p-6 transition-shadow duration-300 sm:p-8 ${className ?? ""}`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex flex-1 flex-row items-center gap-3 lg:flex-col lg:gap-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOutExpo }}
              className="flex flex-1 flex-row items-center gap-3 lg:flex-col lg:gap-2.5 lg:text-center"
            >
              <span className="bg-brand-muted text-brand relative flex size-12 shrink-0 items-center justify-center rounded-2xl">
                <stage.icon className="size-5.5" aria-hidden />
              </span>
              <div className="flex flex-col lg:items-center">
                <p className="text-sm font-semibold tracking-tight">{stage.label}</p>
                <p className="text-muted-foreground text-xs">{stage.detail}</p>
              </div>
            </motion.div>

            {i < stages.length - 1 ? (
              <div
                aria-hidden
                className="text-border relative flex h-6 w-full items-center justify-center lg:h-auto lg:w-full lg:px-2"
              >
                <svg
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  className="h-full w-10 rotate-90 lg:w-full lg:rotate-0"
                >
                  <motion.line
                    x1="4"
                    y1="10"
                    x2="96"
                    y2="10"
                    stroke="var(--border)"
                    strokeWidth={2}
                    strokeDasharray="6 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: easeOutExpo }}
                  />
                  <motion.circle
                    cy="10"
                    r="2.4"
                    fill="var(--brand)"
                    initial={{ cx: 4, opacity: 0 }}
                    animate={{ cx: [4, 96], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      delay: 0.6 + i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
