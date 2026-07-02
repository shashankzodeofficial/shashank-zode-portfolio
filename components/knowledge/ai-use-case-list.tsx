"use client";

import { AIUseCaseCard } from "@/components/knowledge/ai-use-case-card";
import { aiUseCases } from "@/content/knowledge/ai-use-cases";

/** Imports its data directly — icon fields can't cross the Server-to-Client boundary as props. */
export function AIUseCaseList() {
  return (
    <div className="flex flex-col gap-4">
      {aiUseCases.map((useCase, i) => (
        <AIUseCaseCard key={useCase.slug} useCase={useCase} index={i} />
      ))}
    </div>
  );
}
