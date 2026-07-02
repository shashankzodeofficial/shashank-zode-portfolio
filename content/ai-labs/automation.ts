import {
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  Receipt,
  Truck,
  Workflow,
} from "lucide-react";

import type { AutomationProject } from "@/types/ai-labs";

export const automationProjects: AutomationProject[] = [
  {
    slug: "vendor-invoice-billing-automation",
    title: "Vendor Invoice & Billing Automation",
    icon: Receipt,
    tags: ["Finance", "Automation", "Data Validation"],
    businessChallenge:
      "Vendor invoices were manually matched against purchase orders and delivery records — a slow, error-prone process that left billing accuracy well short of where it needed to be.",
    existingProcess:
      "Finance analysts manually cross-checked each invoice line against PO and delivery data in spreadsheets, a process both slow and prone to human transcription error.",
    automatedProcess:
      "Built an automated matching and validation layer that cross-checks invoice line items against PO and delivery records automatically, routing only mismatches to a human for review.",
    tools: ["Python", "Excel/Power Automate", "SQL"],
    benefits: [
      {
        icon: CheckCircle2,
        title: "Higher Billing Accuracy",
        description: "Automated three-way matching caught mismatches manual review missed.",
      },
      {
        icon: Clock,
        title: "Faster Invoice Cycle",
        description: "Analysts now review only flagged exceptions, not every line item.",
      },
    ],
    kpis: [
      {
        value: 99.2,
        suffix: "%",
        label: "Billing Accuracy Achieved",
        description: "Up from a 94% baseline before automation.",
      },
      {
        display: "Exception-Based",
        label: "Review Model",
        description: "Analysts focus only on flagged mismatches.",
      },
    ],
  },
  {
    slug: "shipment-tracking-status-automation",
    title: "Shipment Tracking & Status Automation",
    icon: Truck,
    tags: ["Transportation", "Automation", "Real-Time Data"],
    businessChallenge:
      "Shipment status was tracked through manual phone calls and spreadsheet updates across a growing distribution network — labor-intensive and always a step behind reality.",
    existingProcess:
      "Coordinators called carriers and warehouses for status updates and manually logged results into shared spreadsheets, refreshed a few times a day at best.",
    automatedProcess:
      "Replaced manual status calls with automated tracking feeds surfaced directly on the Transportation Control Tower dashboard, refreshed continuously rather than on a call schedule.",
    tools: ["Power BI", "APIs", "Automation"],
    benefits: [
      {
        icon: Clock,
        title: "Continuous Visibility",
        description: "Status updates refresh automatically instead of on a manual call cycle.",
      },
      {
        icon: Workflow,
        title: "Coordinator Time Freed",
        description: "Manual tracking effort redirected toward exception resolution.",
      },
    ],
    kpis: [
      {
        value: 40,
        suffix: "%",
        label: "Manual Tracking Effort Reduced",
        description: "Across a 5-distribution-centre rollout.",
      },
      {
        display: "5 DCs",
        label: "Network Coverage",
        description: "Automated tracking live across the full distribution network.",
      },
    ],
  },
  {
    slug: "executive-report-automation",
    title: "Executive Report Automation",
    icon: FileText,
    tags: ["Reporting", "Executive Communication", "LLM"],
    businessChallenge:
      "Weekly executive reporting required analysts to manually pull KPI data and write narrative commentary from scratch every single cycle — a recurring, time-consuming task that competed with higher-value analysis work.",
    existingProcess:
      "Analysts exported dashboard data, built a slide or document by hand, and wrote the narrative summary fresh each week.",
    automatedProcess:
      "Automated the data pull and built an LLM-assisted first-draft narrative generator, so analysts review and refine a draft instead of starting from a blank page.",
    tools: ["Power BI", "LLM", "Prompt Engineering"],
    benefits: [
      {
        icon: Clock,
        title: "Meaningfully Faster Turnaround",
        description: "Weekly reporting shifted from a writing task to a review task.",
      },
      {
        icon: CheckCircle2,
        title: "Consistent Executive Tone",
        description: "Every report follows the same structure leadership already expects.",
      },
    ],
    kpis: [
      {
        display: "Weekly",
        label: "Reporting Cadence Maintained",
        description: "Consistent cadence with less manual effort per cycle.",
      },
      {
        display: "Draft-and-Review",
        label: "New Workflow Model",
        description: "Analysts edit a draft instead of authoring from zero.",
      },
    ],
  },
  {
    slug: "approval-workflow-automation",
    title: "Approval Workflow Automation",
    icon: Mail,
    tags: ["Workflow", "Approvals", "Automation"],
    businessChallenge:
      "Purchase order and exception approvals moved through email threads with no visibility into where a request was stuck, causing avoidable delays in time-sensitive decisions.",
    existingProcess:
      "Requests were emailed to approvers individually, with no automated escalation if an approver didn't respond within a reasonable window.",
    automatedProcess:
      "Built an automated approval routing workflow with visibility into pending status and time-based escalation to a backup approver if a request stalled.",
    tools: ["Power Automate", "APIs", "Workflow Automation"],
    benefits: [
      {
        icon: Clock,
        title: "Fewer Stalled Approvals",
        description: "Automatic escalation prevents requests from sitting unseen in an inbox.",
      },
      {
        icon: Workflow,
        title: "Full Visibility",
        description: "Requesters can see exactly where an approval stands at any time.",
      },
    ],
    kpis: [
      {
        display: "Time-Based",
        label: "Escalation Model",
        description: "Automatic backup routing if an approver doesn't respond in time.",
      },
      {
        display: "Full Visibility",
        label: "Status Tracking",
        description: "Every request's status is visible in real time, not buried in email.",
      },
    ],
  },
];

export function getAutomationProjectBySlug(slug: string): AutomationProject | undefined {
  return automationProjects.find((project) => project.slug === slug);
}
