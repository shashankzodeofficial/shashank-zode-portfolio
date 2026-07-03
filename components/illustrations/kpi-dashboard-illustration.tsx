"use client";

import { motion } from "framer-motion";
import { Activity, Package, TrendingUp, Truck } from "lucide-react";

import { DonutChart } from "@/components/illustrations/charts/donut-chart";
import { MiniBarChart } from "@/components/illustrations/charts/mini-bar-chart";
import { Sparkline } from "@/components/illustrations/charts/sparkline";
import { easeOutExpo, viewportOnce } from "@/lib/motion";

const throughput = [42, 48, 45, 56, 61, 58, 67, 74];
const volumeByQuarter = [
  { label: "Q1", value: 62 },
  { label: "Q2", value: 71 },
  { label: "Q3", value: 68 },
  { label: "Q4", value: 84 },
];

/**
 * Illustrative "executive dashboard" mockup — stylized, not real reported data.
 * Used as a premium visual centerpiece to represent decision-support tooling.
 */
export function KpiDashboardIllustration({ className }: { className?: string }) {
  return (
    <div
      className={`border-border bg-card shadow-elevated hover:shadow-glow-brand rounded-3xl border p-6 transition-shadow duration-300 sm:p-8 ${className ?? ""}`}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="bg-brand-muted text-brand flex size-9 items-center justify-center rounded-xl">
            <Activity className="size-4.5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight">Network Performance</p>
            <p className="text-muted-foreground text-xs">Illustrative decision-support view</p>
          </div>
        </div>
        <span className="border-border bg-surface text-muted-foreground rounded-full border px-2.5 py-1 text-[0.65rem] font-medium">
          Live example
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="border-border bg-surface flex flex-col gap-3 rounded-2xl border p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
              <TrendingUp className="size-3.5" aria-hidden />
              Throughput Trend
            </span>
            <span className="text-brand text-xs font-semibold">+18%</span>
          </div>
          <Sparkline data={throughput} width={220} height={52} className="w-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.08, ease: easeOutExpo }}
          className="border-border bg-surface flex flex-col gap-3 rounded-2xl border p-4"
        >
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
            <Package className="size-3.5" aria-hidden />
            Volume by Quarter
          </span>
          <MiniBarChart data={volumeByQuarter} height={56} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.16, ease: easeOutExpo }}
          className="border-border bg-surface flex items-center gap-4 rounded-2xl border p-4"
        >
          <DonutChart value={96} color="var(--gold)" />
          <div>
            <p className="text-sm font-semibold tracking-tight">On-Time Delivery</p>
            <p className="text-muted-foreground text-xs">Across active lanes</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.24, ease: easeOutExpo }}
          className="border-border bg-surface flex items-center gap-4 rounded-2xl border p-4"
        >
          <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
            <Truck className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-lg font-bold tracking-tight">6</p>
            <p className="text-muted-foreground text-xs">Active fulfillment lanes</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
