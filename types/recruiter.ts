import type { LucideIcon } from "lucide-react";

import type { MediaAsset } from "@/types";

export interface ProfessionalCertification {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  status: "verified" | "upcoming";
  image?: MediaAsset;
  narrative: string;
  methodologies?: string[];
}

export interface SkillGroup {
  icon: LucideIcon;
  category: string;
  skills: string[];
}

export interface ToolkitItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  external?: boolean;
}

export interface RecruiterFAQ {
  question: string;
  answer: string;
}
