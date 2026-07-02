import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import { FrameworkCard } from "@/components/knowledge/framework-card";
import { frameworks } from "@/content/knowledge/frameworks";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Framework Library — ${siteConfig.name}`;
const description =
  "Original supply chain, operations, and AI adoption frameworks — visual, structured, and built from practitioner experience.";

export const metadata: Metadata = {
  title: "Framework Library",
  description,
  alternates: { canonical: "/knowledge/frameworks" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/knowledge/frameworks`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function FrameworksPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Knowledge Hub", href: "/knowledge" },
              { label: "Framework Library" },
            ]}
          />
          <SectionHeader
            eyebrow="Framework Library"
            title="Structured models for repeatable transformation"
            description="Six original frameworks distilled from real operating experience — each one a repeatable model, not a one-off consulting slide."
          />
        </div>

        <div className="border-border bg-brand-muted text-brand flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm">
          <Layers3 className="size-4 shrink-0" aria-hidden />
          Every framework includes a visual step model and a downloadable placeholder — full toolkits are being prepared.
        </div>

        <div className="border-border bg-card shadow-subtle flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-5">
          <p className="text-sm">
            See how these frameworks translate into system diagrams in the AI
            Architecture Library.
          </p>
          <Link
            href="/ai-labs/architecture"
            className="text-brand group inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            View Architecture Library
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {frameworks.map((framework) => (
            <FrameworkCard key={framework.slug} framework={framework} />
          ))}
        </div>
      </div>
    </section>
  );
}
