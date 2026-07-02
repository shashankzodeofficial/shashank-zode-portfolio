import {
  AlertCircle,
  BarChart3,
  BookOpen,
  FileText,
  Mail,
  MessageSquareText,
  SlidersHorizontal,
  Target,
} from "lucide-react";

import type { LLMApplication } from "@/types/ai-labs";

export const llmApplications: LLMApplication[] = [
  {
    slug: "business-summarization",
    title: "Business Summarization",
    icon: FileText,
    tags: ["Summarization", "Executive Communication"],
    businessProblem:
      "Leaders receive far more detailed operational updates than they have time to read in full, and important signal gets lost in long documents.",
    aiWorkflow:
      "A detailed update — a report, a set of meeting notes, a data export — is fed to an LLM with a structured prompt specifying length, tone, and the specific business questions the summary must answer.",
    expectedOutputs: [
      "A headline-first summary under a specified word count",
      "Key figures preserved exactly as given, never re-estimated",
      "A clear statement of what changed and why it matters",
    ],
    businessBenefits: [
      "Leadership reads the two-minute version instead of skipping the ten-page one.",
      "Consistent summary structure makes updates comparable across cycles.",
    ],
    risks: [
      "The model may compress away a caveat that materially changes the meaning.",
      "Numbers can be subtly altered if not explicitly instructed to preserve them exactly.",
    ],
    bestPractices: [
      "Always instruct the model to preserve numeric figures exactly rather than paraphrasing them.",
      "Keep a human review step for any summary going to external or board-level audiences.",
    ],
    relatedSlugs: ["executive-summary-writer"],
  },
  {
    slug: "sop-process-documentation-generation",
    title: "SOP & Process Documentation Generation",
    icon: BookOpen,
    tags: ["SOPs", "Documentation", "Operations"],
    businessProblem:
      "Process documentation drifts out of date faster than teams can manually rewrite it, and drafting a new SOP from a process walkthrough is slow and inconsistent across authors.",
    aiWorkflow:
      "A structured process description — steps, safety requirements, escalation paths — is passed to an LLM with a fixed SOP template, producing a first draft for the process owner to validate.",
    expectedOutputs: [
      "A numbered, checklist-format SOP draft",
      "A clearly separated safety and escalation section",
      "Consistent formatting across every SOP produced this way",
    ],
    businessBenefits: [
      "Documentation turnaround shrinks from a multi-day writing task to a review task.",
      "New SOPs read consistently regardless of which team member drafted the process description.",
    ],
    risks: [
      "A draft can look polished and authoritative while still containing a factual process error.",
      "Without a review discipline, drift between documented and actual practice can go unnoticed.",
    ],
    bestPractices: [
      "Require sign-off from someone with floor authority before any AI-drafted SOP is published.",
      "Re-validate SOPs on a fixed cadence, not just when someone happens to notice drift.",
    ],
    relatedSlugs: ["ai-generated-sop-drafting-assistant", "sop-draft-generator"],
  },
  {
    slug: "root-cause-analysis-copilot",
    title: "Root Cause Analysis Co-Pilot",
    icon: AlertCircle,
    tags: ["Root Cause", "Six Sigma", "Analytics"],
    businessProblem:
      "Root cause analysis sessions often start from a blank whiteboard, and teams spend the first 20 minutes just generating hypotheses instead of testing them.",
    aiWorkflow:
      "A problem statement is passed to an LLM structured around a standard RCA framework (fishbone, 5 Whys), generating a starting hypothesis set across standard categories for the team to validate against data.",
    expectedOutputs: [
      "A categorized set of plausible root-cause hypotheses",
      "The most likely candidates flagged for priority investigation",
      "Suggested data points needed to confirm or rule out each hypothesis",
    ],
    businessBenefits: [
      "RCA sessions start from a structured hypothesis set instead of an open brainstorm.",
      "Less experienced facilitators get a consistent analytical starting point.",
    ],
    risks: [
      "Hypotheses can feel authoritative even when unsupported by real data — teams may anchor too early.",
      "The model has no visibility into unrecorded tribal knowledge that might be the actual root cause.",
    ],
    bestPractices: [
      "Use the output to open a session, never to close one — every hypothesis still needs data validation.",
      "Always include frontline staff who know the process, not just the AI-generated hypothesis list.",
    ],
    relatedSlugs: ["root-cause-fishbone-analysis"],
  },
  {
    slug: "executive-reporting-assistant",
    title: "Executive Reporting Assistant",
    icon: BarChart3,
    tags: ["Executive Reporting", "Dashboards", "Automation"],
    businessProblem:
      "Recurring executive reports require someone to translate raw KPI movement into a narrative leadership can act on — a task that repeats every cycle regardless of how routine the underlying data is.",
    aiWorkflow:
      "Structured KPI deltas are passed to an LLM with a fixed narrative template matching the format leadership already expects, producing a draft an analyst reviews before distribution.",
    expectedOutputs: [
      "A draft narrative matching the established executive reporting format",
      "Flagged KPIs that moved outside expected ranges",
      "A version an analyst can edit rather than author from scratch",
    ],
    businessBenefits: [
      "Recurring reporting cycles take a fraction of the manual writing time.",
      "Narrative quality stays consistent even when the analyst on rotation changes.",
    ],
    risks: [
      "A generic draft that doesn't match leadership's expected format erodes trust and gets rewritten anyway.",
      "Automated drafts can miss context only a human analyst would know to flag.",
    ],
    bestPractices: [
      "Invest in getting the template exactly right before scaling — this is the highest-leverage tuning step.",
      "Keep a named analyst accountable for every report that goes to leadership, draft or not.",
    ],
    relatedSlugs: ["executive-dashboard-narrative-generator", "executive-reporting-agent"],
  },
  {
    slug: "email-correspondence-drafting",
    title: "Email & Correspondence Drafting",
    icon: Mail,
    tags: ["Communication", "Automation"],
    businessProblem:
      "Routine but sensitive correspondence — vendor escalations, status updates, stakeholder communications — takes disproportionate time to word carefully every time.",
    aiWorkflow:
      "Key facts and the intended tone are given to an LLM, which drafts a correspondence-ready email for the sender to review and personalize before sending.",
    expectedOutputs: [
      "A draft email in the specified tone (formal, direct, conciliatory)",
      "Key facts stated clearly without embellishment",
      "A clear call to action or next step",
    ],
    businessBenefits: [
      "Drafting time for recurring correspondence types drops significantly.",
      "Tone stays professional and consistent even under time pressure.",
    ],
    risks: [
      "A draft that sounds right but misstates a fact can damage a relationship if sent unreviewed.",
      "Over-reliance can flatten a sender's authentic voice in ongoing relationships.",
    ],
    bestPractices: [
      "Always personalize the closing and any relationship-specific context before sending.",
      "Never send a draft touching a sensitive escalation without a human read-through.",
    ],
    relatedSlugs: ["difficult-conversation-prep"],
  },
  {
    slug: "data-interpretation-insight-generation",
    title: "Data Interpretation & Insight Generation",
    icon: MessageSquareText,
    tags: ["Analytics", "Data Interpretation"],
    businessProblem:
      "Raw data tables and chart exports are common, but translating them into a business-readable insight takes an analyst's time every single time a stakeholder asks 'so what does this mean?'",
    aiWorkflow:
      "Structured data (a table, a set of KPI values) is passed to an LLM with a prompt asking for the business implication, not just a restatement of the numbers.",
    expectedOutputs: [
      "A plain-language interpretation of what the data implies for the business",
      "Distinctions between statistically notable changes and normal noise",
      "Suggested follow-up questions worth investigating",
    ],
    businessBenefits: [
      "Non-technical stakeholders get the 'so what' without waiting on an analyst's availability.",
      "Analysts spend more time validating interpretations than generating first drafts.",
    ],
    risks: [
      "A model can confidently over-interpret noise as a meaningful trend.",
      "Without the underlying data attached, an interpretation is unverifiable at a glance.",
    ],
    bestPractices: [
      "Always ask the model to distinguish signal from noise explicitly, not just describe the data.",
      "Attach the underlying data alongside any AI-generated interpretation for verification.",
    ],
    relatedSlugs: ["demand-anomaly-explanation"],
  },
  {
    slug: "ai-assisted-scenario-planning",
    title: "AI-Assisted Scenario Planning",
    icon: SlidersHorizontal,
    tags: ["Planning", "Scenario Modeling", "Decision Support"],
    businessProblem:
      "Comparing multiple capacity, network, or investment scenarios by hand is slow, and the resulting comparison table often reflects whoever built it more than the underlying trade-offs.",
    aiWorkflow:
      "Scenario descriptions and cost/risk assumptions are passed to an LLM structured to produce a consistent comparison format — cost, timeline, risk, reversibility — for every scenario evaluated.",
    expectedOutputs: [
      "A side-by-side scenario comparison table",
      "A clearly labeled recommendation presented as a hypothesis",
      "Key risks and reversibility notes for each scenario",
    ],
    businessBenefits: [
      "Scenario comparisons are built in minutes instead of hours, freeing time for deeper stress-testing.",
      "Consistent comparison structure makes trade-offs easier for executives to evaluate quickly.",
    ],
    risks: [
      "Assumptions fed into the model, if generic rather than real, produce a plausible-looking but wrong comparison.",
      "A confident recommendation can be mistaken for a final decision rather than a starting hypothesis.",
    ],
    bestPractices: [
      "Feed it your actual cost and risk assumptions, never industry-generic estimates.",
      "Explicitly label AI-generated recommendations as inputs to a decision, not the decision itself.",
    ],
    relatedSlugs: ["scenario-planning-comparison"],
  },
  {
    slug: "decision-support-narratives",
    title: "Decision Support Narratives",
    icon: Target,
    tags: ["Decision Support", "Leadership"],
    businessProblem:
      "Executives facing a close call often need a clear, structured articulation of the trade-offs — not more data, but a clearer frame for the data they already have.",
    aiWorkflow:
      "The decision context and known trade-offs are given to an LLM structured to lay out the case for each option cleanly, without collapsing nuance into a false-confidence recommendation.",
    expectedOutputs: [
      "A structured articulation of each option's case, stated fairly",
      "The key uncertainty or risk driving the decision's difficulty",
      "A clearly labeled framing, not an autonomous decision",
    ],
    businessBenefits: [
      "Decision-makers get a clearer frame for a close call without additional data-gathering delay.",
      "Team discussions start from a shared, structured articulation instead of scattered opinions.",
    ],
    risks: [
      "A confidently worded narrative can be mistaken for analytical certainty that doesn't exist.",
      "Framing choices in the prompt can unintentionally bias which option reads as stronger.",
    ],
    bestPractices: [
      "Explicitly ask for the strongest case for every option, including the one you're inclined against.",
      "Keep the decision owner clearly human — this is a framing aid, not an autonomous decision-maker.",
    ],
    relatedSlugs: ["meeting-summary-decision-support"],
  },
];

export function getLlmApplicationBySlug(slug: string): LLMApplication | undefined {
  return llmApplications.find((application) => application.slug === slug);
}
