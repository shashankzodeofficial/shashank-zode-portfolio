import { ArticleCard } from "@/components/knowledge/article-card";
import type { Article } from "@/types/knowledge";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <ArticleCard key={article.slug} article={article} index={i} />
      ))}
    </div>
  );
}
