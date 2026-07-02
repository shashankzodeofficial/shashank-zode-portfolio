import type { Prompt } from "@/types/ai-labs";

export const prompts: Prompt[] = [
  {
    slug: "network-redundancy-audit",
    title: "Network Redundancy Audit",
    category: "Supply Chain",
    tags: ["Network Design", "Cost Reduction", "Audit"],
    businessObjective:
      "Systematically identify redundant or orphaned connections in a logistics network before a manual review cycle.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a supply chain network design analyst. Given the following list of network connections (origin, destination, weekly volume, last-reviewed date), identify: (1) connections with volume below [X units/week], (2) connections not reviewed in over [Y months], and (3) connections that appear to duplicate a shorter available path. For each flagged connection, state the reason and a recommended next action (retain, consolidate, or eliminate). Network data: [paste data]. Present the output as a table sorted by potential savings impact.",
    expectedOutput:
      "A prioritized table of flagged connections with a reason code and recommended action for each, ready to hand to a network design review.",
    exampleUseCase:
      "Used ahead of a quarterly network review to pre-screen hundreds of lanes down to a shortlist worth a human's time.",
    tips: [
      "Always include a 'last-reviewed date' column — it's often the single best predictor of an orphaned connection.",
      "Ask the model to show its reasoning per row, not just the recommendation, so a human can spot-check the logic.",
    ],
    relatedSlugs: ["vendor-scorecard-summary"],
  },
  {
    slug: "zone-layout-design-brief",
    title: "Zone Layout Design Brief",
    category: "Warehouse",
    tags: ["Warehouse", "Layout", "Sortation"],
    businessObjective:
      "Turn raw facility and SKU data into a first-draft zone layout brief for a warehouse or sortation facility.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a warehouse operations design consultant. Given this facility profile — total square footage: [X], SKU count: [Y], top 20% volume share: [Z%], inbound dock count: [N] — draft a zone layout brief that: (1) recommends a zone count and sizing rationale, (2) flags which SKU categories should be placed nearest outbound, and (3) lists the top 3 safety considerations for pallet flow. Keep the brief under 400 words and format it as an executive-ready document with headers.",
    expectedOutput:
      "A structured, executive-ready layout brief covering zone count, placement rationale, and safety considerations.",
    exampleUseCase:
      "Used as a starting point before a facility walk-through, so the walk-through validates a hypothesis instead of starting from a blank page.",
    tips: [
      "Feed it real volume-share data, not assumptions — the recommendation is only as good as the input.",
      "Always have someone walk the floor to validate the AI's zone count assumption against physical constraints.",
    ],
    relatedSlugs: ["sop-draft-generator"],
  },
  {
    slug: "reorder-point-recalculation",
    title: "Reorder Point Recalculation",
    category: "Inventory",
    tags: ["Inventory", "Replenishment", "Forecasting"],
    businessObjective:
      "Recalculate a SKU's reorder point using recent sales velocity and lead-time variability instead of a stale static threshold.",
    recommendedModel: "GPT-4 class or equivalent reasoning model with code execution",
    promptText:
      "You are a supply chain planning analyst. Given this SKU's data — average weekly sales: [X units], sales standard deviation: [Y], supplier lead time: [Z days], lead-time variability: [±W days], target service level: [95%] — calculate a recommended reorder point and safety stock level. Show your formula and reasoning step by step, then state the recommended reorder point in a single clear line at the end.",
    expectedOutput:
      "A step-by-step calculation ending in a single, clearly stated reorder point and safety stock recommendation.",
    exampleUseCase:
      "Used to quickly stress-test a handful of high-priority SKUs flagged by an inventory exception report.",
    tips: [
      "Ask for the formula shown explicitly — this catches cases where the model's assumptions don't match your business.",
      "Re-run quarterly, not once — lead-time variability drifts as suppliers and routes change.",
    ],
    relatedSlugs: ["demand-anomaly-explanation"],
  },
  {
    slug: "scenario-planning-comparison",
    title: "Scenario Planning Comparison",
    category: "Planning",
    tags: ["Scenario Planning", "Capacity", "Decision Support"],
    businessObjective:
      "Compare two or three capacity or network scenarios side by side on cost, risk, and speed before a capital decision.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a supply chain planning advisor. I'm comparing these scenarios for [decision context]: Scenario A: [describe], Scenario B: [describe], Scenario C (optional): [describe]. For each scenario, summarize: estimated cost impact, implementation timeline, key risks, and reversibility. Then produce a comparison table and a one-paragraph recommendation with your reasoning clearly stated as a hypothesis, not a final decision.",
    expectedOutput:
      "A side-by-side comparison table plus a clearly-labeled recommendation the human decision-maker can accept, adjust, or override.",
    exampleUseCase:
      "Used to prepare the first draft of a scenario comparison before an executive capacity review, saving hours of manual table-building.",
    tips: [
      "Explicitly ask the model to label its output as a hypothesis — this keeps accountability with the human decision-maker.",
      "Feed it your actual cost assumptions rather than letting it estimate — generic industry costs rarely match your network.",
    ],
    relatedSlugs: ["scenario-planning-comparison"],
  },
  {
    slug: "demand-anomaly-explanation",
    title: "Demand Anomaly Explanation",
    category: "Forecasting",
    tags: ["Forecasting", "Root Cause", "Analytics"],
    businessObjective:
      "Generate a plain-English, cited explanation for why a demand forecast moved unexpectedly.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a demand planning analyst. The forecast for [SKU/category] changed by [X%] versus last week. Here are the potential drivers: promotional activity: [data], recent stockouts: [data], seasonality pattern: [data], competitor activity (if known): [data]. Write a 3-4 sentence explanation citing which driver(s) most likely caused the change, and flag anything that needs further investigation before the forecast is finalized.",
    expectedOutput:
      "A short, cited explanation planners can verify in seconds, plus a clear flag for anything needing further investigation.",
    exampleUseCase:
      "Used daily to triage which forecast anomalies genuinely need a planner's attention versus which are explainable noise.",
    tips: [
      "Never let the explanation auto-approve a forecast override — it's an investigation aid, not a decision-maker.",
      "Keep the driver list current — stale promotional or stockout data produces confidently wrong explanations.",
    ],
    relatedSlugs: ["reorder-point-recalculation"],
  },
  {
    slug: "difficult-conversation-prep",
    title: "Difficult Conversation Prep",
    category: "Leadership",
    tags: ["Leadership", "Coaching", "Communication"],
    businessObjective:
      "Prepare for a difficult performance or stakeholder conversation with a structured, empathetic opening and clear talking points.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are an executive coach. I need to have a difficult conversation about [situation — e.g., missed a deadline, underperformance, disagreement on approach] with [role/relationship]. Help me prepare: (1) a brief, respectful opening line, (2) 3 key points I need to land, stated factually and without blame, (3) a likely objection they might raise and how I could respond, and (4) a constructive close that sets a clear next step.",
    expectedOutput:
      "A short conversation prep sheet — opening line, key points, anticipated objection, and closing next step.",
    exampleUseCase:
      "Used before a one-on-one addressing a recurring performance gap, to walk in prepared rather than reactive.",
    tips: [
      "Give it real context about the relationship history — generic scripts don't account for trust already built or damaged.",
      "Treat the output as a rehearsal aid, not a script to read verbatim — authenticity still matters most.",
    ],
    relatedSlugs: ["executive-summary-writer"],
  },
  {
    slug: "root-cause-fishbone-analysis",
    title: "Root Cause Fishbone Analysis",
    category: "Analytics",
    tags: ["Root Cause", "Six Sigma", "Analytics"],
    businessObjective:
      "Generate a structured fishbone (Ishikawa) root-cause hypothesis set for an operational problem before a team RCA session.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a Lean Six Sigma facilitator. The problem statement is: [describe the operational problem, e.g., 'mis-ship rate increased 2x in Zone 3']. Generate a fishbone analysis across the standard categories — People, Process, Equipment, Materials, Environment, Measurement. For each category, list 2-3 plausible root-cause hypotheses. Flag which 2 hypotheses seem most likely given the problem statement, and suggest what data would confirm or rule each one out.",
    expectedOutput:
      "A categorized fishbone hypothesis list with the top candidates flagged and a data-validation plan for each.",
    exampleUseCase:
      "Used to give an RCA team a structured starting hypothesis set instead of an open brainstorm from zero.",
    tips: [
      "Use this to open an RCA session, never to close one — hypotheses must still be validated against real data.",
      "Ask explicitly for validation data needed per hypothesis — this keeps the exercise grounded, not speculative.",
    ],
    relatedSlugs: ["executive-summary-writer"],
  },
  {
    slug: "power-bi-dax-measure-generator",
    title: "Power BI DAX Measure Generator",
    category: "Power BI",
    tags: ["Power BI", "DAX", "Dashboards"],
    businessObjective:
      "Generate and explain a DAX measure for a specific KPI without needing to recall exact DAX syntax from memory.",
    recommendedModel: "GPT-4 class or equivalent code-capable model",
    promptText:
      "You are a Power BI data modeling expert. I need a DAX measure for: [describe the KPI, e.g., 'rolling 4-week average of on-time delivery rate, excluding cancelled orders']. My data model has these relevant tables/columns: [list them]. Write the DAX measure, then explain in plain English what each part of the formula does and any edge cases (blanks, divide-by-zero) it handles.",
    expectedOutput:
      "A working DAX measure plus a plain-English explanation of the logic and edge-case handling.",
    exampleUseCase:
      "Used to draft new KPI measures for an executive dashboard rebuild without reverse-engineering DAX syntax from scratch each time.",
    tips: [
      "Always test the generated measure against a known-correct manual calculation before publishing it to a dashboard.",
      "Explicitly ask for divide-by-zero and blank handling — it's the most common bug in AI-generated DAX.",
    ],
    relatedSlugs: ["excel-formula-debugging"],
  },
  {
    slug: "excel-formula-debugging",
    title: "Excel Formula Debugging & Optimization",
    category: "Excel",
    tags: ["Excel", "Formulas", "Automation"],
    businessObjective:
      "Debug a broken or slow Excel formula and get a cleaner, faster alternative.",
    recommendedModel: "GPT-4 class or equivalent code-capable model",
    promptText:
      "You are an Excel power-user. Here is a formula that isn't working as expected (or is too slow on a large dataset): [paste formula]. It's meant to: [describe intended behavior]. Explain what's wrong with it, then provide a corrected version. If a modern function (XLOOKUP, LET, dynamic arrays) would be faster or more maintainable, suggest that alternative and explain the trade-off.",
    expectedOutput:
      "A diagnosis of the formula issue, a corrected formula, and an optional modern alternative with trade-offs explained.",
    exampleUseCase:
      "Used to modernize legacy nested-VLOOKUP formulas inherited from previous planning spreadsheets.",
    tips: [
      "Paste a sample of the actual data alongside the formula — most formula bugs are data-shape issues, not syntax issues.",
      "Ask specifically about performance on large datasets if the workbook has 100K+ rows — volatile formulas are a common hidden cause.",
    ],
    relatedSlugs: ["power-bi-dax-measure-generator"],
  },
  {
    slug: "python-data-cleaning-script",
    title: "Python Data Cleaning Script Generator",
    category: "Python",
    tags: ["Python", "Data Cleaning", "Automation"],
    businessObjective:
      "Generate a reusable Python script to clean and standardize a recurring messy data export.",
    recommendedModel: "GPT-4 class or equivalent code-capable model",
    promptText:
      "You are a Python data engineer. I have a recurring [CSV/Excel] export with these issues: [describe issues — inconsistent date formats, duplicate rows, mixed units, trailing whitespace, etc.]. Write a pandas script that: (1) loads the file, (2) fixes each issue listed, (3) logs how many rows were affected by each fix, and (4) exports a clean version. Include comments explaining each cleaning step.",
    expectedOutput:
      "A commented, reusable pandas script with a summary log of what was cleaned and how many rows were affected.",
    exampleUseCase:
      "Used to build a standing cleaning script for a weekly vendor data export that previously required 30+ minutes of manual Excel cleanup.",
    tips: [
      "Ask for a row-count log at every step — it's the fastest way to catch a cleaning rule that's too aggressive.",
      "Run the script on a sample first, not the full dataset, until every cleaning rule is validated.",
    ],
    relatedSlugs: ["excel-formula-debugging"],
  },
  {
    slug: "agent-task-decomposition",
    title: "Agent Task Decomposition",
    category: "AI Agents",
    tags: ["AI Agents", "Workflow Design", "Automation"],
    businessObjective:
      "Break a complex operational task into discrete steps suitable for an AI agent workflow, before writing any code.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are an AI solutions architect. I want to automate this workflow with an AI agent: [describe the end-to-end task, e.g., 'weekly vendor performance report generation']. Break it into discrete steps, and for each step specify: the input needed, the action taken, the output produced, and whether it needs human approval before proceeding. Flag any step that is high-risk and should not be fully automated.",
    expectedOutput:
      "A step-by-step task decomposition with inputs, actions, outputs, and human-approval checkpoints clearly marked.",
    exampleUseCase:
      "Used as the first design step before scoping any of the AI Agents in this Innovation Center's agent showcase.",
    tips: [
      "Always ask it to flag high-risk steps explicitly — the biggest agent failures come from automating a step that needed a human check.",
      "Keep the decomposition granular enough that each step could, in principle, be tested independently.",
    ],
    relatedSlugs: ["agent-guardrail-definition"],
  },
  {
    slug: "agent-guardrail-definition",
    title: "Agent Guardrail Definition",
    category: "AI Agents",
    tags: ["AI Agents", "Governance", "Risk"],
    businessObjective:
      "Define the guardrails and escalation rules an AI agent must follow before it's allowed to take autonomous action.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are an AI governance advisor. I'm designing an agent that will: [describe agent's autonomous actions]. Define: (1) actions it should never take without human approval, (2) data it should never access or expose, (3) confidence thresholds below which it must escalate rather than act, and (4) what a safe default/fallback behavior looks like if it's uncertain. Present this as a guardrail policy document.",
    expectedOutput:
      "A structured guardrail policy covering approval boundaries, data access limits, confidence thresholds, and safe fallback behavior.",
    exampleUseCase:
      "Used before deploying any agent design in this portfolio into a real workflow, as a governance-first design discipline.",
    tips: [
      "Write guardrails before capabilities, not after — retrofitting governance onto a working agent is much harder.",
      "Review guardrails with whoever owns the risk, not just the builder — blind spots are easiest to see from outside.",
    ],
    relatedSlugs: ["agent-task-decomposition"],
  },
  {
    slug: "executive-summary-writer",
    title: "Executive Summary Writer",
    category: "Executive Communication",
    tags: ["Executive Communication", "Writing", "Reporting"],
    businessObjective:
      "Turn a detailed operational update into a concise, executive-ready summary in the right tone for leadership.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are an executive communications advisor. Turn this detailed update into an executive summary: [paste detailed notes/data]. The summary should be no more than 150 words, lead with the headline outcome, state the business impact in concrete terms, and end with a clear ask or next step if one exists. Avoid jargon a non-specialist executive wouldn't recognize.",
    expectedOutput:
      "A tight, headline-first executive summary under 150 words with a clear business impact statement and next step.",
    exampleUseCase:
      "Used to convert a detailed project status update into the two-paragraph version that actually gets read in a leadership review.",
    tips: [
      "Always specify the word limit — without it, the model tends to over-explain rather than compress.",
      "Read it aloud before sending — if it doesn't sound like something you'd say in the room, revise the tone.",
    ],
    relatedSlugs: ["difficult-conversation-prep"],
  },
  {
    slug: "sop-draft-generator",
    title: "SOP Draft Generator",
    category: "Operations",
    tags: ["SOPs", "Operations", "Documentation"],
    businessObjective:
      "Draft a first-version standard operating procedure from a structured process description.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a process documentation specialist. Here is a description of how [process name] currently works: [describe steps, safety requirements, escalation path]. Draft an SOP in checklist format with numbered steps, a clearly marked safety section, and an escalation contact section. Keep language direct and instructional — write for someone doing this for the first time.",
    expectedOutput:
      "A numbered, checklist-format SOP draft with a safety section and escalation path, ready for owner review.",
    exampleUseCase:
      "Used to draft the first version of a new facility's SOP set before a formal review and sign-off cycle.",
    tips: [
      "Write for a first-time user, explicitly — SOPs written for experts skip the steps beginners actually need.",
      "Never publish an AI-drafted SOP without a floor-authority sign-off — accuracy accountability stays human.",
    ],
    relatedSlugs: ["zone-layout-design-brief"],
  },
  {
    slug: "customer-complaint-root-cause",
    title: "Customer Complaint Root-Cause Categorizer",
    category: "Customer Experience",
    tags: ["Customer Experience", "Root Cause", "Analytics"],
    businessObjective:
      "Categorize a batch of raw customer complaint text into root-cause buckets to find the highest-leverage fix.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a customer experience analyst. Here is a batch of raw customer complaints: [paste complaint text, one per line]. Categorize each into one of these root-cause buckets: [list your buckets, e.g., late delivery, damaged item, wrong item, communication gap, other]. Then summarize the top 3 buckets by frequency and, for the largest bucket, suggest 2 possible operational root causes worth investigating.",
    expectedOutput:
      "Each complaint categorized into a root-cause bucket, plus a frequency summary and investigation leads for the largest bucket.",
    exampleUseCase:
      "Used to triage a week's worth of customer complaints into actionable operational themes instead of reading each one individually.",
    tips: [
      "Predefine your bucket list rather than letting the model invent categories — this keeps results comparable week over week.",
      "Spot-check a sample of categorizations manually before trusting the frequency summary for a decision.",
    ],
    relatedSlugs: ["root-cause-fishbone-analysis"],
  },
  {
    slug: "vendor-scorecard-summary",
    title: "Vendor Scorecard Summary",
    category: "Supply Chain",
    tags: ["Vendor Management", "SLA", "Reporting"],
    businessObjective:
      "Turn raw vendor performance data into a concise scorecard summary with a clear compliance flag.",
    recommendedModel: "GPT-4 class or equivalent reasoning model",
    promptText:
      "You are a vendor management analyst. Here is this vendor's performance data for the period: on-time delivery: [X%], quality reject rate: [Y%], responsiveness score: [Z], SLA target: [target values]. Write a 100-word scorecard summary stating whether the vendor is meeting, at-risk of missing, or missing SLA — with the specific metric driving that status — and one recommended next action.",
    expectedOutput:
      "A concise scorecard summary with a clear SLA status flag and one recommended next action.",
    exampleUseCase:
      "Used to draft the narrative section of a quarterly vendor business review deck across 40+ vendor relationships.",
    tips: [
      "Always state the SLA target alongside the actual figure — a bare percentage without context invites misreading.",
      "Keep the recommended action singular and specific — a list of five actions rarely gets acted on.",
    ],
    relatedSlugs: ["network-redundancy-audit"],
  },
];

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((prompt) => prompt.slug === slug);
}

export const promptCategories = Array.from(
  new Set(prompts.map((prompt) => prompt.category)),
);

export function getAllPromptTags(): string[] {
  return Array.from(new Set(prompts.flatMap((prompt) => prompt.tags))).sort();
}
