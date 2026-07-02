"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { KnowledgeCard } from "@/components/cards/knowledge-card";
import { SectionHeader } from "@/components/common/section-header";
import { knowledgeArticlePreviews } from "@/lib/content";
import { conferencePhotos } from "@/lib/media";

const bannerPhoto = conferencePhotos[5];

export function KnowledgePreview() {
  return (
    <section id="knowledge" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border-border shadow-panel relative aspect-[21/9] w-full overflow-hidden rounded-2xl border sm:aspect-[3/1]"
        >
          <Image
            src={bannerPhoto.src}
            alt={bannerPhoto.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="from-primary/85 via-primary/20 absolute inset-0 bg-gradient-to-t to-transparent" />
          <p className="text-primary-foreground/80 absolute bottom-4 left-5 text-xs font-medium">
            {bannerPhoto.caption}
          </p>
        </motion.div>

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
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
