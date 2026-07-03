import type { Metadata } from "next";

import { CertificationsAwards } from "@/components/recruiters/certifications-awards";
import { ExecutiveSummary } from "@/components/recruiters/executive-summary";
import { ProfessionalContact } from "@/components/recruiters/professional-contact";
import { RecruiterFaq } from "@/components/recruiters/recruiter-faq";
import { RecruiterHero } from "@/components/recruiters/recruiter-hero";
import { RecruiterToolkit } from "@/components/recruiters/recruiter-toolkit";
import { ResumeViewer } from "@/components/recruiters/resume-viewer";
import { SkillsMatrix } from "@/components/recruiters/skills-matrix";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `For Recruiters — ${siteConfig.name}`;
const description =
  "The single destination for recruiters and executive search firms — interactive resume, executive summary, verified certifications, skills matrix, portfolio toolkit, and direct contact.";

export const metadata: Metadata = {
  title: "For Recruiters",
  description,
  alternates: { canonical: "/recruiters" },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/recruiters`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function RecruitersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: `${siteConfig.url}/recruiters`,
      email: siteConfig.email,
      address: siteConfig.location,
      sameAs: [siteConfig.linkedin],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RecruiterHero />
      <ExecutiveSummary />
      <ResumeViewer />
      <CertificationsAwards />
      <SkillsMatrix />
      <RecruiterToolkit />
      <ProfessionalContact />
      <RecruiterFaq />
    </>
  );
}
