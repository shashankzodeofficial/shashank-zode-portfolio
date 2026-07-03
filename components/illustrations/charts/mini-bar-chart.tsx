"use client";

import { motion } from "framer-motion";

import { easeOutExpo, viewportOnce } from "@/lib/motion";

/** Animated column chart — bars grow in from the baseline once scrolled into view. */
export function MiniBarChart({
  data,
  height = 64,
  barColor = "var(--brand)",
  className,
}: {
  data: { label: string; value: number }[];
  height?: number;
  barColor?: string;
  className?: string;
}) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className={className}>
      <div className="flex items-end gap-2" style={{ height }}>
        {data.map((d, i) => (
          <motion.div
            key={d.label}
            className="flex-1 rounded-t-md"
            style={{ backgroundColor: barColor }}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${(d.value / max) * 100}%`, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: i * 0.06, ease: easeOutExpo }}
          />
        ))}
      </div>
      <div className="text-muted-foreground mt-2 flex gap-2 text-[0.6rem] font-medium">
        {data.map((d) => (
          <span key={d.label} className="flex-1 truncate text-center">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
