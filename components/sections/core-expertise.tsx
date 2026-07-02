"use client";

import { motion } from "framer-motion";

import { ExpertiseCard } from "@/components/cards/expertise-card";
import { SectionHeader } from "@/components/common/section-header";
import { expertiseAreas } from "@/lib/content";

export function CoreExpertise() {
  return (
    <section id="expertise" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Expertise"
          title="Where operations meets AI"
          description="Eight areas where deep operational fluency and AI product-building come together — each backed by a measurable result."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ExpertiseCard area={area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
