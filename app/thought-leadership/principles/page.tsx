import type { Metadata } from "next";
import { Compass } from "lucide-react";

import { PrincipleList } from "@/components/thought-leadership/principle-list";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Executive Leadership Principles — ${siteConfig.name}`;
const description =
  "Eleven executive leadership principles — each with a business application, a leadership example, and an executive takeaway grounded in real operating experience.";

export const metadata: Metadata = {
  title: "Executive Leadership Principles",
  description,
  alternates: { canonical: "/thought-leadership/principles" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/principles`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function ExecutivePrinciplesPage() {
  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<Compass className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Executive Leadership Principles"
        title="Eleven principles behind every executive decision"
        description="Each principle below includes how it applies in practice, a real leadership example, and the executive takeaway — click any card to expand it."
        breadcrumbLabel="Leadership Principles"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <PrincipleList />
        </div>
      </section>
    </>
  );
}
