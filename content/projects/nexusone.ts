import {
  Brain,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  Gauge,
  LayoutDashboard,
  LineChart,
  Map,
  Presentation,
  Rocket,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import type { CaseStudy } from "@/types/project";

export const nexusone: CaseStudy = {
  slug: "nexusone",
  title: "NexusOne",
  tagline:
    "An AI-powered platform that turns supply chain planning from a monthly spreadsheet exercise into a live, executive-grade decision system.",
  category: "AI Planning",
  businessDomain: "Retail & Omnichannel Supply Chain",
  status: "Live",
  readingTime: "9 min",
  techStack: ["AI/ML", "Python", "React", "Power BI", "SQL", "Prompt Engineering"],
  icon: Brain,

  businessContext:
    "A fast-growing retail chain was expanding its distribution footprint across multiple new cities at once. Planning decisions — what to stock, where, and how much — were still being made from static spreadsheets that were out of date the moment they were exported.",
  businessChallenge:
    "Leadership needed end-to-end visibility into inventory, demand, and network capacity to plan confidently at multi-city scale — but no existing tool combined operational data with the decision-support planners actually needed.",
  challengePoints: [
    "Inventory, sales, and warehouse data lived in separate systems with no unified view.",
    "Planning cycles ran on manual spreadsheet consolidation, days behind actual conditions.",
    "No scenario modelling capability existed to stress-test decisions before committing capital.",
    "Off-the-shelf planning tools were either too generic or too expensive to justify at this stage of growth.",
  ],
  objectives: [
    "Unify inventory, demand, and network data into a single planning surface.",
    "Give planners and executives the same real-time view of the business.",
    "Support scenario modelling before capital or inventory commitments.",
    "Build a platform that scales with the network rather than needing to be replaced.",
  ],
  myRole: {
    summary:
      "I independently conceived, architected, and built NexusOne from the ground up — the first time I moved from sponsoring a planning tool to being the one who designed and shipped it.",
    responsibilities: [
      "Defined the product vision and prioritized which planning problems to solve first.",
      "Designed the data model unifying inventory, demand, and network signals.",
      "Architected the AI-assisted forecasting and optimization logic.",
      "Built the executive-facing decision dashboard end-to-end.",
      "Ran adoption with planning teams, iterating based on real usage.",
    ],
  },
  solutionOverview:
    "NexusOne ingests inventory, sales, and network data into a single model, applies AI-assisted forecasting to project demand, and surfaces the resulting recommendations through an executive dashboard built for fast, confident decisions — replacing a week of spreadsheet consolidation with a live view of the network.",

  architecture: {
    title: "How NexusOne turns raw signals into a decision",
    description:
      "A single pipeline connects operational data sources to the forecasting engine and, ultimately, to the actions planners and executives take every week.",
    nodes: [
      {
        icon: Database,
        label: "Data Ingestion",
        detail: "Inventory, sales, warehouse signals",
      },
      {
        icon: LineChart,
        label: "Demand Signals",
        detail: "Historical and live sales patterns",
      },
      {
        icon: Brain,
        label: "AI Forecasting Engine",
        detail: "Demand and replenishment projections",
      },
      {
        icon: SlidersHorizontal,
        label: "Scenario Optimization",
        detail: "Capacity & cost trade-offs",
      },
      {
        icon: LayoutDashboard,
        label: "Executive Dashboard",
        detail: "Decision-ready view",
      },
      {
        icon: CheckCircle2,
        label: "Action & Replenishment",
        detail: "Plans executed on the ground",
      },
    ],
  },
  techBadges: [
    { label: "AI/ML", category: "Data & AI" },
    { label: "Prompt Engineering", category: "Data & AI" },
    { label: "Power BI", category: "Data & AI" },
    { label: "Python", category: "Backend" },
    { label: "SQL", category: "Backend" },
    { label: "React", category: "Frontend" },
    { label: "APIs", category: "Platform" },
    { label: "Automation", category: "Platform" },
  ],
  implementationPhases: [
    {
      phase: "Discovery",
      title: "Understanding the planning gap",
      description:
        "Shadowed planners through a full planning cycle to see exactly where spreadsheets broke down.",
    },
    {
      phase: "Analysis",
      title: "Mapping the data landscape",
      description:
        "Catalogued every system holding inventory, sales, and network data — and where they disagreed.",
    },
    {
      phase: "Design",
      title: "Designing the decision model",
      description:
        "Defined what a planner and an executive each needed to see, and in what order.",
    },
    {
      phase: "Development",
      title: "Building the pipeline and engine",
      description:
        "Built the ingestion layer, forecasting logic, and dashboard as a single connected system.",
    },
    {
      phase: "Testing",
      title: "Validating against reality",
      description:
        "Ran NexusOne's outputs in parallel with manual planning to build confidence before cutover.",
    },
    {
      phase: "Deployment",
      title: "Rolling out to planning teams",
      description: "Phased the rollout by category to keep support load manageable.",
    },
    {
      phase: "Adoption",
      title: "Making it the default",
      description:
        "Retired the legacy spreadsheet process once planners trusted the new view.",
    },
    {
      phase: "Continuous Improvement",
      title: "Iterating on real usage",
      description:
        "Kept refining forecast logic and dashboard views based on planner feedback.",
    },
  ],
  keyFeatures: [
    {
      icon: Brain,
      title: "AI-Assisted Forecasting",
      description:
        "Demand projections that update as new sales and inventory data arrives.",
    },
    {
      icon: SlidersHorizontal,
      title: "Scenario Modelling",
      description: "Stress-test capacity and cost trade-offs before committing capital.",
    },
    {
      icon: LayoutDashboard,
      title: "Executive Decision View",
      description: "One dashboard that planners and leadership both trust and use.",
    },
    {
      icon: Gauge,
      title: "Exception-Based Alerts",
      description: "Surfaces only the SKUs and locations that need a human decision.",
    },
  ],
  dashboardHighlights: [
    "Network-wide inventory position at a glance, refreshed continuously.",
    "Forecast vs. actual demand tracked by category and location.",
    "Scenario comparisons for capacity and replenishment decisions.",
    "Exception queue highlighting the decisions that need attention first.",
  ],
  businessImpact: [
    {
      icon: Rocket,
      title: "Faster Planning Cycles",
      description:
        "Replaced days of spreadsheet consolidation with a live, always-current view.",
    },
    {
      icon: Target,
      title: "More Confident Decisions",
      description: "Scenario modelling lets planners see trade-offs before committing.",
    },
    {
      icon: Users,
      title: "One Shared View",
      description:
        "Planners and executives now work from the same data, not competing spreadsheets.",
    },
    {
      icon: Sparkles,
      title: "A Platform, Not a Report",
      description:
        "Built to extend as the network grows, rather than needing to be rebuilt.",
    },
  ],
  kpis: [
    {
      display: "5 Cities",
      label: "Network Scale Supported",
      description: "Planning coverage across a multi-city distribution network.",
    },
    {
      display: "Real-Time",
      label: "Decision Visibility",
      description: "Live inventory and demand data, not month-end reporting.",
    },
    {
      display: "End-to-End",
      label: "Planning Coverage",
      description: "From raw data ingestion to executive decision in one platform.",
    },
    {
      display: "Solo-Built",
      label: "Ownership Model",
      description: "Independently architected and shipped, start to finish.",
    },
  ],
  challengesMitigation: [
    {
      challenge: "Inventory, sales, and warehouse data lived in disconnected systems.",
      mitigation:
        "Built a unifying ingestion layer that normalized every source into one data model.",
    },
    {
      challenge:
        "Planners were wary of trusting a new AI-driven tool with real decisions.",
      mitigation:
        "Ran NexusOne alongside the existing manual process until forecast accuracy earned trust.",
    },
    {
      challenge: "No dedicated engineering team was available to build the platform.",
      mitigation:
        "Prioritized ruthlessly — shipped the highest-leverage modules first and iterated from there.",
    },
  ],
  lessonsLearned: [
    "A planning tool earns trust by being right consistently, not by being sophisticated.",
    "The best interface for an executive is the one that answers their next question, not the one with the most charts.",
    "Building the tool yourself means you can't blame the requirements — every gap is a design choice you own.",
  ],
  futureRoadmap: [
    {
      icon: Sparkles,
      title: "Agentic Planning Assistant",
      description:
        "Move from dashboards to an assistant that proposes and explains planning actions.",
    },
    {
      icon: Cpu,
      title: "Predictive Replenishment",
      description:
        "Trigger replenishment recommendations automatically ahead of stockout risk.",
    },
    {
      icon: Map,
      title: "ERP Integration",
      description: "Connect NexusOne outputs directly into enterprise ERP workflows.",
    },
  ],
  downloads: [
    {
      icon: FileText,
      label: "Executive Summary",
      description: "A one-page overview of NexusOne's approach and impact.",
    },
    {
      icon: Presentation,
      label: "Architecture Overview",
      description: "A deeper look at the platform's technical design.",
    },
  ],
  gallery: [
    {
      kind: "diagram",
      title: "Data-to-Decision Pipeline",
      caption: "How raw signals become a planning decision.",
      icon: Database,
    },
    {
      kind: "mockup",
      title: "Executive Dashboard Concept",
      caption: "The decision-ready view planners and leadership share.",
      icon: LayoutDashboard,
    },
    {
      kind: "mockup",
      title: "Scenario Comparison View",
      caption: "Evaluating capacity and cost trade-offs side by side.",
      icon: SlidersHorizontal,
    },
  ],
  relatedSlugs: ["scs-fabric", "routesphere-control-tower"],
  aiTechnologies: [
    "AI-Assisted Demand Forecasting",
    "Prompt Engineering",
    "Scenario Optimization Modeling",
  ],
  links: {
    liveDemo: "https://nexusone-ai.vercel.app/",
  },
};
