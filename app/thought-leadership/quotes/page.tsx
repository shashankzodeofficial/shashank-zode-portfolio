import type { Metadata } from "next";
import { Quote } from "lucide-react";

import { ExecutiveQuotesShowcase } from "@/components/thought-leadership/executive-quotes-showcase";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Executive Quotes Library — ${siteConfig.name}`;
const description =
  "Original executive quotes on operational discipline, AI leadership, execution excellence, and organizational change.";

export const metadata: Metadata = {
  title: "Executive Quotes Library",
  description,
  alternates: { canonical: "/thought-leadership/quotes" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/quotes`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function ExecutiveQuotesPage() {
  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<Quote className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Executive Quotes Library"
        title="Principles, stated plainly"
        description="Original quotes distilled from real operating experience — on leadership, AI, execution, and change."
        breadcrumbLabel="Quotes"
      />
      <ExecutiveQuotesShowcase />
    </>
  );
}
