"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { MilestoneCard } from "@/components/cards/milestone-card";
import { SectionHeader } from "@/components/common/section-header";
import { careerMilestones } from "@/lib/about-content";
import { conferencePhotos } from "@/lib/media";

const milestonePhoto = conferencePhotos[2];

export function CareerMilestones() {
  return (
    <section
      id="milestones"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <SectionHeader
            eyebrow="Career Milestones"
            title="Seven moments that changed the trajectory"
            description="Not every milestone is a promotion. Some are the moment a way of thinking clicked."
          />
          <div className="border-border shadow-panel relative mx-auto aspect-[4/3] w-full max-w-xs overflow-hidden rounded-2xl border lg:mx-0">
            <Image
              src={milestonePhoto.src}
              alt={milestonePhoto.alt}
              fill
              sizes="(min-width: 1024px) 20rem, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerMilestones.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <MilestoneCard milestone={milestone} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
