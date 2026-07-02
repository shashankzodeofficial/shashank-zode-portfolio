"use client";

import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { HeroBackground } from "@/components/hero/hero-background";
import { Badge } from "@/components/ui/badge";
import { getCaseStudyBySlug } from "@/content/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/**
 * Takes a slug rather than the full CaseStudy object — the study's icon
 * fields are function references, which can't cross the Server-to-Client
 * component boundary as props. Resolving from the shared content module
 * inside this client component sidesteps that entirely.
 */
export function CaseStudyHero({ slug }: { slug: string }) {
  const study = getCaseStudyBySlug(slug);
  if (!study) return null;
  const Icon = study.icon;

  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: study.title },
          ]}
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_10rem] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex max-w-2xl flex-col gap-5"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-2"
            >
              <Badge variant="brand">{study.category}</Badge>
              <Badge variant="outline">{study.status}</Badge>
              <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs font-medium">
                <Clock className="size-3.5" aria-hidden />
                {study.readingTime} read
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
            >
              {study.title}
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
            >
              {study.tagline}
            </motion.p>

            <motion.span
              custom={0.3}
              variants={fadeUp}
              className="text-muted-foreground inline-flex items-center gap-1.5 text-xs font-medium"
            >
              <Tag className="size-3.5" aria-hidden />
              {study.businessDomain}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="from-brand/20 via-gold/10 border-border shadow-elevated mx-auto flex aspect-square w-full max-w-40 items-center justify-center rounded-3xl border bg-gradient-to-br to-transparent lg:mx-0 lg:max-w-none"
          >
            <Icon className="text-brand size-14" aria-hidden strokeWidth={1.25} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
