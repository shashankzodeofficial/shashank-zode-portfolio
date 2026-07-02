import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "AI Planning"
  | "Executive Dashboards"
  | "Mobile & Last-Mile"
  | "Warehouse Intelligence";

export type ProjectStatus = "Live" | "In Production" | "Concept";

export interface DiagramNode {
  icon: LucideIcon;
  label: string;
  detail?: string;
}

/** A left-to-right (desktop) / top-to-bottom (mobile) flow diagram, data-driven. */
export interface ArchitectureDiagram {
  title: string;
  description: string;
  nodes: DiagramNode[];
}

export interface TechBadge {
  label: string;
  category: "Frontend" | "Backend" | "Data & AI" | "Platform";
}

export interface ImplementationPhase {
  phase: string;
  title: string;
  description: string;
}

export interface IconFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ImpactPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProjectKpi {
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  description: string;
}

export interface ChallengeMitigation {
  challenge: string;
  mitigation: string;
}

export interface RoadmapItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DownloadResource {
  icon: LucideIcon;
  label: string;
  description: string;
  href?: string;
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
  kpis: ProjectKpi[];
  challengesMitigation: ChallengeMitigation[];
  lessonsLearned: string[];
  futureRoadmap: RoadmapItem[];
  downloads: DownloadResource[];
  gallery: GalleryItem[];
  relatedSlugs: string[];
}
