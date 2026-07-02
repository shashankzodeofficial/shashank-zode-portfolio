import { nexusone } from "@/content/projects/nexusone";
import { routeSphereControlTower } from "@/content/projects/routesphere-control-tower";
import { routeSphereDeliveryApp } from "@/content/projects/routesphere-delivery-app";
import { scsFabric } from "@/content/projects/scs-fabric";
import { transportationControlTower } from "@/content/projects/transportation-control-tower";
import type { CaseStudy, ProjectKpi } from "@/types/project";

export const caseStudies: CaseStudy[] = [
  nexusone,
  routeSphereControlTower,
  transportationControlTower,
  routeSphereDeliveryApp,
  scsFabric,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(study: CaseStudy, limit = 3): CaseStudy[] {
  return study.relatedSlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((related): related is CaseStudy => related !== undefined)
    .slice(0, limit);
}

export const projectCategories = Array.from(
  new Set(caseStudies.map((study) => study.category)),
);

export const projectTechnologies = Array.from(
  new Set(caseStudies.flatMap((study) => study.techStack)),
).sort();

export const projectDomains = Array.from(
  new Set(caseStudies.map((study) => study.businessDomain)),
);

/** Aggregate figures across the portfolio — each traceable to a specific case study. */
export const projectsKpiSummary: ProjectKpi[] = [
  {
    display: String(caseStudies.length),
    label: "AI & Digital Platforms Shipped",
    description: "Independently architected, end-to-end.",
  },
  {
    value: 40,
    suffix: "%",
    label: "Manual Tracking Effort Reduced",
    description: "Transportation Control Tower rollout across 5 DCs.",
  },
  {
    value: 15,
    suffix: "%",
    label: "Order Fulfilment Velocity Gained",
    description: "RouteSphere Delivery App, alongside rapid-delivery launch.",
  },
  {
    display: "5 DCs / 50 Stores",
    label: "Network Coverage",
    description: "Real-time visibility across the full distribution network.",
  },
];
