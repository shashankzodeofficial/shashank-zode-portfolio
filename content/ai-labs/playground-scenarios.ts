export interface PlaygroundScenario {
  id: string;
  title: string;
  category: string;
  samplePrompt: string;
  simulatedResponse: string;
}

export const playgroundScenarios: PlaygroundScenario[] = [
  {
    id: "reorder-point",
    title: "Reorder Point Calculation",
    category: "Inventory",
    samplePrompt:
      "Calculate a reorder point for a SKU with: average weekly sales of 220 units, sales standard deviation of 45, supplier lead time of 14 days (±3 days variability), and a target service level of 95%.",
    simulatedResponse:
      "Step 1 — Lead-time demand: 220 units/week ÷ 7 × 14 days = 440 units.\nStep 2 — Demand variability during lead time: 45 × √(14/7) ≈ 64 units.\nStep 3 — Safety stock at 95% service level (z ≈ 1.65): 1.65 × 64 ≈ 106 units.\nStep 4 — Reorder point = lead-time demand + safety stock = 440 + 106 ≈ 546 units.\n\nRecommended reorder point: ~546 units, with ~106 units held as safety stock.",
  },
  {
    id: "executive-summary",
    title: "Executive Summary Writer",
    category: "Executive Communication",
    samplePrompt:
      "Turn this into an executive summary: 'Warehouse Zone 3 mis-ship rate rose from 1.2% to 2.8% over the last two weeks. Root cause analysis points to a new pallet-building process introduced without a matching update to the training checklist. Corrective training was completed for 80% of associates as of Friday.'",
    simulatedResponse:
      "Zone 3 mis-ship rate more than doubled (1.2% → 2.8%) after a process change outpaced associate training. Root cause: a new pallet-building process was rolled out without updating the training checklist.\n\nImpact: elevated mis-ship risk in the highest-volume zone.\n\nStatus: corrective training 80% complete as of Friday; full completion targeted early next week.\n\nAsk: no action needed — flagging for visibility ahead of next week's ops review.",
  },
  {
    id: "root-cause-fishbone",
    title: "Root Cause Fishbone Analysis",
    category: "Analytics",
    samplePrompt:
      "Generate a fishbone analysis for: 'Outbound dock dwell time increased 30% this month at DC-4.'",
    simulatedResponse:
      "People: New dock crew below full training completion; possible shift coverage gaps.\nProcess: Trailer sequencing may not reflect current inbound volume mix.\nEquipment: Dock door availability — check for out-of-service doors this month.\nMaterials: SKU mix shift toward larger/slower-to-load items.\nEnvironment: Recent yard congestion from an inbound volume spike.\nMeasurement: Confirm dwell time is measured consistently across shifts.\n\nMost likely candidates: Process (sequencing) and Equipment (door availability) — recommend pulling door-status logs and trailer sequencing data first.",
  },
  {
    id: "dax-measure",
    title: "Power BI DAX Measure Generator",
    category: "Power BI",
    samplePrompt:
      "Write a DAX measure for a rolling 4-week average of on-time delivery rate, excluding cancelled orders.",
    simulatedResponse:
      "OnTimeRate_4WkAvg =\nAVERAGEX(\n  DATESINPERIOD('Calendar'[Date], MAX('Calendar'[Date]), -28, DAY),\n  CALCULATE(\n    DIVIDE(\n      COUNTROWS(FILTER(Deliveries, Deliveries[OnTime] = TRUE() && Deliveries[Status] <> \"Cancelled\")),\n      COUNTROWS(FILTER(Deliveries, Deliveries[Status] <> \"Cancelled\")),\n      BLANK()\n    )\n  )\n)\n\nThis averages the daily on-time rate across the trailing 28 days, excludes cancelled orders from both numerator and denominator, and returns BLANK() rather than an error when there's no data for a day.",
  },
  {
    id: "sop-draft",
    title: "SOP Draft Generator",
    category: "Operations",
    samplePrompt:
      "Draft an SOP for receiving inbound trailers at a distribution center, including safety checks and escalation steps.",
    simulatedResponse:
      "SOP: Inbound Trailer Receiving\n\n1. Verify trailer seal number matches the manifest before breaking seal.\n2. Chock wheels and confirm dock leveler is locked before opening trailer doors.\n3. Visually inspect load for shifting, damage, or unsafe stacking before entry.\n4. Scan and log each pallet against the ASN (Advance Ship Notice).\n5. Flag any quantity or damage discrepancy immediately — do not proceed with putaway on flagged pallets.\n\nSafety: No associate enters a trailer without wheel chocks and leveler confirmed locked. Two-person lift required for any pallet showing visible shift.\n\nEscalation: Discrepancies over 5% of manifest quantity → shift supervisor immediately. Safety concerns → stop work and escalate to safety lead before continuing.",
  },
];
