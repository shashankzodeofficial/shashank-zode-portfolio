"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { fitnessPhotos } from "@/lib/media";
import { fitnessJourney } from "@/lib/site-config";

export function TransformationGallery() {
  return (
    <section id="gallery" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="The Numbers"
          title="Then & now"
          description="No photo exists from 125kg — the transformation predates this website. What's shown below is the sustained result, four-plus years on, alongside the honest numbers behind it."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-border shadow-panel relative aspect-[3/4] overflow-hidden rounded-2xl border"
          >
            <Image
              src={fitnessPhotos[0].src}
              alt={fitnessPhotos[0].alt}
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="border-border shadow-panel relative aspect-[3/4] overflow-hidden rounded-2xl border"
          >
            <Image
              src={fitnessPhotos[1].src}
              alt={fitnessPhotos[1].alt}
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="from-brand/15 via-gold/10 border-border shadow-panel flex w-full flex-col justify-between gap-6 rounded-2xl border bg-gradient-to-br to-transparent p-6 lg:w-64"
          >
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-[0.65rem] font-medium">Then</span>
                <span className="text-2xl font-semibold tracking-tight">
                  {fitnessJourney.startWeight}
                  {fitnessJourney.unit}
                </span>
              </div>
              <ArrowRight className="text-brand size-4 shrink-0" aria-hidden />
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-muted-foreground text-[0.65rem] font-medium">Now</span>
                <span className="text-2xl font-semibold tracking-tight">
                  {fitnessJourney.currentWeight}
                  {fitnessJourney.unit}
                </span>
              </div>
            </div>
            <div className="border-border flex flex-col gap-3 border-t pt-4 text-xs">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Transformation window</span>
                <span className="font-semibold">{fitnessJourney.transformationMonths} months</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Sustained since</span>
                <span className="font-semibold">{fitnessJourney.streakYears} years</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Training frequency</span>
                <span className="font-semibold">{fitnessJourney.frequency}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
