import {
  Brain,
  Compass,
  Handshake,
  MessageSquareCode,
  Sparkles,
  Target,
  Warehouse,
} from "lucide-react";

import type { SpeakingTopic } from "@/types/thought-leadership";

export const speakingTopics: SpeakingTopic[] = [
  {
    icon: Compass,
    title: "The Future of Supply Chain",
    description:
      "Where supply chain leadership is headed — from reactive logistics management to proactive, AI-informed network design.",
    audience: "Supply chain executives, operations leaders, industry associations",
  },
  {
    icon: Brain,
    title: "AI in Operations: Separating Signal from Hype",
    description:
      "A practical framework for deciding which operational decisions actually benefit from AI, grounded in real platform-building experience.",
    audience: "COOs, operations leaders, digital transformation teams",
  },
  {
    icon: Sparkles,
    title: "Leadership During Digital Transformation",
    description:
      "How to lead a team and a network through structural change without losing operational momentum or team trust.",
    audience: "Executive teams, change leaders, business school audiences",
  },
  {
    icon: Warehouse,
    title: "Warehouse Innovation",
    description:
      "Practical, safety-first approaches to warehouse throughput — zone design, sortation discipline, and space optimization.",
    audience: "Warehouse and fulfillment leaders, operations conferences",
  },
  {
    icon: Target,
    title: "Executive Decision-Making Under Pressure",
    description:
      "A framework for making high-stakes, time-boxed operational decisions — turning a gamble into a calculated, structured risk.",
    audience: "C-suite executives, leadership development programs",
  },
  {
    icon: MessageSquareCode,
    title: "Prompt Engineering for Business Leaders",
    description:
      "A non-technical introduction to getting real business value from AI models — practical prompt frameworks for operators, not developers.",
    audience: "Business leaders, corporate training programs, MBA audiences",
  },
  {
    icon: Brain,
    title: "Building AI Products as an Operator",
    description:
      "What it takes for a business leader — not a software team — to conceive, architect, and ship a working AI platform.",
    audience: "Product and technology leaders, AI conferences, founders",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Operations",
    description:
      "Why customer experience is an operations metric decided on the warehouse floor and the last mile — not a downstream marketing outcome.",
    audience: "Customer experience leaders, retail and logistics executives",
  },
];
