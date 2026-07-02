"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/common/section-header";
import { leadershipPrinciples } from "@/lib/content";
import { conferencePhotos } from "@/lib/media";

const speakingPhoto = conferencePhotos[7];

export function LeadershipPhilosophy() {
  return (
    <section id="leadership" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
          >
            <div className="border-border shadow-panel relative aspect-[4/5] overflow-hidden rounded-2xl border">
              <Image
                src={speakingPhoto.src}
                alt={speakingPhoto.alt}
                fill
                sizes="(min-width: 1024px) 22rem, 80vw"
                className="object-cover"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-xs">{speakingPhoto.caption}</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Leadership"
              title="How I lead operations and teams"
              description="Nine principles, tested across three organizations and 16 years of building networks that scale."
            />
            <blockquote className="border-brand text-lead text-muted-foreground border-l-2 pl-5 leading-[var(--text-lead--line-height)] italic">
              &ldquo;The best supply chains are the ones nobody notices — because every
              failure mode was designed out before it ever happened.&rdquo;
            </blockquote>
          </div>
        </div>

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
