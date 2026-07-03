import { Skeleton } from "@/components/ui/skeleton";

/** Generic hero + card-grid loading skeleton, reused across route `loading.tsx` files. */
export function PageSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <div className="container-executive flex flex-col gap-10 py-16 sm:py-20">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-10 w-2/3 max-w-xl" />
        <Skeleton className="h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-5/6 max-w-xl" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <div
            key={i}
            className="border-border bg-card flex flex-col gap-4 rounded-2xl border p-6"
          >
            <Skeleton className="size-9 rounded-xl" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}
