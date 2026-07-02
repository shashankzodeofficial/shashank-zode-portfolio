"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/section-header";
import { careerHighlights } from "@/lib/about-content";

export function CareerHighlights() {
  return (
    <section
      id="highlights"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader eyebrow="Career Highlights" title="At a glance" align="center" />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {careerHighlights.map((item, i) => (
            <motion.span
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.4,
                delay: (i % 8) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-border bg-card shadow-subtle hover:border-brand/30 inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors"
            >
              <item.icon className="text-brand size-4" aria-hidden />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
