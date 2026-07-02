import { Tag } from "@/components/common/tag";
import type { TechBadge } from "@/types/project";

export function TechStackBadges({ badges }: { badges: TechBadge[] }) {
  return (
    <div className="border-border border-b py-8">
      <div className="container-executive flex flex-wrap items-center gap-2">
        <span className="text-muted-foreground mr-1 text-xs font-semibold tracking-wide uppercase">
          Technology Stack
        </span>
        {badges.map((badge) => (
          <Tag key={badge.label} className="bg-card">
            {badge.label}
          </Tag>
        ))}
      </div>
    </div>
  );
}
