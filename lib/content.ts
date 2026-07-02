import {
  BarChart3,
  Boxes,
  Brain,
  Compass,
  Database,
  Gauge,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  ListChecks,
  Network,
  Route,
  Sparkles,
  Target,
  Truck,
  Warehouse,
  Workflow,
} from "lucide-react";

import type {
  ExecutiveMetric,
  ExpertiseArea,
  FeaturedProject,
  KnowledgeArticlePreview,
  LeadershipPrinciple,
} from "@/types";

/**
 * Every figure below is traceable to the CV. No invented statistics.
 */
export const executiveMetrics: ExecutiveMetric[] = [
  {
    value: 16,
    suffix: "+",
    label: "Years in Supply Chain Leadership",
    detail: "Amazon, Reliance Retail, and IBO — greenfield to multi-city scale",
  },
  {
    value: 3,
    label: "Enterprises Transformed",
    detail: "Built and rebuilt logistics networks inside three high-growth organizations",
  },
  {
    value: 5,
    label: "AI & Digital Platforms Architected",
    detail:
      "NexusOne, RouteSphere (x2), SCS-Fabric, and executive control-tower dashboards",
  },
  {
    value: 90,
    suffix: "+",
    label: "Team Members Led",
    detail: "Direct and matrixed leadership across hub, transport, and vendor functions",
  },
  {
    value: 5,
    label: "City & State Networks Scaled",
    detail: "5-city IBO expansion; 5-state South India hub and transportation network",
  },
  {
    value: 21,
    prefix: "$",
    suffix: "M+",
    label: "Annual Logistics P&L Owned",
    detail: "Full P&L accountability across warehousing, transport, and vendor spend",
  },
];

export const leadershipPrinciples: LeadershipPrinciple[] = [
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Every network decision is tested against one question: does this make the customer experience faster, more reliable, or more transparent.",
  },
  {
    icon: Target,
    title: "Operational Excellence",
    description:
      "Discipline in the details — SLA scorecards, utilization tracking, and root-cause reviews — compounds into networks that simply work.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Dashboards over anecdotes. Executive decisions are built on live KPI visibility, not the loudest voice in the room.",
  },
  {
    icon: Workflow,
    title: "Continuous Improvement",
    description:
      "Lean Six Sigma thinking applied relentlessly — every process is a draft waiting for its next iteration.",
  },
  {
    icon: Sparkles,
    title: "AI With Purpose",
    description:
      "AI is deployed where it removes real friction from planning and decision-making — never adopted for its own sake.",
  },
  {
    icon: Network,
    title: "Cross-Functional Leadership",
    description:
      "Supply chain sits at the intersection of every function. Great outcomes require operating fluently across all of them.",
  },
  {
    icon: ListChecks,
    title: "Execution Discipline",
    description:
      "Strategy is cheap; execution is the differentiator. Plans are broken into owners, dates, and measurable checkpoints.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "The best ideas often come from the warehouse floor, not the boardroom — innovation means listening to ground truth.",
  },
  {
    icon: GraduationCap,
    title: "People Development",
    description:
      "Building teams that outlast any single leader — coaching managers into leaders is the highest-leverage work there is.",
  },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    icon: Compass,
    title: "Supply Chain Strategy & Network Design",
    description:
      "Designing greenfield distribution networks and capacity plans that scale ahead of business growth.",
    impact: "Scaled IBO from 2 to 5 cities and 50 stores in 12 months",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Inventory Excellence",
    description:
      "Driving warehouse productivity, space planning, and inventory accuracy across large-scale facilities.",
    impact: "Led India's largest Return Centre (400,000 sq. ft.)",
  },
  {
    icon: Truck,
    title: "Transportation & Last-Mile Optimization",
    description:
      "Route redesign, milk-run implementation, fleet right-sizing, and carrier renegotiation.",
    impact: "$2.6M (12%) transportation savings across a $21M+ network",
  },
  {
    icon: Route,
    title: "Planning, Forecasting & Analytics",
    description:
      "Turning operational data into forward-looking capacity, demand, and network plans.",
    impact: "Vendor scorecards drove 98% SLA compliance across 40+ partners",
  },
  {
    icon: Brain,
    title: "AI Product Development & Prompt Engineering",
    description:
      "Architecting AI-powered planning and decision-intelligence platforms from the ground up.",
    impact: "Independently built NexusOne, an end-to-end AI planning platform",
  },
  {
    icon: Database,
    title: "Business Analytics & Executive Dashboards",
    description:
      "Building the executive dashboards leadership actually uses to run the business daily.",
    impact: "RouteSphere & Transportation Control Towers cut manual tracking ~40%",
  },
  {
    icon: Gauge,
    title: "Digital Transformation & Automation",
    description:
      "Replacing manual, spreadsheet-driven operations with automated, real-time systems.",
    impact: "Automated invoicing lifted billing accuracy from 94% to 99.2%",
  },
  {
    icon: Boxes,
    title: "P&L Ownership & Vendor Management",
    description:
      "Full financial accountability paired with structured vendor SLA and CAPEX governance.",
    impact: "Reduced cost-to-revenue ratio from 6% to ~3.6% at IBO",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "nexusone",
    title: "NexusOne",
    summary: "An AI-powered enterprise platform for end-to-end supply chain planning.",
    badges: ["AI Planning", "Decision Intelligence", "Independently Architected"],
    value: "End-to-end planning, optimization, and executive decision intelligence.",
    icon: Brain,
  },
  {
    slug: "routesphere-control-tower",
    title: "RouteSphere Control Tower",
    summary:
      "Executive dashboards for real-time transportation visibility and network health.",
    badges: ["Executive Dashboards", "Real-Time Data", "Network Health"],
    value: "Unified visibility into delivery performance and operational KPIs.",
    icon: Gauge,
  },
  {
    slug: "transportation-control-tower",
    title: "Transportation Control Tower",
    summary: "A single-pane view of transportation KPIs built for daily executive use.",
    badges: ["Analytics", "KPI Monitoring", "Operations"],
    value: "Cut manual shipment tracking effort by roughly 40%.",
    icon: BarChart3,
  },
  {
    slug: "routesphere-delivery-app",
    title: "RouteSphere Delivery App",
    summary: "A last-mile digital solution for drivers and delivery operations.",
    badges: ["Mobile", "Last-Mile", "Proof of Delivery"],
    value: "Real-time shipment visibility and digital delivery workflows.",
    icon: Truck,
  },
  {
    slug: "scs-fabric",
    title: "SCS-Fabric Space Intelligence Engine",
    summary: "An AI-powered platform for warehouse planning and space optimization.",
    badges: ["AI Planning", "Warehouse", "Scenario Modelling"],
    value: "Capacity optimization and space estimation for warehouse networks.",
    icon: Warehouse,
  },
];

export const knowledgeArticlePreviews: KnowledgeArticlePreview[] = [
  {
    category: "Supply Chain",
    title: "What It Actually Takes to Launch 50 Stores in 12 Months",
    readingTime: "9 min",
    summary:
      "The network design, hiring, and vendor-onboarding sequence behind scaling a distribution footprint from 2 cities to 5 without breaking service levels.",
    tags: ["Network Design", "Scaling", "Operations"],
  },
  {
    category: "AI",
    title: "Where AI Actually Helps in Supply Chain Planning",
    readingTime: "11 min",
    summary:
      "A practitioner's view on which planning and decision problems are worth solving with AI — and which are still better solved with a well-designed dashboard.",
    tags: ["AI", "Planning", "Product"],
  },
  {
    category: "Leadership",
    title: "Running a 90-Person Operations Team Without Losing the Ground Truth",
    readingTime: "8 min",
    summary:
      "How structured scorecards, floor time, and clear ownership keep large operational teams aligned to the numbers that matter.",
    tags: ["Leadership", "People", "Execution"],
  },
];
