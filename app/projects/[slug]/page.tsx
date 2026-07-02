import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { ChallengesMitigation } from "@/components/case-study/challenges-mitigation";
import { ContentBlock } from "@/components/case-study/content-block";
import { DashboardShowcase } from "@/components/case-study/dashboard-showcase";
import { DownloadsSection } from "@/components/case-study/downloads-section";
import { GalleryLightbox } from "@/components/case-study/gallery-lightbox";
import { ImplementationTimeline } from "@/components/case-study/implementation-timeline";
import { KeyFeaturesGrid } from "@/components/case-study/key-features-grid";
import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { LessonsLearned } from "@/components/case-study/lessons-learned";
import { RelatedProjects } from "@/components/case-study/related-projects";
import { TableOfContents } from "@/components/case-study/table-of-contents";
import { TechStackBadges } from "@/components/case-study/tech-stack-badges";
import { SectionHeader } from "@/components/common/section-header";
import {
  caseStudies,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "My Role" },
  { id: "architecture", label: "Architecture" },
  { id: "implementation", label: "Implementation" },
  { id: "dashboards", label: "Dashboards" },
  { id: "impact", label: "Impact & KPIs" },
  { id: "lessons", label: "Challenges & Lessons" },
  { id: "roadmap", label: "Roadmap" },
  { id: "resources", label: "Resources" },
];

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  const fullTitle = `${study.title} — ${siteConfig.name}`;

  return {
    title: study.title,
    description: study.tagline,
    alternates: {
      canonical: `/projects/${study.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/projects/${study.slug}`,
      title: fullTitle,
      description: study.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: study.tagline,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === study.slug);
  const previous = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;
  const related = getRelatedCaseStudies(study);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.tagline,
    about: study.businessDomain,
    keywords: study.techStack.join(", "),
    url: `${siteConfig.url}/projects/${study.slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TableOfContents items={tocItems} />
      <CaseStudyHero slug={study.slug} />
      <TechStackBadges badges={study.techBadges} />

      <div className="flex flex-col">
        <section
          id="overview"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader
              eyebrow="The Business Problem"
              title="Why this project existed"
            />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <ContentBlock title="Business Context" body={study.businessContext} />
              <ContentBlock
                title="Business Challenge"
                body={study.businessChallenge}
                bullets={study.challengePoints}
              />
              <ContentBlock title="Objectives" bullets={study.objectives} />
            </div>
          </div>
        </section>

        <section id="role" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="My Role" title="What I owned" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ContentBlock
                title="Leadership & Responsibilities"
                body={study.myRole.summary}
                bullets={study.myRole.responsibilities}
              />
              <ContentBlock title="Solution Overview" body={study.solutionOverview} />
            </div>
          </div>
        </section>

        <section
          id="architecture"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="Solution Architecture" title="How it's built" />
            <ArchitectureDiagram diagram={study.architecture} />
          </div>
        </section>

        <section
          id="implementation"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-12">
            <SectionHeader
              eyebrow="Implementation Journey"
              title="From discovery to continuous improvement"
            />
            <ImplementationTimeline phases={study.implementationPhases} />
            <div className="flex flex-col gap-6">
              <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                Key Features
              </h3>
              <KeyFeaturesGrid features={study.keyFeatures} />
            </div>
          </div>
        </section>

        <section
          id="dashboards"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader
              eyebrow="Dashboards & Analytics"
              title="What leadership sees"
            />
            <DashboardShowcase highlights={study.dashboardHighlights} />
          </div>
        </section>

        <section
          id="impact"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-12">
            <SectionHeader
              eyebrow="Business Impact"
              title="What changed for the business"
            />
            <KeyFeaturesGrid features={study.businessImpact} />
            <div className="flex flex-col gap-6">
              <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                Key Performance Indicators
              </h3>
              <KpiShowcase kpis={study.kpis} />
            </div>
          </div>
        </section>

        <section
          id="lessons"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-12">
            <SectionHeader
              eyebrow="Challenges & Lessons"
              title="What was hard, and what it taught me"
            />
            <ChallengesMitigation items={study.challengesMitigation} />
            <LessonsLearned lessons={study.lessonsLearned} />
          </div>
        </section>

        <section
          id="roadmap"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="Future Roadmap" title="Where this goes next" />
            <KeyFeaturesGrid features={study.futureRoadmap} />
          </div>
        </section>

        <section
          id="resources"
          className="border-border scroll-mt-24 border-t py-16 sm:py-20"
        >
          <div className="container-executive flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="Downloads" title="Resources" />
              <DownloadsSection resources={study.downloads} />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                Gallery
              </h3>
              <GalleryLightbox slug={study.slug} />
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-border border-t py-16 sm:py-20">
            <div className="container-executive flex flex-col gap-10">
              <SectionHeader
                eyebrow="Related Projects"
                title="Explore more case studies"
              />
              <RelatedProjects studies={related} />
            </div>
          </section>
        ) : null}

        <div className="container-executive py-16 sm:py-20">
          <CaseStudyNav previous={previous} next={next} />
        </div>
      </div>
    </>
  );
}
