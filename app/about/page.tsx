import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { AboutSidebarNav } from "@/components/about/about-sidebar-nav";
import { AwardsRecognition } from "@/components/about/awards-recognition";
import { BusinessChallenges } from "@/components/about/business-challenges";
import { CareerHighlights } from "@/components/about/career-highlights";
import { CareerMilestones } from "@/components/about/career-milestones";
import { CareerTimeline } from "@/components/about/career-timeline";
import { Certifications } from "@/components/about/certifications";
import { ExecutivePhilosophy } from "@/components/about/executive-philosophy";
import { LeadershipEvolution } from "@/components/about/leadership-evolution";
import { MyStory } from "@/components/about/my-story";
import { PersonalInterests } from "@/components/about/personal-interests";
import { ProfessionalValues } from "@/components/about/professional-values";
import { PullQuote } from "@/components/about/pull-quote";
import { pullQuotes } from "@/lib/about-content";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `About — ${siteConfig.name}`;
const description =
  "The story behind the résumé: how a supply chain executive with 16+ years at Amazon, Reliance Retail, and IBO evolved into an AI product builder — the challenges solved, the lessons learned, and the philosophy behind the leadership.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/about`,
    title: fullTitle,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteConfig.url}/about`,
      },
    ],
  },
  mainEntity: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: `${siteConfig.url}/about`,
    sameAs: [siteConfig.linkedin],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutSidebarNav />
      <AboutHero />
      <MyStory />
      <PullQuote quote={pullQuotes[0]} />
      <LeadershipEvolution />
      <CareerTimeline />
      <CareerMilestones />
      <PullQuote quote={pullQuotes[1]} />
      <BusinessChallenges />
      <ExecutivePhilosophy />
      <CareerHighlights />
      <Certifications />
      <AwardsRecognition />
      <ProfessionalValues />
      <PersonalInterests />
      <PullQuote quote={pullQuotes[2]} />
    </>
  );
}
