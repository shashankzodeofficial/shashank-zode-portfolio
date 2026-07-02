"use client";

import { ExperimentCard } from "@/components/ai-labs/experiment-card";
import { aiExperiments } from "@/content/ai-labs/experiments";

export function ExperimentList() {
  return (
    <div className="flex flex-col gap-5">
      {aiExperiments.map((experiment, i) => (
        <ExperimentCard key={experiment.slug} experiment={experiment} index={i} />
      ))}
    </div>
  );
}
