import { KpiShowcase } from "@/components/case-study/kpi-showcase";
import { articles } from "@/content/knowledge/articles";
import { aiUseCases } from "@/content/knowledge/ai-use-cases";
import { frameworks } from "@/content/knowledge/frameworks";

const totalMinutes = articles.reduce((sum, article) => {
  const minutes = parseInt(article.readingTime, 10);
  return sum + (Number.isNaN(minutes) ? 0 : minutes);
}, 0);

export function ReadingStats() {
  return (
    <section className="border-border border-t py-14">
      <div className="container-executive">
        <KpiShowcase
          kpis={[
            { display: String(articles.length), label: "Executive Articles", description: "Consulting-grade, practitioner-written" },
            { display: String(frameworks.length), label: "Original Frameworks", description: "Visual, structured, downloadable" },
            { display: String(aiUseCases.length), label: "AI Use Cases", description: "Each with a ready-to-use prompt" },
            { display: `${totalMinutes} min`, label: "Total Reading Time", description: "Across the full article library" },
          ]}
        />
      </div>
    </section>
  );
}
