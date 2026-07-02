"use client";

import { motion } from "framer-motion";

import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/common/section-header";
import { leadershipPrinciples } from "@/lib/content";

export function LeadershipPhilosophy() {
  return (
    <section id="leadership" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Leadership"
          title="How I lead operations and teams"
          description="Nine principles, tested across three organizations and 16 years of building networks that scale."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipPrinciples.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
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
