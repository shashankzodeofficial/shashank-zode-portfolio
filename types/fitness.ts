import type { LucideIcon } from "lucide-react";

import type { MediaAsset } from "@/types";

export interface FitnessTimelineEntry {
  period: string;
  title: string;
  icon: LucideIcon;
  description: string;
  detail: string;
}

export interface FitnessMilestone {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export interface FitnessLeadershipLesson {
  icon: LucideIcon;
  fitnessPrinciple: string;
  leadershipParallel: string;
  description: string;
}

export interface FitnessCertification {
  title: string;
  issuer: string;
  credentialId: string;
  credits: string;
  year: string;
  image: MediaAsset;
  whatItCovers: string[];
  leadershipConnection: string;
}

export interface FitnessQuote {
  quote: string;
  theme: string;
}
