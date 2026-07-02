"use client";

import { AIRoadmapTimelineItem } from "@/components/ai-labs/ai-roadmap-timeline-item";
import { aiRoadmap } from "@/content/ai-labs/roadmap";

export function AIRoadmapTimeline() {
  return (
    <ol className="relative flex flex-col">
      <div className="bg-border absolute top-3 bottom-11 left-[0.4rem] w-px" aria-hidden />
      {aiRoadmap.map((phase, i) => (
        <AIRoadmapTimelineItem key={phase.title} phase={phase} index={i} />
      ))}
    </ol>
  );
}
