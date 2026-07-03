import type { Metadata } from "next";

import { NewsletterPlaceholder } from "@/components/knowledge/newsletter-placeholder";
import { ExecutiveHero } from "@/components/thought-leadership/executive-hero";
import { ExecutivePresenceBanner } from "@/components/thought-leadership/executive-presence-banner";
import { ExecutiveQuotesShowcase } from "@/components/thought-leadership/executive-quotes-showcase";
import { FeaturedInsights } from "@/components/thought-leadership/featured-insights";
import { FutureTrendsTeaser } from "@/components/thought-leadership/future-trends-teaser";
import { LatestArticles } from "@/components/thought-leadership/latest-articles";
import { LeadershipPhilosophyTeaser } from "@/components/thought-leadership/leadership-philosophy-teaser";
import { MediaCoverageTeaser } from "@/components/thought-leadership/media-coverage-teaser";
import { SpeakingHighlights } from "@/components/thought-leadership/speaking-highlights";
import { ThoughtLeadershipCta } from "@/components/thought-leadership/thought-leadership-cta";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Thought Leadership — ${siteConfig.name}`;
const description =
  "Executive perspectives on supply chain strategy, AI leadership, and business transformation — leadership insights, speaking engagements, and media from a practitioner, not a commentator.";

export const metadata: Metadata = {
  title: "Thought Leadership",
  description,
  alternates: { canonical: "/thought-leadership" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function ThoughtLeadershipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: `${siteConfig.url}/thought-leadership`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExecutiveHero />
      <LeadershipPhilosophyTeaser />
      <FeaturedInsights />
      <SpeakingHighlights />
      <ExecutivePresenceBanner />
      <LatestArticles />
      <MediaCoverageTeaser />
      <ExecutiveQuotesShowcase limit={3} />
      <FutureTrendsTeaser />
      <NewsletterPlaceholder />
      <ThoughtLeadershipCta />
    </>
  );
}
