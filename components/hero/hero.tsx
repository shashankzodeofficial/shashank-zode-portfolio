"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Download, MapPin, Sparkles } from "lucide-react";

import { HeroBackground } from "@/components/hero/hero-background";
import { HeroStats } from "@/components/hero/hero-stats";
import { Button } from "@/components/ui/button";
import { profilePhoto } from "@/lib/media";
import { resumeUrl, siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_22rem] lg:items-start lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex max-w-3xl flex-col gap-7"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="border-border bg-surface text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
                <Sparkles className="text-brand size-3.5" aria-hidden />
                Supply Chain × AI Product Builder
              </span>
              <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs font-medium">
                <MapPin className="size-3.5" aria-hidden />
                {siteConfig.location}
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-hero leading-[var(--text-hero--line-height)] font-semibold tracking-[var(--text-hero--letter-spacing)] text-balance"
            >
              <span className="text-gradient-brand">
                Building future-ready supply chains
              </span>{" "}
              through leadership, technology &amp; AI.
            </motion.h1>

            <motion.p
              custom={0.22}
              variants={fadeUp}
              className="text-subtitle text-muted-foreground max-w-2xl leading-[var(--text-subtitle--line-height)]"
            >
              Supply chain executive with 16+ years scaling logistics networks
              across Amazon, Reliance Retail, and IBO — owning multi-million
              dollar P&amp;Ls, architecting AI-powered planning platforms, and
              turning operational complexity into compounding business
              advantage.
            </motion.p>

            <motion.div
              custom={0.34}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Button
                size="lg"
                variant="brand"
                render={
                  <Link href="/journey">
                    Explore My Journey
                    <Compass data-icon="inline-end" aria-hidden />
                  </Link>
                }
              />
              <Button
                size="lg"
                variant="outline"
                render={
                  <Link href="#projects">
                    View Projects
                    <ArrowRight data-icon="inline-end" aria-hidden />
                  </Link>
                }
              />
              <Button
                size="lg"
                variant="ghost"
                render={
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    Download Resume
                    <Download data-icon="inline-end" aria-hidden />
                  </a>
                }
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
          >
            <div className="border-border shadow-elevated relative aspect-[4/5] overflow-hidden rounded-3xl border">
              <Image
                src={profilePhoto.src}
                alt={profilePhoto.alt}
                fill
                priority
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 80vw"
                className="object-cover"
              />
              <div className="from-primary/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>
            <div className="border-border bg-card shadow-panel absolute -bottom-5 -left-5 hidden rounded-2xl border px-4 py-3 sm:block">
              <p className="text-sm font-semibold tracking-tight">
                {siteConfig.name}
              </p>
              <p className="text-muted-foreground text-xs">{siteConfig.role}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="border-border max-w-3xl border-t pt-8"
        >
          <HeroStats />
        </motion.div>
      </div>
    </section>
  );
}
