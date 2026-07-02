import type { Metadata } from "next";

import { AILabsHero } from "@/components/ai-labs/ai-labs-hero";
import { AILabsStats } from "@/components/ai-labs/ai-labs-stats";
import { AIResources } from "@/components/ai-labs/ai-resources";
import { ArchitectureOverviewTeaser } from "@/components/ai-labs/architecture-overview-teaser";
import { CapabilityOverview } from "@/components/ai-labs/capability-overview";
import { ExperimentsHighlight } from "@/components/ai-labs/experiments-highlight";
import { FeaturedAIProjects } from "@/components/ai-labs/featured-ai-projects";
import { PromptHighlights } from "@/components/ai-labs/prompt-highlights";
import { RoadmapTeaser } from "@/components/ai-labs/roadmap-teaser";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Innovation Center — ${siteConfig.name}`;
const description =
  "Live AI platforms, original agent architectures, a searchable prompt library, and the frameworks behind how AI gets applied to real supply chain and operations problems.";

export const metadata: Metadata = {
  title: "AI Innovation Center",
  description,
  alternates: { canonical: "/ai-labs" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AILabsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Innovation Center",
    description,
    url: `${siteConfig.url}/ai-labs`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AILabsHero />
      <AILabsStats />
      <CapabilityOverview />
      <FeaturedAIProjects />
      <ExperimentsHighlight />
      <PromptHighlights />
      <ArchitectureOverviewTeaser />
      <RoadmapTeaser />
      <AIResources />
    </>
  );
}
