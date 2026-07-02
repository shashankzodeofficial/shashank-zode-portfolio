"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, FlaskConical, Rocket, Wand2 } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { aiAgents } from "@/content/ai-labs/agents";
import { aiExperiments } from "@/content/ai-labs/experiments";
import { prompts } from "@/content/ai-labs/prompts";
import { caseStudies } from "@/content/projects";

const highlights = [
  {
    href: "/ai-labs/projects",
    icon: Rocket,
    title: "AI Projects Portfolio",
    stat: `${caseStudies.length} Live Platforms`,
    description: "Working AI products with real demo links.",
  },
  {
    href: "/ai-labs/experiments",
    icon: FlaskConical,
    title: "AI Experiments",
    stat: `${aiExperiments.length} Experiments`,
    description: "Real business problems, real AI approaches.",
  },
  {
    href: "/ai-labs/prompts",
    icon: Wand2,
    title: "Prompt Library",
    stat: `${prompts.length} Prompts`,
    description: "Copy-ready, across 14 business categories.",
  },
  {
    href: "/ai-labs/agents",
    icon: Bot,
    title: "AI Agents",
    stat: `${aiAgents.length} Architectures`,
    description: "Reference designs with governance built in.",
  },
];

export function AILabsPreview() {
  return (
    <section id="ai-labs" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="AI Innovation Center"
            title="An executive who builds AI products"
            description="Live platforms, agent architectures, and a searchable prompt library — how AI actually gets applied to supply chain and operations problems."
          />
          <Link
            href="/ai-labs"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            Explore AI Labs
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
