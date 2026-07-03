"use client";

import { motion } from "framer-motion";
import { Factory, Ship, Store, Truck, Warehouse, type LucideIcon } from "lucide-react";

import { easeOutExpo, viewportOnce } from "@/lib/motion";

const nodes: { icon: LucideIcon; label: string; x: number; y: number }[] = [
  { icon: Factory, label: "Manufacturing", x: 8, y: 50 },
  { icon: Ship, label: "Ocean Freight", x: 30, y: 12 },
  { icon: Warehouse, label: "Distribution Center", x: 52, y: 60 },
  { icon: Truck, label: "Last-Mile", x: 76, y: 20 },
  { icon: Store, label: "Retail / Customer", x: 94, y: 55 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 2],
  [2, 3],
  [3, 4],
];

/** Standalone supply-chain network illustration — factory to customer, nodes connected by animated flow lines. */
export function SupplyChainNetwork({ className }: { className?: string }) {
  return (
    <div
      className={`border-border bg-card shadow-panel hover:shadow-elevated relative aspect-[16/9] w-full overflow-hidden rounded-3xl border p-4 transition-shadow duration-300 ${className ?? ""}`}
    >
      <svg viewBox="0 0 100 72" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 size-full">
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          const y1 = (from.y / 100) * 72;
          const y2 = (to.y / 100) * 72;
          return (
            <g key={`${a}-${b}`}>
              <motion.line
                x1={from.x}
                y1={y1}
                x2={to.x}
                y2={y2}
                stroke="var(--border)"
                strokeWidth={0.6}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: i * 0.12, ease: easeOutExpo }}
              />
              <motion.circle
                r={1}
                fill="var(--brand)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [y1, y2],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  delay: 1 + i * 0.35,
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: easeOutExpo }}
          className="bg-card border-border absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 rounded-xl border px-2.5 py-2 shadow-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <span className="bg-brand-muted text-brand flex size-7 items-center justify-center rounded-lg">
            <node.icon className="size-3.5" aria-hidden />
          </span>
          <span className="text-foreground hidden text-[0.6rem] font-medium whitespace-nowrap sm:block">
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
