"use client";

import { motion } from "framer-motion";

import { easeOutExpo, viewportOnce } from "@/lib/motion";

const zones = [
  { x: 12, width: 46, fill: "var(--muted-foreground)", opacity: 0.18, label: "Receiving" },
  { x: 66, width: 74, fill: "var(--brand)", opacity: 0.14, label: "Bulk Storage" },
  { x: 148, width: 56, fill: "var(--gold)", opacity: 0.28, label: "Fast-Pick" },
  { x: 148, width: 56, fill: "var(--brand)", opacity: 0.2, label: "Medium-Pick", yOffset: 1 },
  { x: 148, width: 56, fill: "var(--muted-foreground)", opacity: 0.16, label: "Slow-Pick", yOffset: 2 },
  { x: 212, width: 66, fill: "var(--brand)", opacity: 0.16, label: "Pack & Consolidate" },
  { x: 286, width: 46, fill: "var(--muted-foreground)", opacity: 0.18, label: "Shipping" },
];

const legend = [
  { color: "var(--muted-foreground)", opacity: 0.5, label: "Dock (In/Out)" },
  { color: "var(--brand)", opacity: 0.7, label: "Storage & Pack" },
  { color: "var(--gold)", opacity: 0.8, label: "Fast-Pick Zone" },
];

/** Top-down warehouse zone-layout illustration — flow moves left (receiving) to right (shipping). */
export function WarehouseZoneDiagram({ className }: { className?: string }) {
  return (
    <div
      className={`border-border bg-card shadow-panel hover:shadow-elevated rounded-3xl border p-6 transition-shadow duration-300 sm:p-8 ${className ?? ""}`}
    >
      <svg viewBox="0 0 344 150" className="w-full" role="img" aria-label="Zone-based warehouse layout diagram">
        <rect
          x={4}
          y={8}
          width={336}
          height={134}
          rx={10}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1.5}
        />

        {zones.map((zone, i) => {
          const isPickZone = zone.label.includes("Pick");
          const height = isPickZone ? 40 : 126;
          const y = isPickZone ? 12 + (zone.yOffset ?? 0) * 40 : 12;
          return (
            <motion.rect
              key={`${zone.label}-${i}`}
              x={zone.x}
              y={y}
              width={zone.width}
              height={height}
              rx={6}
              fill={zone.fill}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: zone.opacity }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.06, ease: easeOutExpo }}
            />
          );
        })}

        <motion.line
          x1={16}
          y1={75}
          x2={324}
          y2={75}
          stroke="var(--border)"
          strokeWidth={1.5}
          strokeDasharray="5 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        />
        <motion.circle
          cy={75}
          r={3}
          fill="var(--brand)"
          initial={{ cx: 16, opacity: 0 }}
          animate={{ cx: [16, 324], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
        />
      </svg>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {legend.map((item) => (
          <span key={item.label} className="text-muted-foreground flex items-center gap-2 text-xs font-medium">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: item.color, opacity: item.opacity }}
              aria-hidden
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
