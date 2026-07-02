import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "A forthcoming repository of supply chain, AI, and leadership playbooks by Shashank Zode.",
};

export default function KnowledgePage() {
  return (
    <section className="container-executive flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="bg-brand-muted text-brand flex size-14 items-center justify-center rounded-2xl">
        <BookOpen className="size-6" aria-hidden />
      </span>
      <Badge variant="brand">Coming soon</Badge>
      <h1 className="text-title max-w-xl font-semibold tracking-[var(--text-title--letter-spacing)]">
        The Knowledge Hub is in the works.
      </h1>
      <p className="text-lead text-muted-foreground max-w-lg">
        A curated library of supply chain, AI, and leadership playbooks — built from 16+
        years running large-scale operations — is on its way.
      </p>
    </section>
  );
}
