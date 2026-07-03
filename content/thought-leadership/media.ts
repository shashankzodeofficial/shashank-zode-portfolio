import {
  Camera,
  FileText,
  Image as ImageIcon,
  Mic,
  Newspaper,
  Presentation,
  UsersRound,
  Video,
} from "lucide-react";

import type { DownloadResource } from "@/types/content";
import type { MediaItem } from "@/types/thought-leadership";

/**
 * The Event Photo entry reflects real conference participation already
 * documented elsewhere on this site (ProcureConnect 2025). Every other
 * category is an honest placeholder — no press, podcast, video, or webinar
 * content exists yet.
 */
export const mediaItems: MediaItem[] = [
  {
    icon: Camera,
    category: "Event Photo",
    title: "Panelist, 8th NXTGEN ProcureConnect Confex & Awards 2025",
    description:
      "Panel discussion on procurement and supply chain leadership, presented by Moglix — see the full gallery on the About page.",
    isPlaceholder: false,
  },
  {
    icon: Newspaper,
    category: "Press",
    title: "Press Mention Placeholder",
    description: "Reserved for future press coverage — none currently exists.",
    isPlaceholder: true,
  },
  {
    icon: Mic,
    category: "Podcast",
    title: "Podcast Appearance Placeholder",
    description: "Reserved for a future podcast conversation — none currently recorded.",
    isPlaceholder: true,
  },
  {
    icon: Video,
    category: "Video",
    title: "Video Feature Placeholder",
    description: "Reserved for future video content — none currently published.",
    isPlaceholder: true,
  },
  {
    icon: UsersRound,
    category: "Interview",
    title: "Media Interview Placeholder",
    description: "Reserved for a future recorded interview — none currently exists.",
    isPlaceholder: true,
  },
  {
    icon: Presentation,
    category: "Conference Recording",
    title: "Conference Recording Placeholder",
    description: "Reserved for a future recorded keynote or session — none currently exists.",
    isPlaceholder: true,
  },
  {
    icon: Video,
    category: "Webinar",
    title: "Webinar Placeholder",
    description: "Reserved for a future hosted webinar — none currently scheduled.",
    isPlaceholder: true,
  },
];

export const mediaKitResources: DownloadResource[] = [
  {
    icon: FileText,
    label: "Speaker One-Sheet",
    description: "A one-page overview of speaking topics, formats, and bio.",
  },
  {
    icon: FileText,
    label: "Executive Biography",
    description: "The full-length speaker biography, ready for event programs.",
  },
  {
    icon: ImageIcon,
    label: "Professional Headshots",
    description: "High-resolution headshots for event marketing and press use.",
  },
  {
    icon: FileText,
    label: "Media Kit",
    description: "The complete press kit — bio, topics, headshots, and background.",
  },
  {
    icon: Presentation,
    label: "Presentation Deck Template",
    description: "A sample deck outline for keynote and workshop engagements.",
  },
];
