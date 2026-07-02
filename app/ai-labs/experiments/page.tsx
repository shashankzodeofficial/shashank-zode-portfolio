import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { ExperimentList } from "@/components/ai-labs/experiment-list";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Experiments — ${siteConfig.name}`;
const description =
  "Practical AI experiments — the business problem, the AI approach, the architecture, and the business impact behind each one, grounded in real operating work.";

export const metadata: Metadata = {
  title: "AI Experiments",
  description,
  alternates: { canonical: "/ai-labs/experiments" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/experiments`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AIExperimentsPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<FlaskConical className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="AI Experiments"
        title="Practical experiments, real business problems"
        description="Each experiment below tackles a specific operational problem — inventory, warehouse space, forecasting, executive reporting, documentation, or decision support — with the approach, architecture, and honest lessons learned."
        breadcrumbLabel="AI Experiments"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <ExperimentList />
        </div>
      </section>
    </>
  );
}
