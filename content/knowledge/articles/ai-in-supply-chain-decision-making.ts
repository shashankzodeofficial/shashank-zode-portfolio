import {
  Bot,
  Brain,
  ClipboardCheck,
  FileSearch,
  FileText,
  FlaskConical,
  Gauge,
  LayoutDashboard,
  MessageSquare,
  Scale,
  Target,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";

import type { Article } from "@/types/knowledge";

export const aiInSupplyChainDecisionMaking: Article = {
  slug: "ai-in-supply-chain-decision-making",
  title: "AI in Supply Chain Decision-Making: Separating Signal from Hype",
  subtitle:
    "A framework for deciding which operational decisions actually benefit from AI — before scoping the next pilot.",
  category: ["AI", "Supply Chain", "Digital Transformation", "AI Leadership"],
  tags: ["AI", "Decision Support", "Forecasting Models", "Digital Transformation"],
  readingTime: "10 min",
  difficulty: "Intermediate",
  publishDate: "2026-03-02",
  icon: Sparkles,

  executiveSummary: {
    overview:
      "A practical framework for scoping AI initiatives around specific, recurring operational decisions — rather than treating AI adoption as a goal in itself.",
    whyItMatters:
      "Supply chain leaders are under pressure to 'adopt AI' without a clear framework for which decisions actually benefit from it, leading to expensive pilots that never scale.",
    whoShouldRead: "Operations and technology leaders scoping their next AI initiative.",
    keyTakeaway:
      "The technology is rarely the hard part of AI adoption — scoping the right decision to apply it to is.",
  },
  businessProblem:
    "Supply chain leaders are under pressure to 'adopt AI' without a clear framework for which decisions actually benefit from it — leading to expensive pilots that never scale.",
  businessContext:
    "Picture an operations organization facing pressure to demonstrate AI adoption, while the operators on the ground are skeptical after watching prior technology initiatives fail to deliver.",
  whyItMattersPoints: [
    { icon: TrendingUp, title: "Wasted Investment", description: "AI pilots built around the wrong problems consume budget and credibility without producing lasting value." },
    { icon: Target, title: "Decision Quality", description: "The right AI application meaningfully improves decisions that were previously made on incomplete data or gut feel." },
    { icon: Users, title: "Team Trust", description: "Poorly scoped AI initiatives erode floor-level trust in leadership's technology judgment." },
    { icon: Gauge, title: "Competitive Pace", description: "Organizations that separate real AI value from hype move faster than those chasing every new tool." },
  ],
  myExperience:
    "Building AI-powered planning and visibility platforms taught me that the technology is rarely the hard part — scoping the right decision to apply it to is. The projects that stuck were the ones aimed at a specific, recurring decision that was previously slow or inconsistent: what to stock where, which shipments are at risk, how to model a warehouse layout before committing capital. The ones that didn't stick were aimed at 'AI' as a goal in itself.",

  recommendedFramework: {
    title: "The AI Fit Assessment",
    description: "A short filter to apply before any AI pilot gets a budget line.",
    nodes: [
      { icon: FileSearch, label: "Find the Decision", detail: "Identify a specific, recurring operational decision" },
      { icon: Gauge, label: "Assess Data Readiness", detail: "Confirm the data needed actually exists and is trustworthy" },
      { icon: Scale, label: "Weigh Build vs. Buy", detail: "Decide whether to build custom or adopt an existing tool" },
      { icon: FlaskConical, label: "Pilot Narrowly", detail: "Test on a bounded scope before any broad rollout" },
      { icon: TrendingUp, label: "Scale What Works", detail: "Expand only pilots that demonstrably improve the decision" },
    ],
  },
  aiEnablement: {
    intro: "The point isn't to use AI everywhere — it's to use it precisely where it removes a genuine bottleneck in a high-value, recurring decision.",
    tools: [
      { icon: Brain, title: "Forecasting Models", description: "AI-assisted demand and replenishment forecasting that improves over time with more data." },
      { icon: LayoutDashboard, title: "Decision-Ready Dashboards", description: "Surfacing the right signal at the moment a decision needs to be made, not buried in a report." },
      { icon: MessageSquare, title: "Conversational Interfaces", description: "Tools like ChatGPT or Claude used to query operational data in plain language." },
      { icon: Bot, title: "Agentic Workflows", description: "Early-stage AI agents that execute multi-step planning tasks with human checkpoints." },
    ],
  },
  implementationSteps: [
    { phase: "Identify", title: "Find the decision, not the technology", description: "Start from a specific operational decision that's slow, inconsistent, or data-poor today." },
    { phase: "Assess", title: "Check data readiness", description: "Confirm the data required for the AI application actually exists and is reliable." },
    { phase: "Design", title: "Scope a narrow pilot", description: "Define a bounded test with a clear success metric tied to the decision, not the technology." },
    { phase: "Build", title: "Build or configure the solution", description: "Choose the simplest tool that solves the scoped problem — custom-built or off-the-shelf." },
    { phase: "Validate", title: "Run the pilot against real decisions", description: "Test the AI output against what an experienced operator would have decided." },
    { phase: "Scale", title: "Expand proven pilots", description: "Roll out only the applications that demonstrably improved the target decision." },
    { phase: "Govern", title: "Monitor and retrain", description: "Track model performance over time and retrain as conditions change." },
  ],
  kpis: [
    { display: "Faster", label: "Decision Cycle Time", description: "Well-scoped AI tools shorten the time from data to decision." },
    { display: "Higher", label: "Forecast Accuracy", description: "AI-assisted forecasting typically outperforms static, manually-updated models." },
    { display: "Reduced", label: "Manual Analysis Effort", description: "Time previously spent compiling data shifts to interpreting and acting on it." },
    { display: "Improved", label: "Pilot-to-Scale Conversion", description: "A disciplined fit assessment raises the share of pilots that actually scale." },
  ],
  businessImpact: [
    { icon: Target, title: "Better Decisions, Not Just Faster Ones", description: "The goal is decision quality — speed is a byproduct, not the objective." },
    { icon: TrendingUp, title: "Improved Forecast Reliability", description: "AI-assisted forecasting reduces both overstock and stockout risk." },
    { icon: Users, title: "Higher Team Adoption", description: "Tools scoped to real decisions earn trust faster than generic AI mandates." },
    { icon: Gauge, title: "Reduced Reporting Lag", description: "Decision-ready dashboards replace static, backward-looking reports." },
  ],
  challengesMitigation: [
    { challenge: "Leadership pressure to 'show AI progress' pushes teams toward flashy pilots with no real decision behind them.", mitigation: "Anchor every pilot proposal to a specific, named operational decision it will improve." },
    { challenge: "Data quality issues surface only once a pilot is underway.", mitigation: "Assess data readiness explicitly before scoping the pilot, not after it stalls." },
    { challenge: "Floor teams distrust AI recommendations they can't explain.", mitigation: "Favor transparent, explainable models over black-box outputs, especially early in adoption." },
  ],
  lessonsLearned: [
    "The technology is rarely the hard part — scoping the right decision to apply it to is.",
    "A narrow, well-validated pilot builds more organizational trust than a broad, ambiguous rollout.",
    "AI adoption succeeds when it's framed as solving a named problem, not as a strategic mandate.",
  ],
  executiveTakeaways: [
    "Start every AI initiative from a specific decision, not from the technology.",
    "Data readiness is a prerequisite, not a parallel workstream — assess it before piloting.",
    "Explainability matters more than sophistication for floor-level adoption.",
  ],
  futureOutlook: [
    { icon: Bot, title: "Agentic Planning Assistants", description: "AI agents that execute bounded planning tasks with human approval checkpoints." },
    { icon: Brain, title: "Predictive Supply Chains", description: "Networks that anticipate disruption and rebalance before it impacts service." },
    { icon: LayoutDashboard, title: "Real-Time Decision Surfaces", description: "Dashboards that evolve into decision engines, not just reporting layers." },
  ],
  downloads: [
    { icon: FileText, label: "Executive Guide", description: "A one-page summary of the AI fit assessment framework." },
    { icon: ClipboardCheck, label: "Pilot Scoping Checklist", description: "The checklist used to scope a narrow, decision-anchored AI pilot." },
  ],
  relatedSlugs: ["prompt-engineering-for-operations-leaders", "zone-based-sortation-warehouse-throughput"],
};
