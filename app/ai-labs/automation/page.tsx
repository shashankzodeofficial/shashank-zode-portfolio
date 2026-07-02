import type { Metadata } from "next";
import { Workflow } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { AutomationProjectCard } from "@/components/ai-labs/automation-project-card";
import { automationProjects } from "@/content/ai-labs/automation";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Automation Projects — ${siteConfig.name}`;
const description =
  "Real business process automation — the before-and-after, the tools used, and the measurable KPIs behind each workflow, reporting, and approval automation project.";

export const metadata: Metadata = {
  title: "Automation Projects",
  description,
  alternates: { canonical: "/ai-labs/automation" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/automation`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function AutomationProjectsPage() {
  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<Workflow className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Automation Projects"
        title="Where manual work became automated workflow"
        description="Every project below replaced a real manual process — invoicing, shipment tracking, executive reporting, or approvals — with an automated one, and shows the measurable before-and-after."
        breadcrumbLabel="Automation Projects"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-8">
          {automationProjects.map((project) => (
            <AutomationProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
