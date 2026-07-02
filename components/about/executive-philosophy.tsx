"use client";

import { motion } from "framer-motion";

import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/common/section-header";
import { executivePhilosophy } from "@/lib/about-content";

export function ExecutivePhilosophy() {
  return (
    <section
      id="philosophy"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Executive Philosophy"
          title="How I think, not just how I lead"
          description="Eight beliefs that shape every decision, from a single vendor negotiation to a five-city network design."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {executivePhilosophy.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <FeatureCard
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
