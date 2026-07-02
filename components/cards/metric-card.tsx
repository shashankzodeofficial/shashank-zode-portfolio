"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/common/animated-counter";
import type { ExecutiveMetric } from "@/types";

export function MetricCard({
  metric,
  index,
}: {
  metric: ExecutiveMetric;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group border-border bg-card shadow-subtle hover:shadow-panel ease-out-quart flex flex-col gap-3 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
        <AnimatedCounter
          value={metric.value}
          prefix={metric.prefix}
          suffix={metric.suffix}
          delay={0.15 + index * 0.06}
        />
      </span>
      <span className="text-foreground text-sm font-medium">{metric.label}</span>
      <span className="text-muted-foreground text-xs leading-relaxed">
        {metric.detail}
      </span>
    </motion.div>
  );
}
