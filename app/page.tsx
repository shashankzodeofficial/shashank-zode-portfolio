import { Hero } from "@/components/hero/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { AILabsPreview } from "@/components/sections/ai-labs-preview";
import { CoreExpertise } from "@/components/sections/core-expertise";
import { CtaSection } from "@/components/sections/cta-section";
import { ExecutiveMetrics } from "@/components/sections/executive-metrics";
import { FitnessPreview } from "@/components/sections/fitness-preview";
import { KnowledgePreview } from "@/components/sections/knowledge-preview";
import { LeadershipPhilosophy } from "@/components/sections/leadership-philosophy";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ThoughtLeadershipPreview } from "@/components/sections/thought-leadership-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <ExecutiveMetrics />
      <AboutPreview />
      <LeadershipPhilosophy />
      <CoreExpertise />
      <ProjectsPreview />
      <AILabsPreview />
      <ThoughtLeadershipPreview />
      <KnowledgePreview />
      <FitnessPreview />
      <CtaSection />
    </>
  );
}
