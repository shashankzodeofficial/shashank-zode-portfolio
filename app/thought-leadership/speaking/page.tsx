import type { Metadata } from "next";
import { Mic } from "lucide-react";

import { FutureEventsSection } from "@/components/thought-leadership/future-events-section";
import { PastSpeakingGallery } from "@/components/thought-leadership/past-speaking-gallery";
import { SpeakerBioSection } from "@/components/thought-leadership/speaker-bio-section";
import { SpeakingFormatsGrid } from "@/components/thought-leadership/speaking-formats-grid";
import { SpeakingTopicsGrid } from "@/components/thought-leadership/speaking-topics-grid";
import { ThoughtLeadershipCta } from "@/components/thought-leadership/thought-leadership-cta";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Speaking & Conferences — ${siteConfig.name}`;
const description =
  "Speaking topics, formats, speaker biography, and past conference participation — open to keynotes, roundtables, and workshops on AI, operations, and leadership.";

export const metadata: Metadata = {
  title: "Speaking & Conferences",
  description,
  alternates: { canonical: "/thought-leadership/speaking" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/speaking`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function SpeakingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: `${siteConfig.url}/thought-leadership/speaking`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThoughtLeadershipSubHero
        eyebrowIcon={<Mic className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Speaking & Conferences"
        title="Bringing an operator's voice to your stage"
        description="Keynotes, roundtables, fireside chats, and workshops on AI, operations, and executive leadership — grounded in what has actually been built and led, not borrowed slides."
        breadcrumbLabel="Speaking"
      />
      <SpeakingTopicsGrid />
      <SpeakingFormatsGrid />
      <SpeakerBioSection />
      <PastSpeakingGallery />
      <FutureEventsSection />
      <ThoughtLeadershipCta />
    </>
  );
}
