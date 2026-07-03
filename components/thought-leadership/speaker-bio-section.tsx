import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";
import { speakerBioLong } from "@/content/thought-leadership/speaker-bio";
import { profilePhoto } from "@/lib/media";
import { resumeUrl } from "@/lib/site-config";

export function SpeakerBioSection() {
  const paragraphs = speakerBioLong.split("\n\n");

  return (
    <section id="bio" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive grid grid-cols-1 items-start gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <div className="border-border shadow-panel relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border lg:mx-0">
          <Image
            src={profilePhoto.src}
            alt={profilePhoto.alt}
            fill
            sizes="(min-width: 1024px) 18rem, 80vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeader eyebrow="Speaker Bio" title="About Shashank Zode" />
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand w-fit text-sm font-semibold hover:underline"
          >
            Download full resume →
          </a>
        </div>
      </div>
    </section>
  );
}
