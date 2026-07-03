import type { Metadata } from "next";
import { Suspense } from "react";
import { Search } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { SearchPageContent } from "@/components/search/search-page-content";
import { searchIndex } from "@/content/search/index";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Search — ${siteConfig.name}`;
const description =
  "Search every article, project, framework, AI use case, prompt, and case study across the site — fast, fuzzy, and filterable.";

export const metadata: Metadata = {
  title: "Search",
  description,
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/search`,
    title: fullTitle,
    description,
  },
};

export default function SearchPage() {
  return (
    <>
      <section className="border-border border-t py-8 sm:py-10">
        <div className="container-executive flex flex-col gap-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
          <div className="flex flex-col gap-2">
            <span className="border-border bg-surface text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
              <Search className="text-brand size-3.5" aria-hidden />
              Enterprise Search
            </span>
            <h1 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              Search the entire site
            </h1>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              {searchIndex.length}+ articles, projects, frameworks, prompts, and
              case studies — searchable by keyword, category, or tag.
            </p>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <SearchPageContent />
      </Suspense>
    </>
  );
}
