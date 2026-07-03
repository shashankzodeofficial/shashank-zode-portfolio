import type { Metadata } from "next";
import { UsersRound } from "lucide-react";

import { Callout } from "@/components/common/callout";
import { ThoughtLeadershipCta } from "@/components/thought-leadership/thought-leadership-cta";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { interviewPlaceholders } from "@/content/thought-leadership/interviews";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Interviews — ${siteConfig.name}`;
const description =
  "Executive interviews, podcast appearances, and media conversations — honestly marked as future content, with no fabricated appearances.";

export const metadata: Metadata = {
  title: "Interviews",
  description,
  alternates: { canonical: "/thought-leadership/interviews" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/interviews`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function InterviewsPage() {
  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<UsersRound className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Interviews"
        title="Conversations, coming soon"
        description="No interviews or podcast appearances have taken place yet — this page shows the kinds of conversations I'm open to having."
        breadcrumbLabel="Interviews"
      />
      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          <Callout variant="info" title="No interviews have taken place yet">
            Every card below is a clearly labeled placeholder for future
            content — open to podcast, media, and executive interview
            conversations on AI, operations, and leadership.
          </Callout>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {interviewPlaceholders.map((interview) => {
              const Icon = interview.icon;
              return (
                <div
                  key={interview.title}
                  className="border-border/70 bg-surface flex flex-col gap-3 rounded-2xl border border-dashed p-6"
                >
                  <span className="bg-muted text-muted-foreground flex size-10 items-center justify-center rounded-xl">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="border-border bg-card text-muted-foreground w-fit rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium">
                    {interview.type}
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">{interview.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {interview.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ThoughtLeadershipCta />
    </>
  );
}
