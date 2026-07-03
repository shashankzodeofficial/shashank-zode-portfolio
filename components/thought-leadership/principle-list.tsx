"use client";

import { PrincipleCard } from "@/components/thought-leadership/principle-card";
import { executivePrinciples } from "@/content/thought-leadership/principles";

export function PrincipleList() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {executivePrinciples.map((principle, i) => (
        <PrincipleCard key={principle.slug} principle={principle} index={i} />
      ))}
    </div>
  );
}
