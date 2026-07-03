import { Download, ExternalLink, FileText } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { resumeUrl } from "@/lib/site-config";

export function ResumeViewer() {
  return (
    <section id="resume" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Interactive Resume"
            title="Read it here, or take it with you"
            description="The embedded viewer works on most desktop browsers — on mobile, use the buttons below."
          />
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button
              variant="brand"
              render={
                <a href={resumeUrl} download>
                  Download PDF
                  <Download data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              variant="outline"
              render={
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Open in New Tab
                  <ExternalLink data-icon="inline-end" aria-hidden />
                </a>
              }
            />
          </div>
        </div>

        <div className="border-border bg-surface shadow-panel overflow-hidden rounded-2xl border">
          <object
            data={`${resumeUrl}#view=FitH`}
            type="application/pdf"
            className="h-[70vh] w-full sm:h-[80vh]"
            aria-label="Shashank Zode's resume, embedded PDF viewer"
          >
            <div className="flex h-64 flex-col items-center justify-center gap-4 p-8 text-center">
              <FileText className="text-muted-foreground size-10" aria-hidden strokeWidth={1.25} />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your browser can&apos;t display the embedded PDF — use the
                buttons above to download or open it directly.
              </p>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
