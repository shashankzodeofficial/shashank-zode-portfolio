import {
  Brain,
  FileText,
  FlaskConical,
  Mic,
  Rocket,
  ScrollText,
} from "lucide-react";

import { resumeUrl } from "@/lib/site-config";
import type { ToolkitItem } from "@/types/recruiter";

export const toolkitItems: ToolkitItem[] = [
  {
    icon: FileText,
    title: "Resume",
    description: "The full one-page resume, ready to download or forward.",
    href: resumeUrl,
    actionLabel: "Download PDF",
    external: true,
  },
  {
    icon: Rocket,
    title: "Portfolio",
    description: "Five AI-powered supply chain platforms, independently built.",
    href: "/projects",
    actionLabel: "Browse Portfolio",
  },
  {
    icon: ScrollText,
    title: "Case Studies",
    description: "Start with the flagship case study: NexusOne.",
    href: "/projects/nexusone",
    actionLabel: "Read Case Study",
  },
  {
    icon: FlaskConical,
    title: "AI Projects",
    description: "Live demos, AI agents, and the prompt engineering library.",
    href: "/ai-labs/projects",
    actionLabel: "Explore AI Labs",
  },
  {
    icon: Brain,
    title: "Knowledge Hub",
    description: "Consulting-grade articles on supply chain, AI, and leadership.",
    href: "/knowledge",
    actionLabel: "Read Articles",
  },
  {
    icon: Mic,
    title: "Speaking Profile",
    description: "Topics, formats, and speaker bio for conference organizers.",
    href: "/thought-leadership/speaking",
    actionLabel: "View Speaking Profile",
  },
];
