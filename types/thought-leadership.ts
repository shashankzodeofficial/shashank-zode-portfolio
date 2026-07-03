import type { LucideIcon } from "lucide-react";

export interface ExecutivePrinciple {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  businessApplication: string;
  leadershipExample: string;
  executiveTakeaway: string;
}

export interface SpeakingTopic {
  icon: LucideIcon;
  title: string;
  description: string;
  audience: string;
}

export interface SpeakingFormat {
  icon: LucideIcon;
  title: string;
  description: string;
  idealFor: string;
}

/** Always a clearly-labeled placeholder — no real event has been booked yet. */
export interface FutureEvent {
  eventPlaceholder: string;
  locationPlaceholder: string;
  topic: string;
  datePlaceholder: string;
  format: string;
}

export type PublicationCategory =
  | "Whitepapers"
  | "Research Articles"
  | "Executive Briefs"
  | "Business Frameworks"
  | "AI Playbooks"
  | "Supply Chain Guides"
  | "Leadership Essays";

export interface Publication {
  slug: string;
  icon: LucideIcon;
  title: string;
  category: PublicationCategory;
  description: string;
  status: "planned" | "in-progress";
}

export type InterviewType = "Executive Interview" | "Podcast" | "Industry Conversation" | "Media Discussion";

/** Always a future placeholder — no interview has been recorded yet. */
export interface InterviewPlaceholder {
  icon: LucideIcon;
  type: InterviewType;
  title: string;
  description: string;
}

export interface ExecutiveQuote {
  quote: string;
  theme: string;
}

export interface FutureTrend {
  slug: string;
  icon: LucideIcon;
  title: string;
  category: string;
  executiveSummary: string;
  businessImplications: string[];
  futureOutlook: string;
}

export type MediaCategory =
  | "Press"
  | "Podcast"
  | "Video"
  | "Interview"
  | "Conference Recording"
  | "Webinar"
  | "Event Photo";

/** Real event photos are surfaced honestly; everything else is a clearly-labeled future placeholder. */
export interface MediaItem {
  icon: LucideIcon;
  category: MediaCategory;
  title: string;
  description: string;
  isPlaceholder: boolean;
}
