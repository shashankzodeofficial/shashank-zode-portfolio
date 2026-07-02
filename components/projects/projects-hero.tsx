"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { HeroBackground } from "@/components/hero/hero-background";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col gap-5"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
          >
            <Sparkles className="text-brand size-3.5" aria-hidden />
            Executive Case Studies
          </motion.span>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
          >
            AI platforms built to run real operations
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
          >
            Five platforms, each solving a specific operational problem I lived first-hand
            — from inventory planning to last-mile delivery. These aren&apos;t side
            projects; they&apos;re the tools my teams use to run the business every day.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
