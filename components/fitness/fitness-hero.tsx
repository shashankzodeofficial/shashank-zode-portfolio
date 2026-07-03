"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Dumbbell } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { HeroBackground } from "@/components/hero/hero-background";
import { fitnessPhotos } from "@/lib/media";
import { fitnessJourney } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const stats = [
  { value: `${fitnessJourney.startWeight - fitnessJourney.currentWeight}${fitnessJourney.unit}`, label: "Total Transformation" },
  { value: `${fitnessJourney.transformationMonths} Months`, label: "To Reach Target" },
  { value: `${fitnessJourney.streakYears} Years`, label: "Discipline Sustained" },
];

export function FitnessHero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Fitness Journey" }]} />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <motion.div initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-5">
            <motion.span
              custom={0}
              variants={fadeUp}
              className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
            >
              <Dumbbell className="text-brand size-3.5" aria-hidden />
              Personal Fitness Journey
            </motion.span>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
            >
              From 125kg to 85kg: How Discipline Became My Leadership Foundation
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
            >
              A 40kg transformation, built in 10 months and sustained for four-plus
              years since — not a fitness story on its own, but the clearest proof I
              have that consistency, not intensity, is what actually compounds.
            </motion.p>

            <motion.div custom={0.3} variants={fadeUp}>
              <Link
                href="#story"
                className="bg-brand text-brand-foreground shadow-glow-brand hover:bg-brand/92 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium transition-colors"
              >
                Read the Story
                <ArrowDown className="size-4" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
          >
            <div className="border-border shadow-elevated relative aspect-[4/5] overflow-hidden rounded-3xl border">
              <Image
                src={fitnessPhotos[1].src}
                alt={fitnessPhotos[1].alt}
                fill
                priority
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 20rem, 80vw"
                className="object-cover"
              />
              <div className="from-primary/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-border grid max-w-2xl grid-cols-3 gap-6 border-t pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
