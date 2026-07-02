"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/common/animated-counter";
import type { ProjectKpi } from "@/types/project";

export function KpiShowcase({ kpis }: { kpis: ProjectKpi[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="border-border bg-card shadow-subtle flex flex-col gap-2 rounded-2xl border p-6"
        >
          <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {kpi.display ?? (
              <AnimatedCounter
                value={kpi.value ?? 0}
                prefix={kpi.prefix}
                suffix={kpi.suffix}
              />
            )}
          </span>
          <span className="text-foreground text-sm font-medium">{kpi.label}</span>
          <span className="text-muted-foreground text-xs leading-relaxed">
            {kpi.description}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
