import { aiInSupplyChainDecisionMaking } from "@/content/knowledge/articles/ai-in-supply-chain-decision-making";
import { customerExperienceOperationsMetric } from "@/content/knowledge/articles/customer-experience-operations-metric";
import { digitalStrategySequencing } from "@/content/knowledge/articles/digital-strategy-sequencing";
import { insourcingVsThirdPartyLogistics } from "@/content/knowledge/articles/insourcing-vs-third-party-logistics";
import { leadingOrganizationalChange } from "@/content/knowledge/articles/leading-organizational-change";
import { leadingThroughCalculatedRisk } from "@/content/knowledge/articles/leading-through-calculated-risk-peak-season";
import { promptEngineeringForOperationsLeaders } from "@/content/knowledge/articles/prompt-engineering-for-operations-leaders";
import { reducingNetworkComplexity } from "@/content/knowledge/articles/reducing-network-complexity";
import { zoneBasedSortation } from "@/content/knowledge/articles/zone-based-sortation-warehouse-throughput";
import type { Article, KnowledgeCategory } from "@/types/knowledge";

export const articles: Article[] = [
  zoneBasedSortation,
  reducingNetworkComplexity,
  insourcingVsThirdPartyLogistics,
  leadingThroughCalculatedRisk,
  aiInSupplyChainDecisionMaking,
  promptEngineeringForOperationsLeaders,
  leadingOrganizationalChange,
  digitalStrategySequencing,
  customerExperienceOperationsMetric,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((related): related is Article => related !== undefined)
    .slice(0, limit);
}

export function getCategoryCounts(): { category: KnowledgeCategory; count: number }[] {
  const counts = new Map<KnowledgeCategory, number>();
  for (const article of articles) {
    for (const category of article.category) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const article of articles) {
    for (const tag of article.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}
