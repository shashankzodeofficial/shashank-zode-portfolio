"use client";

import { motion } from "framer-motion";

import { easeOutExpo, viewportOnce } from "@/lib/motion";

/** Animated trend-line chart — draws in once when scrolled into view. */
export function Sparkline({
  data,
  width = 160,
  height = 48,
  stroke = "var(--brand)",
  className,
}: {
  data: number[];
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);

  const points = data.map((value, i) => {
    const x = i * stepX;
    const y = height - ((value - min) / range) * (height - 6) - 3;
    return `${x},${y}`;
  });

  const path = `M${points.join(" L")}`;
  const areaPath = `${path} L${width},${height} L0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Trend chart"
    >
      <motion.path
        d={areaPath}
        fill={stroke}
        opacity={0.08}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: easeOutExpo }}
      />
    </svg>
  );
}
