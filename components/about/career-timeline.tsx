import Image from "next/image";

import { CareerTimelineItem } from "@/components/about/career-timeline-item";
import { SectionHeader } from "@/components/common/section-header";
import { careerTimeline } from "@/lib/about-content";
import { conferencePhotos } from "@/lib/media";

const bannerPhoto = conferencePhotos[8];

export function CareerTimeline() {
  return (
    <section id="timeline" className="border-border scroll-mt-24 border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <div className="border-border shadow-panel relative aspect-[21/9] w-full overflow-hidden rounded-2xl border sm:aspect-[3/1]">
          <Image
            src={bannerPhoto.src}
            alt={bannerPhoto.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="from-primary/85 via-primary/20 absolute inset-0 bg-gradient-to-t to-transparent" />
          <p className="text-primary-foreground/80 absolute bottom-4 left-5 text-xs font-medium">
            {bannerPhoto.caption}
          </p>
        </div>

        <SectionHeader
          eyebrow="Career Timeline"
          title="Sixteen years, six inflection points"
          description="Click any stage to see the business challenge, the transformation, and what it taught me. This isn't a list of job titles — it's how the thinking evolved."
        />

        <ol className="relative flex flex-col">
          <div
            className="bg-border absolute top-3 bottom-11 left-[0.4rem] w-px"
            aria-hidden
          />
          {careerTimeline.map((entry, i) => (
            <CareerTimelineItem key={entry.period} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
