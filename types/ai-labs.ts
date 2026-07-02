import type { LucideIcon } from "lucide-react";

import type {
  ArchitectureDiagram,
  IconFeature,
  MetricItem,
} from "@/types/content";

export type AILabsCategory =
  | "Planning & Forecasting"
  | "Warehouse & Operations"
  | "Executive Reporting"
  | "Automation"
  | "Decision Support"
  | "Knowledge & Documentation";

export interface AIExperiment {
  slug: string;
  title: string;
  icon: LucideIcon;
  category: AILabsCategory;
  tags: string[];
  businessProblem: string;
  objective: string;
  aiApproach: string;
  technologies: string[];
  architecture: ArchitectureDiagram;
  businessImpact: IconFeature[];
  lessonsLearned: string[];
  futureEnhancements: string[];
  /** Cross-link to the shipped product this experiment is grounded in, if any. */
  relatedProjectSlug?: string;
  /** Cross-link to a related Knowledge Hub article. */
  relatedArticleSlug?: string;
}

export type PromptCategory =
  | "Supply Chain"
  | "Warehouse"
  | "Inventory"
  | "Planning"
  | "Forecasting"
  | "Leadership"
  | "Analytics"
  | "Power BI"
  | "Excel"
  | "Python"
  | "AI Agents"
  | "Executive Communication"
  | "Operations"
  | "Customer Experience";

export interface Prompt {
  slug: string;
  title: string;
  category: PromptCategory;
  tags: string[];
  businessObjective: string;
  recommendedModel: string;
  promptText: string;
  expectedOutput: string;
  exampleUseCase: string;
  tips: string[];
  relatedSlugs: string[];
}

export interface AIAgent {
  slug: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
  businessPurpose: string;
  inputs: string[];
  outputs: string[];
  workflow: ArchitectureDiagram;
  recommendedModels: string[];
  integrationPoints: string[];
  businessImpact: string;
  futureEnhancements: string[];
}

export interface AutomationProject {
  slug: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
  businessChallenge: string;
  existingProcess: string;
  automatedProcess: string;
  tools: string[];
  benefits: IconFeature[];
  kpis: MetricItem[];
}

export interface LLMApplication {
  slug: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
  businessProblem: string;
  aiWorkflow: string;
  expectedOutputs: string[];
  businessBenefits: string[];
  risks: string[];
  bestPractices: string[];
  relatedSlugs: string[];
}

export interface RoadmapPhase {
  period: string;
  title: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
}

export interface NamedArchitectureDiagram {
  slug: string;
  title: string;
  icon: LucideIcon;
  category: string;
  summary: string;
  diagram: ArchitectureDiagram;
}
