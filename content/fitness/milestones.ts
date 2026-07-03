import { Award, CalendarCheck, Flame, TrendingDown } from "lucide-react";

import type { FitnessMilestone } from "@/types/fitness";

export const fitnessMilestones: FitnessMilestone[] = [
  {
    icon: TrendingDown,
    value: "40kg",
    label: "Total Transformation",
    description: "125kg to 85kg, achieved in 10 months of structured, consistent effort.",
  },
  {
    icon: CalendarCheck,
    value: "4+ Years",
    label: "Unbroken Discipline",
    description: "The habit built during the transformation has held for four-plus years since.",
  },
  {
    icon: Flame,
    value: "5x/Week",
    label: "Training Frequency",
    description: "A fixed, non-negotiable schedule maintained regardless of workload or travel.",
  },
  {
    icon: Award,
    value: "2",
    label: "Professional Certifications",
    description: "CPD-accredited Personal Fitness Coach and Diet & Nutrition Coach credentials.",
  },
];
