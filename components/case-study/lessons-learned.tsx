import { Lightbulb } from "lucide-react";

export function LessonsLearned({ lessons }: { lessons: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {lessons.map((lesson) => (
        <div
          key={lesson}
          className="border-gold/25 bg-gold/8 flex flex-col gap-3 rounded-2xl border p-5"
        >
          <Lightbulb className="text-gold size-4" aria-hidden />
          <p className="text-foreground text-sm leading-relaxed italic">
            &ldquo;{lesson}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}
