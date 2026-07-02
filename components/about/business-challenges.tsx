"use client";

import { motion } from "framer-motion";

import { ChallengeCard } from "@/components/cards/challenge-card";
import { SectionHeader } from "@/components/common/section-header";
import { businessChallenges } from "@/lib/about-content";

export function BusinessChallenges() {
  return (
    <section
      id="challenges"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Business Challenges Solved"
          title="Problems, not job titles"
          description="What I actually did, described the way I'd describe it to a peer — not the way a resume flattens it."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessChallenges.map((challenge, i) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <ChallengeCard challenge={challenge} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
