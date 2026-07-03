"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Compass, Mic, Quote } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { getInsightArticles } from "@/content/thought-leadership/insight-categories";
import { executivePrinciples } from "@/content/thought-leadership/principles";
import { executiveQuotes } from "@/content/thought-leadership/quotes";

const highlights = [
  {
    href: "/thought-leadership/insights",
    icon: BookOpen,
    title: "Leadership Insights Library",
    stat: `${getInsightArticles().length} Articles`,
    description: "Executive perspectives on strategy, AI, and transformation.",
  },
  {
    href: "/thought-leadership/principles",
    icon: Compass,
    title: "Leadership Principles",
    stat: `${executivePrinciples.length} Principles`,
    description: "The thinking behind every high-stakes decision.",
  },
  {
    href: "/thought-leadership/speaking",
    icon: Mic,
    title: "Speaking & Conferences",
    stat: "Open to Engagements",
    description: "Keynotes, roundtables, and workshops on AI and operations.",
  },
  {
    href: "/thought-leadership/quotes",
    icon: Quote,
    title: "Executive Quotes",
    stat: `${executiveQuotes.length} Quotes`,
    description: "Original perspectives on leadership and execution.",
  },
];

export function ThoughtLeadershipPreview() {
  return (
    <section id="thought-leadership" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Thought Leadership"
            title="An executive voice on transformation"
            description="Leadership insights, speaking engagements, and executive perspectives — where operational experience meets AI strategy."
          />
          <Link
            href="/thought-leadership"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            Visit Thought Leadership
            <ArrowRight
              className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ href, icon: Icon, title, stat, description }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={href}
                className="group border-border bg-card shadow-subtle hover:shadow-panel hover:border-brand/30 flex h-full flex-col gap-3 rounded-2xl border p-6 transition-all duration-300 ease-out-quart"
              >
                <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-10 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-lg font-semibold tracking-tight">{stat}</span>
                <span className="text-sm font-medium">{title}</span>
                <span className="text-muted-foreground text-xs leading-relaxed">
                  {description}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
