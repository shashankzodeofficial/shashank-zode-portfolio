import {
  CheckCircle2,
  Clock,
  FileText,
  MapPinned,
  MonitorSmartphone,
  Navigation,
  Presentation,
  ScanSearch,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import type { CaseStudy } from "@/types/project";

export const routeSphereDeliveryApp: CaseStudy = {
  slug: "routesphere-delivery-app",
  title: "RouteSphere Delivery App",
  tagline:
    "A driver-facing mobile app that digitized last-mile delivery and helped lift order fulfilment velocity by 15%.",
  category: "Mobile & Last-Mile",
  businessDomain: "Last-Mile & D2C Delivery Operations",
  status: "Live",
  readingTime: "7 min",
  techStack: ["React", "Mobile", "APIs", "Automation"],
  icon: MonitorSmartphone,

  businessContext:
    "As the business launched rapid-delivery and marketplace channels, last-mile operations were still running on paper delivery slips and phone-based coordination between drivers and dispatch.",
  businessChallenge:
    "Paper-based proof-of-delivery and manual driver coordination couldn't support a 4-hour rapid-delivery promise or the volume coming from new marketplace integrations.",
  challengePoints: [
    "Proof-of-delivery relied on paper slips, delaying reconciliation and disputes.",
    "Dispatch had no real-time visibility into driver location or delivery status.",
    "Marketplace (B2C) order volume was growing faster than manual coordination could handle.",
    "Customers had no way to track their delivery in real time.",
  ],
  objectives: [
    "Digitize proof-of-delivery to eliminate paper-based reconciliation.",
    "Give dispatch real-time visibility into every driver and delivery.",
    "Support a 4-hour rapid-delivery capability at scale.",
    "Enable marketplace (B2C) order volume without adding manual coordination overhead.",
  ],
  myRole: {
    summary:
      "I designed RouteSphere Delivery App end-to-end — the driver workflow, the dispatch visibility model, and how it needed to plug into rapid-delivery and marketplace channels.",
    responsibilities: [
      "Designed the driver-facing workflow from job assignment to proof-of-delivery.",
      "Defined the real-time visibility model for dispatch and customers.",
      "Aligned the app's launch with the 4-hour rapid-delivery rollout.",
      "Coordinated marketplace (B2C) integration requirements with channel partners.",
    ],
  },
  solutionOverview:
    "RouteSphere Delivery App replaces paper-based last-mile coordination with a driver mobile app covering job assignment, live tracking, and digital proof-of-delivery — giving dispatch and customers real-time visibility and supporting the volume behind a 15% increase in order fulfilment velocity.",

  architecture: {
    title: "From job assignment to customer visibility",
    description:
      "A single workflow connects drivers, dispatch, and customers in real time.",
    nodes: [
      {
        icon: Smartphone,
        label: "Driver Mobile App",
        detail: "Job assignment & routing",
      },
      {
        icon: Navigation,
        label: "Live GPS Tracking",
        detail: "Real-time driver location",
      },
      {
        icon: ScanSearch,
        label: "Digital Proof-of-Delivery",
        detail: "Replaces paper slips",
      },
      {
        icon: Workflow,
        label: "Delivery Workflow Engine",
        detail: "Status transitions & exceptions",
      },
      { icon: MapPinned, label: "Marketplace Integration", detail: "B2C channel orders" },
      {
        icon: CheckCircle2,
        label: "Customer Visibility",
        detail: "Real-time delivery tracking",
      },
    ],
  },
  techBadges: [
    { label: "React", category: "Frontend" },
    { label: "Mobile", category: "Frontend" },
    { label: "APIs", category: "Platform" },
    { label: "Automation", category: "Platform" },
  ],
  implementationPhases: [
    {
      phase: "Discovery",
      title: "Shadowing drivers and dispatch",
      description:
        "Walked the paper-based delivery process end-to-end to find every friction point.",
    },
    {
      phase: "Analysis",
      title: "Mapping the rapid-delivery requirement",
      description:
        "Assessed what a 4-hour delivery promise would demand from the workflow.",
    },
    {
      phase: "Design",
      title: "Designing the driver workflow",
      description:
        "Kept the driver-facing flow to the fewest possible taps per delivery.",
    },
    {
      phase: "Development",
      title: "Building tracking and POD capture",
      description: "Built live GPS tracking and digital proof-of-delivery capture.",
    },
    {
      phase: "Testing",
      title: "Piloting with a driver cohort",
      description: "Validated the app with a subset of drivers before full rollout.",
    },
    {
      phase: "Deployment",
      title: "Rolling out across the fleet",
      description:
        "Scaled the app to the full driver fleet alongside the rapid-delivery launch.",
    },
    {
      phase: "Adoption",
      title: "Retiring paper slips",
      description: "Phased out paper proof-of-delivery once digital capture was trusted.",
    },
    {
      phase: "Continuous Improvement",
      title: "Refining the workflow",
      description: "Iterated on the driver app based on real delivery-floor feedback.",
    },
  ],
  keyFeatures: [
    {
      icon: Navigation,
      title: "Live GPS Tracking",
      description: "Dispatch and customers see delivery status as it happens.",
    },
    {
      icon: ScanSearch,
      title: "Digital Proof-of-Delivery",
      description: "Photo and signature capture replacing paper slips.",
    },
    {
      icon: Workflow,
      title: "Delivery Workflow Management",
      description: "Structured status transitions from pickup to delivered.",
    },
    {
      icon: Users,
      title: "Driver Management",
      description: "Job assignment and routing built for a growing driver fleet.",
    },
  ],
  dashboardHighlights: [
    "Live map view of every driver and active delivery.",
    "Digital proof-of-delivery archive, searchable by order.",
    "Delivery exception queue for dispatch follow-up.",
    "Marketplace order volume tracked alongside owned-channel deliveries.",
  ],
  businessImpact: [
    {
      icon: TrendingUp,
      title: "15% Faster Order Fulfilment",
      description:
        "Supported alongside the 4-hour rapid-delivery and marketplace launch.",
    },
    {
      icon: Clock,
      title: "Faster Reconciliation",
      description: "Digital proof-of-delivery eliminated paper-slip delays and disputes.",
    },
    {
      icon: Target,
      title: "Real-Time Dispatch Visibility",
      description: "Dispatch could see and respond to delivery issues as they happened.",
    },
    {
      icon: Sparkles,
      title: "Marketplace-Ready Operations",
      description:
        "Last-mile operations could absorb new B2C channel volume without added overhead.",
    },
  ],
  kpis: [
    {
      value: 15,
      suffix: "%",
      label: "Order Fulfilment Velocity",
      description:
        "Increase supported by the app alongside rapid-delivery and marketplace launches.",
    },
    {
      display: "4-Hour",
      label: "Rapid-Delivery Capability",
      description: "Digital workflow built to support same-day, rapid delivery windows.",
    },
    {
      display: "Digital",
      label: "Proof-of-Delivery",
      description: "Fully replacing paper-based delivery slips.",
    },
    {
      display: "Real-Time",
      label: "Delivery Visibility",
      description: "Live tracking for dispatch and customers alike.",
    },
  ],
  challengesMitigation: [
    {
      challenge: "Drivers were used to paper slips and wary of a new mobile workflow.",
      mitigation:
        "Piloted with a small driver cohort and refined the app based on their direct feedback before scaling.",
    },
    {
      challenge: "Rapid-delivery timelines left little room for a slow rollout.",
      mitigation:
        "Sequenced the app launch to align tightly with the 4-hour delivery capability's go-live.",
    },
    {
      challenge:
        "Marketplace integrations added order complexity dispatch hadn't handled before.",
      mitigation:
        "Built the workflow engine to treat marketplace and owned-channel orders consistently.",
    },
  ],
  lessonsLearned: [
    "A driver-facing tool succeeds or fails on how few taps it takes to complete a delivery.",
    "Digitizing proof-of-delivery pays off immediately in dispute resolution time, before any other benefit shows up.",
    "Launching a new channel and a new tool at the same time is higher-risk, but sequencing them separately would have cost more time overall.",
  ],
  futureRoadmap: [
    {
      icon: Sparkles,
      title: "Predictive ETAs",
      description:
        "Give customers dynamically updating delivery windows, not static estimates.",
    },
    {
      icon: Workflow,
      title: "Automated Route Optimization",
      description: "Optimize driver routes automatically as new orders arrive mid-shift.",
    },
    {
      icon: MapPinned,
      title: "Expanded Marketplace Coverage",
      description: "Extend integration to additional B2C marketplace channels.",
    },
  ],
  downloads: [
    {
      icon: FileText,
      label: "Executive Summary",
      description: "A one-page overview of the app's approach and impact.",
    },
    {
      icon: Presentation,
      label: "Driver Workflow Overview",
      description: "The end-to-end delivery workflow, from assignment to POD.",
    },
  ],
  gallery: [
    {
      kind: "diagram",
      title: "Driver-to-Customer Flow",
      caption: "How a delivery moves from assignment to proof-of-delivery.",
      icon: Workflow,
    },
    {
      kind: "mockup",
      title: "Driver App Concept",
      caption: "The mobile workflow drivers use for every delivery.",
      icon: MonitorSmartphone,
    },
  ],
  relatedSlugs: ["routesphere-control-tower", "transportation-control-tower"],
};
