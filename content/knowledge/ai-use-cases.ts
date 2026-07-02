import { Boxes, FileSearch, LayoutDashboard, LineChart, Mic, SearchCheck } from "lucide-react";

import type { AIUseCase } from "@/types/knowledge";

export const aiUseCases: AIUseCase[] = [
  {
    slug: "inventory-optimization-replenishment-signals",
    title: "Inventory Optimization & Replenishment Signals",
    icon: Boxes,
    tags: ["Inventory", "Forecasting", "Replenishment", "AI"],
    businessProblem:
      "Replenishment decisions are made on static reorder points that don't reflect real demand volatility, leading to both stockouts and excess inventory.",
    businessContext:
      "A multi-location retail network with hundreds of SKUs per location, where manual reorder-point review happens only periodically.",
    recommendedSolution:
      "An AI model that continuously recalculates replenishment signals based on live sales velocity, lead-time variability, and seasonality, flagging exceptions for human review.",
    implementationSteps: [
      "Consolidate sales, inventory, and lead-time data into one model",
      "Establish a baseline forecast accuracy using historical data",
      "Build the replenishment signal model and validate against known outcomes",
      "Pilot on a limited SKU set",
      "Roll out with exception-based human review",
      "Monitor and retrain the model quarterly",
    ],
    technology: ["Python", "Forecasting Models", "Power BI", "APIs"],
    kpis: [
      { display: "Higher", label: "Forecast Accuracy", description: "Improved vs. static reorder-point methods" },
      { display: "Lower", label: "Stockout Rate", description: "Fewer SKUs running out during demand spikes" },
      { display: "Reduced", label: "Excess Inventory", description: "Less capital tied up in slow-moving stock" },
    ],
    businessImpact:
      "Improved product availability while reducing excess inventory carrying cost, with meaningfully less manual reorder-point maintenance.",
    risks: [
      "Model drift if seasonality patterns shift without retraining",
      "Over-reliance on the model without human exception review",
      "Data quality issues in source systems propagating into bad signals",
    ],
    lessonsLearned:
      "Exception-based human review, not full automation, builds trust fastest during early rollout.",
    promptTemplate:
      "You are a supply chain planning analyst. Given the following SKU-level sales history, current inventory, and supplier lead time, recommend a replenishment quantity and flag if this SKU shows unusual demand volatility. Sales history: [paste data]. Current inventory: [X units]. Lead time: [Y days]. Explain your reasoning and state any assumptions you made.",
  },
  {
    slug: "demand-forecasting-assistant",
    title: "Demand Forecasting Assistant",
    icon: LineChart,
    tags: ["Forecasting", "Demand Planning", "AI", "Analytics"],
    businessProblem:
      "Demand forecasts are built manually in spreadsheets, updated infrequently, and don't consistently account for promotional or seasonal effects.",
    businessContext:
      "A planning team responsible for forecasting demand across multiple categories, currently spending significant time on manual spreadsheet consolidation each planning cycle.",
    recommendedSolution:
      "An AI-assisted forecasting assistant that ingests historical sales, promotional calendars, and seasonality data to generate a baseline forecast, with planners reviewing and adjusting exceptions.",
    implementationSteps: [
      "Audit the current forecasting process and data sources",
      "Build a baseline statistical forecast model",
      "Layer in promotional and seasonal adjustment logic",
      "Validate against several historical planning cycles",
      "Pilot with one category team",
      "Scale to additional categories with planner feedback loops",
    ],
    technology: ["Python", "Forecasting Models", "Power BI"],
    kpis: [
      { display: "Higher", label: "Forecast Accuracy", description: "Reduced variance between forecast and actual demand" },
      { display: "Faster", label: "Planning Cycle Time", description: "Less manual consolidation per cycle" },
      { display: "Improved", label: "Promotional Forecast Reliability", description: "Better anticipation of promotion-driven demand spikes" },
    ],
    businessImpact:
      "Shortened planning cycles and improved forecast reliability, freeing planner time for exception handling and strategic decisions rather than data consolidation.",
    risks: [
      "Forecast overconfidence during unprecedented demand shocks",
      "Planner disengagement if the model is treated as fully automatic",
      "Promotional data quality gaps reducing adjustment accuracy",
    ],
    lessonsLearned:
      "The forecast planners trust is the one they helped validate against real historical cycles, not the one presented as a black box.",
    promptTemplate:
      "You are a demand planning assistant. Given historical monthly sales for [category] over the past [N] periods, along with upcoming promotional events [list], generate a forecast for the next [N] periods. Highlight any anomalies or periods requiring closer planner review, and explain the key assumptions behind your forecast.",
  },
  {
    slug: "executive-dashboard-report-generation",
    title: "Executive Dashboard & Report Generation",
    icon: LayoutDashboard,
    tags: ["Dashboards", "Power BI", "Automation", "Reporting"],
    businessProblem:
      "Executive reporting is compiled manually each week, consuming significant analyst time and delaying visibility into operational issues.",
    businessContext:
      "An operations team producing a weekly executive summary by manually pulling data from multiple systems into a slide deck.",
    recommendedSolution:
      "An automated pipeline that refreshes a live executive dashboard and generates a narrative summary of key changes, freeing analysts to focus on interpretation rather than compilation.",
    implementationSteps: [
      "Identify the core metrics executives actually act on",
      "Automate data refresh from source systems into one dashboard",
      "Build narrative-generation logic to summarize week-over-week changes",
      "Pilot alongside the existing manual report",
      "Retire the manual process once trust is established",
      "Review and refine metrics quarterly",
    ],
    technology: ["Power BI", "Python", "Automation", "APIs"],
    kpis: [
      { display: "Faster", label: "Reporting Turnaround", description: "Near real-time vs. weekly manual compilation" },
      { display: "Reduced", label: "Analyst Manual Effort", description: "Time shifted from compilation to interpretation" },
      { display: "Higher", label: "Executive Visibility Cadence", description: "Daily vs. weekly access to key metrics" },
    ],
    businessImpact:
      "Freed analyst time from manual compilation while giving executives faster, more current visibility into operational performance.",
    risks: [
      "Dashboard fatigue if too many metrics are surfaced without prioritization",
      "Automated narratives missing nuance a human analyst would catch",
      "Data pipeline failures going unnoticed without monitoring",
    ],
    lessonsLearned: "A dashboard with five metrics executives actually use beats one with fifty they ignore.",
    promptTemplate:
      "You are an operations analyst preparing an executive summary. Given this week's data compared to last week — [paste key metrics] — write a concise narrative summary highlighting the two or three most significant changes, likely causes, and any items requiring executive attention. Keep it under 150 words.",
  },
  {
    slug: "sop-process-documentation-automation",
    title: "SOP & Process Documentation Automation",
    icon: FileSearch,
    tags: ["SOP", "Process Documentation", "Automation", "Knowledge Management"],
    businessProblem:
      "Standard operating procedures drift out of date as processes evolve, but manually auditing and updating documentation is rarely prioritized.",
    businessContext:
      "A multi-site operation where each facility maintains its own process documentation, with no consistent review cadence.",
    recommendedSolution:
      "An AI-assisted workflow that compares current process documentation against process-change inputs (training updates, incident reports, floor feedback) and flags sections likely to be outdated.",
    implementationSteps: [
      "Centralize existing SOP documents into one searchable repository",
      "Define the signals that indicate a process may have changed",
      "Build an AI review pass that flags likely-outdated sections",
      "Route flagged sections to process owners for validation",
      "Pilot on one high-change-frequency process area",
      "Scale across all documented processes",
    ],
    technology: ["AI/ML", "Automation", "Prompt Engineering"],
    kpis: [
      { display: "Higher", label: "SOP Currency Rate", description: "Share of documents reviewed within a defined freshness window" },
      { display: "Faster", label: "Update Turnaround", description: "Time from process change to documentation update" },
      { display: "Reduced", label: "Manual Audit Effort", description: "Less time spent manually cross-checking documentation" },
    ],
    businessImpact:
      "Kept process documentation meaningfully more current, reducing the risk of associates being trained on outdated procedures.",
    risks: [
      "False positives creating review fatigue for process owners",
      "Sensitive procedural details requiring careful access control",
      "Over-reliance on flagged sections missing undocumented drift",
    ],
    lessonsLearned:
      "Documentation review only sticks when it's someone's explicit, named responsibility — automation surfaces the work, it doesn't replace ownership.",
    promptTemplate:
      "You are reviewing a standard operating procedure for currency. Given this SOP text [paste SOP] and this list of recent process changes [paste changes/incident notes], identify which sections of the SOP are likely outdated, explain why, and suggest specific revision language for each flagged section.",
  },
  {
    slug: "root-cause-analysis-co-pilot",
    title: "Root Cause Analysis Co-Pilot",
    icon: SearchCheck,
    tags: ["Root Cause Analysis", "Fishbone", "Lean Six Sigma", "Problem Solving"],
    businessProblem:
      "Root cause analysis is often rushed under operational pressure, resulting in fixes that address symptoms rather than underlying causes.",
    businessContext:
      "A facility experiencing a recurring quality or throughput issue, where past fixes have provided only temporary relief.",
    recommendedSolution:
      "An AI co-pilot that structures a root cause investigation using established methodologies (5 Whys, Fishbone) based on incident data, prompting the team toward underlying causes rather than surface symptoms.",
    implementationSteps: [
      "Capture the incident description and available data",
      "Run the AI-assisted 5 Whys or Fishbone structuring pass",
      "Have the team validate each proposed cause against floor reality",
      "Identify the most probable root cause(s) with supporting evidence",
      "Design and implement a corrective action",
      "Add the resolution to a control plan to prevent recurrence",
    ],
    technology: ["AI/ML", "Prompt Engineering", "Automation"],
    kpis: [
      { display: "Faster", label: "Time to Root Cause", description: "Structured analysis vs. ad hoc investigation" },
      { display: "Lower", label: "Issue Recurrence Rate", description: "Fewer repeat incidents after root-cause-driven fixes" },
      { display: "Higher", label: "Fix Durability", description: "Corrective actions that hold over time, not just short-term relief" },
    ],
    businessImpact:
      "Reduced recurrence of chronic operational issues by structuring investigations toward true root causes rather than the most visible symptom.",
    risks: [
      "AI-suggested causes treated as conclusions rather than hypotheses to validate",
      "Incomplete incident data leading to incorrect root cause framing",
      "Team bypassing floor validation in favor of the AI's first suggestion",
    ],
    lessonsLearned:
      "The AI is best used to structure the investigation, not to conclude it — floor validation remains the deciding step.",
    promptTemplate:
      "You are facilitating a root cause analysis. Given this incident description — [paste incident details] — walk through a structured 5 Whys analysis, proposing a plausible chain of underlying causes. For each 'why,' note what evidence would confirm or rule it out, and flag which cause seems most likely to be root, pending team validation.",
  },
  {
    slug: "meeting-summary-action-item-automation",
    title: "Meeting Summary & Action-Item Automation",
    icon: Mic,
    tags: ["Productivity", "Meeting Summaries", "Automation", "AI"],
    businessProblem:
      "Operational meetings generate decisions and action items that are inconsistently captured, leading to dropped follow-ups and repeated discussions.",
    businessContext:
      "A leadership team running frequent operational review meetings, with notes historically captured inconsistently across different owners.",
    recommendedSolution:
      "An AI-assisted workflow that summarizes meeting transcripts or notes into a consistent format — decisions, owners, and deadlines — and routes action items automatically.",
    implementationSteps: [
      "Standardize meeting notes or transcript capture",
      "Define the summary format (decisions, owners, deadlines)",
      "Build the AI summarization and action-item extraction pass",
      "Pilot on one recurring meeting series",
      "Route extracted action items to an existing tracking tool",
      "Review summary accuracy periodically and refine the prompt",
    ],
    technology: ["AI/ML", "Prompt Engineering", "Automation"],
    kpis: [
      { display: "Higher", label: "Action-Item Follow-Through", description: "Fewer decisions and commitments falling through the cracks" },
      { display: "Faster", label: "Summary Turnaround", description: "Same-day summaries vs. delayed or skipped notes" },
      { display: "Reduced", label: "Repeated Discussions", description: "Less re-litigating decisions due to inconsistent capture" },
    ],
    businessImpact:
      "Improved follow-through on meeting decisions and freed leaders from manual note-taking so they could stay engaged in discussion.",
    risks: [
      "Summarization missing nuance or context from the live discussion",
      "Sensitive discussion content requiring careful handling",
      "Over-trust in AI-extracted action items without a final human check",
    ],
    lessonsLearned:
      "A quick human review pass on the AI summary catches the small misattributions that matter most — who owns what, by when.",
    promptTemplate:
      "You are summarizing an operations review meeting. Given this transcript or notes — [paste notes] — produce a summary with three sections: Key Decisions, Action Items (with owner and due date if mentioned), and Open Questions. Flag anything ambiguous that needs clarification from a meeting participant.",
  },
];
