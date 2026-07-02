"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/common/animated-counter";
import { heroStats } from "@/lib/site-config";

export function HeroStats() {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
      {heroStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="border-border flex flex-col gap-1 border-l pl-4 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-4"
        >
          <dt className="text-muted-foreground order-2 text-xs leading-snug">
            {stat.label}
          </dt>
          <dd className="order-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              delay={0.7 + i * 0.08}
            />
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}
