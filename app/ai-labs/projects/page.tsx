import type { Metadata } from "next";

import { AIProjectCard } from "@/components/ai-labs/ai-project-card";
import { AIProjectsHero } from "@/components/ai-labs/ai-projects-hero";
import { caseStudies } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Projects Portfolio — ${siteConfig.name}`;
const description =
  "Five live AI-powered supply chain platforms — the business problem, the AI approach, the technologies, and the measurable impact behind each one, with live demo links.";

export const metadata: Metadata = {
  title: "AI Projects Portfolio",
  description,
  alternates: { canonical: "/ai-labs/projects" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/projects`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AIProjectsPortfolioPage() {
  return (
    <>
      <AIProjectsHero />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-8">
          {caseStudies.map((study) => (
            <AIProjectCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </>
  );
}
