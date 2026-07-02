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
