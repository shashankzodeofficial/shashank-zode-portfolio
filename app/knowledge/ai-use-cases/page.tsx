import type { Metadata } from "next";
import { Bot } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import { AIUseCaseList } from "@/components/knowledge/ai-use-case-list";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `AI Use Case Repository — ${siteConfig.name}`;
const description =
  "A practitioner's library of AI use cases for supply chain and operations — business problem, solution, KPIs, and a ready-to-use prompt template for each.";

export const metadata: Metadata = {
  title: "AI Use Case Repository",
  description,
  alternates: { canonical: "/knowledge/ai-use-cases" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/knowledge/ai-use-cases`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AIUseCasesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Knowledge Hub", href: "/knowledge" },
              { label: "AI Use Case Repository" },
            ]}
          />
          <SectionHeader
            eyebrow="AI Use Case Repository"
            title="Where AI actually helps in operations"
            description="Six use cases, each with the business problem, the recommended solution, KPIs, risks, and a ready-to-use prompt template. Click any card to expand it."
          />
        </div>

        <div className="border-border bg-brand-muted text-brand flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm">
          <Bot className="size-4 shrink-0" aria-hidden />
          Every prompt template is copy-paste ready — adapt the bracketed placeholders to your own data.
        </div>

        <AIUseCaseList />
      </div>
    </section>
  );
}
