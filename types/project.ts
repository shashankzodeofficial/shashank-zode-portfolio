import type { LucideIcon } from "lucide-react";

import type {
  ArchitectureDiagram,
  ChallengeMitigation,
  DownloadResource,
  IconFeature,
  ImpactPoint,
  ImplementationPhase,
  MetricItem,
  ProjectLinks,
  RoadmapItem,
} from "@/types/content";

export type {
  ArchitectureDiagram,
  ChallengeMitigation,
  DiagramNode,
  DownloadResource,
  IconFeature,
  ImpactPoint,
  ImplementationPhase,
  ProjectLinks,
  RoadmapItem,
} from "@/types/content";

/** @deprecated shape now lives as MetricItem in types/content.ts; kept as an alias so existing imports don't churn. */
export type ProjectKpi = MetricItem;

export type ProjectCategory =
  | "AI Planning"
  | "Executive Dashboards"
  | "Mobile & Last-Mile"
  | "Warehouse Intelligence";

export type ProjectStatus = "Live" | "In Production" | "Concept";

export interface TechBadge {
  label: string;
  category: "Frontend" | "Backend" | "Data & AI" | "Platform";
}

/**
 * No real screenshots exist for these platforms yet, so gallery items are
 * generated conceptual visuals (rendered from data, not image files) —
 * honestly labeled as diagrams/mockups rather than claimed as screenshots.
 */
export interface GalleryItem {
  kind: "diagram" | "mockup";
  title: string;
  caption: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  businessDomain: string;
  status: ProjectStatus;
  readingTime: string;
  techStack: string[];
  icon: LucideIcon;

  businessContext: string;
  businessChallenge: string;
  challengePoints: string[];
  objectives: string[];
  myRole: {
    summary: string;
    responsibilities: string[];
  };
  solutionOverview: string;

  architecture: ArchitectureDiagram;
  techBadges: TechBadge[];
  implementationPhases: ImplementationPhase[];
  keyFeatures: IconFeature[];
  dashboardHighlights: string[];
  businessImpact: ImpactPoint[];
  kpis: MetricItem[];
  challengesMitigation: ChallengeMitigation[];
  lessonsLearned: string[];
  futureRoadmap: RoadmapItem[];
  downloads: DownloadResource[];
  gallery: GalleryItem[];
  relatedSlugs: string[];
  /** AI technologies specifically (a filtered view of techStack, called out for AI Labs). */
  aiTechnologies: string[];
  links: ProjectLinks;
}
