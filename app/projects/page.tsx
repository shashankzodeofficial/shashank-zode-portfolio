import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Mail } from "lucide-react";

import { FeaturedCarousel } from "@/components/projects/featured-carousel";
import { KpiSummary } from "@/components/projects/kpi-summary";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { Button } from "@/components/ui/button";
import { contactMailto, scheduleMailto, siteConfig } from "@/lib/site-config";

const fullTitle = `Projects — ${siteConfig.name}`;
const description =
  "Executive case studies for five AI-powered supply chain platforms — the business problem, the architecture, and the measurable impact behind each one.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/projects`,
    title: fullTitle,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

const featuredSlugs = [
  "nexusone",
  "transportation-control-tower",
  "routesphere-delivery-app",
];

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <KpiSummary />
      <FeaturedCarousel slugs={featuredSlugs} />
      <ProjectsExplorer />

      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive">
          <div className="from-primary via-primary to-brand/90 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br px-8 py-14 text-center sm:px-16">
            <h2 className="text-title text-primary-foreground font-semibold tracking-[var(--text-title--letter-spacing)] text-balance">
              Have a similar transformation to plan?
            </h2>
            <p className="text-primary-foreground/75 max-w-xl text-sm leading-relaxed">
              I&apos;m open to conversations with teams solving hard operational or AI
              product problems.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="brand"
                render={
                  <a href={contactMailto}>
                    Contact Me
                    <Mail data-icon="inline-end" aria-hidden />
                  </a>
                }
              />
              <Button
                variant="secondary"
                render={
                  <a href={scheduleMailto}>
                    Schedule a Conversation
                    <CalendarClock data-icon="inline-end" aria-hidden />
                  </a>
                }
              />
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                render={<Link href="/about">About Me</Link>}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
