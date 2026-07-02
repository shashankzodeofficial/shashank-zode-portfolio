import {
  Bot,
  Boxes,
  Brain,
  ClipboardCheck,
  Database,
  FileSearch,
  HeadphonesIcon,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Package,
  ShoppingCart,
  TrendingUp,
  Warehouse,
} from "lucide-react";

import type { AIAgent } from "@/types/ai-labs";

/**
 * Each agent below is a reference architecture — a design for how an AI
 * agent would be structured to solve a real operational problem. These are
 * concept designs grounded in real operating experience, not claims of a
 * currently deployed production system.
 */
export const aiAgents: AIAgent[] = [
  {
    slug: "inventory-planning-agent",
    title: "Inventory Planning Agent",
    icon: Package,
    tags: ["Inventory", "Replenishment", "Planning"],
    businessPurpose:
      "Continuously monitor SKU-level inventory positions and surface replenishment recommendations, so planners spend their time on exceptions rather than routine reviews.",
    inputs: [
      "Daily sales and inventory position data",
      "Supplier lead time and variability history",
      "Promotional and seasonal calendars",
    ],
    outputs: [
      "Ranked replenishment recommendations",
      "Exception flags for SKUs needing human review",
      "A plain-English rationale for each recommendation",
    ],
    workflow: {
      title: "How the agent moves from data to a planner decision",
      description:
        "A continuous monitoring loop that only interrupts a human when a recommendation crosses a confidence or risk threshold.",
      nodes: [
        { icon: Database, label: "Data Ingestion", detail: "Sales, inventory, lead times" },
        { icon: Brain, label: "Signal Analysis", detail: "Velocity + variability model" },
        { icon: TrendingUp, label: "Recommendation Draft", detail: "Reorder qty & timing" },
        { icon: ClipboardCheck, label: "Confidence Check", detail: "Escalate if below threshold" },
        { icon: Bot, label: "Planner Handoff", detail: "Approve, adjust, or reject" },
      ],
    },
    recommendedModels: ["GPT-4 class reasoning model", "Lightweight forecasting model (e.g., Prophet, XGBoost)"],
    integrationPoints: ["ERP inventory module", "Supplier lead-time database", "Planning dashboard (e.g., Power BI)"],
    businessImpact:
      "Designed to reduce the time planners spend on routine reorder review, freeing capacity for exception handling and higher-value scenario planning.",
    futureEnhancements: [
      "Add multi-echelon awareness across DC and store-level inventory.",
      "Layer in supplier risk scoring as a second recommendation input.",
    ],
  },
  {
    slug: "warehouse-operations-agent",
    title: "Warehouse Operations Agent",
    icon: Warehouse,
    tags: ["Warehouse", "Operations", "Throughput"],
    businessPurpose:
      "Monitor real-time throughput and zone-level performance data to flag operational bottlenecks before they compound into a shift-ending backlog.",
    inputs: [
      "Real-time zone throughput and labor allocation data",
      "Dock schedule and inbound volume forecast",
      "Historical bottleneck patterns by shift and season",
    ],
    outputs: [
      "Bottleneck risk alerts, ranked by severity",
      "Suggested labor reallocation actions",
      "End-of-shift performance summary",
    ],
    workflow: {
      title: "How the agent watches a shift in real time",
      description:
        "A monitoring loop that compares live throughput against expected pace and escalates before a bottleneck becomes a backlog.",
      nodes: [
        { icon: Database, label: "Live Throughput Feed", detail: "Zone-level pace data" },
        { icon: Brain, label: "Pace Deviation Model", detail: "Compares to expected baseline" },
        { icon: ClipboardCheck, label: "Bottleneck Risk Score", detail: "Severity ranking" },
        { icon: Bot, label: "Supervisor Alert", detail: "Suggested reallocation" },
      ],
    },
    recommendedModels: ["Time-series anomaly detection model", "GPT-4 class reasoning model for alert narrative"],
    integrationPoints: ["Warehouse management system (WMS)", "Labor scheduling tool", "Shift supervisor dashboard"],
    businessImpact:
      "Designed to shorten the time between a bottleneck forming and a supervisor acting on it, from end-of-shift review to real time.",
    futureEnhancements: [
      "Add camera-based computer vision input for physical congestion detection.",
      "Auto-suggest cross-zone labor moves ranked by expected recovery time.",
    ],
  },
  {
    slug: "procurement-assistant-agent",
    title: "Procurement Assistant Agent",
    icon: ShoppingCart,
    tags: ["Procurement", "Vendor Management", "Sourcing"],
    businessPurpose:
      "Support procurement decisions by summarizing vendor performance, flagging contract renewal windows, and drafting first-pass RFQ comparisons.",
    inputs: [
      "Vendor performance and SLA compliance history",
      "Contract terms and renewal dates",
      "Incoming RFQ responses",
    ],
    outputs: [
      "Vendor scorecards with SLA status flags",
      "Renewal window alerts with lead time",
      "Side-by-side RFQ comparison drafts",
    ],
    workflow: {
      title: "How the agent supports a sourcing decision",
      description:
        "The agent prepares the analysis; the procurement lead still makes and owns every sourcing decision.",
      nodes: [
        { icon: Database, label: "Vendor & Contract Data", detail: "Performance + terms" },
        { icon: Brain, label: "Scorecard Generation", detail: "SLA compliance summary" },
        { icon: FileSearch, label: "RFQ Comparison Draft", detail: "Side-by-side terms" },
        { icon: Bot, label: "Procurement Lead Review", detail: "Final sourcing decision" },
      ],
    },
    recommendedModels: ["GPT-4 class reasoning model"],
    integrationPoints: ["Procurement/ERP system", "Contract management database", "Email for RFQ intake"],
    businessImpact:
      "Designed to cut the prep time for a sourcing decision from days of manual comparison to a review of a pre-built draft.",
    futureEnhancements: [
      "Add automated renewal-date reminders with escalation if unacknowledged.",
      "Layer in market price benchmarking for RFQ evaluation.",
    ],
  },
  {
    slug: "forecasting-agent",
    title: "Forecasting Agent",
    icon: TrendingUp,
    tags: ["Forecasting", "Demand Planning", "AI Agents"],
    businessPurpose:
      "Continuously recalculate demand forecasts and explain material changes in plain English, so planners trust and can act on the output.",
    inputs: [
      "Historical sales and promotional calendar data",
      "External signals (seasonality, known demand shocks)",
      "Prior forecast accuracy feedback",
    ],
    outputs: [
      "Updated demand forecast by SKU/category",
      "Plain-English anomaly explanations",
      "Forecast accuracy trend report",
    ],
    workflow: {
      title: "How the agent keeps a forecast current and explainable",
      description:
        "A recalculation loop paired with an explanation layer, so every material change comes with a reason.",
      nodes: [
        { icon: Database, label: "Demand Data Feed", detail: "Sales, promos, seasonality" },
        { icon: Brain, label: "Forecast Recalculation", detail: "Rolling model update" },
        { icon: MessageSquare, label: "Anomaly Explanation", detail: "Plain-English driver summary" },
        { icon: Bot, label: "Planner Notification", detail: "Only on material change" },
      ],
    },
    recommendedModels: ["Statistical/ML forecasting model", "GPT-4 class reasoning model for explanation layer"],
    integrationPoints: ["Demand planning system", "Power BI dashboard", "Planner notification channel"],
    businessImpact:
      "Designed to reduce the manual investigation time planners spend explaining forecast swings after the fact.",
    futureEnhancements: [
      "Add a feedback loop where planner corrections retrain the explanation model's driver weighting.",
      "Extend to a daily digest of only the anomalies that materially affect a decision.",
    ],
  },
  {
    slug: "executive-reporting-agent",
    title: "Executive Reporting Agent",
    icon: LayoutDashboard,
    tags: ["Executive Reporting", "Dashboards", "Automation"],
    businessPurpose:
      "Draft the first version of recurring executive reports from live KPI data, so analysts edit and approve instead of writing from a blank page every cycle.",
    inputs: [
      "Weekly/monthly KPI deltas from the dashboard layer",
      "Prior period narrative for tone and structure consistency",
      "Flagged exceptions requiring specific mention",
    ],
    outputs: [
      "Draft executive narrative in the expected format",
      "Highlighted KPIs requiring leadership attention",
      "Version history for audit and comparison",
    ],
    workflow: {
      title: "How the agent drafts a recurring executive update",
      description: "KPI deltas are structured and drafted into a narrative an analyst reviews before it reaches leadership.",
      nodes: [
        { icon: Database, label: "KPI Delta Pull", detail: "From the live dashboard" },
        { icon: Brain, label: "Narrative Draft", detail: "Matches prior tone/structure" },
        { icon: ClipboardCheck, label: "Analyst Review", detail: "Edit and approve" },
        { icon: Mail, label: "Distribution", detail: "Sent to leadership" },
      ],
    },
    recommendedModels: ["GPT-4 class reasoning model"],
    integrationPoints: ["Power BI / BI platform", "Email or reporting distribution tool"],
    businessImpact:
      "Designed to shrink recurring reporting cycles from hours of manual writing to a focused review-and-edit pass.",
    futureEnhancements: [
      "Add audience-specific tone variants (board vs. operating review).",
      "Auto-flag KPI trends that historically preceded a larger issue.",
    ],
  },
  {
    slug: "customer-experience-agent",
    title: "Customer Experience Agent",
    icon: HeadphonesIcon,
    tags: ["Customer Experience", "Root Cause", "Support"],
    businessPurpose:
      "Categorize incoming customer complaints into root-cause themes in real time, so operational teams see the pattern, not just the individual ticket.",
    inputs: [
      "Raw customer complaint or support ticket text",
      "Predefined root-cause taxonomy",
      "Order and delivery metadata linked to each complaint",
    ],
    outputs: [
      "Categorized complaints by root-cause theme",
      "Weekly frequency trend by theme",
      "Escalation flag for themes crossing a volume threshold",
    ],
    workflow: {
      title: "How the agent turns tickets into operational signal",
      description: "Individual complaints are categorized and aggregated into a trend operations teams can act on.",
      nodes: [
        { icon: Database, label: "Ticket Intake", detail: "Raw complaint text" },
        { icon: Brain, label: "Root-Cause Categorization", detail: "Predefined taxonomy" },
        { icon: TrendingUp, label: "Trend Aggregation", detail: "Weekly theme frequency" },
        { icon: Bot, label: "Operations Alert", detail: "Escalates above threshold" },
      ],
    },
    recommendedModels: ["GPT-4 class reasoning model", "Text classification model for high-volume triage"],
    integrationPoints: ["Customer support platform", "Order management system", "Operations dashboard"],
    businessImpact:
      "Designed to surface systemic operational issues from complaint patterns days faster than manual ticket review.",
    futureEnhancements: [
      "Add sentiment-weighted prioritization for urgent individual cases.",
      "Auto-draft a first-response reply for common, low-risk complaint categories.",
    ],
  },
  {
    slug: "knowledge-management-agent",
    title: "Knowledge Management Agent",
    icon: Boxes,
    tags: ["Knowledge Management", "RAG", "Documentation"],
    businessPurpose:
      "Let operations teams ask questions in plain language and get answers grounded in the organization's own SOPs, playbooks, and past decisions — instead of searching through folders.",
    inputs: [
      "Indexed SOPs, playbooks, and knowledge base documents",
      "Natural-language question from a user",
      "Document metadata (owner, last-updated date) for currency checks",
    ],
    outputs: [
      "A direct answer with citations to the source document",
      "A flag if the source document is past its review date",
      "A log of unanswered questions to guide future documentation",
    ],
    workflow: {
      title: "How the agent answers from your own documentation (RAG pattern)",
      description:
        "A retrieval-augmented generation pattern: the agent answers only from retrieved, cited source material.",
      nodes: [
        { icon: MessageSquare, label: "User Question", detail: "Plain-language query" },
        { icon: Database, label: "Vector Retrieval", detail: "Relevant document chunks" },
        { icon: Brain, label: "Grounded Answer", detail: "LLM answers from retrieved context" },
        { icon: FileSearch, label: "Cited Response", detail: "Links back to source SOP" },
      ],
    },
    recommendedModels: ["GPT-4 class reasoning model", "Embedding model for retrieval (e.g., text-embedding-3)"],
    integrationPoints: ["Document/knowledge repository", "Vector database", "Internal chat or intranet interface"],
    businessImpact:
      "Designed to reduce time spent searching for the right SOP or past decision, and to surface outdated documentation automatically.",
    futureEnhancements: [
      "Add a feedback loop that flags low-confidence answers for human documentation review.",
      "Extend retrieval scope to include past meeting decisions, not just formal documents.",
    ],
  },
];

export function getAgentBySlug(slug: string): AIAgent | undefined {
  return aiAgents.find((agent) => agent.slug === slug);
}
