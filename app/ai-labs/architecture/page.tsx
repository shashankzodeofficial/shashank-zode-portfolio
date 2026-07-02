import type { Metadata } from "next";
import { LayoutDashboard } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { Badge } from "@/components/ui/badge";
import { architectureDiagrams } from "@/content/ai-labs/architecture-diagrams";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Architecture Library — ${siteConfig.name}`;
const description =
  "Visual architecture diagrams for LLM workflows, AI chatbots, RAG pipelines, multi-agent systems, AI governance, prompt orchestration, and the enterprise AI stack.";

export const metadata: Metadata = {
  title: "AI Architecture Library",
  description,
  alternates: { canonical: "/ai-labs/architecture" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/architecture`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function ArchitectureLibraryPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<LayoutDashboard className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="AI Architecture Library"
        title="How these systems are actually built"
        description="Eight reference diagrams covering the foundational patterns, application architectures, governance layers, and the domain-specific ecosystem behind AI in supply chain operations."
        breadcrumbLabel="Architecture Library"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          {architectureDiagrams.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.slug} className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <Badge variant="outline" className="w-fit">
                      {item.category}
                    </Badge>
                    <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <ArchitectureDiagram diagram={item.diagram} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
