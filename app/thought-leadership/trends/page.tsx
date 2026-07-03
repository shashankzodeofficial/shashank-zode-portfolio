import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";

import { TrendCard } from "@/components/thought-leadership/trend-card";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { futureTrends } from "@/content/thought-leadership/trends";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Future Trends Center — ${siteConfig.name}`;
const description =
  "Ten forward-looking trends in AI and supply chain — autonomous supply chains, AI agents, digital twins, AI governance, and more — each with business implications and a future outlook.";

export const metadata: Metadata = {
  title: "Future Trends Center",
  description,
  alternates: { canonical: "/thought-leadership/trends" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/trends`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function FutureTrendsPage() {
  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<TrendingUp className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Future Trends Center"
        title="Where supply chain and AI are headed next"
        description="Ten forward-looking trends — each with the executive summary, the business implications, and where it's realistically headed."
        breadcrumbLabel="Future Trends"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-8">
          {futureTrends.map((trend) => (
            <TrendCard key={trend.slug} trend={trend} />
          ))}
        </div>
      </section>
    </>
  );
}
