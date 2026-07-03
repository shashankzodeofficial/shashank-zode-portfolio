import {
  Bot,
  Camera,
  Compass,
  Globe,
  Layers,
  LineChart,
  Network,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";

import type { FutureTrend } from "@/types/thought-leadership";

export const futureTrends: FutureTrend[] = [
  {
    slug: "autonomous-supply-chains",
    icon: Network,
    title: "Autonomous Supply Chains",
    category: "Network Design",
    executiveSummary:
      "Supply chains where routine replenishment, routing, and capacity decisions are executed by coordinated systems within defined guardrails, with humans focused on exceptions and strategy.",
    businessImplications: [
      "Planning cycles compress from weekly reviews to continuous, always-current decisions.",
      "The bottleneck shifts from data availability to governance — knowing which decisions can be automated safely.",
      "Talent needs shift toward exception management and system design, away from manual coordination.",
    ],
    futureOutlook:
      "Full autonomy remains distant, but bounded autonomy — specific decisions executed automatically within clear limits — is already achievable and will expand steadily as trust in the underlying data improves.",
  },
  {
    slug: "ai-agents",
    icon: Bot,
    title: "AI Agents in Operations",
    category: "Automation",
    executiveSummary:
      "Purpose-built AI agents taking on bounded, well-defined operational tasks — inventory recommendations, exception triage, report drafting — with clear escalation paths to humans.",
    businessImplications: [
      "The unit of automation shifts from a single task to an end-to-end workflow with decision points.",
      "Governance and guardrail design becomes a core leadership competency, not just an IT concern.",
      "Early value comes from bounded, well-scoped agents — not from broad, ambiguous autonomy.",
    ],
    futureOutlook:
      "Expect a proliferation of narrow, well-governed agents before broad multi-agent autonomy becomes common — the organizations that master the narrow case first will scale fastest.",
  },
  {
    slug: "hyperautomation",
    icon: Layers,
    title: "Hyperautomation",
    category: "Automation",
    executiveSummary:
      "The combination of RPA, AI, and workflow orchestration to automate increasingly complex, multi-step business processes end to end.",
    businessImplications: [
      "Automation moves from single tasks (an invoice match) to full processes (procure-to-pay end to end).",
      "Process documentation becomes a prerequisite for automation, not an afterthought.",
      "The return on automation compounds as more of a process chain becomes automated together.",
    ],
    futureOutlook:
      "Organizations with clean, well-documented processes will automate faster and see compounding returns; those without will spend their hyperautomation budget on cleanup first.",
  },
  {
    slug: "digital-twins",
    icon: Compass,
    title: "Digital Twins",
    category: "Simulation",
    executiveSummary:
      "Virtual replicas of physical facilities and networks that let leaders simulate operational changes before committing real capital or disrupting live operations.",
    businessImplications: [
      "Capital decisions can be pressure-tested in simulation before committing real budget.",
      "Facility and network changes can be validated without disrupting live operations.",
      "The quality of the twin depends entirely on the quality of the underlying operational data.",
    ],
    futureOutlook:
      "Digital twins will move from large-capital-project use cases toward routine planning decisions, as data foundations mature and simulation tools become more accessible.",
  },
  {
    slug: "computer-vision-operations",
    icon: Camera,
    title: "Computer Vision in Operations",
    category: "Physical AI",
    executiveSummary:
      "Vision-based systems extending real-time visibility into physical operations — congestion detection, safety compliance, and inventory state — beyond what data feeds alone capture.",
    businessImplications: [
      "Physical operations gain a real-time data layer that previously required manual observation.",
      "Safety compliance monitoring shifts from periodic audits to continuous detection.",
      "Investment needs to pair cameras with the operational workflows that will act on what's detected.",
    ],
    futureOutlook:
      "Vision systems will increasingly feed directly into planning and agent systems, closing the loop between physical detection and automated response.",
  },
  {
    slug: "predictive-planning",
    icon: LineChart,
    title: "Predictive Planning",
    category: "Forecasting",
    executiveSummary:
      "Planning systems that move from reactive, backward-looking reporting to forward-looking, leading-indicator-driven decision support.",
    businessImplications: [
      "Exception management shifts from reacting to misses toward intervening before they occur.",
      "Forecast accuracy becomes less important than the speed of detecting and explaining deviation.",
      "Planners' roles shift from building forecasts manually to validating and refining model outputs.",
    ],
    futureOutlook:
      "The next competitive advantage in planning will come less from forecast accuracy and more from how fast an organization can explain and act on a deviation once detected.",
  },
  {
    slug: "ai-governance",
    icon: ShieldCheck,
    title: "AI Governance",
    category: "Governance",
    executiveSummary:
      "Formal frameworks defining what AI systems can decide autonomously, what requires human approval, and how every decision remains auditable.",
    businessImplications: [
      "Governance becomes a prerequisite for scaling AI, not a compliance afterthought bolted on later.",
      "Boards and executive teams will increasingly expect AI governance frameworks alongside financial controls.",
      "Organizations that design governance early will scale AI faster than those retrofitting it under pressure.",
    ],
    futureOutlook:
      "AI governance will mature into a standard executive function, similar to how financial controls and data privacy became board-level concerns over the past two decades.",
  },
  {
    slug: "sustainable-supply-chains",
    icon: Globe,
    title: "Sustainable Supply Chains",
    category: "Sustainability",
    executiveSummary:
      "Network and transportation design decisions increasingly optimized jointly for cost and environmental impact, not cost alone.",
    businessImplications: [
      "Route and network optimization models need emissions data as a first-class input, not an afterthought.",
      "Regulatory and customer pressure will make sustainability metrics a standard part of the operations scorecard.",
      "Early movers can turn sustainability data into a differentiator with customers and partners.",
    ],
    futureOutlook:
      "Sustainability metrics will migrate from annual reporting exercises into the same real-time dashboards used for cost and service-level decisions.",
  },
  {
    slug: "human-ai-collaboration",
    icon: Users,
    title: "Human-AI Collaboration",
    category: "Workforce",
    executiveSummary:
      "Operating models where AI handles pattern recognition and first-draft recommendations, while humans retain judgment, context, and final accountability.",
    businessImplications: [
      "Roles shift from performing routine analysis to reviewing and validating AI-generated recommendations.",
      "Trust-building between teams and AI tools becomes a deliberate leadership responsibility, not automatic.",
      "The organizations that train people to work alongside AI well will outperform those who simply deploy the tools.",
    ],
    futureOutlook:
      "The competitive differentiator won't be which company has access to AI — it will be which company's people know how to work with it effectively.",
  },
  {
    slug: "intelligent-warehousing",
    icon: Warehouse,
    title: "Intelligent Warehousing",
    category: "Warehouse & Operations",
    executiveSummary:
      "Warehouses where layout, labor allocation, and pick paths adjust dynamically based on real-time volume and constraint data, rather than static seasonal planning.",
    businessImplications: [
      "Facility layouts move from static annual reviews to continuously informed adjustments.",
      "Labor planning shifts from fixed shift schedules toward dynamic, demand-responsive allocation.",
      "Space and capacity planning benefit from simulation before committing to physical changes.",
    ],
    futureOutlook:
      "Warehouses will increasingly resemble adaptive systems rather than fixed physical layouts — the leaders who invest in the underlying data foundation now will adapt fastest.",
  },
];

export function getTrendBySlug(slug: string): FutureTrend | undefined {
  return futureTrends.find((trend) => trend.slug === slug);
}
