"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Brain, Sparkles } from "lucide-react";

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

export function AILabsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Innovation Center" }]} />

        <motion.div initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-5">
          <motion.span
            custom={0}
            variants={fadeUp}
            className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
          >
            <Brain className="text-brand size-3.5" aria-hidden />
            AI Innovation Center
          </motion.span>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
          >
            An executive who builds AI products, not just talks about them
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
          >
            Live AI platforms, original agent architectures, a searchable prompt
            library, and the frameworks behind how AI gets applied to real
            supply chain and operations problems — grounded in what I&apos;ve
            actually shipped, not a tools list.
          </motion.p>

          <motion.div custom={0.3} variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href="#capabilities"
              className="bg-brand text-brand-foreground shadow-glow-brand hover:bg-brand/92 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium transition-colors"
            >
              <Sparkles className="size-4" aria-hidden />
              Explore AI Labs
              <ArrowDown className="size-4" aria-hidden />
            </Link>
            <Link
              href="/ai-labs/projects"
              className="border-border bg-card hover:bg-muted inline-flex h-11 items-center gap-2 rounded-full border px-6 text-sm font-medium transition-colors"
            >
              View Live AI Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
