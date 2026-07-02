"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/section-header";
import { professionalValues } from "@/lib/about-content";

export function ProfessionalValues() {
  return (
    <section id="values" className="border-border scroll-mt-24 border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Professional Values"
          title="What I won't compromise on"
          align="center"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {professionalValues.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.4,
                delay: (i % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-border bg-surface flex flex-col items-center gap-2.5 rounded-2xl border py-7 text-center"
            >
              <value.icon className="text-brand size-5" aria-hidden />
              <span className="text-sm font-medium">{value.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
