import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  /** Marks routes that exist as anchors on the homepage today vs. future standalone pages. */
  status?: "live" | "upcoming";
}

export interface HeroStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  url: string;
}

export interface ExecutiveMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

export interface LeadershipPrinciple {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ExpertiseArea {
  icon: LucideIcon;
  title: string;
  description: string;
  impact: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  summary: string;
  badges: string[];
  value: string;
  icon: LucideIcon;
}

export interface KnowledgeArticlePreview {
  category: string;
  title: string;
  readingTime: string;
  summary: string;
  tags: string[];
}

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface LeadershipStage {
  icon: LucideIcon;
  stage: string;
  title: string;
  description: string;
  keyLearning: string;
}

export interface CareerTimelineEntry {
  period: string;
  role: string;
  organization: string;
  stage: string;
  challenge: string;
  transformation: string;
  lesson: string;
  impact: string;
}

export interface CareerMilestone {
  icon: LucideIcon;
  title: string;
  achievement: string;
  significance: string;
  lesson: string;
}

export interface BusinessChallenge {
  icon: LucideIcon;
  title: string;
  situation: string;
  approach: string;
  outcome: string;
  takeaway: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status: "verified" | "upcoming";
  credentialLabel?: string;
}

export interface AwardEntry {
  title: string;
  issuer: string;
  period: string;
  description: string;
  status: "verified" | "upcoming";
}

export interface IconLabel {
  icon: LucideIcon;
  label: string;
}

export interface PersonalInterest {
  icon: LucideIcon;
  label: string;
  connection: string;
}
