import { Brain, Database, Network, Users } from "lucide-react";

import type { SkillGroup } from "@/types/recruiter";

export const skillGroups: SkillGroup[] = [
  {
    icon: Users,
    category: "Leadership & People",
    skills: [
      "P&L Ownership",
      "Team Leadership (90+ direct & matrixed)",
      "Change Management",
      "Cross-Functional Leadership",
      "Vendor & Stakeholder Management",
      "Executive Communication",
    ],
  },
  {
    icon: Network,
    category: "Supply Chain & Operations",
    skills: [
      "Network Design & Strategy",
      "Warehouse & Fulfillment Operations",
      "Transportation & Last-Mile Logistics",
      "Inventory & Demand Planning",
      "Process Excellence (Lean Six Sigma)",
      "Peak & Risk Planning",
    ],
  },
  {
    icon: Brain,
    category: "AI & Technology",
    skills: [
      "AI Product Development",
      "Prompt Engineering",
      "AI Agent Architecture",
      "Digital Transformation Strategy",
      "Workflow Automation",
      "AI Governance",
    ],
  },
  {
    icon: Database,
    category: "Analytics & Tools",
    skills: [
      "Power BI",
      "SQL",
      "Python",
      "Excel (Advanced)",
      "Executive Dashboarding",
      "ERP & WMS Platforms",
    ],
  },
];
