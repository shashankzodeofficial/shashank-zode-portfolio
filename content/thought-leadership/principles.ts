import {
  Award,
  BarChart3,
  Compass,
  Gauge,
  GraduationCap,
  Handshake,
  Lightbulb,
  Search,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import type { ExecutivePrinciple } from "@/types/thought-leadership";

export const executivePrinciples: ExecutivePrinciple[] = [
  {
    slug: "customer-first",
    icon: Handshake,
    title: "Customer First",
    description:
      "Every operational and technology decision is tested against one question: does this make the customer's experience faster, more reliable, or more transparent.",
    businessApplication:
      "Applied to network design, warehouse layout, and platform features alike — a change that improves internal efficiency but degrades the customer-facing outcome doesn't qualify as an improvement.",
    leadershipExample:
      "Prioritized delivery reliability metrics on the operations leadership scorecard, not just as a customer service report, so the teams closest to the decision were accountable for the outcome customers actually experience.",
    executiveTakeaway:
      "If customer impact isn't on the same scorecard as cost and throughput, no one directly accountable for it is actually managing it.",
  },
  {
    slug: "ownership",
    icon: ShieldCheck,
    title: "Ownership",
    description:
      "Treating a problem as owned end-to-end, including the parts that technically belong to someone else's function, rather than stopping at the boundary of a job description.",
    businessApplication:
      "Cross-functional problems — a network bottleneck touching warehouse, transportation, and planning — get solved fastest when one person takes accountability for the full outcome, not just their slice of it.",
    leadershipExample:
      "Independently conceived, architected, and built AI planning and visibility platforms end-to-end rather than waiting for a dedicated engineering team to be resourced — ownership meant shipping the solution, not just sponsoring it.",
    executiveTakeaway:
      "Ownership is demonstrated by what you fix without being asked, not by what's listed in your job description.",
  },
  {
    slug: "data-driven-decisions",
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Executive decisions are built on live KPI visibility and tested hypotheses — not on the loudest voice in the room or the most confident narrative.",
    businessApplication:
      "Before committing capital or headcount to a change, the data needs to show the problem is real and the proposed fix is the highest-leverage option available.",
    leadershipExample:
      "Built executive dashboards and control towers specifically because monthly spreadsheet reporting was too stale to support real-time operational decisions — the goal was always to move decision-makers from opinion to evidence.",
    executiveTakeaway:
      "A dashboard's value isn't the number of charts it has — it's whether it changes what a leader decides to do next.",
  },
  {
    slug: "operational-discipline",
    icon: Gauge,
    title: "Operational Discipline",
    description:
      "Discipline in the details — SLA scorecards, utilization tracking, root-cause reviews — compounds into networks that simply work, without heroics required.",
    businessApplication:
      "Sustainable performance comes from consistent process adherence, not from occasional extraordinary effort during a crisis.",
    leadershipExample:
      "Vendor scorecard discipline, applied consistently across dozens of partners, drove sustained SLA compliance far more reliably than ad hoc escalations ever could.",
    executiveTakeaway:
      "The organizations that perform best under pressure are the ones that were already disciplined before the pressure arrived.",
  },
  {
    slug: "curiosity",
    icon: Search,
    title: "Curiosity",
    description:
      "Treating every operational anomaly as a question worth answering, rather than a number to be smoothed over in a report.",
    businessApplication:
      "The habit of asking 'why did this actually happen' rather than accepting the first plausible explanation surfaces root causes competitors miss.",
    leadershipExample:
      "Systematically mapping every connection in a logistics network — asking whether each one still needed to exist — came from curiosity about a network that had simply never been questioned since it was built.",
    executiveTakeaway:
      "The most valuable questions are the ones about processes everyone has stopped noticing because they've always been there.",
  },
  {
    slug: "learning",
    icon: GraduationCap,
    title: "Learning",
    description:
      "Committing to continuously build new capability — technical, analytical, and managerial — rather than relying on the skills that got you to the current role.",
    businessApplication:
      "The skills that solve today's operational problems are rarely sufficient for tomorrow's — leaders who stop learning become the bottleneck they once removed.",
    leadershipExample:
      "Learning AI product development and prompt engineering from the ground up, without a technical team to lean on, in order to build platforms the business needed but no one else was positioned to build.",
    executiveTakeaway:
      "The fastest way to stay relevant as a leader is to remain a beginner at something important, on purpose.",
  },
  {
    slug: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "The best ideas often come from the warehouse floor, not the boardroom — innovation means building the habit of listening to ground truth.",
    businessApplication:
      "Frontline teams see failure modes and inefficiencies long before they appear in a monthly report — innovation processes should actively surface that knowledge.",
    leadershipExample:
      "The zone-based sortation redesign that improved warehouse throughput started from associates' descriptions of where package flow actually broke down, not from a top-down redesign exercise.",
    executiveTakeaway:
      "If your best ideas only come from executive offsites, you're missing the ones already known on the floor.",
  },
  {
    slug: "accountability",
    icon: Target,
    title: "Accountability",
    description:
      "Being the named, findable owner of an outcome — good or bad — rather than diffusing responsibility across a team or a process.",
    businessApplication:
      "When a metric misses, accountability means leading the root-cause review, not just reporting the miss up the chain.",
    leadershipExample:
      "Owning full P&L accountability across warehousing, transport, and vendor spend meant every cost overrun and every improvement had one clearly identifiable owner — not a shared, diffused responsibility.",
    executiveTakeaway:
      "Accountability that isn't attached to a name is just an aspiration.",
  },
  {
    slug: "people-development",
    icon: Users,
    title: "People Development",
    description:
      "Building teams that outlast any single leader — coaching managers into leaders is the highest-leverage work there is.",
    businessApplication:
      "A leader's real output is measured partly by what the organization can do without them, not just what they personally delivered.",
    leadershipExample:
      "Leading and developing teams of 90+ across hub, transport, and vendor functions meant investing deliberately in manager capability, not just managing operational output directly.",
    executiveTakeaway:
      "If the operation depends entirely on you personally, you haven't built a team — you've built a dependency.",
  },
  {
    slug: "long-term-thinking",
    icon: Compass,
    title: "Long-Term Thinking",
    description:
      "Choosing the solution that compounds in value over years, even when a faster, shallower fix is available today.",
    businessApplication:
      "Platform and data-foundation investments often look slower in the first quarter and faster in every quarter after — long-term thinking means being willing to look slower first.",
    leadershipExample:
      "Building a shared data foundation before each subsequent AI platform meant the first build took longer, but every platform built afterward shipped faster because of it.",
    executiveTakeaway:
      "The right long-term decision often looks like the wrong short-term one — that tension is the job, not a sign something's off.",
  },
  {
    slug: "execution-excellence",
    icon: Award,
    title: "Execution Excellence",
    description:
      "Strategy is cheap; execution is the differentiator. Plans are broken into owners, dates, and measurable checkpoints — not left as intentions.",
    businessApplication:
      "A well-designed strategy that never gets sequenced into owned, dated action items is indistinguishable from no strategy at all.",
    leadershipExample:
      "Structuring high-stakes operational risks — like debottlenecking a facility ahead of peak season — around explicit go/no-go checkpoints turned a single big bet into a series of managed, reversible decisions.",
    executiveTakeaway:
      "Judge a strategy by its checkpoints and owners, not by how compelling it sounds in the room where it was proposed.",
  },
];

export function getPrincipleBySlug(slug: string): ExecutivePrinciple | undefined {
  return executivePrinciples.find((principle) => principle.slug === slug);
}
