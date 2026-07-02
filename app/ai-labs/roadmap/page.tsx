import type { Metadata } from "next";
import { MapPinned } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { AIRoadmapTimeline } from "@/components/ai-labs/ai-roadmap-timeline";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Roadmap — ${siteConfig.name}`;
const description =
  "An interactive timeline from AI-assisted operations today to agentic AI, autonomous planning, digital twins, and executive copilots.";

export const metadata: Metadata = {
  title: "AI Roadmap",
  description,
  alternates: { canonical: "/ai-labs/roadmap" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/roadmap`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AIRoadmapPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<MapPinned className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="AI Roadmap"
        title="From AI-assisted operations to executive copilots"
        description="Click any phase to see the capabilities it unlocks. This is the trajectory I'm building toward — starting from where AI already delivers value today."
        breadcrumbLabel="AI Roadmap"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <AIRoadmapTimeline />
        </div>
      </section>
    </>
  );
}
