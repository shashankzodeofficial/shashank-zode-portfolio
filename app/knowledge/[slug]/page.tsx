import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { ChallengesMitigation } from "@/components/case-study/challenges-mitigation";
import { ContentBlock } from "@/components/case-study/content-block";
import { DownloadsSection } from "@/components/case-study/downloads-section";
import { ImplementationTimeline } from "@/components/case-study/implementation-timeline";
import { KeyFeaturesGrid } from "@/components/case-study/key-features-grid";
import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { LessonsLearned } from "@/components/case-study/lessons-learned";
import { TableOfContents } from "@/components/case-study/table-of-contents";
import { Callout } from "@/components/common/callout";
import { SectionHeader } from "@/components/common/section-header";
import { ArticleHero } from "@/components/knowledge/article-hero";
import { ArticleNav } from "@/components/knowledge/article-nav";
import { ExecutiveSummary } from "@/components/knowledge/executive-summary";
import { RelatedArticles } from "@/components/knowledge/related-articles";
import { articles, getArticleBySlug, getRelatedArticles } from "@/content/knowledge/articles";
import { siteConfig } from "@/lib/site-config";

const tocItems = [
  { id: "summary", label: "Executive Summary" },
  { id: "problem", label: "The Problem" },
  { id: "experience", label: "My Experience" },
  { id: "framework", label: "Framework & AI" },
  { id: "implementation", label: "Implementation" },
  { id: "impact", label: "Impact & KPIs" },
  { id: "lessons", label: "Lessons & Outlook" },
  { id: "resources", label: "Resources" },
];

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const fullTitle = `${article.title} — ${siteConfig.name}`;

  return {
    title: article.title,
    description: article.subtitle,
    alternates: {
      canonical: `/knowledge/${article.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/knowledge/${article.slug}`,
      title: fullTitle,
      description: article.subtitle,
      publishedTime: article.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: article.subtitle,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const previous = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;
  const related = getRelatedArticles(article);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle,
    datePublished: article.publishDate,
    keywords: article.tags.join(", "),
    url: `${siteConfig.url}/knowledge/${article.slug}`,
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
      <ArticleHero slug={article.slug} />

      <div className="flex flex-col">
        <section id="summary" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="Executive Summary" title="At a glance" />
            <ExecutiveSummary {...article.executiveSummary} />
          </div>
        </section>

        <section id="problem" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="The Business Problem" title="Why this matters" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <ContentBlock title="Business Problem" body={article.businessProblem} />
              <ContentBlock title="Business Context" body={article.businessContext} />
              <ContentBlock title="Who Should Read This" body={article.executiveSummary.whoShouldRead} />
            </div>
            <KeyFeaturesGrid features={article.whyItMattersPoints} />
          </div>
        </section>

        <section id="experience" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="My Experience" title="How I've approached this" />
            <ContentBlock title="Executive Perspective" body={article.myExperience} className="max-w-3xl" />
          </div>
        </section>

        <section id="framework" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-12">
            <SectionHeader eyebrow="Recommended Framework" title="A structured approach" />
            <ArchitectureDiagram diagram={article.recommendedFramework} />
            <div className="flex flex-col gap-6">
              <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                AI &amp; Technology Enablement
              </h3>
              <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
                {article.aiEnablement.intro}
              </p>
              <KeyFeaturesGrid features={article.aiEnablement.tools} />
            </div>
          </div>
        </section>

        <section id="implementation" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-10">
            <SectionHeader eyebrow="Step-by-Step Implementation" title="How to put this into practice" />
            <ImplementationTimeline phases={article.implementationSteps} />
          </div>
        </section>

        <section id="impact" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-12">
            <SectionHeader eyebrow="Business Impact" title="What changes when this works" />
            <KeyFeaturesGrid features={article.businessImpact} />
            <div className="flex flex-col gap-6">
              <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                KPIs to Track
              </h3>
              <KpiShowcase kpis={article.kpis} />
            </div>
          </div>
        </section>

        <section id="lessons" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-12">
            <SectionHeader eyebrow="Challenges & Lessons" title="What to watch for" />
            <ChallengesMitigation items={article.challengesMitigation} />
            <LessonsLearned lessons={article.lessonsLearned} />
            <Callout variant="idea" title="Executive Takeaways">
              <ul className="flex flex-col gap-1.5">
                {article.executiveTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </Callout>
            <div className="flex flex-col gap-6">
              <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                Future Outlook
              </h3>
              <KeyFeaturesGrid features={article.futureOutlook} />
            </div>
          </div>
        </section>

        <section id="resources" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
          <div className="container-executive flex flex-col gap-6">
            <SectionHeader eyebrow="Downloads" title="Resources" />
            <DownloadsSection resources={article.downloads} />
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-border border-t py-16 sm:py-20">
            <div className="container-executive flex flex-col gap-10">
              <SectionHeader eyebrow="Related Articles" title="Continue exploring" />
              <RelatedArticles articles={related} />
            </div>
          </section>
        ) : null}

        <div className="container-executive py-16 sm:py-20">
          <ArticleNav previous={previous} next={next} />
        </div>
      </div>
    </>
  );
}
