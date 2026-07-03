"use client";

import { motion } from "framer-motion";

import { easeOutExpo, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Animated ring/donut chart — arc sweeps in from 0 once scrolled into view. */
export function DonutChart({
  value,
  label,
  size = 88,
  strokeWidth = 9,
  color = "var(--brand)",
  trackColor = "var(--muted)",
  className,
}: {
  value: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(value, 0), 100) / 100);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={label ?? `${value}%`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: easeOutExpo }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-foreground text-sm font-bold tracking-tight">{value}%</span>
      </div>
    </div>
  );
}
