"use client";

import { motion } from "framer-motion";

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

interface AILabsSubHeroProps {
  /** A pre-rendered icon element (e.g. `<FlaskConical aria-hidden />`) — never a bare component reference, which can't cross the Server-to-Client boundary as a prop. */
  eyebrowIcon: React.ReactNode;
  eyebrowLabel: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
}

export function AILabsSubHero({
  eyebrowIcon,
  eyebrowLabel,
  title,
  description,
  breadcrumbLabel,
}: AILabsSubHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "AI Innovation Center", href: "/ai-labs" },
            { label: breadcrumbLabel },
          ]}
        />

        <motion.div initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-5">
          <motion.span
            custom={0}
            variants={fadeUp}
            className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
          >
            {eyebrowIcon}
            {eyebrowLabel}
          </motion.span>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
