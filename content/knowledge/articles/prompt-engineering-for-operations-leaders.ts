import {
  Bot,
  Brain,
  ClipboardCheck,
  FileSearch,
  FileText,
  ListTree,
  MessageSquare,
  Presentation,
  Repeat,
  ShieldAlert,
  Target,
  Timer,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";

import type { Article } from "@/types/knowledge";

export const promptEngineeringForOperationsLeaders: Article = {
  slug: "prompt-engineering-for-operations-leaders",
  title: "Prompt Engineering for Operations Leaders: A Practical Starter Guide",
  subtitle:
    "Most leaders use AI chat tools casually and get inconsistent results. The gap usually isn't the model — it's the prompt.",
  category: ["Prompt Engineering", "AI", "Leadership"],
  tags: ["Prompt Engineering", "ChatGPT", "Claude", "AI Agent", "Productivity"],
  readingTime: "8 min",
  difficulty: "Foundational",
  publishDate: "2026-03-09",
  icon: Wand2,

  executiveSummary: {
    overview:
      "A practical, repeatable structure for getting consistently useful output from AI chat tools — built for operations leaders, not prompt engineers.",
    whyItMatters:
      "Most operations leaders use AI chat tools casually, without a repeatable approach, so results are inconsistent and the tool never becomes a reliable part of the workflow.",
    whoShouldRead: "Any leader who has tried ChatGPT or Claude a few times with mixed results.",
    keyTakeaway:
      "Treating prompts as reusable, refinable assets — not one-off questions — is the single biggest shift in getting real value from AI tools.",
  },
  businessProblem:
    "Most operations leaders use AI chat tools casually, without a repeatable approach, so results are inconsistent and the tool never becomes a reliable part of the workflow.",
  businessContext:
    "Picture a busy operations leader who has tried ChatGPT or Claude a handful of times, gotten mixed results, and quietly concluded it's not that useful for their job. The gap usually isn't the model — it's the prompt.",
  whyItMattersPoints: [
    { icon: Timer, title: "Time Reclaimed", description: "A well-structured prompt turns a lengthy drafting task into a quick review task." },
    { icon: Target, title: "Consistency", description: "A repeatable prompt structure produces consistent quality, not a lottery of good and bad outputs." },
    { icon: Users, title: "Team Multiplier", description: "Leaders who model good prompting practices help their teams adopt AI tools faster and more effectively." },
    { icon: TrendingUp, title: "Compounding Value", description: "A personal library of proven prompts becomes more valuable every time it's reused." },
  ],
  myExperience:
    "The shift for me was treating prompts as reusable assets, not one-off questions. I keep a running library of prompts for the tasks I do repeatedly — drafting process documentation, summarizing meeting notes, doing a first-pass root cause analysis — and I refine each one based on what worked. That library is now one of the most useful tools in my day-to-day operating rhythm.",

  recommendedFramework: {
    title: "The CLEAR Prompt Structure",
    description: "Five elements that turn a vague request into a consistently useful prompt.",
    nodes: [
      { icon: Target, label: "Context", detail: "Give the model the business situation, not just the task" },
      { icon: ListTree, label: "Length & Format", detail: "Specify the output format and length you need" },
      { icon: Users, label: "Examples", detail: "Show one example of the output style you want" },
      { icon: ShieldAlert, label: "Ask for Assumptions", detail: "Have the model state what it assumed" },
      { icon: Repeat, label: "Refine", detail: "Iterate the prompt, don't just iterate the output" },
    ],
  },
  aiEnablement: {
    intro: "This article is itself about the tools — but the core discipline (context, format, examples, iteration) applies whether you're using ChatGPT, Claude, or an internal enterprise assistant.",
    tools: [
      { icon: MessageSquare, title: "ChatGPT / Claude", description: "General-purpose assistants for drafting, summarizing, and analysis." },
      { icon: Brain, title: "Custom GPTs / Projects", description: "Saved context and instructions for tasks you repeat often." },
      { icon: FileSearch, title: "Retrieval-Augmented Tools", description: "Assistants that reference your own documents rather than general knowledge alone." },
      { icon: Bot, title: "Agentic Assistants", description: "Tools that execute multi-step tasks, not just single responses." },
    ],
  },
  implementationSteps: [
    { phase: "Identify", title: "List your repeat tasks", description: "Note the writing and analysis tasks you do weekly — these are your best prompt candidates." },
    { phase: "Draft", title: "Write a first prompt using CLEAR", description: "Include context, format, an example, and a request for stated assumptions." },
    { phase: "Test", title: "Run it against a real task", description: "Use an actual document or situation, not a hypothetical one." },
    { phase: "Refine", title: "Iterate the prompt itself", description: "If the output is off, adjust the prompt structure, not just the single response." },
    { phase: "Save", title: "Build a personal prompt library", description: "Store working prompts somewhere you'll actually find them again." },
    { phase: "Share", title: "Extend to your team", description: "Share proven prompts so the whole team benefits, not just you." },
  ],
  kpis: [
    { display: "Faster", label: "First-Draft Turnaround", description: "Well-structured prompts cut drafting time for routine written tasks." },
    { display: "Higher", label: "Output Consistency", description: "A repeatable structure reduces the variance between good and poor responses." },
    { display: "Growing", label: "Reusable Prompt Library", description: "Value compounds as more proven prompts get saved and reused." },
    { display: "Broader", label: "Team AI Adoption", description: "Shared prompts lower the barrier for teammates to get useful results." },
  ],
  businessImpact: [
    { icon: Timer, title: "Meaningful Time Savings", description: "Routine drafting and summarization tasks shrink from tens of minutes to a quick review." },
    { icon: Target, title: "More Consistent Output Quality", description: "A repeatable structure reduces reliance on trial and error." },
    { icon: Users, title: "Faster Team-Wide Adoption", description: "Shared prompt libraries help teams build AI fluency faster together." },
    { icon: TrendingUp, title: "Compounding Productivity", description: "Each saved, refined prompt becomes reusable leverage for future tasks." },
  ],
  challengesMitigation: [
    { challenge: "A single bad experience with a vague prompt convinces people AI doesn't work for their job.", mitigation: "Model a structured prompt (CLEAR) so the first experience is a good one." },
    { challenge: "Prompts get written once and never improved.", mitigation: "Treat prompts as living assets — refine them each time the output isn't quite right." },
    { challenge: "Sensitive or confidential information ends up in prompts without a second thought.", mitigation: "Establish clear guidelines on what data can and can't be shared with external AI tools." },
  ],
  lessonsLearned: [
    "Treating prompts as reusable assets, not one-off questions, is the single biggest shift in getting value from AI tools.",
    "The quality gap between a vague prompt and a structured one is larger than the gap between AI models.",
    "Sharing a working prompt with your team multiplies its value far beyond your own time saved.",
  ],
  executiveTakeaways: [
    "Build a personal prompt library — it compounds in value the same way a good template library does.",
    "Model good prompting practices publicly; it's one of the fastest ways to lift team-wide AI fluency.",
    "Set clear guardrails on what information can go into external AI tools before adoption scales.",
  ],
  futureOutlook: [
    { icon: Bot, title: "Agentic Task Execution", description: "Moving from single prompts to agents that complete multi-step workflows." },
    { icon: FileSearch, title: "Enterprise Knowledge Grounding", description: "AI tools that reference internal documents and data, not just general knowledge." },
    { icon: Brain, title: "Personalized AI Assistants", description: "Assistants that learn an individual leader's style, priorities, and recurring tasks over time." },
  ],
  downloads: [
    { icon: FileText, label: "Executive Guide", description: "A one-page summary of the CLEAR prompt structure." },
    { icon: ClipboardCheck, label: "Prompt Pack", description: "A starter set of prompts for common operations leadership tasks." },
    { icon: Presentation, label: "Team Training Deck", description: "A short deck to introduce structured prompting to your team." },
  ],
  relatedSlugs: ["ai-in-supply-chain-decision-making", "leading-through-calculated-risk-peak-season"],
};
