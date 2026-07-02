"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/common/tag";
import { caseStudies } from "@/content/projects";

const covers = [
  "from-brand/25 via-brand/10 to-transparent",
  "from-gold/25 via-gold/10 to-transparent",
  "from-brand/20 via-gold/10 to-transparent",
];

/** Takes slugs and resolves study data internally — see CaseStudyHero for why. */
export function FeaturedCarousel({ slugs }: { slugs: string[] }) {
  const studies = slugs
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study) => study !== undefined);

  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
            Featured Work
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Scroll featured projects left"
              onClick={() => scroll(-1)}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Scroll featured projects right"
              onClick={() => scroll(1)}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {studies.map((study, i) => {
            const Icon = study.icon;
            return (
              <Link
                key={study.slug}
                href={`/projects/${study.slug}`}
                className={`group border-border shadow-panel hover:shadow-elevated relative flex w-[20rem] shrink-0 snap-start flex-col gap-5 rounded-2xl border bg-gradient-to-br p-6 transition-shadow sm:w-[24rem] ${
                  covers[i % covers.length]
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="text-foreground/70 size-9"
                    aria-hidden
                    strokeWidth={1.25}
                  />
                  <Tag className="bg-card">{study.category}</Tag>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{study.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                    {study.tagline}
                  </p>
                </div>
                <span className="text-brand group/link mt-auto inline-flex items-center gap-1.5 text-sm font-semibold">
                  View Case Study
                  <ArrowUpRight
                    className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
