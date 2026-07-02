import type { MediaAsset } from "@/types";

/**
 * Central photo asset registry — the single source of truth for every
 * photograph used on the site. Add new photos here, not as inline paths
 * in components, so usage stays traceable and no image is duplicated
 * without a deliberate decision.
 *
 * Captions are factual, sourced directly from what's visible in each
 * photograph (event branding, name plates) — never invented.
 */

export const profilePhoto: MediaAsset = {
  src: "/images/profile/profile-hero.webp",
  alt: "Shashank Zode, Supply Chain Transformation Leader, professional portrait",
  width: 1024,
  height: 1024,
};

/** 8th NXTGEN ProcureConnect Confex & Awards 2025, presented by Moglix. */
export const conferencePhotos: MediaAsset[] = [
  {
    src: "/images/conferences/conference-ai-summit-01.webp",
    alt: "Shashank Zode shaking hands with an industry partner at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Industry Networking · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-02.webp",
    alt: "Shashank Zode standing with fellow panelists on stage at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Panel Discussion · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-03.webp",
    alt: "Shashank Zode receiving an award plaque at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Award Recognition · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-04.webp",
    alt: "Shashank Zode presenting an award plaque at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Award Presentation · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-05.webp",
    alt: "Shashank Zode speaking on a panel discussion at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Panel Discussion · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-06.webp",
    alt: "Shashank Zode speaking alongside fellow procurement leaders on a panel at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Procurement Leadership Panel · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-07.webp",
    alt: "Shashank Zode seated among delegates at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Conference Delegates · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-08.webp",
    alt: "Shashank Zode gesturing while speaking on a panel at the ProcureConnect 2025 conference",
    width: 1280,
    height: 853,
    caption: "Panel Discussion · ProcureConnect 2025",
  },
  {
    src: "/images/conferences/conference-ai-summit-09.webp",
    alt: "Large group of conference delegates and award recipients on stage at the ProcureConnect 2025 awards ceremony",
    width: 1280,
    height: 853,
    caption: "Conference Group Photo · ProcureConnect 2025 Awards",
  },
];

export const fitnessPhotos: MediaAsset[] = [
  {
    src: "/images/fitness/fitness-01.webp",
    alt: "Shashank Zode walking on a treadmill during a gym training session",
    width: 720,
    height: 1280,
  },
  {
    src: "/images/fitness/fitness-02.webp",
    alt: "Shashank Zode performing a stretching exercise during strength training",
    width: 1280,
    height: 720,
  },
];

export const joyPhoto: MediaAsset = {
  src: "/images/personal/personal-joy.webp",
  alt: "Shashank Zode with his golden retriever, Joy",
  width: 1280,
  height: 751,
  caption: "Shashank & Joy",
};
