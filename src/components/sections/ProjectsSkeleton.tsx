export function ProjectsSkeleton() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section label */}
        <div className="mb-2 h-4 w-24 animate-pulse rounded bg-border" />
        {/* Heading */}
        <div className="mb-10 h-10 w-64 animate-pulse rounded bg-border" />

        {/* Filter tabs */}
        <div className="mb-12 flex gap-2">
          {["All", "Web App", "UI/UX"].map((l) => (
            <div key={l} className="h-9 w-20 animate-pulse rounded-lg bg-border" />
          ))}
        </div>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
              <div className="h-44 w-full animate-pulse bg-border" />
              <div className="flex flex-col gap-3 p-5">
                <div className="h-5 w-3/4 animate-pulse rounded bg-border" />
                <div className="h-4 w-full animate-pulse rounded bg-border" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-border" />
                <div className="mt-1 flex gap-1.5">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-5 w-14 animate-pulse rounded bg-border" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
