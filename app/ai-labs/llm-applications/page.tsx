import type { Metadata } from "next";
import { MessageSquareCode } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { LLMApplicationList } from "@/components/ai-labs/llm-application-list";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `LLM Applications — ${siteConfig.name}`;
const description =
  "Where large language models create real business value — summarization, documentation, root cause analysis, executive reporting, planning, and decision support.";

export const metadata: Metadata = {
  title: "LLM Applications",
  description,
  alternates: { canonical: "/ai-labs/llm-applications" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/llm-applications`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function LLMApplicationsPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<MessageSquareCode className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="LLM Applications"
        title="Where large language models create business value"
        description="Eight applications of LLMs to real operating work, each with the workflow, expected outputs, business benefits, risks, and best practices for using it responsibly."
        breadcrumbLabel="LLM Applications"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <LLMApplicationList />
        </div>
      </section>
    </>
  );
}
