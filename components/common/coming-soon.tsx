import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { MediaAsset } from "@/types";

interface ComingSoonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  banner?: MediaAsset;
}

export function ComingSoon({ icon: Icon, title, description, banner }: ComingSoonProps) {
  return (
    <section className="container-executive flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      {banner ? (
        <div className="border-border shadow-panel relative mb-4 aspect-[21/9] w-full max-w-2xl overflow-hidden rounded-2xl border sm:aspect-[3/1]">
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            sizes="(min-width: 640px) 42rem, 100vw"
            className="object-cover"
          />
          <div className="from-primary/80 via-primary/10 absolute inset-0 bg-gradient-to-t to-transparent" />
          {banner.caption ? (
            <p className="text-primary-foreground/80 absolute bottom-3 left-4 text-xs font-medium">
              {banner.caption}
            </p>
          ) : null}
        </div>
      ) : null}
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
