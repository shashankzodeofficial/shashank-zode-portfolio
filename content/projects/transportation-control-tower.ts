import {
  BarChart3,
  Boxes,
  Clock,
  Database,
  FileText,
  Gauge,
  LayoutDashboard,
  Map,
  MapPinned,
  Presentation,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
} from "lucide-react";

import type { CaseStudy } from "@/types/project";

export const transportationControlTower: CaseStudy = {
  slug: "transportation-control-tower",
  title: "Transportation Control Tower",
  tagline:
    "A TMS and vendor-scheduler dashboard that cut manual shipment tracking by ~40% across a 5-DC, 50-store network.",
  category: "Executive Dashboards",
  businessDomain: "Distribution Center & Retail Network Operations",
  status: "Live",
  readingTime: "7 min",
  techStack: ["React", "SQL", "Power BI", "Automation", "APIs"],
  icon: BarChart3,

  businessContext:
    "As a retail chain scaled to five distribution centres and fifty stores, transportation teams were still tracking shipments and vendor schedules manually across spreadsheets and phone calls.",
  businessChallenge:
    "Manual tracking couldn't keep pace with a growing network — shipment visibility lagged reality, and vendor scheduling conflicts were often discovered only after they caused delays.",
  challengePoints: [
    "Shipment status was tracked manually, with visibility often a day behind reality.",
    "Vendor scheduling conflicts across 5 DCs were discovered reactively.",
    "Store teams had no reliable way to know when inbound shipments would arrive.",
    "Manual tracking consumed hours of coordinator time daily.",
  ],
  objectives: [
    "Deploy a TMS-integrated dashboard giving real-time shipment visibility.",
    "Build a vendor scheduler to prevent scheduling conflicts before they happen.",
    "Extend visibility down to individual store locations.",
    "Reduce the manual coordination effort required to track shipments.",
  ],
  myRole: {
    summary:
      "I directed the deployment of the TMS and Vendor Scheduler Dashboard, from defining the visibility requirements to overseeing rollout across every distribution centre and store.",
    responsibilities: [
      "Defined the shipment visibility and vendor scheduling requirements.",
      "Directed the TMS and dashboard deployment across 5 DCs and 50 stores.",
      "Established the vendor scheduling workflow to prevent conflicts.",
      "Oversaw adoption and measured the reduction in manual effort.",
    ],
  },
  solutionOverview:
    "The Transportation Control Tower connects TMS data and vendor scheduling into one real-time dashboard, giving distribution centres and stores a shared, always-current view of shipment status — cutting manual tracking effort by roughly 40%.",

  architecture: {
    title: "From TMS data to store-level visibility",
    description:
      "Transportation and vendor data flow into one dashboard covering every DC and store.",
    nodes: [
      { icon: Database, label: "TMS Data Feed", detail: "Live transportation records" },
      {
        icon: Truck,
        label: "Vendor Scheduler",
        detail: "Slot booking & conflict checks",
      },
      {
        icon: Gauge,
        label: "Automated Tracking",
        detail: "Replaces manual status calls",
      },
      {
        icon: BarChart3,
        label: "Transportation Dashboard",
        detail: "Real-time shipment status",
      },
      { icon: Boxes, label: "DC Visibility", detail: "5 Distribution Centres" },
      { icon: MapPinned, label: "Store Visibility", detail: "50 store locations" },
    ],
  },
  techBadges: [
    { label: "React", category: "Frontend" },
    { label: "SQL", category: "Backend" },
    { label: "Power BI", category: "Data & AI" },
    { label: "Automation", category: "Platform" },
    { label: "APIs", category: "Platform" },
  ],
  implementationPhases: [
    {
      phase: "Discovery",
      title: "Mapping manual tracking effort",
      description:
        "Quantified how much coordinator time went into manual shipment tracking.",
    },
    {
      phase: "Analysis",
      title: "Identifying scheduling conflicts",
      description: "Reviewed recurring vendor scheduling conflicts across DCs.",
    },
    {
      phase: "Design",
      title: "Designing the visibility layer",
      description: "Defined what DCs, stores, and leadership each needed to see.",
    },
    {
      phase: "Development",
      title: "Integrating TMS data",
      description:
        "Connected live TMS feeds into a unified scheduling and tracking dashboard.",
    },
    {
      phase: "Testing",
      title: "Piloting at one DC",
      description:
        "Validated the dashboard against manual tracking before wider rollout.",
    },
    {
      phase: "Deployment",
      title: "Scaling to 5 DCs and 50 stores",
      description: "Rolled out the dashboard across the full distribution network.",
    },
    {
      phase: "Adoption",
      title: "Retiring manual tracking",
      description: "Phased out manual status calls as dashboard trust grew.",
    },
    {
      phase: "Continuous Improvement",
      title: "Tuning the scheduler",
      description: "Refined vendor slot logic based on real conflict patterns.",
    },
  ],
  keyFeatures: [
    {
      icon: Gauge,
      title: "Real-Time Shipment Tracking",
      description: "Live status replacing manual phone and spreadsheet updates.",
    },
    {
      icon: Truck,
      title: "Vendor Scheduling",
      description: "Conflict-checked slot booking across 5 distribution centres.",
    },
    {
      icon: MapPinned,
      title: "Store-Level Visibility",
      description: "Every store can see exactly when inbound shipments will arrive.",
    },
    {
      icon: Clock,
      title: "Reduced Manual Effort",
      description:
        "Automated tracking freed coordinator time for exceptions, not status checks.",
    },
  ],
  dashboardHighlights: [
    "Live shipment status across every distribution centre and store.",
    "Vendor scheduling calendar with automatic conflict detection.",
    "Store-level inbound shipment visibility.",
    "Manual tracking effort trend, before and after rollout.",
  ],
  businessImpact: [
    {
      icon: TrendingUp,
      title: "~40% Less Manual Tracking",
      description: "Automated status tracking freed significant coordinator time.",
    },
    {
      icon: Target,
      title: "Fewer Scheduling Conflicts",
      description: "Vendor scheduling conflicts caught before they caused delays.",
    },
    {
      icon: Rocket,
      title: "Faster Issue Resolution",
      description:
        "Real-time visibility let teams act on delays immediately, not after the fact.",
    },
    {
      icon: Sparkles,
      title: "Network-Wide Consistency",
      description: "Every DC and store now works from the same shipment data.",
    },
  ],
  kpis: [
    {
      value: 40,
      suffix: "%",
      label: "Manual Tracking Effort Reduced",
      description: "Coordinator time freed from manual shipment status tracking.",
    },
    {
      display: "5 DCs",
      label: "Distribution Centres Covered",
      description: "Full deployment across the distribution network.",
    },
    {
      display: "50 Stores",
      label: "Store Locations Covered",
      description: "Visibility extended to every store in the network.",
    },
    {
      display: "Real-Time",
      label: "Shipment Visibility",
      description: "Live status replacing day-old manual updates.",
    },
  ],
  challengesMitigation: [
    {
      challenge:
        "Coordinators were skeptical that a dashboard could replace their manual process.",
      mitigation:
        "Ran the dashboard in parallel with manual tracking until accuracy was proven store by store.",
    },
    {
      challenge:
        "Vendor scheduling conflicts were deeply embedded in informal processes.",
      mitigation:
        "Built explicit conflict-checking logic into the scheduler rather than relying on manual coordination.",
    },
    {
      challenge: "Rolling out across 5 DCs and 50 stores risked inconsistent adoption.",
      mitigation:
        "Piloted at one DC first, then scaled using the lessons from that rollout.",
    },
  ],
  lessonsLearned: [
    "Automating a manual process only works if it's provably more accurate than the process it replaces.",
    "Store-level visibility matters as much as executive visibility — the people closest to the problem need the tool most.",
    "Piloting at one site before a network-wide rollout catches problems that are cheap to fix early and expensive later.",
  ],
  futureRoadmap: [
    {
      icon: Sparkles,
      title: "Predictive Delay Alerts",
      description: "Flag shipments at risk of delay before they miss their window.",
    },
    {
      icon: Boxes,
      title: "Expanded DC Coverage",
      description:
        "Extend the model to future distribution centres as the network grows.",
    },
    {
      icon: Map,
      title: "Route-Level Integration",
      description: "Connect transportation visibility with route-level performance data.",
    },
  ],
  downloads: [
    {
      icon: FileText,
      label: "Executive Summary",
      description: "A one-page overview of the Control Tower's approach and impact.",
    },
    {
      icon: Presentation,
      label: "Rollout Playbook",
      description: "The phased rollout approach used across 5 DCs and 50 stores.",
    },
  ],
  gallery: [
    {
      kind: "diagram",
      title: "TMS-to-Store Data Flow",
      caption: "How shipment data reaches every DC and store.",
      icon: Database,
    },
    {
      kind: "mockup",
      title: "Transportation Dashboard Concept",
      caption: "Real-time shipment status across the network.",
      icon: LayoutDashboard,
    },
  ],
  relatedSlugs: ["routesphere-control-tower", "scs-fabric"],
};
