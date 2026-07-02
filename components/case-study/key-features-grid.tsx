import { FeatureCard } from "@/components/cards/feature-card";
import type { IconFeature } from "@/types/project";

export function KeyFeaturesGrid({ features }: { features: IconFeature[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
