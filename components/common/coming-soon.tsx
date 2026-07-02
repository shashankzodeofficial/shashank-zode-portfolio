import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface ComingSoonProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ComingSoon({ icon: Icon, title, description }: ComingSoonProps) {
  return (
    <section className="container-executive flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="bg-brand-muted text-brand flex size-14 items-center justify-center rounded-2xl">
        <Icon className="size-6" aria-hidden />
      </span>
      <Badge variant="brand">Coming soon</Badge>
      <h1 className="text-title max-w-xl font-semibold tracking-[var(--text-title--letter-spacing)]">
        {title}
      </h1>
      <p className="text-lead text-muted-foreground max-w-lg">{description}</p>
      <Link
        href="/"
        className="text-brand mt-2 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to home
      </Link>
    </section>
  );
}
