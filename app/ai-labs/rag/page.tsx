import type { Metadata } from "next";
import { FileSearch } from "lucide-react";

import { AILabsSubHero } from "@/components/ai-labs/ai-labs-subhero";
import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { ContentBlock } from "@/components/case-study/content-block";
import { Callout } from "@/components/common/callout";
import { SectionHeader } from "@/components/common/section-header";
import { getArchitectureDiagramBySlug } from "@/content/ai-labs/architecture-diagrams";
import { siteConfig } from "@/lib/site-config";

const fullTitle = `Retrieval-Augmented Generation (RAG) — ${siteConfig.name}`;
const description =
  "What Retrieval-Augmented Generation is, why it matters for enterprise AI, and how it applies to supply chain knowledge repositories and document search.";

export const metadata: Metadata = {
  title: "Retrieval-Augmented Generation (RAG)",
  description,
  alternates: { canonical: "/ai-labs/rag" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ai-labs/rag`,
    title: fullTitle,
    description,
  },
  twitter: { card: "summary_large_image", title: fullTitle, description },
};

export default function RAGPage() {
  const ragDiagram = getArchitectureDiagramBySlug("rag-pipeline");

  return (
    <>
      <AILabsSubHero
        eyebrowIcon={<FileSearch className="text-brand size-3.5" aria-hidden />}
        eyebrowLabel="RAG"
        title="Retrieval-Augmented Generation, explained for operators"
        description="RAG is the pattern that lets an AI assistant answer from your organization's own documents — grounded and cited — instead of guessing from what a general-purpose model happened to learn."
        breadcrumbLabel="RAG"
      />

      <section className="border-border scroll-mt-24 border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          <SectionHeader eyebrow="The Concept" title="What RAG is, in plain terms" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ContentBlock
              title="What RAG Is"
              body="Retrieval-Augmented Generation combines a search step with a generation step. Instead of asking a language model to answer purely from what it learned during training, RAG first retrieves the most relevant passages from your own documents, then asks the model to answer using only that retrieved context."
            />
            <ContentBlock
              title="Why It Matters"
              bullets={[
                "Answers are grounded in your actual documents, not the model's general training data.",
                "Every answer can be cited back to a specific source, which is essential for enterprise trust.",
                "Knowledge stays current — update the source documents, and the assistant's answers update with them.",
                "It avoids the cost and complexity of retraining a model every time your documentation changes.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-border scroll-mt-24 border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          <SectionHeader eyebrow="How It Works" title="From a question to a cited answer" />
          {ragDiagram ? <ArchitectureDiagram diagram={ragDiagram.diagram} /> : null}
          <Callout variant="info" title="The key design discipline">
            A well-built RAG system refuses to answer confidently when retrieval
            comes back empty or low-confidence — it says so, rather than letting
            the model fill the gap with a plausible-sounding guess.
          </Callout>
        </div>
      </section>

      <section className="border-border scroll-mt-24 border-t py-16 sm:py-20">
        <div className="container-executive flex flex-col gap-10">
          <SectionHeader eyebrow="Where It Applies" title="Business use cases in supply chain" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ContentBlock
              title="Knowledge Repositories & Document Search"
              body="SOPs, playbooks, vendor contracts, and past decision records live scattered across folders and systems. RAG turns them into a single, searchable source an operator can question in plain language instead of manually digging through files."
            />
            <ContentBlock
              title="Enterprise AI Assistants"
              body="A supply chain assistant grounded in your own network data, policies, and historical decisions gives far more reliable answers than a general-purpose chatbot — because every answer is traceable to a specific, current source document."
            />
          </div>
          <ContentBlock
            title="Supply Chain Applications"
            bullets={[
              "Answering 'what does our SOP say about X' without a manual document search.",
              "Surfacing the reasoning behind a past network or vendor decision from historical records.",
              "Onboarding new team members faster by letting them ask questions instead of reading every document cold.",
              "Flagging when a source document is past its review date as part of every retrieved answer.",
            ]}
          />
        </div>
      </section>
    </>
  );
}
