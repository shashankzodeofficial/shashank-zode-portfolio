import {
  BookOpen,
  Brain,
  ClipboardList,
  FileText,
  Layers,
  Map as MapIcon,
  ScrollText,
  Warehouse,
} from "lucide-react";

import type { Publication } from "@/types/thought-leadership";

/**
 * No publication listed here has been published yet — each is an honestly
 * labeled work in progress or planned title, never a claim of existing
 * published work.
 */
export const publications: Publication[] = [
  {
    slug: "ai-adoption-whitepaper",
    icon: FileText,
    title: "AI Adoption in Supply Chain: A Practitioner's Whitepaper",
    category: "Whitepapers",
    description:
      "A framework for scoping AI pilots around specific, recurring operational decisions rather than treating AI adoption as a goal in itself.",
    status: "in-progress",
  },
  {
    slug: "network-complexity-research",
    icon: ScrollText,
    title: "The Cost of Network Complexity: A Research Article",
    category: "Research Articles",
    description:
      "Research into how redundant connections accumulate in growing logistics networks, and a methodology for identifying and removing them.",
    status: "planned",
  },
  {
    slug: "executive-ai-brief",
    icon: ClipboardList,
    title: "AI for the C-Suite: A Five-Minute Executive Brief",
    category: "Executive Briefs",
    description:
      "A condensed brief for executives who need to make AI investment decisions without becoming AI practitioners themselves.",
    status: "in-progress",
  },
  {
    slug: "calculated-risk-framework",
    icon: Layers,
    title: "The Calculated Risk Decision Framework",
    category: "Business Frameworks",
    description:
      "A structured framework for making high-stakes, time-boxed operational decisions — turning a gamble into a series of managed, reversible bets.",
    status: "planned",
  },
  {
    slug: "ai-playbook-operations-leaders",
    icon: Brain,
    title: "The AI Playbook for Operations Leaders",
    category: "AI Playbooks",
    description:
      "A hands-on playbook covering prompt engineering, AI agent design, and governance for operations leaders adopting AI without a dedicated AI team.",
    status: "in-progress",
  },
  {
    slug: "warehouse-excellence-guide",
    icon: Warehouse,
    title: "The Warehouse Excellence Guide",
    category: "Supply Chain Guides",
    description:
      "A practical guide to zone design, sortation discipline, and throughput measurement for warehouse and fulfillment leaders.",
    status: "planned",
  },
  {
    slug: "leadership-essays-collection",
    icon: BookOpen,
    title: "Essays on Operational Leadership",
    category: "Leadership Essays",
    description:
      "A collection of essays on ownership, execution discipline, and leading teams through structural change.",
    status: "planned",
  },
  {
    slug: "digital-strategy-roadmap-guide",
    icon: MapIcon,
    title: "Sequencing Digital Investment: An Executive Guide",
    category: "Business Frameworks",
    description:
      "A guide to sequencing multi-platform digital and AI investment so each build compounds the value of the ones before it.",
    status: "planned",
  },
];

export function getPublicationsByCategory() {
  const map = new Map<string, Publication[]>();
  for (const publication of publications) {
    const list = map.get(publication.category) ?? [];
    list.push(publication);
    map.set(publication.category, list);
  }
  return map;
}
