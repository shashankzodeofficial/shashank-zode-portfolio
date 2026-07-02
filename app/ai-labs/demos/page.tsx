import type { Metadata } from "next";
import { Wand2 } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { PromptPlayground } from "@/components/ai-labs/prompt-playground";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Interactive AI Demos — ${siteConfig.name}`;
const description =
  "A prompt playground with simulated responses — try five real prompt scenarios spanning inventory, executive communication, analytics, Power BI, and operations.";

export const metadata: Metadata = {
  title: "Interactive AI Demos",
  description,
  alternates: { canonical: "/ai-labs/demos" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/demos`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AIDemosPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<Wand2 className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Interactive Demos"
        title="Try the prompt playground"
        description="A safe, sandboxed way to see how these prompts work in practice — pick a scenario, run it, and see the kind of output it's designed to produce."
        breadcrumbLabel="Interactive Demos"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <PromptPlayground />
        </div>
      </section>
    </>
  );
}
