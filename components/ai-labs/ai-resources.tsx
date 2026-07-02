import {
  BookOpen,
  ClipboardCheck,
  FileText,
  LayoutTemplate,
  Presentation,
  ScrollText,
  Wand2,
} from "lucide-react";

import { DownloadsSection } from "@/components/case-study/downloads-section";
import { SectionHeader } from "@/components/common/section-header";
import type { DownloadResource } from "@/types/content";

const resources: DownloadResource[] = [
  {
    icon: Wand2,
    label: "Prompt Pack — Supply Chain & Operations",
    description: "The full prompt library, formatted for offline use.",
  },
  {
    icon: BookOpen,
    label: "AI Implementation Guide",
    description: "A practical playbook for scoping and shipping an AI pilot.",
  },
  {
    icon: ScrollText,
    label: "Supply Chain AI Playbook",
    description: "How AI capability maps to planning, warehouse, and transport.",
  },
  {
    icon: LayoutTemplate,
    label: "Architecture Reference Pack",
    description: "The full architecture diagram library as a reference PDF.",
  },
  {
    icon: Presentation,
    label: "Executive AI Presentation Deck",
    description: "A board-ready deck framing AI strategy for operations leaders.",
  },
  {
    icon: FileText,
    label: "AI Governance Checklist",
    description: "The guardrail checklist used before any agent goes live.",
  },
  {
    icon: ClipboardCheck,
    label: "Agent Design Template",
    description: "A structured template for scoping a new AI agent.",
  },
];

export function AIResources() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="AI Resources"
          title="Downloadable frameworks and playbooks"
          description="Every resource below is prepared and being finalized for release — honestly labeled, not a dead link."
        />
        <DownloadsSection resources={resources} />
      </div>
    </section>
  );
}
