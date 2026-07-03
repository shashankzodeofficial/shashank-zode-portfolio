import type { Metadata } from "next";

import { DefiningMoment } from "@/components/fitness/defining-moment";
import { FitnessCertifications } from "@/components/fitness/fitness-certifications";
import { FitnessCta } from "@/components/fitness/fitness-cta";
import { FitnessHero } from "@/components/fitness/fitness-hero";
import { FitnessQuotesShowcase } from "@/components/fitness/fitness-quotes";
import { FitnessTimeline } from "@/components/fitness/fitness-timeline";
import { KeyMilestones } from "@/components/fitness/key-milestones";
import { LeadershipLessons } from "@/components/fitness/leadership-lessons";
import { TransformationGallery } from "@/components/fitness/transformation-gallery";
import { fitnessJourney, siteConfig } from "@/lib/site-config";

const fullTitle = `Fitness Journey — ${siteConfig.name}`;
const description =
  "A 125kg to 85kg transformation, built in 10 months and sustained for four-plus years — the discipline, habit-building, and leadership lessons behind it, plus CPD-accredited fitness and nutrition coaching certifications.";

export const metadata: Metadata = {
  title: "Fitness Journey",
  description,
  alternates: { canonical: "/fitness" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/fitness`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function FitnessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: `${siteConfig.url}/fitness`,
      description: `Personal fitness transformation from ${fitnessJourney.startWeight}${fitnessJourney.unit} to ${fitnessJourney.currentWeight}${fitnessJourney.unit}.`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FitnessHero />
      <DefiningMoment />
      <FitnessTimeline />
      <TransformationGallery />
      <KeyMilestones />
      <LeadershipLessons />
      <FitnessCertifications />
      <FitnessQuotesShowcase />
      <FitnessCta />
    </>
  );
}
