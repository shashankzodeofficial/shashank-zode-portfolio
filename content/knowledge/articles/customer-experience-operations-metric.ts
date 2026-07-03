import {
  AlertCircle,
  BarChart3,
  Clock,
  FileText,
  Gauge,
  ClipboardCheck,
  MapPinned,
  MessageSquareText,
  PackageCheck,
  Route,
  ShieldCheck,
  Target,
  Truck,
} from "lucide-react";

import type { Article } from "@/types/knowledge";

export const customerExperienceOperationsMetric: Article = {
  slug: "customer-experience-as-an-operations-metric",
  title: "Customer Experience as an Operations Metric, Not a Marketing One",
  subtitle:
    "The delivery experience is decided on the warehouse floor and the last mile — long before marketing ever gets involved.",
  category: ["Customer Experience", "Operations Excellence"],
  tags: ["Customer Experience", "Last-Mile Delivery", "Operations", "Service Levels"],
  readingTime: "8 min",
  difficulty: "Intermediate",
  publishDate: "2026-05-04",
  icon: PackageCheck,

  executiveSummary: {
    overview:
      "A case for treating on-time delivery, order accuracy, and shipment visibility as core operations KPIs — owned by operations leadership, not treated as downstream marketing outcomes.",
    whyItMatters:
      "Customer experience in a physical supply chain is set by warehouse throughput, transportation reliability, and last-mile execution — decisions that are made in operations, not in a marketing meeting.",
    whoShouldRead: "Operations leaders who want customer experience metrics built into their own KPI scorecard, not just reported on afterward.",
    keyTakeaway:
      "If on-time delivery and shipment visibility aren't on the operations leadership scorecard, no one directly accountable for them is actually managing them.",
  },
  businessProblem:
    "Customer complaints about delivery timing, order accuracy, and shipment visibility are treated as a customer service or marketing issue to manage after the fact, when the root causes sit entirely inside operations decisions made days earlier.",
  businessContext:
    "Picture a growing delivery operation where customer satisfaction scores are reviewed monthly by a customer experience team, while the warehouse and transportation teams are measured only on cost and throughput. The two conversations rarely intersect.",
  whyItMattersPoints: [
    { icon: Truck, title: "Delivery Is an Operations Output", description: "On-time delivery is the direct result of warehouse pick accuracy, sortation, and route planning — not a separate discipline." },
    { icon: MessageSquareText, title: "Complaints Are Lagging Signals", description: "By the time a customer complaint arrives, the operational decision that caused it happened days earlier." },
    { icon: Target, title: "Accountability Gaps Persist", description: "If no operations KPI directly reflects the customer experience, no one upstream is incentivized to protect it." },
    { icon: BarChart3, title: "Trust Compounds or Erodes", description: "Consistent delivery experience compounds customer trust; consistent misses erode it faster than marketing can rebuild it." },
  ],
  myExperience:
    "Building and operating last-mile and control-tower platforms taught me that the moment a delivery promise breaks, the root cause is almost always three or four steps upstream — a sortation delay, a route planning gap, a dock congestion issue. Pulling on-time delivery, order accuracy, and shipment visibility directly into the operations leadership scorecard — not just a customer service report — changed how quickly those root causes got fixed, because the people who could actually fix them were now measured on the outcome.",

  recommendedFramework: {
    title: "The Operations-Owned CX Scorecard",
    description: "Moving customer-facing metrics upstream into the operations KPI set that actually controls them.",
    nodes: [
      { icon: MapPinned, label: "Trace the Promise", detail: "Map delivery promise to the upstream steps that control it" },
      { icon: Gauge, label: "Instrument Leading Indicators", detail: "Track pick accuracy, dock dwell, and route adherence" },
      { icon: Target, label: "Assign Direct Ownership", detail: "Put CX metrics on the operations leadership scorecard" },
      { icon: AlertCircle, label: "Escalate Early", detail: "Flag drift before it reaches the customer" },
      { icon: ShieldCheck, label: "Close the Loop", detail: "Feed complaint root causes back into upstream process fixes" },
    ],
  },
  aiEnablement: {
    intro: "AI is well-suited to connecting customer-facing outcomes back to the upstream operational decisions that caused them, faster than a manual root-cause review.",
    tools: [
      { icon: Route, title: "Delivery Promise Tracing", description: "Automatically link a late delivery back to the specific upstream step that caused the delay." },
      { icon: Clock, title: "Real-Time Exception Alerts", description: "Flag shipments at risk of missing a delivery promise while there's still time to intervene." },
      { icon: BarChart3, title: "Root-Cause Aggregation", description: "Surface the most common upstream causes of delivery misses across thousands of shipments." },
    ],
  },
  implementationSteps: [
    { phase: "Map", title: "Trace the delivery promise upstream", description: "Identify every operational step between an order and its delivery that affects the customer's experience." },
    { phase: "Instrument", title: "Add leading-indicator metrics", description: "Track the upstream signals — pick accuracy, dock dwell, route adherence — not just the final delivery outcome." },
    { phase: "Assign", title: "Put CX metrics on the ops scorecard", description: "Make on-time delivery and accuracy part of operations leadership's own KPI set, not a separate report." },
    { phase: "Alert", title: "Build early-warning escalation", description: "Flag at-risk shipments while there's still time to recover, not after the customer has already noticed." },
    { phase: "Review", title: "Run joint root-cause reviews", description: "Bring operations and customer experience teams into the same review of delivery misses." },
    { phase: "Close the Loop", title: "Fix the upstream process", description: "Treat recurring complaint patterns as an operations process gap, not just a customer service ticket volume." },
  ],
  kpis: [
    { display: "Upstream", label: "Root-Cause Visibility", description: "Delivery misses traced back to the specific operational step that caused them." },
    { display: "Shared", label: "Ops & CX Ownership", description: "Customer experience metrics sit on the same scorecard as cost and throughput." },
    { display: "Earlier", label: "Exception Detection", description: "At-risk shipments flagged before the delivery promise is missed, not after." },
    { display: "Fewer", label: "Recurring Complaint Themes", description: "Root-cause fixes reduce repeat complaint patterns over time." },
  ],
  businessImpact: [
    { icon: ShieldCheck, title: "Faster Root-Cause Resolution", description: "Upstream ownership of CX metrics shortened the time between a delivery miss and a process fix." },
    { icon: Target, title: "Aligned Incentives", description: "Operations teams were now directly measured on the outcome customers actually experience." },
    { icon: Truck, title: "More Reliable Delivery Promises", description: "Leading-indicator tracking caught at-risk shipments before they became missed promises." },
    { icon: BarChart3, title: "Unified Reporting", description: "Operations and customer experience teams reviewed the same data instead of reconciling two versions of the truth." },
  ],
  challengesMitigation: [
    { challenge: "Operations teams see CX metrics as someone else's responsibility.", mitigation: "Trace specific complaint patterns back to specific operational steps to make the connection concrete, not abstract." },
    { challenge: "Leading indicators require instrumentation that doesn't yet exist.", mitigation: "Start with the highest-impact upstream step and expand instrumentation incrementally." },
    { challenge: "Joint reviews surface friction between operations and customer experience teams.", mitigation: "Frame the review around shared ownership of the outcome, not blame for the miss." },
  ],
  lessonsLearned: [
    "Customer experience in a physical supply chain is an operations output, not a downstream reporting category.",
    "The fastest way to fix recurring complaints is to trace them upstream, not to improve the complaint-handling process.",
    "Metrics change behavior fastest when they sit on the scorecard of the person who can actually act on them.",
  ],
  executiveTakeaways: [
    "Put customer-facing delivery metrics directly on the operations leadership scorecard, not a separate CX report.",
    "Instrument leading indicators upstream so exceptions are caught before the customer notices.",
    "Run root-cause reviews jointly with operations and customer experience teams in the same room.",
  ],
  futureOutlook: [
    { icon: Route, title: "Automated Promise Tracing", description: "AI-assisted linking of every delivery outcome to its specific upstream operational cause." },
    { icon: Clock, title: "Predictive Exception Management", description: "Models that flag at-risk deliveries early enough for proactive customer communication." },
    { icon: Gauge, title: "Unified Ops-CX Dashboards", description: "A single operational view spanning cost, throughput, and customer-facing outcomes." },
  ],
  downloads: [
    { icon: FileText, label: "Executive Summary", description: "A one-page overview of the operations-owned CX scorecard approach." },
    { icon: ClipboardCheck, label: "Promise-Tracing Worksheet", description: "A worksheet for mapping a delivery promise back to its upstream operational steps." },
  ],
  relatedSlugs: ["zone-based-sortation-warehouse-throughput", "reducing-network-complexity"],
};
