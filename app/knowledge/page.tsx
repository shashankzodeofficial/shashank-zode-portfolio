import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

import { ComingSoon } from "@/components/common/coming-soon";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "A forthcoming repository of supply chain, AI, and leadership playbooks by Shashank Zode.",
};

export default function KnowledgePage() {
  return (
    <ComingSoon
      icon={BookOpen}
      title="The Knowledge Hub is in the works."
      description="A curated library of supply chain, AI, and leadership playbooks — built from 16+ years running large-scale operations — is on its way."
    />
  );
}
