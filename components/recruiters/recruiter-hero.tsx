"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Download, Mail } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { HeroBackground } from "@/components/hero/hero-background";
import { Button } from "@/components/ui/button";
import { contactMailto, resumeUrl } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function RecruiterHero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "For Recruiters" }]} />

        <motion.div initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-5">
          <motion.span
            custom={0}
            variants={fadeUp}
            className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
          >
            <Briefcase className="text-brand size-3.5" aria-hidden />
            Executive Recruiter Hub
          </motion.span>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
          >
            Everything you need for a fast, confident decision
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
          >
            One destination for recruiters, executive search firms, and hiring
            teams — resume, verified credentials, skills, portfolio, and direct
            contact, all in one place.
          </motion.p>

          <motion.div custom={0.3} variants={fadeUp} className="flex flex-wrap gap-3">
            <Button
              variant="brand"
              size="lg"
              render={
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              variant="outline"
              size="lg"
              render={
                <a href={contactMailto}>
                  Contact Me
                  <Mail data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              variant="ghost"
              size="lg"
              render={
                <Link href="#toolkit">
                  Recruiter Toolkit
                  <ArrowDown data-icon="inline-end" aria-hidden />
                </Link>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
