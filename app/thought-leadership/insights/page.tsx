import type { Metadata } from "next";
import { Suspense } from "react";
import { BookOpen } from "lucide-react";

import { InsightsExplorer } from "@/components/thought-leadership/insights-explorer";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Leadership Insights Library — ${siteConfig.name}`;
const description =
  "A premium library of executive-leadership, supply chain strategy, AI leadership, and business transformation articles — searchable by category, tag, and difficulty.";

export const metadata: Metadata = {
  title: "Leadership Insights Library",
  description,
  alternates: { canonical: "/thought-leadership/insights" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/insights`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function LeadershipInsightsPage() {
  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<BookOpen className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Leadership Insights Library"
        title="Executive perspectives, not blog posts"
        description="Consulting-grade articles on executive leadership, supply chain strategy, AI leadership, and business transformation — each grounded in real operating experience."
        breadcrumbLabel="Insights Library"
      />
      <Suspense fallback={null}>
        <InsightsExplorer />
      </Suspense>
    </>
  );
}
