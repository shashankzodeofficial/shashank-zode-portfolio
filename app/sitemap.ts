import type { MetadataRoute } from "next";

import { articles } from "@/content/knowledge/articles";
import { caseStudies } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

const aiLabsRoutes = [
  "/ai-labs",
  "/ai-labs/projects",
  "/ai-labs/experiments",
  "/ai-labs/prompts",
  "/ai-labs/agents",
  "/ai-labs/automation",
  "/ai-labs/rag",
  "/ai-labs/architecture",
  "/ai-labs/llm-applications",
  "/ai-labs/roadmap",
  "/ai-labs/demos",
];

const thoughtLeadershipRoutes = [
  "/thought-leadership",
  "/thought-leadership/insights",
  "/thought-leadership/principles",
  "/thought-leadership/speaking",
  "/thought-leadership/publications",
  "/thought-leadership/interviews",
  "/thought-leadership/quotes",
  "/thought-leadership/trends",
  "/thought-leadership/media",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...caseStudies.map((study) => ({
      url: `${siteConfig.url}/projects/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/knowledge`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articles.map((article) => ({
      url: `${siteConfig.url}/knowledge/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/knowledge/frameworks`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/knowledge/ai-use-cases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...aiLabsRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "/ai-labs" ? 0.9 : 0.7,
    })),
    ...thoughtLeadershipRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "/thought-leadership" ? 0.9 : 0.7,
    })),
    {
      url: `${siteConfig.url}/fitness`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
