import {
  Award,
  CalendarCheck,
  Compass,
  Flag,
  Flame,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";

import type { FitnessTimelineEntry } from "@/types/fitness";

export const fitnessTimeline: FitnessTimelineEntry[] = [
  {
    period: "The Trigger",
    title: "Declined for Term Life Insurance",
    icon: ShieldAlert,
    description:
      "At 125kg, an application for term life insurance was declined on medical grounds — a clinical, unambiguous signal that the number on the scale wasn't just a personal concern anymore.",
    detail:
      "It wasn't a New Year's resolution or a passing motivational spike. It was a third party — an insurer, with no stake in my feelings — stating plainly that my weight was a measurable risk. That kind of feedback is hard to argue with, and harder to ignore.",
  },
  {
    period: "Week 1",
    title: "Committing to a Structured Plan",
    icon: Compass,
    description:
      "Rather than a crash diet, the decision was to build a sustainable, structured approach — consistent training and nutrition discipline over a realistic timeline, not a rapid fix.",
    detail:
      "The goal was set at a clear target: 85kg. The plan was built around what could be sustained indefinitely, not just survived for a few weeks — the same instinct that later shaped how I approach operational change.",
  },
  {
    period: "Month 1–3",
    title: "Building the Non-Negotiable Habit",
    icon: Flame,
    description:
      "The first months were about making training a fixed, non-negotiable part of the day — showing up on schedule regardless of motivation, mood, or how the previous session went.",
    detail:
      "This is where most transformation attempts fail — not from lack of intensity, but from inconsistency. The habit had to survive bad days before it could compound into results.",
  },
  {
    period: "Month 4–7",
    title: "The Compounding Middle",
    icon: TrendingDown,
    description:
      "Progress became visible but the routine stayed unchanged — the same training frequency and nutrition discipline that started the transformation kept driving it, without needing to be reinvented.",
    detail:
      "This stretch tested patience more than willpower. The lesson: once the system is right, the job is to protect it, not constantly redesign it.",
  },
  {
    period: "Month 10",
    title: "Reaching 85kg",
    icon: Flag,
    description:
      "Ten months after the insurance decline, the target weight was reached — a 40kg transformation built entirely on structured, compounding effort.",
    detail:
      "Hitting the number mattered less than what it proved: that a clear goal, broken into a sustainable daily system, reliably gets you there — a principle that now underpins how I approach every major operational goal.",
  },
  {
    period: "Year 1 Onward",
    title: "Sustaining the Discipline",
    icon: CalendarCheck,
    description:
      "The transformation could have ended at the target weight. Instead, the same training frequency continued — now a 4+ year unbroken habit, 5x a week.",
    detail:
      "Reaching a goal is one discipline; sustaining it after the motivation fades is another. This is the phase that actually built the habit, not just the result.",
  },
  {
    period: "Present",
    title: "Becoming a Certified Coach",
    icon: Award,
    description:
      "The experience created a genuine interest in the science behind it — leading to formal certification as a Personal Fitness Coach and a Diet & Nutrition Coach.",
    detail:
      "Turning a personal transformation into structured, teachable knowledge closed the loop — the same instinct that drives me to document and systemize what works in operations, not just do it once and move on.",
  },
];
