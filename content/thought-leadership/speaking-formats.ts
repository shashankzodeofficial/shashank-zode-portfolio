import {
  Flame,
  GraduationCap,
  Mic,
  Mountain,
  Presentation,
  UsersRound,
  Wrench,
} from "lucide-react";

import type { SpeakingFormat } from "@/types/thought-leadership";

export const speakingFormats: SpeakingFormat[] = [
  {
    icon: Mic,
    title: "Keynote",
    description:
      "A structured, high-energy talk built around one clear executive thesis — supported by real operating experience, not generic slides.",
    idealFor: "Conferences, annual summits, industry association events",
  },
  {
    icon: UsersRound,
    title: "Executive Roundtable",
    description:
      "A facilitated, peer-level discussion among executives on a shared strategic challenge — less presentation, more structured exchange.",
    idealFor: "CXO forums, invite-only leadership groups",
  },
  {
    icon: Flame,
    title: "Fireside Chat",
    description:
      "A conversational, interviewer-led format exploring leadership journey, decision-making, and lessons learned in a relaxed setting.",
    idealFor: "Podcasts, intimate executive gatherings, media events",
  },
  {
    icon: Wrench,
    title: "Workshop",
    description:
      "A hands-on session where participants apply a specific framework — prompt engineering, decision-making, or process design — to their own challenges.",
    idealFor: "Corporate training days, MBA electives, team offsites",
  },
  {
    icon: Presentation,
    title: "Panel Discussion",
    description:
      "A multi-speaker discussion contributing an operator's perspective alongside other industry voices on a shared theme.",
    idealFor: "Industry conferences, awards events, trade association panels",
  },
  {
    icon: GraduationCap,
    title: "Corporate Training",
    description:
      "A structured internal session equipping a team with a specific capability — AI adoption, decision frameworks, or operational excellence practices.",
    idealFor: "Internal leadership development, functional team upskilling",
  },
  {
    icon: Mountain,
    title: "Leadership Retreat",
    description:
      "An extended session for a leadership team working through a strategic challenge together, combining a talk with facilitated application.",
    idealFor: "Executive offsites, leadership team retreats",
  },
];
