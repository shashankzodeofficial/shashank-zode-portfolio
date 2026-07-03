import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { AIUseCasesTeaser } from "@/components/knowledge/ai-use-cases-teaser";
import { CategoryCards } from "@/components/knowledge/category-cards";
import { FeaturedArticlesCarousel } from "@/components/knowledge/featured-articles-carousel";
import { FrameworksTeaser } from "@/components/knowledge/frameworks-teaser";
import { KnowledgeExplorer } from "@/components/knowledge/knowledge-explorer";
import { KnowledgeHero } from "@/components/knowledge/knowledge-hero";
import { NewsletterPlaceholder } from "@/components/knowledge/newsletter-placeholder";
import { PopularTopics } from "@/components/knowledge/popular-topics";
import { ReadingStats } from "@/components/knowledge/reading-stats";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Knowledge Hub — ${siteConfig.name}`;
const description =
  "An executive knowledge repository on supply chain, operations, AI, and leadership — original frameworks, AI use cases, and consulting-grade articles grounded in real operating experience.";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description,
  alternates: { canonical: "/knowledge" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/knowledge`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function KnowledgePage() {
  return (
    <>
      <KnowledgeHero />
      <ReadingStats />
      <CategoryCards />
      <FeaturedArticlesCarousel />
      <Suspense fallback={null}>
        <KnowledgeExplorer />
      </Suspense>
      <PopularTopics />
      <FrameworksTeaser />
      <AIUseCasesTeaser />

      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <div className="border-border bg-card shadow-subtle flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-6">
            <span className="flex items-center gap-3 text-sm">
              <Sparkles className="text-brand size-4 shrink-0" aria-hidden />
              Looking for executive-level insights, speaking topics, and leadership
              principles? Visit the Thought Leadership Center.
            </span>
            <Link
              href="/thought-leadership"
              className="text-brand group inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              Explore Thought Leadership
              <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterPlaceholder />
    </>
  );
}
