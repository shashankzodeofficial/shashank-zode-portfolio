"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { HeroBackground } from "@/components/hero/hero-background";
import { profilePhoto } from "@/lib/media";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-20 sm:pt-10 sm:pb-28">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex max-w-2xl flex-col gap-6"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
            >
              <Sparkles className="text-brand size-3.5" aria-hidden />
              The Story Behind the Résumé
            </motion.span>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
            >
              About {siteConfig.name}
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
            >
              Building resilient supply chains, empowering teams, and transforming
              business operations through leadership, technology, and AI.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
          >
            <div className="border-border shadow-elevated relative aspect-[4/5] overflow-hidden rounded-3xl border">
              <Image
                src={profilePhoto.src}
                alt={profilePhoto.alt}
                fill
                priority
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 20rem, 80vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
