"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { RotateCcw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getAllSearchTags, searchIndex } from "@/content/search/index";
import { cn } from "@/lib/utils";
import type { SearchRecord, SearchSection } from "@/types/search";

const sections: SearchSection[] = [
  "About",
  "Projects",
  "AI Labs",
  "Knowledge Hub",
  "Thought Leadership",
  "Fitness",
  "For Recruiters",
];

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "tags", weight: 0.3 },
    { name: "description", weight: 0.2 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

export function SearchPageContent() {
  const searchParams = useSearchParams();
  const tags = React.useMemo(() => getAllSearchTags(), []);

  const [query, setQuery] = React.useState("");
  const [section, setSection] = React.useState<SearchSection | null>(null);
  const [tag, setTag] = React.useState("");

  React.useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const hasActiveFilters = Boolean(query || section || tag);

  const results: SearchRecord[] = React.useMemo(() => {
    let base: SearchRecord[];
    if (query.trim().length >= 2) {
      base = fuse.search(query.trim()).map((r) => r.item);
    } else {
      base = searchIndex;
    }
    return base.filter((record) => {
      const matchesSection = !section || record.section === section;
      const matchesTag = !tag || record.tags.includes(tag);
      return matchesSection && matchesTag;
    });
  }, [query, section, tag]);

  const resetFilters = () => {
    setQuery("");
    setSection(null);
    setTag("");
  };

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, projects, prompts, frameworks…"
              aria-label="Search the site"
              className="border-border bg-card focus-visible:outline-brand w-full rounded-full border py-3 pr-4 pl-11 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Section
            </span>
            {sections.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSection(section === s ? null : s)}
                aria-pressed={section === s}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  section === s
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground font-semibold tracking-wide uppercase">Tag</span>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="border-border bg-card focus-visible:outline-brand rounded-full border px-3 py-1.5 text-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <option value="">All</option>
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            {hasActiveFilters ? (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset filters
                <RotateCcw data-icon="inline-end" aria-hidden className="size-3.5" />
              </Button>
            ) : null}
          </div>
        </div>

        <p className="text-muted-foreground text-sm" role="status">
          {results.length} {results.length === 1 ? "result" : "results"}
        </p>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((record) => {
              const Icon = record.icon;
              return (
                <Link
                  key={record.id}
                  href={record.url}
                  className="group border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-3 rounded-2xl border p-5 transition-shadow"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-brand-muted text-brand flex size-9 items-center justify-center rounded-xl">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="border-border bg-surface text-muted-foreground rounded-full border px-2 py-0.5 text-[0.65rem] font-medium">
                      {record.type}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight">{record.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                    {record.description}
                  </p>
                  <span className="text-muted-foreground mt-auto text-[0.7rem] font-medium tracking-wide uppercase">
                    {record.section}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="border-border bg-surface flex flex-col items-center gap-3 rounded-2xl border border-dashed py-16 text-center">
            <p className="text-sm font-medium">No results match those filters.</p>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
