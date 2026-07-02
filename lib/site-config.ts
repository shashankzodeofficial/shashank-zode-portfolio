import type { NavItem, HeroStat, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Shashank Zode",
  role: "Supply Chain Transformation Leader",
  tagline: "Building future-ready supply chains through leadership, technology & AI.",
  location: "Bengaluru, India",
  email: "shashank.zodeofficial@gmail.com",
  phone: "+91 95535 15553",
  linkedin: "https://linkedin.com/in/shashankzode04",
  url: "https://shashankzode.com",
};

/**
 * Primary navigation. Most routes are anchors on the homepage for now;
 * `status` lets the nav render upcoming standalone pages without dead links.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/", status: "live" },
  { label: "About", href: "/#about", status: "live" },
  { label: "Journey", href: "/journey", status: "upcoming" },
  { label: "Projects", href: "/#projects", status: "live" },
  { label: "Knowledge Hub", href: "/knowledge", status: "upcoming" },
  { label: "Leadership", href: "/#leadership", status: "live" },
  { label: "Fitness", href: "/#fitness", status: "live" },
  { label: "Resume", href: "/resume/Shashank-Zode-Resume.pdf", status: "live" },
  { label: "Contact", href: "/#contact", status: "live" },
];

/** Section ids in homepage order, used for scroll-spy active-link highlighting. */
export const sectionAnchors = [
  "top",
  "metrics",
  "about",
  "leadership",
  "expertise",
  "projects",
  "knowledge",
  "fitness",
  "contact",
] as const;

/** Figures sourced directly from the CV — no placeholder numbers. */
export const heroStats: HeroStat[] = [
  { label: "Years transforming supply chains", value: 16, suffix: "+" },
  {
    label: "Annual logistics spend under leadership",
    value: 21,
    prefix: "$",
    suffix: "M+",
  },
  {
    label: "Transportation cost savings delivered",
    value: 2.6,
    prefix: "$",
    suffix: "M",
    decimals: 1,
  },
  { label: "Packages sorted per day at peak", value: 600, suffix: "K" },
];

export const resumeUrl = "/resume/Shashank-Zode-Resume.pdf";

export const contactMailto = `mailto:${siteConfig.email}`;
export const scheduleMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Schedule a conversation",
)}`;

export const fitnessJourney = {
  startWeight: 125,
  currentWeight: 85,
  unit: "kg",
  streakYears: "4+",
  frequency: "5x/week",
};
