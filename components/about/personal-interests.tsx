"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/section-header";
import { personalInterests } from "@/lib/about-content";
import { fitnessPhotos } from "@/lib/media";

const fitnessThumb = fitnessPhotos[1];

export function PersonalInterests() {
  return (
    <section
      id="interests"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Personal Interests"
          title="What I do outside the P&L — and why it still matters"
          description="None of this is a hobby list. Each one feeds directly back into how I lead."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {personalInterests.map((interest, i) => (
            <motion.div
              key={interest.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-border bg-card shadow-subtle flex gap-4 rounded-2xl border p-5"
            >
              {interest.label === "Fitness" ? (
                <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={fitnessThumb.src}
                    alt={fitnessThumb.alt}
                    fill
                    sizes="3rem"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="bg-brand-muted text-brand flex size-12 shrink-0 items-center justify-center rounded-xl">
                  <interest.icon className="size-5" aria-hidden />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold tracking-tight">{interest.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.connection}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
