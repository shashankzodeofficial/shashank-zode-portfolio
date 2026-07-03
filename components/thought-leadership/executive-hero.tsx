"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mic, Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { HeroBackground } from "@/components/hero/hero-background";
import { Button } from "@/components/ui/button";
import { profilePhoto } from "@/lib/media";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ExecutiveHero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Thought Leadership" }]} />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <motion.div initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-5">
            <motion.span
              custom={0}
              variants={fadeUp}
              className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
            >
              <Sparkles className="text-brand size-3.5" aria-hidden />
              Executive Thought Leadership
            </motion.span>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
            >
              Leading Business Transformation Through Supply Chain Excellence &amp; Artificial Intelligence
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
            >
              Perspectives on leadership, AI, operations, and digital strategy —
              grounded in sixteen years of building and running supply chain
              networks, and in shipping the AI platforms that now help run them.
            </motion.p>

            <motion.div custom={0.3} variants={fadeUp} className="flex flex-wrap gap-3">
              <Button
                variant="brand"
                size="lg"
                render={
                  <Link href="/thought-leadership/insights">
                    Explore Leadership Insights
                    <ArrowRight data-icon="inline-end" aria-hidden />
                  </Link>
                }
              />
              <Button
                variant="outline"
                size="lg"
                render={
                  <Link href="/thought-leadership/speaking">
                    Speaking &amp; Conferences
                    <Mic data-icon="inline-end" aria-hidden />
                  </Link>
                }
              />
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
                src={profilePhoto.src}
                alt={profilePhoto.alt}
                fill
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 20rem, 80vw"
                className="object-cover"
              />
              <div className="from-primary/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
