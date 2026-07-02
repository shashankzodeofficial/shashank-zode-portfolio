import type { Metadata } from "next";
import { Suspense } from "react";

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
      <NewsletterPlaceholder />
    </>
  );
}
