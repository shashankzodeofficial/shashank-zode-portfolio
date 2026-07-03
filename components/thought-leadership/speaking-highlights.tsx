import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic } from "lucide-react";

import { conferencePhotos } from "@/lib/media";

const highlightPhoto = conferencePhotos[5];

export function SpeakingHighlights() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive grid grid-cols-1 items-center gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <div className="border-border shadow-panel relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image
            src={highlightPhoto.src}
            alt={highlightPhoto.alt}
            fill
            sizes="(min-width: 1024px) 22rem, 90vw"
            className="object-cover"
          />
          <div className="from-primary/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <p className="text-primary-foreground/85 absolute bottom-3 left-4 text-xs font-medium">
            {highlightPhoto.caption}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
            Speaking &amp; Conferences
          </span>
          <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
            An operator&apos;s voice on industry stages
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Panelist at the 8th NXTGEN ProcureConnect Confex &amp; Awards 2025,
            presented by Moglix — contributing an operator&apos;s perspective on
            procurement and supply chain leadership alongside industry peers.
            Open to keynotes, roundtables, and workshops on AI, operations, and
            executive decision-making.
          </p>
          <Link
            href="/thought-leadership/speaking"
            className="text-brand group inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
          >
            <Mic className="size-4" aria-hidden />
            View speaking topics &amp; formats
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
