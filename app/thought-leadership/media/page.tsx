import type { Metadata } from "next";
import { Newspaper } from "lucide-react";

import { DownloadsSection } from "@/components/case-study/downloads-section";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/common/section-header";
import { ThoughtLeadershipSubHero } from "@/components/thought-leadership/thought-leadership-subhero";
import { mediaItems, mediaKitResources } from "@/content/thought-leadership/media";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Media Center — ${siteConfig.name}`;
const description =
  "Press mentions, podcasts, videos, and conference features, plus a downloadable media kit — speaker one-sheet, executive biography, headshots, and presentation deck.";

export const metadata: Metadata = {
  title: "Media Center",
  description,
  alternates: { canonical: "/thought-leadership/media" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/thought-leadership/media`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function MediaCenterPage() {
  return (
    <>
      <ThoughtLeadershipSubHero
        eyebrowIcon={<Newspaper className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="Media Center"
        title="Press, podcasts, and the media kit"
        description="A single place for conference organizers, journalists, and event teams to find media coverage and downloadable press materials."
        breadcrumbLabel="Media Center"
      />

      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          <SectionHeader eyebrow="Media Coverage" title="Press, podcasts & conference features" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={
                    item.isPlaceholder
                      ? "border-border/70 bg-surface flex flex-col gap-3 rounded-2xl border border-dashed p-6"
                      : "border-border bg-card shadow-subtle flex flex-col gap-3 rounded-2xl border p-6"
                  }
                >
                  <span
                    className={
                      item.isPlaceholder
                        ? "bg-muted text-muted-foreground flex size-10 items-center justify-center rounded-xl"
                        : "bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl"
                    }
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <Badge variant={item.isPlaceholder ? "outline" : "brand"} className="w-fit text-[0.65rem]">
                    {item.isPlaceholder ? "Coming Soon" : "Featured"}
                  </Badge>
                  <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-border border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          <SectionHeader
            eyebrow="Media Kit"
            title="Downloadable press materials"
            description="Every resource below is prepared and being finalized for release — honestly labeled, not a dead link."
          />
          <DownloadsSection resources={mediaKitResources} />
        </div>
      </section>
    </>
  );
}
