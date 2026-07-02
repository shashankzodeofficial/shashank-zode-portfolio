"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { joyPhoto } from "@/lib/media";

const paragraphs = [
  "I've spent 16 years in the parts of the business most executives never see — the sort floor at 2 a.m., the loading dock during a supply shock, the spreadsheet that quietly decides whether 600,000 packages move on time. That's where I learned that supply chains aren't won in strategy decks; they're won in the details of what actually happens on the ground.",
  "My work sits at the intersection of two disciplines usually kept apart: hands-on operations leadership and AI-powered product building. I've owned multi-million dollar P&Ls and led 90-person teams — and I've also independently architected the planning platforms those teams now run on. I don't hand the hard problems to someone else; I build the tools to solve them.",
  "The businesses I work with are usually facing the same question in different clothing: how do you grow fast without your operations breaking underneath you. I help answer it by designing networks, dashboards, and AI systems that turn operational complexity into a compounding advantage instead of a liability.",
];

export function AboutPreview() {
  return (
    <section id="about" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <SectionHeader
          eyebrow="About"
          title="A builder of networks, systems, and teams."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="flex flex-col gap-6">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lead text-muted-foreground leading-[var(--text-lead--line-height)]"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-border bg-surface flex w-fit items-center gap-4 rounded-2xl border p-3"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={joyPhoto.src}
                alt={joyPhoto.alt}
                fill
                sizes="4rem"
                className="object-cover"
              />
            </div>
            <p className="text-muted-foreground max-w-xs pr-2 text-xs leading-relaxed">
              Outside of work, it&apos;s usually a walk with Joy, my golden retriever —
              the reset that keeps the rest sustainable.
            </p>
          </motion.div>

          <Link
            href="/about"
            className="text-brand group mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
          >
            Read My Full Story
            <ArrowRight
              className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
