import { Rocket } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";

export function AIProjectsHero() {
  return (
    <AILabsSubHero
      eyebrowIcon={<Rocket className="text-brand size-3.5" aria-hidden />}
      eyebrowLabel="AI Projects Portfolio"
      title="Five live AI platforms, not slideware"
      description="Every project below has a working demo you can open right now. Each card covers the business problem, the AI approach, the technologies used, and the measurable impact — with direct links to the live demo, full case study, architecture, and documentation."
      breadcrumbLabel="AI Projects Portfolio"
    />
  );
}
