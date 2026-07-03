"use client";

import { FitnessTimelineItem } from "@/components/fitness/fitness-timeline-item";
import { SectionHeader } from "@/components/common/section-header";
import { fitnessTimeline } from "@/content/fitness/timeline";

export function FitnessTimeline() {
  return (
    <section id="timeline" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="The Transformation Timeline"
          title="Seven stages, one sustained habit"
          description="Click any stage to see the detail behind it — this wasn't a single decision, it was a sequence of smaller ones."
        />

        <ol className="relative flex flex-col">
          <div className="bg-border absolute top-3 bottom-11 left-[0.4rem] w-px" aria-hidden />
          {fitnessTimeline.map((entry, i) => (
            <FitnessTimelineItem key={entry.title} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
