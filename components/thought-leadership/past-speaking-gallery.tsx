import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";
import { conferencePhotos } from "@/lib/media";

export function PastSpeakingGallery() {
  const gallery = conferencePhotos.slice(0, 6);

  return (
    <section id="past-speaking" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Past Speaking"
          title="Panelist, 8th NXTGEN ProcureConnect Confex & Awards 2025"
          description="Presented by Moglix — an operator's perspective on procurement and supply chain leadership, shared alongside industry peers."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {gallery.map((photo) => (
            <div
              key={photo.src}
              className="border-border shadow-subtle relative aspect-square overflow-hidden rounded-xl border"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
              {photo.caption ? (
                <div className="from-primary/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-2">
                  <p className="text-primary-foreground/90 text-[0.65rem] font-medium">
                    {photo.caption}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
