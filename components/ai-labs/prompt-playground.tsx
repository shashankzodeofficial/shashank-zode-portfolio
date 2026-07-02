"use client";

import * as React from "react";
import { Loader2, Play, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/common/callout";
import { playgroundScenarios } from "@/content/ai-labs/playground-scenarios";
import { cn } from "@/lib/utils";

export function PromptPlayground() {
  const [selectedId, setSelectedId] = React.useState(playgroundScenarios[0].id);
  const [status, setStatus] = React.useState<"idle" | "running" | "done">("idle");

  const scenario = playgroundScenarios.find((s) => s.id === selectedId) ?? playgroundScenarios[0];

  const runPrompt = () => {
    setStatus("running");
    window.setTimeout(() => setStatus("done"), 900);
  };

  const selectScenario = (id: string) => {
    setSelectedId(id);
    setStatus("idle");
  };

  return (
    <div className="flex flex-col gap-6">
      <Callout variant="info" title="How this demo works">
        Select a scenario below and run it. Responses are pre-written, simulated
        outputs — this demo runs entirely in your browser with no external AI API
        call, so it&apos;s safe to explore without any usage cost or key required.
      </Callout>

      <div className="flex flex-wrap gap-2">
        {playgroundScenarios.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => selectScenario(s.id)}
            aria-pressed={s.id === selectedId}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
              s.id === selectedId
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="border-border bg-card shadow-panel flex flex-col gap-6 rounded-2xl border p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="brand">{scenario.category}</Badge>
            <Button variant="brand" size="sm" onClick={runPrompt} disabled={status === "running"}>
              {status === "running" ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" aria-hidden />
                  Running…
                </>
              ) : (
                <>
                  Run Prompt
                  <Play data-icon="inline-end" aria-hidden />
                </>
              )}
            </Button>
          </div>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed">
            {scenario.samplePrompt}
          </p>
        </div>

        {status === "done" ? (
          <div className="border-brand/25 bg-brand-muted/30 flex flex-col gap-2 rounded-xl border p-4">
            <p className="text-brand flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="size-3.5" aria-hidden />
              Simulated Output
            </p>
            <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">
              {scenario.simulatedResponse}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
