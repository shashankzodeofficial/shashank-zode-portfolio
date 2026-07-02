import {
  AlertTriangle,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  ClipboardList,
  Database,
  FileSearch,
  FileText,
  LayoutDashboard,
  Lightbulb,
  MessageSquare,
  Mic,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Warehouse,
} from "lucide-react";

import type { AIExperiment } from "@/types/ai-labs";

export const aiExperiments: AIExperiment[] = [
  {
    slug: "intelligent-inventory-planning",
    title: "Intelligent Inventory Planning Assistant",
    icon: Brain,
    category: "Planning & Forecasting",
    tags: ["Inventory", "Forecasting", "AI Planning"],
    businessProblem:
      "Static reorder points don't reflect real demand volatility, leading to a recurring mix of stockouts on fast-movers and excess inventory on slow-movers — a pattern that shows up in every spreadsheet-driven planning process.",
    objective:
      "Give planners a continuously updated replenishment signal instead of a quarterly-reviewed static reorder point, without requiring a full ERP replacement.",
    aiApproach:
      "Combine historical sales velocity, lead-time variability, and seasonality into a recalculated signal on a rolling basis, with exceptions flagged for human review rather than auto-committing every recommendation.",
    technologies: ["Python", "Forecasting Models", "Power BI", "Prompt Engineering"],
    architecture: {
      title: "From raw signals to a planner-ready recommendation",
      description:
        "The same pipeline pattern behind NexusOne's forecasting engine, scoped down to a single decision: what to reorder, and how much.",
      nodes: [
        { icon: Database, label: "Sales & Inventory Data", detail: "Rolling historical window" },
        { icon: TrendingUp, label: "Demand Signal Model", detail: "Velocity + seasonality" },
        { icon: Brain, label: "Recommendation Engine", detail: "Reorder qty & timing" },
        { icon: AlertTriangle, label: "Exception Review", detail: "Human-in-the-loop check" },
        { icon: CheckCircle2, label: "Planner Action", detail: "Approve or adjust" },
      ],
    },
    businessImpact: [
      {
        icon: TrendingUp,
        title: "Fewer Stockouts",
        description: "Fast-movers get recalculated signals instead of stale static thresholds.",
      },
      {
        icon: Target,
        title: "Less Excess Inventory",
        description: "Slow-movers are flagged before capital gets tied up unnecessarily.",
      },
      {
        icon: Users,
        title: "Planner Trust",
        description: "Exception-based review kept humans in control of every commitment.",
      },
    ],
    lessonsLearned: [
      "A forecasting model earns adoption by being reviewable, not just accurate — planners need to see why a number changed.",
      "Rolling recalculation beats static thresholds even when the underlying model is simple.",
    ],
    futureEnhancements: [
      "Add supplier lead-time risk scoring as a second input layer.",
      "Auto-generate a plain-English explanation alongside every recommendation.",
    ],
    relatedProjectSlug: "nexusone",
    relatedArticleSlug: "ai-in-supply-chain-decision-making",
  },
  {
    slug: "ai-warehouse-space-optimization",
    title: "AI-Powered Warehouse Space Optimization",
    icon: Warehouse,
    category: "Warehouse & Operations",
    tags: ["Warehouse", "Space Planning", "Scenario Modeling"],
    businessProblem:
      "Facility layout and capacity decisions were historically made on static spreadsheets and gut feel, with no fast way to compare multiple layout scenarios before committing real estate or capital.",
    objective:
      "Let facility planners simulate multiple space and layout scenarios in minutes instead of days, and see a ranked recommendation before committing capital.",
    aiApproach:
      "Model facility, SKU, and volume data into a space-modelling engine, then layer an optimization pass that scores layout alternatives against throughput and cost objectives — the same core approach behind SCS-Fabric.",
    technologies: ["AI/ML", "Python", "Scenario Simulation", "SQL"],
    architecture: {
      title: "How a layout decision gets simulated",
      description:
        "Facility and SKU data feed a modelling engine that scores every layout alternative before a planner commits capital.",
      nodes: [
        { icon: Database, label: "Facility & SKU Data", detail: "Layouts, volumes, categories" },
        { icon: LayoutDashboard, label: "Space Modelling Engine", detail: "Capacity estimation" },
        { icon: Sparkles, label: "AI Optimization Layer", detail: "Best-fit scoring" },
        { icon: BarChart3, label: "Scenario Comparison", detail: "Ranked alternatives" },
        { icon: CheckCircle2, label: "Capital Decision", detail: "Committed with confidence" },
      ],
    },
    businessImpact: [
      {
        icon: Target,
        title: "Faster Capital Decisions",
        description: "Scenario comparison replaces days of manual layout spreadsheets.",
      },
      {
        icon: Warehouse,
        title: "Higher Space Utilization",
        description: "Layout alternatives are scored against real throughput objectives.",
      },
    ],
    lessonsLearned: [
      "Optimization models are only as good as the facility data feeding them — data cleanup was most of the work.",
      "Planners wanted a ranked shortlist, not a single 'optimal' answer — showing trade-offs mattered more than a single score.",
    ],
    futureEnhancements: [
      "Extend the model to multi-facility network trade-offs, not just single-site layouts.",
      "Add a computer-vision layer for automated as-built layout capture.",
    ],
    relatedProjectSlug: "scs-fabric",
  },
  {
    slug: "forecast-narrative-anomaly-explainer",
    title: "Forecast Narrative & Anomaly Explainer",
    icon: MessageSquare,
    category: "Planning & Forecasting",
    tags: ["Forecasting", "LLM", "Decision Support"],
    businessProblem:
      "Forecast dashboards show planners *that* a number moved, but rarely explain *why* — leaving planners to manually dig through data every time a forecast swings unexpectedly.",
    objective:
      "Prototype an LLM layer that turns a forecast anomaly into a plain-English explanation planners can act on immediately, without opening a separate analysis workbook.",
    aiApproach:
      "Feed the underlying demand drivers behind a forecast change into a structured prompt, and have the model draft a short, cited explanation a planner can verify in seconds rather than minutes.",
    technologies: ["Prompt Engineering", "LLM", "Python"],
    architecture: {
      title: "From anomaly to plain-English explanation",
      description:
        "A structured summary of the underlying drivers is handed to an LLM to draft a verifiable, cited explanation.",
      nodes: [
        { icon: AlertTriangle, label: "Forecast Anomaly Detected", detail: "Threshold-based trigger" },
        { icon: Database, label: "Driver Data Assembled", detail: "Seasonality, promos, stockouts" },
        { icon: Brain, label: "LLM Narrative Draft", detail: "Structured prompt template" },
        { icon: FileText, label: "Cited Explanation", detail: "Planner-verifiable output" },
      ],
    },
    businessImpact: [
      {
        icon: Target,
        title: "Faster Root-Cause Triage",
        description: "Planners get a starting explanation instead of starting from a blank workbook.",
      },
      {
        icon: Lightbulb,
        title: "Consistent Reasoning",
        description: "Every explanation follows the same structured format, easing handoffs.",
      },
    ],
    lessonsLearned: [
      "An LLM explanation is only trustworthy when it cites the specific data it drew from — unsourced narrative erodes trust fast.",
      "The highest-value use case wasn't the average day — it was the outlier days planners were already going to investigate anyway.",
    ],
    futureEnhancements: [
      "Move from on-demand explanation to a daily digest of the top anomalies worth a planner's attention.",
      "Add a feedback loop so planner corrections improve future driver weighting.",
    ],
    relatedProjectSlug: "nexusone",
  },
  {
    slug: "executive-dashboard-narrative-generator",
    title: "Executive Dashboard Narrative Generator",
    icon: LayoutDashboard,
    category: "Executive Reporting",
    tags: ["Executive Reporting", "Dashboards", "LLM"],
    businessProblem:
      "Executive dashboards show the numbers, but someone still has to write the weekly narrative summary explaining what changed and why it matters — a recurring manual task that eats analyst hours every week.",
    objective:
      "Draft the first version of a weekly executive dashboard narrative automatically, so an analyst edits and approves rather than writing from a blank page.",
    aiApproach:
      "Structure the week's KPI deltas into a template, then use an LLM to draft a concise executive narrative in the same tone and format leadership already expects — grounded in the same KPI data behind the Transportation Control Tower.",
    technologies: ["LLM", "Prompt Engineering", "Power BI"],
    architecture: {
      title: "From KPI deltas to an executive-ready narrative",
      description:
        "Weekly KPI changes are structured into a template before an LLM drafts the narrative an analyst reviews and approves.",
      nodes: [
        { icon: Database, label: "Weekly KPI Deltas", detail: "Pulled from the dashboard" },
        { icon: ClipboardList, label: "Structured Template", detail: "Consistent narrative shape" },
        { icon: Brain, label: "LLM Draft", detail: "First-pass narrative" },
        { icon: CheckCircle2, label: "Analyst Review", detail: "Edit and approve" },
      ],
    },
    businessImpact: [
      {
        icon: Target,
        title: "Hours Saved Weekly",
        description: "Analysts edit a draft instead of writing the narrative from scratch.",
      },
      {
        icon: Users,
        title: "Consistent Executive Tone",
        description: "Every weekly update follows the same structure leadership expects.",
      },
    ],
    lessonsLearned: [
      "The draft only saved time once the template matched exactly how leadership already reads dashboards — generic summaries got rewritten anyway.",
      "Keeping a human review step was non-negotiable — leadership-facing narrative needs an accountable owner.",
    ],
    futureEnhancements: [
      "Extend to a daily flash version for exception-only updates.",
      "Add tone customization per audience (board vs. operating review).",
    ],
    relatedProjectSlug: "transportation-control-tower",
  },
  {
    slug: "ai-generated-sop-drafting-assistant",
    title: "AI-Generated SOP Drafting Assistant",
    icon: FileText,
    category: "Knowledge & Documentation",
    tags: ["SOPs", "Documentation", "Knowledge Extraction"],
    businessProblem:
      "Standard operating procedures drift out of date faster than anyone reviews them, and drafting a new SOP from scratch after a process change is a slow, inconsistent manual task.",
    objective:
      "Turn a structured process walkthrough into a first-draft SOP in a consistent format, so the process owner edits for accuracy instead of formatting from zero.",
    aiApproach:
      "Capture the process steps, safety requirements, and escalation paths in a structured input, then have an LLM draft the SOP in the organization's standard checklist format for review.",
    technologies: ["LLM", "Prompt Engineering", "Documentation Automation"],
    architecture: {
      title: "From process walkthrough to a reviewable SOP",
      description: "A structured process capture becomes a first-draft SOP a process owner reviews and signs off on.",
      nodes: [
        { icon: ClipboardList, label: "Process Walkthrough", detail: "Steps, safety, escalation" },
        { icon: Brain, label: "LLM SOP Draft", detail: "Standard checklist format" },
        { icon: FileSearch, label: "Owner Review", detail: "Accuracy & compliance check" },
        { icon: CheckCircle2, label: "Published SOP", detail: "Version-controlled" },
      ],
    },
    businessImpact: [
      {
        icon: Target,
        title: "Faster SOP Turnaround",
        description: "Drafting time shrinks from a multi-day writing task to a review task.",
      },
      {
        icon: Lightbulb,
        title: "Consistent Format",
        description: "Every SOP reads like it was written by the same disciplined process.",
      },
    ],
    lessonsLearned: [
      "The best SOP draft reads like a checklist, not a policy memo — associates follow steps, not prose.",
      "AI drafting only works when someone with floor authority still signs off — accuracy accountability can't be automated away.",
    ],
    futureEnhancements: [
      "Add an AI-assisted currency check that flags SOPs likely to have drifted from current practice.",
      "Auto-generate a training checklist alongside every published SOP.",
    ],
    relatedArticleSlug: "zone-based-sortation-warehouse-throughput",
  },
  {
    slug: "meeting-summary-decision-support",
    title: "Meeting Summary & Decision-Support Assistant",
    icon: Mic,
    category: "Decision Support",
    tags: ["Meetings", "Decision Support", "Automation"],
    businessProblem:
      "Operating reviews and planning meetings generate decisions and action items that live only in someone's notes — easy to lose, hard to track, and inconsistent across teams.",
    objective:
      "Turn a meeting transcript or notes into a structured summary of decisions, owners, and action items automatically, so follow-through doesn't depend on one person's memory.",
    aiApproach:
      "Use a structured prompt to extract decisions, owners, and deadlines from meeting notes, and format the output for direct drop-in to the team's existing tracker.",
    technologies: ["LLM", "Prompt Engineering", "Workflow Automation"],
    architecture: {
      title: "From meeting notes to tracked action items",
      description: "Raw meeting notes are structured into decisions, owners, and deadlines ready for a tracker.",
      nodes: [
        { icon: Mic, label: "Meeting Notes / Transcript", detail: "Raw input" },
        { icon: Brain, label: "LLM Extraction", detail: "Decisions, owners, deadlines" },
        { icon: ClipboardList, label: "Structured Summary", detail: "Tracker-ready format" },
        { icon: Bot, label: "Action-Item Automation", detail: "Auto-assigned follow-up" },
      ],
    },
    businessImpact: [
      {
        icon: Target,
        title: "Fewer Dropped Action Items",
        description: "Decisions are captured structurally instead of relying on personal notes.",
      },
      {
        icon: Users,
        title: "Shared Accountability",
        description: "Every owner sees the same list of what they committed to.",
      },
    ],
    lessonsLearned: [
      "Extraction accuracy depends heavily on meeting discipline — vague discussion produces vague action items no matter how good the model is.",
      "Exception-based human review caught extraction errors early enough to keep trust in the automation high.",
    ],
    futureEnhancements: [
      "Add automatic follow-up reminders tied to each extracted deadline.",
      "Link extracted decisions back to the KPI they were meant to move.",
    ],
    relatedArticleSlug: "leading-through-calculated-risk-peak-season",
  },
];

export function getExperimentBySlug(slug: string): AIExperiment | undefined {
  return aiExperiments.find((experiment) => experiment.slug === slug);
}

export const experimentCategories = Array.from(
  new Set(aiExperiments.map((experiment) => experiment.category)),
);
