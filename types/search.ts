import type { LucideIcon } from "lucide-react";

export type SearchContentType =
  | "Page"
  | "Case Study"
  | "Article"
  | "Framework"
  | "AI Use Case"
  | "AI Experiment"
  | "AI Agent"
  | "Prompt"
  | "Automation Project"
  | "LLM Application"
  | "Architecture Diagram"
  | "Roadmap Phase"
  | "Leadership Principle"
  | "Speaking Topic"
  | "Publication"
  | "Future Trend"
  | "Certification";

export type SearchSection =
  | "Home"
  | "About"
  | "Projects"
  | "AI Labs"
  | "Knowledge Hub"
  | "Thought Leadership"
  | "Fitness"
  | "For Recruiters";

export interface SearchRecord {
  id: string;
  title: string;
  description: string;
  url: string;
  type: SearchContentType;
  section: SearchSection;
  tags: string[];
  icon: LucideIcon;
}
