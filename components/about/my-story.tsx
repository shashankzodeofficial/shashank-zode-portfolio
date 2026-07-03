"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/section-header";
import { SupplyChainNetwork } from "@/components/illustrations/supply-chain-network";
import { myStory } from "@/lib/about-content";

export function MyStory() {
  return (
    <section id="story" className="border-border scroll-mt-24 border-t py-20 sm:py-28">
      <div className="container-executive grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader eyebrow="My Story" title="Why supply chain, and why now" />
          <SupplyChainNetwork className="hidden lg:block" />
        </div>

        <div className="flex flex-col gap-10">
          {myStory.map((block, i) => (
            <motion.div
              key={block.heading}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-2.5"
            >
              <h3 className="text-base font-semibold tracking-tight">{block.heading}</h3>
              <p className="text-lead text-muted-foreground leading-[var(--text-lead--line-height)]">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
