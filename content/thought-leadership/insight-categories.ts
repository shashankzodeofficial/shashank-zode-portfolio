import { articles } from "@/content/knowledge/articles";
import type { Article, KnowledgeCategory } from "@/types/knowledge";

/** The categories that define the Leadership Insights Library — a curated,
 * executive-facing subset of the broader Knowledge Hub article library. */
export const insightCategories: KnowledgeCategory[] = [
  "Executive Leadership",
  "Supply Chain Strategy",
  "AI Leadership",
  "Operations Excellence",
  "Business Transformation",
  "Customer Experience",
  "Innovation",
  "Digital Strategy",
  "Organizational Change",
  "Continuous Improvement",
];

export function getInsightArticles(): Article[] {
  return articles.filter((article) =>
    article.category.some((category) => insightCategories.includes(category)),
  );
}

export function getInsightCategoryCounts() {
  const insights = getInsightArticles();
  const counts = new Map<KnowledgeCategory, number>();
  for (const article of insights) {
    for (const category of article.category) {
      if (!insightCategories.includes(category)) continue;
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}
