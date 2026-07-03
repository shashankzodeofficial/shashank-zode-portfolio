"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { RotateCcw, Search } from "lucide-react";

import { ArticleCard } from "@/components/knowledge/article-card";
import { Button } from "@/components/ui/button";
import { getInsightArticles, insightCategories } from "@/content/thought-leadership/insight-categories";
import { cn } from "@/lib/utils";
import type { Difficulty } from "@/types/knowledge";

const difficulties: Difficulty[] = ["Foundational", "Intermediate", "Advanced"];

export function InsightsExplorer() {
  const searchParams = useSearchParams();
  const insights = getInsightArticles();
  const tags = Array.from(new Set(insights.flatMap((article) => article.tags))).sort();

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string | null>(null);
  const [difficulty, setDifficulty] = React.useState("");
  const [tag, setTag] = React.useState("");

  React.useEffect(() => {
    const categoryParam = searchParams.get("category");
    const tagParam = searchParams.get("tag");
    if (categoryParam) setCategory(categoryParam);
    if (tagParam) setTag(tagParam);
  }, [searchParams]);

  const hasActiveFilters = Boolean(query || category || difficulty || tag);

  const filtered = insights.filter((article) => {
    const matchesQuery =
      query.trim().length === 0 ||
      [article.title, article.subtitle, ...article.tags, ...article.category]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase());
    const matchesCategory = !category || article.category.includes(category as never);
    const matchesDifficulty = !difficulty || article.difficulty === difficulty;
    const matchesTag = !tag || article.tags.includes(tag);
    return matchesQuery && matchesCategory && matchesDifficulty && matchesTag;
  });

  const resetFilters = () => {
    setQuery("");
    setCategory(null);
    setDifficulty("");
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
              placeholder="Search leadership insights by title, topic, or tag…"
              aria-label="Search Leadership Insights Library"
              className="border-border bg-card focus-visible:outline-brand w-full rounded-full border py-3 pr-4 pl-11 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Category
            </span>
            {insightCategories.map((cat) => (
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
              <span className="text-muted-foreground font-semibold tracking-wide uppercase">Difficulty</span>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="border-border bg-card focus-visible:outline-brand rounded-full border px-3 py-1.5 text-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <option value="">All</option>
                {difficulties.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>

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
          {filtered.length} {filtered.length === 1 ? "insight" : "insights"}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        ) : (
          <div className="border-border bg-surface flex flex-col items-center gap-3 rounded-2xl border border-dashed py-16 text-center">
            <p className="text-sm font-medium">No insights match those filters.</p>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
