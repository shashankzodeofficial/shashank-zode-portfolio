import type { LucideIcon } from "lucide-react";

/**
 * Shared, content-agnostic primitives used across both the Projects/Case
 * Study framework (Phase 4) and the Knowledge Hub (Phase 5) — kept here so
 * neither domain has to duplicate or import from the other.
 */

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

export interface MetricItem {
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
