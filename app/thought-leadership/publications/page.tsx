import type { Metadata } from "next";
import { Library } from "lucide-react";

import { PublicationCard } from "@/components/thought-leadership/publication-card";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { Callout } from "@/components/common/callout";
import { getPublicationsByCategory } from "@/content/thought-leadership/publications";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Publications Library — ${siteConfig.name}`;
const description =
  "Whitepapers, research articles, executive briefs, business frameworks, AI playbooks, supply chain guides, and leadership essays — in progress and planned.";

export const metadata: Metadata = {
  title: "Publications Library",
  description,
  alternates: { canonical: "/thought-leadership/publications" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/publications`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function PublicationsPage() {
  const byCategory = getPublicationsByCategory();

  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<Library className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Publications Library"
        title="Whitepapers, playbooks, and executive essays"
        description="Every title below is a real work in progress or planned publication — honestly labeled, not a claim of already-published work."
        breadcrumbLabel="Publications"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-12">
          <Callout variant="info" title="Nothing here has been published yet">
            Each entry below is in progress or planned. Download links will go
            live as each title is completed — no fabricated published work.
          </Callout>

          {Array.from(byCategory.entries()).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-6">
              <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((publication) => (
                  <PublicationCard key={publication.slug} publication={publication} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
