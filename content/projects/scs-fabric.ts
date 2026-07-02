import {
  Boxes,
  Brain,
  CheckCircle2,
  FileText,
  FlaskConical,
  LayoutDashboard,
  Layers3,
  Map,
  Presentation,
  Puzzle,
  Ruler,
  Sparkles,
  Target,
  TrendingUp,
  Warehouse,
} from "lucide-react";

import type { CaseStudy } from "@/types/project";

export const scsFabric: CaseStudy = {
  slug: "scs-fabric",
  title: "SCS-Fabric Space Intelligence Engine",
  tagline:
    "An AI-powered platform that turns warehouse space planning from guesswork into modelled, testable scenarios.",
  category: "Warehouse Intelligence",
  businessDomain: "Warehouse & Distribution Center Planning",
  status: "Live",
  readingTime: "8 min",
  techStack: ["AI/ML", "Python", "React", "SQL"],
  icon: Warehouse,

  businessContext:
    "As the distribution network expanded into new facilities, warehouse space planning was still done manually — capacity estimates were rough, and layout decisions were made without testing alternatives first.",
  businessChallenge:
    "Every new facility or category expansion meant re-estimating space needs from scratch, with no way to model different layout or capacity scenarios before committing to a plan.",
  challengePoints: [
    "Space estimation for new facilities relied on manual, rule-of-thumb calculations.",
    "No tool existed to compare layout or capacity scenarios before committing capital.",
    "Category growth regularly outpaced the space planning that supported it.",
    "Facility teams had no shared model of how space needs would evolve over time.",
  ],
  objectives: [
    "Build an AI-assisted engine for warehouse space estimation and planning.",
    "Enable scenario modelling to compare layout and capacity options.",
    "Support capacity planning ahead of category growth, not reactively.",
    "Give facility teams a shared, data-backed model of space needs.",
  ],
  myRole: {
    summary:
      "I developed SCS-Fabric as an AI-powered platform for warehouse planning — defining the modelling approach and building the engine that now supports facility and capacity decisions.",
    responsibilities: [
      "Defined the space estimation and scenario modelling approach.",
      "Built the AI-assisted optimization logic for capacity planning.",
      "Designed the scenario comparison interface for facility teams.",
      "Validated model outputs against real facility layouts.",
    ],
  },
  solutionOverview:
    "SCS-Fabric models facility and SKU data to estimate space requirements and simulate layout and capacity scenarios, giving facility teams a way to test decisions before committing capital — replacing rule-of-thumb estimation with a repeatable, data-backed planning process.",

  architecture: {
    title: "From facility data to a testable capacity plan",
    description:
      "Facility and SKU data feed a modelling engine that surfaces comparable scenarios before commitment.",
    nodes: [
      {
        icon: Boxes,
        label: "Facility & SKU Data",
        detail: "Layouts, volumes, categories",
      },
      {
        icon: Ruler,
        label: "Space Modelling Engine",
        detail: "Capacity & footprint estimation",
      },
      {
        icon: FlaskConical,
        label: "Scenario Simulator",
        detail: "Layout & capacity alternatives",
      },
      { icon: Brain, label: "AI Optimization Layer", detail: "Best-fit recommendations" },
      {
        icon: LayoutDashboard,
        label: "Space Intelligence Dashboard",
        detail: "Scenario comparison view",
      },
      {
        icon: CheckCircle2,
        label: "Facility Planning Decision",
        detail: "Capital committed with confidence",
      },
    ],
  },
  techBadges: [
    { label: "AI/ML", category: "Data & AI" },
    { label: "Python", category: "Backend" },
    { label: "React", category: "Frontend" },
    { label: "SQL", category: "Backend" },
  ],
  implementationPhases: [
    {
      phase: "Discovery",
      title: "Understanding manual estimation",
      description:
        "Reviewed how facility teams currently estimated space needs, and where it broke down.",
    },
    {
      phase: "Analysis",
      title: "Modelling the variables",
      description:
        "Identified the facility and SKU variables that actually drive space requirements.",
    },
    {
      phase: "Design",
      title: "Designing scenario comparison",
      description:
        "Defined how facility teams would compare layout and capacity options side by side.",
    },
    {
      phase: "Development",
      title: "Building the modelling engine",
      description: "Built the space estimation and AI-assisted optimization logic.",
    },
    {
      phase: "Testing",
      title: "Validating against real layouts",
      description: "Checked model outputs against known facility layouts for accuracy.",
    },
    {
      phase: "Deployment",
      title: "Introducing to facility teams",
      description:
        "Rolled out SCS-Fabric for use in upcoming facility planning decisions.",
    },
    {
      phase: "Adoption",
      title: "Making it the default planning step",
      description:
        "Positioned scenario modelling as a standard step before capital commitment.",
    },
    {
      phase: "Continuous Improvement",
      title: "Refining the model",
      description:
        "Improved estimation accuracy using outcomes from completed facility launches.",
    },
  ],
  keyFeatures: [
    {
      icon: Ruler,
      title: "Space Estimation",
      description:
        "AI-assisted capacity and footprint estimates for new or expanding facilities.",
    },
    {
      icon: FlaskConical,
      title: "Scenario Modelling",
      description: "Compare layout and capacity alternatives before committing capital.",
    },
    {
      icon: Layers3,
      title: "Category-Aware Planning",
      description:
        "Space models account for how different categories actually use space.",
    },
    {
      icon: Puzzle,
      title: "Facility Fit Recommendations",
      description: "AI-assisted suggestions for best-fit layouts given constraints.",
    },
  ],
  dashboardHighlights: [
    "Side-by-side comparison of layout and capacity scenarios.",
    "Space utilization estimates by category and facility.",
    "Capacity headroom projections against growth plans.",
    "Scenario history for facilities planned to date.",
  ],
  businessImpact: [
    {
      icon: Target,
      title: "Confident Capital Decisions",
      description:
        "Facility investments are now tested against modelled scenarios first.",
    },
    {
      icon: TrendingUp,
      title: "Ahead of Category Growth",
      description: "Capacity planning shifted from reactive to proactive.",
    },
    {
      icon: Sparkles,
      title: "Shared Planning Model",
      description: "Facility teams now work from the same data-backed space model.",
    },
    {
      icon: Warehouse,
      title: "Repeatable Process",
      description: "Each new facility no longer starts space planning from scratch.",
    },
  ],
  kpis: [
    {
      display: "AI-Assisted",
      label: "Space Estimation",
      description: "Model-driven capacity estimates, not rule-of-thumb calculations.",
    },
    {
      display: "Scenario-Based",
      label: "Capacity Planning",
      description: "Alternatives compared before capital is committed.",
    },
    {
      display: "Independently Built",
      label: "Ownership Model",
      description: "Developed end-to-end as an AI-powered planning platform.",
    },
    {
      display: "Repeatable",
      label: "Facility Planning Process",
      description: "A consistent model applied across every new facility.",
    },
  ],
  challengesMitigation: [
    {
      challenge:
        "Facility teams had years of institutional intuition that a model would need to earn trust against.",
      mitigation:
        "Validated the model's outputs against real, already-built facility layouts before relying on it for new decisions.",
    },
    {
      challenge:
        "Space requirements vary significantly by category, making a one-size model inaccurate.",
      mitigation:
        "Built category-aware modelling so estimates reflected how each category actually used space.",
    },
    {
      challenge:
        "No historical dataset existed purpose-built for this kind of modelling.",
      mitigation:
        "Assembled the modelling dataset from existing facility and SKU records, adapting to available data rather than waiting for ideal data.",
    },
  ],
  lessonsLearned: [
    "A planning model earns adoption by being validated against decisions people already trust, not by being theoretically elegant.",
    "Category-level nuance matters more than facility-level averages when estimating space needs.",
    "Scenario comparison is more valuable to decision-makers than a single 'optimal' answer — people want to see the trade-offs.",
  ],
  futureRoadmap: [
    {
      icon: Sparkles,
      title: "Automated Layout Generation",
      description: "Move from scenario comparison to AI-generated layout proposals.",
    },
    {
      icon: Brain,
      title: "Predictive Capacity Alerts",
      description:
        "Flag facilities approaching capacity limits before growth outpaces space.",
    },
    {
      icon: Map,
      title: "Network-Level Optimization",
      description:
        "Extend modelling from single facilities to network-wide space allocation.",
    },
  ],
  downloads: [
    {
      icon: FileText,
      label: "Executive Summary",
      description: "A one-page overview of SCS-Fabric's approach and impact.",
    },
    {
      icon: Presentation,
      label: "Modelling Methodology",
      description: "How the space estimation and scenario engine works.",
    },
  ],
  gallery: [
    {
      kind: "diagram",
      title: "Facility-to-Decision Flow",
      caption: "How facility data becomes a tested capacity plan.",
      icon: Boxes,
    },
    {
      kind: "mockup",
      title: "Scenario Comparison Concept",
      caption: "Comparing layout and capacity alternatives side by side.",
      icon: FlaskConical,
    },
  ],
  relatedSlugs: ["nexusone", "transportation-control-tower"],
  aiTechnologies: [
    "AI Optimization Layer",
    "Space Modeling Engine",
    "Scenario Simulation",
  ],
  links: {
    liveDemo: "https://scs-fabric-space-engine.vercel.app/demo",
  },
};
