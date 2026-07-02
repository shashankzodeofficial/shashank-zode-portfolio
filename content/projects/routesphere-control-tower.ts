import {
  Activity,
  CheckCircle2,
  Cloud,
  FileText,
  Gauge,
  LayoutDashboard,
  Map,
  Network,
  Presentation,
  Radar,
  Rocket,
  Route,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
} from "lucide-react";

import type { CaseStudy } from "@/types/project";

export const routeSphereControlTower: CaseStudy = {
  slug: "routesphere-control-tower",
  title: "RouteSphere Control Tower",
  tagline:
    "A single-pane executive dashboard that turns scattered carrier and route data into one live view of network health.",
  category: "Executive Dashboards",
  businessDomain: "Logistics & Transportation Network",
  status: "Live",
  readingTime: "8 min",
  techStack: ["React", "TypeScript", "Power BI", "SQL", "APIs"],
  icon: Gauge,

  businessContext:
    "A multi-state hub and transportation network was running across dozens of carriers and routes, but leadership had no single view of how the network was actually performing on any given day.",
  businessChallenge:
    "Network health, delivery performance, and carrier reliability were each tracked in different tools — by the time issues surfaced in a report, the delivery had usually already slipped.",
  challengePoints: [
    "Delivery performance data was scattered across carrier portals and manual reports.",
    "Network health issues were discovered reactively, after customers were affected.",
    "No consistent KPI definitions existed across hubs, making comparisons unreliable.",
    "Executives had no daily view of the network — only weekly or monthly summaries.",
  ],
  objectives: [
    "Build one dashboard that shows network health across every hub and carrier.",
    "Surface delivery performance issues before they affect customers.",
    "Standardize KPI definitions across the network for reliable comparison.",
    "Give executives a daily, not monthly, view of transportation performance.",
  ],
  myRole: {
    summary:
      "I architected RouteSphere Control Tower end-to-end, from defining which KPIs actually mattered to designing the executive-facing dashboard leadership now checks daily.",
    responsibilities: [
      "Defined the network health and delivery performance KPI framework.",
      "Designed the data architecture connecting carrier and route data sources.",
      "Built the executive dashboard views for daily operational use.",
      "Drove adoption across hub managers and executive stakeholders.",
    ],
  },
  solutionOverview:
    "RouteSphere Control Tower consolidates carrier, route, and delivery data into one live dashboard, scoring network health and surfacing at-risk deliveries before they become customer-facing problems — replacing a patchwork of manual reports with a single executive view.",

  architecture: {
    title: "From carrier data to a daily executive view",
    description:
      "Route and carrier signals are consolidated, scored, and surfaced through one control tower dashboard.",
    nodes: [
      {
        icon: Truck,
        label: "Carrier & Route Data",
        detail: "Multi-carrier, multi-hub inputs",
      },
      { icon: Cloud, label: "Live Tracking Feed", detail: "Continuous shipment status" },
      { icon: Activity, label: "Performance Engine", detail: "Delivery & SLA scoring" },
      {
        icon: Radar,
        label: "Network Health Scoring",
        detail: "Hub and route-level risk",
      },
      {
        icon: LayoutDashboard,
        label: "Control Tower Dashboard",
        detail: "Executive daily view",
      },
      {
        icon: CheckCircle2,
        label: "Operational Response",
        detail: "Hub teams act on alerts",
      },
    ],
  },
  techBadges: [
    { label: "React", category: "Frontend" },
    { label: "TypeScript", category: "Frontend" },
    { label: "Power BI", category: "Data & AI" },
    { label: "SQL", category: "Backend" },
    { label: "APIs", category: "Platform" },
    { label: "Automation", category: "Platform" },
  ],
  implementationPhases: [
    {
      phase: "Discovery",
      title: "Auditing the reporting patchwork",
      description:
        "Catalogued every carrier portal and manual report leadership relied on.",
    },
    {
      phase: "Analysis",
      title: "Defining what health means",
      description: "Established a consistent KPI framework across hubs and carriers.",
    },
    {
      phase: "Design",
      title: "Designing the daily view",
      description:
        "Prioritized the handful of signals an executive actually needs each morning.",
    },
    {
      phase: "Development",
      title: "Building the pipeline",
      description: "Connected carrier and route data sources into one live feed.",
    },
    {
      phase: "Testing",
      title: "Validating scoring logic",
      description: "Cross-checked network health scores against known incidents.",
    },
    {
      phase: "Deployment",
      title: "Rolling out to hub managers",
      description: "Introduced the dashboard hub by hub to build familiarity.",
    },
    {
      phase: "Adoption",
      title: "Making it the daily habit",
      description: "Positioned the dashboard as the first check of the operational day.",
    },
    {
      phase: "Continuous Improvement",
      title: "Refining the signal",
      description: "Tuned thresholds and views based on what leadership actually used.",
    },
  ],
  keyFeatures: [
    {
      icon: Radar,
      title: "Network Health Scoring",
      description: "A single score per hub and route, refreshed continuously.",
    },
    {
      icon: Route,
      title: "Delivery Performance Tracking",
      description: "SLA adherence visible before it becomes a customer complaint.",
    },
    {
      icon: LayoutDashboard,
      title: "Executive Daily View",
      description: "The handful of signals leadership needs each morning, in one place.",
    },
    {
      icon: Network,
      title: "Multi-Carrier Consolidation",
      description: "One consistent view across every carrier and hub in the network.",
    },
  ],
  dashboardHighlights: [
    "Live network health score by hub and route.",
    "Delivery SLA adherence trends across carriers.",
    "At-risk shipment alerts before customer impact.",
    "Executive summary view refreshed throughout the day.",
  ],
  businessImpact: [
    {
      icon: TrendingUp,
      title: "Supported Network Optimization",
      description:
        "Provided the visibility behind broader transportation cost savings initiatives.",
    },
    {
      icon: Target,
      title: "Earlier Issue Detection",
      description: "Network health scoring surfaces risk before customers are affected.",
    },
    {
      icon: Rocket,
      title: "Daily Executive Visibility",
      description: "Replaced monthly summaries with a live, always-current view.",
    },
    {
      icon: Sparkles,
      title: "One Consistent KPI Language",
      description: "Every hub now reports against the same standardized metrics.",
    },
  ],
  kpis: [
    {
      display: "$2.6M",
      label: "Transportation Savings Supported",
      description:
        "Visibility that underpinned broader network optimization initiatives.",
    },
    {
      display: "Daily",
      label: "Executive Reporting Cadence",
      description: "Up from monthly, manually-compiled summaries.",
    },
    {
      display: "Multi-Hub",
      label: "Network Coverage",
      description: "Consolidated view across every hub in a 5-state network.",
    },
    {
      display: "Real-Time",
      label: "Network Health Visibility",
      description: "Continuous scoring rather than after-the-fact reporting.",
    },
  ],
  challengesMitigation: [
    {
      challenge:
        "KPI definitions varied by hub, making network-wide comparison unreliable.",
      mitigation:
        "Standardized a single KPI framework and enforced it across every hub's data feed.",
    },
    {
      challenge: "Carrier data arrived in inconsistent formats and cadences.",
      mitigation:
        "Built a normalization layer so every source fed the same underlying model.",
    },
    {
      challenge: "Hub managers were used to their own local reports.",
      mitigation:
        "Rolled out hub by hub, showing how the dashboard made their own reporting easier, not just leadership's.",
    },
  ],
  lessonsLearned: [
    "A control tower is only as good as its KPI definitions — get those wrong and the dashboard just adds noise.",
    "Executives don't want more data; they want the three numbers that tell them whether to worry.",
    "Adoption follows when a tool makes the user's own job easier, not just their manager's visibility.",
  ],
  futureRoadmap: [
    {
      icon: Sparkles,
      title: "Predictive Risk Scoring",
      description: "Move from current-state health scores to predicting tomorrow's risk.",
    },
    {
      icon: Map,
      title: "Carrier Scorecarding",
      description: "Extend the framework into formal carrier performance scorecards.",
    },
    {
      icon: Activity,
      title: "Automated Escalation",
      description:
        "Route at-risk shipments directly to the right hub owner automatically.",
    },
  ],
  downloads: [
    {
      icon: FileText,
      label: "Executive Summary",
      description: "A one-page overview of the Control Tower's approach and impact.",
    },
    {
      icon: Presentation,
      label: "KPI Framework Overview",
      description: "The standardized network health scoring methodology.",
    },
  ],
  gallery: [
    {
      kind: "diagram",
      title: "Carrier-to-Dashboard Flow",
      caption: "How multi-carrier data becomes one health score.",
      icon: Network,
    },
    {
      kind: "mockup",
      title: "Network Health Dashboard Concept",
      caption: "The daily executive view of network performance.",
      icon: LayoutDashboard,
    },
  ],
  relatedSlugs: ["transportation-control-tower", "routesphere-delivery-app"],
};
