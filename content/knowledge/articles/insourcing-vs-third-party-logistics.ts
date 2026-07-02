import {
  BarChart3,
  Brain,
  FileSearch,
  FileText,
  GitCompare,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  Milestone,
  Boxes,
} from "lucide-react";

import type { Article } from "@/types/knowledge";

export const insourcingVsThirdPartyLogistics: Article = {
  slug: "insourcing-vs-third-party-logistics",
  title: "When to Insource: Evaluating the True Cost of Third-Party Logistics Dependency",
  subtitle:
    "What starts as a temporary overflow valve can quietly become a permanent, expensive dependency — here's how to evaluate the real trade-off.",
  category: ["Supply Chain", "Logistics", "Operations Excellence"],
  tags: ["3PL", "Cost Optimization", "Network Design", "Make-or-Buy"],
  readingTime: "9 min",
  difficulty: "Advanced",
  publishDate: "2026-02-16",
  icon: Boxes,

  executiveSummary: {
    overview:
      "A framework for evaluating whether volume routed through third-party logistics partners should be brought in-house — and how to build a defensible business case either way.",
    whyItMatters:
      "Fast-growing distribution networks often lean on third-party logistics providers to absorb volume spikes — but what starts as a temporary overflow valve can quietly become a permanent, expensive dependency.",
    whoShouldRead: "Supply chain and logistics leaders responsible for network cost and make-or-buy decisions.",
    keyTakeaway:
      "The 3PL relationship that solved yesterday's capacity problem isn't automatically the right answer once that volume becomes consistent.",
  },
  businessProblem:
    "Fast-growing distribution networks often lean on third-party logistics providers to absorb volume spikes — but what starts as a temporary overflow valve can quietly become a permanent, expensive dependency.",
  businessContext:
    "Picture a network that leaned on third-party carriers to handle overflow volume during a period of rapid growth. Years later, a meaningful share of that volume was still flowing through 3PL partners by default, not by deliberate decision.",
  whyItMattersPoints: [
    { icon: TrendingUp, title: "Margin Erosion", description: "3PL rates typically carry a premium over owned-network cost once volume is consistent, not occasional." },
    { icon: Target, title: "Service Control", description: "Outsourced volume means less direct control over delivery experience and SLA recovery." },
    { icon: ShieldAlert, title: "Capacity Risk", description: "Dependency on external capacity creates exposure during the partner's own peak constraints." },
    { icon: Scale, title: "Strategic Optionality", description: "Owned infrastructure becomes a long-term asset; 3PL spend does not." },
  ],
  myExperience:
    "I've looked at third-party logistics spend that had grown organically into 'the way we've always done it' for a specific category of volume, and asked a simple question: if this volume is now consistent and predictable, is a 3PL still the right long-term answer? Modelling insourcing — factoring the capital and hiring required against the ongoing per-shipment premium — showed a clear payback, and moving it in-house delivered meaningful, recurring annual savings without harming service levels.",

  recommendedFramework: {
    title: "The Insource-or-Outsource Decision Model",
    description: "A structured way to separate emotion and inertia from the actual economics of the decision.",
    nodes: [
      { icon: BarChart3, label: "Segment the Volume", detail: "Separate consistent volume from true overflow/spike volume" },
      { icon: Scale, label: "Model True Cost", detail: "Compare fully-loaded owned cost vs. 3PL rate, including capex" },
      { icon: Target, label: "Assess Service Impact", detail: "Evaluate SLA and customer experience trade-offs" },
      { icon: FileSearch, label: "Pilot the Transition", detail: "Insource a limited volume segment first" },
      { icon: TrendingUp, label: "Scale the Decision", detail: "Expand insourcing where the model holds at scale" },
    ],
  },
  aiEnablement: {
    intro: "The insource/outsource decision is fundamentally a cost-modelling problem — exactly where AI-assisted analysis adds rigor that manual spreadsheets struggle to sustain over time.",
    tools: [
      { icon: BarChart3, title: "Volume Pattern Analysis", description: "Distinguish genuinely variable overflow volume from volume that has become structurally consistent." },
      { icon: Brain, title: "Total Cost Modelling", description: "AI-assisted models that factor capex, labor, and opportunity cost into a true cost-per-shipment comparison." },
      { icon: GitCompare, title: "Scenario Comparison", description: "Compare multiple insourcing scenarios side by side before committing capital." },
    ],
  },
  implementationSteps: [
    { phase: "Assess", title: "Segment 3PL volume", description: "Break down third-party spend by category, consistency, and origin." },
    { phase: "Analyze", title: "Model the true cost", description: "Build a fully-loaded cost comparison between owned and outsourced capacity." },
    { phase: "Decide", title: "Select insourcing candidates", description: "Prioritize volume segments where the model shows a clear, durable case." },
    { phase: "Pilot", title: "Transition a limited segment", description: "Move a bounded volume segment in-house and monitor closely." },
    { phase: "Scale", title: "Expand where validated", description: "Extend insourcing to additional segments once the pilot proves out." },
    { phase: "Govern", title: "Reassess on a cadence", description: "Revisit the make-or-buy decision periodically as volume and cost structures shift." },
  ],
  kpis: [
    { display: "Lower", label: "Cost per Shipment", description: "Owned-network cost typically undercuts 3PL rates once volume is consistent." },
    { display: "Higher", label: "Service Level Control", description: "Insourced volume allows direct SLA management and faster issue resolution." },
    { display: "Positive", label: "Payback Period", description: "Capital investment in owned capacity typically pays back within a defined, modelable window." },
    { display: "Reduced", label: "External Capacity Risk", description: "Less dependency on a partner's own constrained peak capacity." },
  ],
  businessImpact: [
    { icon: TrendingUp, title: "Recurring Cost Savings", description: "Insourcing consistent volume converts an ongoing premium into a fixed, owned cost base." },
    { icon: Target, title: "Improved Service Consistency", description: "Direct control over insourced volume improves SLA reliability." },
    { icon: ShieldCheck, title: "Reduced External Dependency", description: "Less exposure to a partner's own capacity constraints during peak." },
    { icon: Scale, title: "Stronger Negotiating Position", description: "A credible insourcing option strengthens leverage on the 3PL volume that remains." },
  ],
  challengesMitigation: [
    { challenge: "Insourcing requires upfront capital and hiring that competes with other priorities.", mitigation: "Build the business case around payback period, not just total cost, to compete fairly for capital." },
    { challenge: "3PL relationships carry inertia — 'it's always been this way.'", mitigation: "Reframe the decision as a periodic make-or-buy review, not a one-time confrontation." },
    { challenge: "Volume that looks consistent can revert to variable, stranding new capacity.", mitigation: "Validate volume consistency over multiple cycles before committing to insourcing at scale." },
  ],
  lessonsLearned: [
    "The 3PL relationship that solved yesterday's problem isn't automatically the right answer for today's volume.",
    "A rigorous total-cost model, not intuition, is what makes an insourcing case defensible to finance.",
    "Piloting on a bounded volume segment de-risks the decision for everyone involved.",
  ],
  executiveTakeaways: [
    "Treat make-or-buy as a recurring decision, not a one-time setup choice.",
    "Segment volume by consistency before modelling cost — averages hide the real opportunity.",
    "A strong insourcing option is valuable even when you don't use it — it improves your negotiating position.",
  ],
  futureOutlook: [
    { icon: Brain, title: "Real-Time Cost Modelling", description: "Continuously updated total-cost models instead of periodic manual reviews." },
    { icon: Milestone, title: "Dynamic Make-or-Buy Routing", description: "Systems that route volume between owned and 3PL capacity based on live cost and service data." },
    { icon: BarChart3, title: "Predictive Volume Segmentation", description: "AI-assisted forecasting of which volume will become structurally consistent before it fully does." },
  ],
  downloads: [
    { icon: FileText, label: "Executive Guide", description: "A one-page summary of the insourcing decision framework." },
    { icon: Scale, label: "Cost Modelling Template", description: "The total-cost comparison template used to evaluate insourcing." },
  ],
  relatedSlugs: ["reducing-network-complexity", "leading-through-calculated-risk-peak-season"],
};
