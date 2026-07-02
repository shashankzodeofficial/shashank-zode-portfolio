"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { awards } from "@/lib/about-content";
import { conferencePhotos } from "@/lib/media";
import { cn } from "@/lib/utils";

const awardsPhoto = conferencePhotos[3];

export function AwardsRecognition() {
  return (
    <section id="awards" className="border-border scroll-mt-24 border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <div className="border-border shadow-panel relative aspect-[21/9] w-full overflow-hidden rounded-2xl border sm:aspect-[3/1]">
          <Image
            src={awardsPhoto.src}
            alt={awardsPhoto.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="from-primary/85 via-primary/20 absolute inset-0 bg-gradient-to-t to-transparent" />
          <p className="text-primary-foreground/80 absolute bottom-4 left-5 text-xs font-medium">
            {awardsPhoto.caption}
          </p>
        </div>

        <SectionHeader
          eyebrow="Awards & Recognition"
          title="Recognition earned in the moments that mattered most"
        />

        <ol className="flex flex-col gap-5">
          {awards.map((award, i) => {
            const verified = award.status === "verified";
            return (
              <motion.li
                key={award.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6",
                  verified
                    ? "border-border bg-card shadow-subtle"
                    : "border-border/70 bg-surface border-dashed",
                )}
              >
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl",
                    verified
                      ? "bg-gold/15 text-gold-foreground dark:text-gold"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {verified ? (
                    <Award className="size-5" aria-hidden />
                  ) : (
                    <Clock className="size-5" aria-hidden />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold tracking-tight">
                      {award.title}
                    </h3>
                    <span className="border-border bg-surface text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs">
                      {award.issuer} · {award.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
