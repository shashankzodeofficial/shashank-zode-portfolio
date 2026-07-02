import type { Metadata } from "next";
import { Suspense } from "react";
import { Wand2 } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { PromptLibraryExplorer } from "@/components/ai-labs/prompt-library-explorer";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Prompt Engineering Library — ${siteConfig.name}`;
const description =
  "A searchable library of copy-ready prompts across supply chain, warehouse, planning, forecasting, leadership, analytics, Power BI, Excel, Python, AI agents, and more.";

export const metadata: Metadata = {
  title: "Prompt Engineering Library",
  description,
  alternates: { canonical: "/ai-labs/prompts" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/prompts`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function PromptLibraryPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<Wand2 className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Prompt Engineering Library"
        title="Copy-ready prompts, built from real operating work"
        description="Every prompt below is written to be copied and used as-is — with the business objective, the recommended model, the expected output, and tips from actually using it."
        breadcrumbLabel="Prompt Library"
      />
      <Suspense fallback={null}>
        <PromptLibraryExplorer />
      </Suspense>
    </>
  );
}
