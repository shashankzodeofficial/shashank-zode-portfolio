"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { RotateCcw, Search } from "lucide-react";

import { PromptCard } from "@/components/ai-labs/prompt-card";
import { Button } from "@/components/ui/button";
import { getAllPromptTags, promptCategories, prompts } from "@/content/ai-labs/prompts";
import { cn } from "@/lib/utils";

export function PromptLibraryExplorer() {
  const searchParams = useSearchParams();
  const tags = getAllPromptTags();

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string | null>(null);
  const [tag, setTag] = React.useState("");

  React.useEffect(() => {
    const queryParam = searchParams.get("q");
    const categoryParam = searchParams.get("category");
    if (queryParam) setQuery(queryParam);
    if (categoryParam) setCategory(categoryParam);
  }, [searchParams]);

  const hasActiveFilters = Boolean(query || category || tag);

  const filtered = prompts.filter((prompt) => {
    const matchesQuery =
      query.trim().length === 0 ||
      [prompt.title, prompt.businessObjective, prompt.category, ...prompt.tags]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase());
    const matchesCategory = !category || prompt.category === category;
    const matchesTag = !tag || prompt.tags.includes(tag);
    return matchesQuery && matchesCategory && matchesTag;
  });

  const resetFilters = () => {
    setQuery("");
    setCategory(null);
    setTag("");
  };

  return (
    <section id="library" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
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
              placeholder="Search prompts by title, category, or tag…"
              aria-label="Search prompt library"
              className="border-border bg-card focus-visible:outline-brand w-full rounded-full border py-3 pr-4 pl-11 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Category
            </span>
            {promptCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(category === cat ? null : cat)}
                aria-pressed={category === cat}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  category === cat
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {cat}
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
          {filtered.length} {filtered.length === 1 ? "prompt" : "prompts"}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {filtered.map((prompt, i) => (
              <PromptCard key={prompt.slug} prompt={prompt} index={i} />
            ))}
          </div>
        ) : (
          <div className="border-border bg-surface flex flex-col items-center gap-3 rounded-2xl border border-dashed py-16 text-center">
            <p className="text-sm font-medium">No prompts match those filters.</p>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
