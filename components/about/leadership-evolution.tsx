"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/section-header";
import { leadershipStages } from "@/lib/about-content";
import { conferencePhotos } from "@/lib/media";

const evolutionPhoto = conferencePhotos[4];

export function LeadershipEvolution() {
  return (
    <section
      id="evolution"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <SectionHeader
            eyebrow="Leadership Evolution"
            title="Six stages, one throughline"
            description="Leadership wasn't a title I received — it's a set of capabilities built one stage at a time, each one a prerequisite for the next."
          />
          <div className="border-border shadow-panel relative mx-auto aspect-[4/3] w-full max-w-xs overflow-hidden rounded-2xl border lg:mx-0">
            <Image
              src={evolutionPhoto.src}
              alt={evolutionPhoto.alt}
              fill
              sizes="(min-width: 1024px) 20rem, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="relative flex flex-col gap-8 sm:gap-10">
          <div
            className="bg-border absolute top-2 bottom-2 left-[1.15rem] hidden w-px sm:block"
            aria-hidden
          />
          {leadershipStages.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="bg-brand-muted text-brand relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full">
                <item.icon className="size-4" aria-hidden />
              </div>
              <div className="flex flex-1 flex-col gap-2 sm:pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-brand text-xs font-semibold tracking-wide">
                    {item.stage}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="text-foreground text-xs font-medium">
                  Key learning:{" "}
                  <span className="text-muted-foreground font-normal">
                    {item.keyLearning}
                  </span>
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
