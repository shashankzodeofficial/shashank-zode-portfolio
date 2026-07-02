import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";

import { ComingSoon } from "@/components/common/coming-soon";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full case studies for NexusOne, RouteSphere, and SCS-Fabric are coming soon.",
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      icon={FolderKanban}
      title="Full case studies are coming soon."
      description="In-depth breakdowns of NexusOne, RouteSphere, and SCS-Fabric — the problems, the architecture, and the business impact — are on their way."
    />
  );
}
