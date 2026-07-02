import type { Metadata } from "next";
import { Route } from "lucide-react";

import { ComingSoon } from "@/components/common/coming-soon";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The full career timeline — Amazon, Reliance Retail, and IBO — is coming soon.",
};

export default function JourneyPage() {
  return (
    <ComingSoon
      icon={Route}
      title="The full career timeline is coming soon."
      description="A detailed walk through 16+ years scaling operations at Amazon, Reliance Retail, and IBO — the initiatives, the setbacks, and the lessons — is on its way."
    />
  );
}
