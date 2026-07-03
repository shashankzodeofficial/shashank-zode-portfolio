import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ArticleCard } from "@/components/knowledge/article-card";
import { getInsightArticles } from "@/content/thought-leadership/insight-categories";

export function LatestArticles() {
  const latest = [...getInsightArticles()]
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
    .slice(0, 3);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              Latest Articles
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              The most recent additions to the library
            </h2>
          </div>
          <Link
            href="/thought-leadership/insights"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View all insights
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
