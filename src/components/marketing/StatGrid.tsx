import dynamic from "next/dynamic"

import type { Stat } from "@/content/types"
import { cn } from "@/lib/utils"

// Motion island: client-only count-up stays out of the static RSC payload path.
const StatCountUp = dynamic(
  () =>
    import("@/components/motion/StatCountUp").then((m) => m.StatCountUp),
  {
    ssr: true,
    loading: () => (
      <span className="tabular-nums opacity-0" aria-hidden>
        0
      </span>
    ),
  }
)

type StatGridProps = {
  stats: Stat[]
  className?: string
  /** Optional section heading for a11y / layout */
  title?: string
  eyebrow?: string
}

export function StatGrid({ stats, className, title, eyebrow }: StatGridProps) {
  return (
    <section
      aria-labelledby={title ? "stat-grid-title" : undefined}
      className={cn("border-b border-border bg-background", className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p className="text-small font-medium text-primary">{eyebrow}</p>
            ) : null}
            {title ? (
              <h2 id="stat-grid-title" className="mt-3 text-h2 text-foreground">
                {title}
              </h2>
            ) : null}
          </div>
        )}
        <ul className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.id} className="motion-stat-count min-w-0">
              <p className="text-h2 text-primary">
                <StatCountUp value={stat.value} />
              </p>
              <p className="mt-2 text-small text-muted-foreground">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
