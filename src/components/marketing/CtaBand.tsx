"use client"

/**
 * Signature CtaBand — Home mid-funnel only.
 * Invariant: import and render from `src/app/page.tsx` only (once site-wide).
 * Uses --color-signature-bg / --color-signature-foreground exclusively here.
 */

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { track } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type CtaBandProps = {
  className?: string
  title?: string
  summary?: string
  ctaLabel?: string
  ctaHref?: string
}

export function CtaBand({
  className,
  title = "Ready to plan your next wind project?",
  summary = "Share site context and capacity goals. Our team responds with a scoped proposal path — no invented timelines or guarantees.",
  ctaLabel = "Request project proposal",
  ctaHref = "/contact",
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="signature-cta-title"
      // motion-cta-band: PR8 quiet-enter hook — reduced-motion stays instant via globals
      className={cn(
        "motion-cta-band bg-[var(--color-signature-bg)] text-[var(--color-signature-foreground)]",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 id="signature-cta-title" className="text-h2">
            {title}
          </h2>
          <p className="mt-3 text-body opacity-90">{summary}</p>
        </div>
        <Button
          asChild
          className="min-h-11 shrink-0 bg-[var(--color-signature-foreground)] text-[var(--color-signature-bg)] hover:bg-[var(--color-signature-foreground)]/90"
        >
          <Link
            href={ctaHref}
            onClick={() => track("cta_click", { location: "signature" })}
          >
            {ctaLabel}
          </Link>
        </Button>
      </div>
    </section>
  )
}
