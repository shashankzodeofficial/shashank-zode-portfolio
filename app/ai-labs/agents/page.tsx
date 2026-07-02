import type { Metadata } from "next";
import { Bot } from "lucide-react";

import { AgentList } from "@/components/ai-labs/agent-list";
import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { Callout } from "@/components/common/callout";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Agents — ${siteConfig.name}`;
const description =
  "Reference architectures for AI agents across inventory, warehouse operations, procurement, forecasting, executive reporting, customer experience, and knowledge management.";

export const metadata: Metadata = {
  title: "AI Agents",
  description,
  alternates: { canonical: "/ai-labs/agents" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/agents`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AIAgentsPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<Bot className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="AI Agents"
        title="Seven reference architectures for autonomous workflows"
        description="Each design below is a reference architecture — how I would structure an AI agent to solve a real operational problem, including the guardrails that keep it safe to deploy."
        breadcrumbLabel="AI Agents"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-8">
          <Callout variant="info" title="Reference designs, not claimed deployments">
            Every agent below is a concept architecture grounded in real operating
            problems I&apos;ve solved manually or with simpler tooling — presented
            honestly as a design, not as a currently deployed autonomous system.
          </Callout>
          <AgentList />
        </div>
      </section>
    </>
  );
}
