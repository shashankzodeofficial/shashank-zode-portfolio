"use client";

import { AgentCard } from "@/components/ai-labs/agent-card";
import { aiAgents } from "@/content/ai-labs/agents";

export function AgentList() {
  return (
    <div className="flex flex-col gap-5">
      {aiAgents.map((agent, i) => (
        <AgentCard key={agent.slug} agent={agent} index={i} />
      ))}
    </div>
  );
}
