import Link from "next/link"
import { FadeUp } from "@/components/motion/fade-up"
import { SectionShell } from "@/components/shared/section-shell"

/** Quiet enterprise cross-links — not a marketing banner. */
export function HeritageCta() {
  return (
    <SectionShell
      id="connect"
      className="border-t border-[var(--heritage-bronze)]/15 bg-[var(--heritage-charcoal)] text-[var(--heritage-ivory)]"
    >
      <FadeUp>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-xl md:max-w-2xl">
            <p className="nx-eyebrow mb-3 text-[var(--heritage-gold)]">Nordex Super Energies</p>
            <h2 className="font-display text-balance text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.12] tracking-[-0.02em] text-[var(--heritage-ivory)]">
              From heritage holdings to the energy portfolio
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--heritage-beige)]/85 md:mt-5 md:text-base md:leading-[1.7]">
              Explore the energy division across resources, operations, renewables, and generation —
              or return to the main site overview.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-stretch sm:justify-end">
            <Link
              href="/industrial"
              className="nx-touch inline-flex w-full items-center justify-center border border-[var(--heritage-gold)]/60 bg-[var(--heritage-gold)]/10 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--heritage-ivory)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--heritage-gold)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--heritage-focus)] sm:w-auto sm:min-w-[11rem]"
            >
              Energy division
            </Link>
            <Link
              href="/"
              className="nx-touch inline-flex w-full items-center justify-center border border-[var(--heritage-ivory)]/25 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--heritage-beige)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--heritage-ivory)]/45 hover:text-[var(--heritage-ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--heritage-focus)] sm:w-auto sm:min-w-[11rem]"
            >
              Home
            </Link>
          </div>
        </div>
      </FadeUp>
    </SectionShell>
  )
}
