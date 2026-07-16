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
            <Link href="/industrial" className="nx-btn nx-btn-heritage nx-btn-wide">
              Energy division
            </Link>
            <Link href="/" className="nx-btn nx-btn-on-dark nx-btn-wide">
              Home
            </Link>
          </div>
        </div>
      </FadeUp>
    </SectionShell>
  )
}
