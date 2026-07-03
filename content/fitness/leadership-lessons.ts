import { Compass, Repeat, ShieldCheck, Target, TrendingUp } from "lucide-react";

import type { FitnessLeadershipLesson } from "@/types/fitness";

export const fitnessLeadershipLessons: FitnessLeadershipLesson[] = [
  {
    icon: Target,
    fitnessPrinciple: "Goal Setting",
    leadershipParallel: "Strategic Clarity",
    description:
      "A vague intention to 'get healthier' never moved the needle — a specific target of 85kg, with a defined timeline, did. The same discipline applies to a business goal: a number, a deadline, and a defined starting point make it real.",
  },
  {
    icon: Repeat,
    fitnessPrinciple: "Execution",
    leadershipParallel: "Operational Discipline",
    description:
      "The transformation wasn't won on the highest-intensity days — it was won on the ordinary Tuesdays when showing up was the only decision that mattered. Execution discipline in operations works the same way: consistency beats occasional heroics.",
  },
  {
    icon: ShieldCheck,
    fitnessPrinciple: "Accountability",
    leadershipParallel: "Ownership",
    description:
      "No one else was going to show up to the gym. Owning the outcome — not the effort, the outcome — is the same standard I hold myself and my teams to on every operational commitment.",
  },
  {
    icon: TrendingUp,
    fitnessPrinciple: "Adaptability",
    leadershipParallel: "Change Management",
    description:
      "Plateaus required adjusting the plan without abandoning the goal — the same skill required when a business strategy needs to flex without losing sight of the underlying objective.",
  },
  {
    icon: Compass,
    fitnessPrinciple: "Long-Term Thinking",
    leadershipParallel: "Sustainable Transformation",
    description:
      "Reaching 85kg was the easy part to define; sustaining it for four-plus years is the part that actually matters. The same is true of operational change — the goal isn't the announcement, it's what's still true a year later.",
  },
];
