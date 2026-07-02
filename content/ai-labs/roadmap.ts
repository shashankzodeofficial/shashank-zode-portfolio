import {
  Bot,
  Brain,
  Camera,
  Compass,
  LayoutDashboard,
  LineChart,
  Sparkles,
  Warehouse,
} from "lucide-react";

import type { RoadmapPhase } from "@/types/ai-labs";

export const aiRoadmap: RoadmapPhase[] = [
  {
    period: "Now",
    title: "AI-Assisted Operations",
    icon: Sparkles,
    description:
      "AI augments existing decisions — forecasting, dashboards, documentation — with a human approving every material action.",
    capabilities: [
      "AI-assisted forecasting and replenishment signals",
      "LLM-drafted reports, SOPs, and executive narratives",
      "Prompt-driven analysis co-pilots for planners and analysts",
    ],
  },
  {
    period: "Next",
    title: "Agentic AI",
    icon: Bot,
    description:
      "Single-purpose agents take on defined, bounded tasks autonomously within clear guardrails, escalating anything outside their confidence threshold.",
    capabilities: [
      "Inventory and procurement agents operating within approval limits",
      "Automated exception routing with human-in-the-loop escalation",
      "Agent guardrail and governance frameworks as a standard design step",
    ],
  },
  {
    period: "Near-Term",
    title: "Autonomous Planning",
    icon: Compass,
    description:
      "Multiple agents coordinate across planning functions — inventory, transportation, capacity — to propose network-wide plans for executive sign-off.",
    capabilities: [
      "Multi-agent coordination across planning domains",
      "Scenario generation and trade-off comparison at network scale",
      "Executive sign-off replacing manual plan assembly",
    ],
  },
  {
    period: "Near-Term",
    title: "Predictive Analytics at Scale",
    icon: LineChart,
    description:
      "Forecasting and risk models move from reactive dashboards to proactive alerts, catching disruption signals before they show up in a KPI.",
    capabilities: [
      "Leading-indicator models for demand and supply risk",
      "Automated anomaly explanation across the full KPI set",
      "Continuous model recalibration against live outcomes",
    ],
  },
  {
    period: "Mid-Term",
    title: "Digital Twins",
    icon: LayoutDashboard,
    description:
      "Facility and network digital twins let teams simulate operational changes safely before committing capital or disrupting live operations.",
    capabilities: [
      "Warehouse and network simulation models tied to live data",
      "Scenario testing without disrupting live operations",
      "Capital decisions validated in simulation before commitment",
    ],
  },
  {
    period: "Mid-Term",
    title: "Computer Vision",
    icon: Camera,
    description:
      "Vision models extend real-time visibility into physical operations — congestion, safety compliance, and inventory state — beyond what data feeds alone can capture.",
    capabilities: [
      "Automated congestion and safety-compliance detection",
      "Vision-based inventory and as-built layout capture",
      "Real-time physical-operations signals feeding planning agents",
    ],
  },
  {
    period: "Longer-Term",
    title: "Autonomous Warehouses",
    icon: Warehouse,
    description:
      "Warehouse execution — from receiving to putaway to pick optimization — coordinates through connected agents and robotics with minimal manual intervention.",
    capabilities: [
      "Agent-coordinated pick, pack, and putaway optimization",
      "Dynamic zone rebalancing without manual layout review",
      "Human oversight focused on exceptions, not routine execution",
    ],
  },
  {
    period: "Longer-Term",
    title: "Executive Copilots",
    icon: Brain,
    description:
      "A single conversational interface gives executives grounded, cited answers across the full operating picture — planning, finance, risk — on demand.",
    capabilities: [
      "Natural-language access to the full operating data estate",
      "Cross-functional decision support grounded in live data",
      "Governance-first design ensuring every answer is explainable and cited",
    ],
  },
];
