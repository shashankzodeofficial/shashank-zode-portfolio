"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { easeOutExpo } from "@/lib/motion";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

const offsets: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: {},
};

/**
 * Scroll-triggered fade/slide-in wrapper for new sections.
 * Existing sections keep their own inline `whileInView` blocks — this is for
 * new Phase 11 content so it doesn't get re-implemented ad hoc each time.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  as: Component = motion.div,
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  as?: typeof motion.div;
}) {
  const offset = offsets[direction];
  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </Component>
  );
}
