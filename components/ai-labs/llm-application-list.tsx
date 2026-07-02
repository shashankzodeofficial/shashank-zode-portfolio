"use client";

import { LLMApplicationCard } from "@/components/ai-labs/llm-application-card";
import { llmApplications } from "@/content/ai-labs/llm-applications";

export function LLMApplicationList() {
  return (
    <div className="flex flex-col gap-5">
      {llmApplications.map((application, i) => (
        <LLMApplicationCard key={application.slug} application={application} index={i} />
      ))}
    </div>
  );
}
