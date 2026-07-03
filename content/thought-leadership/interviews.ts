import { Mic, Newspaper, UsersRound, Video } from "lucide-react";

import type { InterviewPlaceholder } from "@/types/thought-leadership";

/**
 * No interview, podcast, or media conversation has taken place yet — every
 * entry here is an honestly labeled placeholder for future content.
 */
export const interviewPlaceholders: InterviewPlaceholder[] = [
  {
    icon: UsersRound,
    type: "Executive Interview",
    title: "Upcoming Executive Interview",
    description:
      "A future long-form conversation on leading supply chain transformation with AI — placeholder pending a confirmed publication.",
  },
  {
    icon: Mic,
    type: "Podcast",
    title: "Featured Podcast Appearance",
    description:
      "A future podcast conversation on building AI products as an operator, not a software team — placeholder pending a confirmed episode.",
  },
  {
    icon: Newspaper,
    type: "Industry Conversation",
    title: "Industry Conversation",
    description:
      "A future discussion with an industry publication on the future of AI-enabled supply chains — placeholder pending confirmation.",
  },
  {
    icon: Video,
    type: "Media Discussion",
    title: "Media Discussion",
    description:
      "A future recorded discussion or panel appearance covering executive decision-making under operational pressure — placeholder pending confirmation.",
  },
];
