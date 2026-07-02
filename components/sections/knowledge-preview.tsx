"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { KnowledgeCard } from "@/components/cards/knowledge-card";
import { SectionHeader } from "@/components/common/section-header";
import { knowledgeArticlePreviews } from "@/lib/content";

export function KnowledgePreview() {
  return (
    <section id="knowledge" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Knowledge Hub"
            title="Playbooks from the operations floor"
            description="Practitioner writing on supply chain, AI, and leadership — grounded in what actually worked."
          />
          <Link
            href="/knowledge"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            Visit the Knowledge Hub
            <ArrowRight
              className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeArticlePreviews.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <KnowledgeCard article={article} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
