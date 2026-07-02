import type { LucideIcon } from "lucide-react";

import type {
  ArchitectureDiagram,
  ChallengeMitigation,
  DownloadResource,
  IconFeature,
  ImplementationPhase,
  MetricItem,
  RoadmapItem,
} from "@/types/content";

export type KnowledgeCategory =
  | "Supply Chain"
  | "Warehouse Operations"
  | "Inventory Management"
  | "Planning & Forecasting"
  | "Logistics"
  | "Leadership"
  | "AI"
  | "Automation"
  | "Analytics"
  | "Digital Transformation"
  | "Operations Excellence"
  | "Prompt Engineering";

export type Difficulty = "Foundational" | "Intermediate" | "Advanced";

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: KnowledgeCategory[];
  tags: string[];
  readingTime: string;
  difficulty: Difficulty;
  publishDate: string;
  icon: LucideIcon;

  executiveSummary: {
    overview: string;
    whyItMatters: string;
    whoShouldRead: string;
    keyTakeaway: string;
  };
  businessProblem: string;
  businessContext: string;
  whyItMattersPoints: IconFeature[];
  myExperience: string;

  recommendedFramework: ArchitectureDiagram;
  aiEnablement: {
    intro: string;
    tools: IconFeature[];
  };
  implementationSteps: ImplementationPhase[];
  kpis: MetricItem[];
  businessImpact: IconFeature[];
  challengesMitigation: ChallengeMitigation[];
  lessonsLearned: string[];
  executiveTakeaways: string[];
  futureOutlook: RoadmapItem[];
  downloads: DownloadResource[];
  relatedSlugs: string[];
}

export interface Framework {
  slug: string;
  title: string;
  category: KnowledgeCategory;
  description: string;
  whenToUse: string;
  icon: LucideIcon;
  steps: ArchitectureDiagram;
  outcomes: string[];
}

export interface AIUseCase {
  slug: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
  businessProblem: string;
  businessContext: string;
  recommendedSolution: string;
  implementationSteps: string[];
  technology: string[];
  kpis: MetricItem[];
  businessImpact: string;
  risks: string[];
  lessonsLearned: string;
  promptTemplate: string;
}
