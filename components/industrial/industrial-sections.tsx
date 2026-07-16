"use client"

import Image from "next/image"
import Link from "next/link"
import {
  industrialCta,
  industrialStats,
  manufacturingCards,
  missionPillars,
  renewableGrid,
} from "@/content/industrial"
import { FadeUp } from "@/components/motion/fade-up"
import { SectionHeader, SectionShell } from "@/components/shared/section-shell"
import { cn } from "@/lib/utils"

export function MissionSection() {
  return (
    <SectionShell id="mission">
      <FadeUp>
        <SectionHeader
          eyebrow="Mission & domains"
          title="One portfolio across the energy value chain."
          description="Resources, offshore systems, renewables, and generation infrastructure — expressed in Nordex Super Energies' institutional voice."
          titleClassName="text-[var(--ind-navy)] dark:text-white"
          descriptionClassName="text-[var(--ind-steel)]"
        />
      </FadeUp>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {missionPillars.map((pillar, i) => (
          <FadeUp key={pillar.title} delayMs={i * 70} as="article">
            <div className="nx-card group flex h-full flex-col border-[var(--ind-steel)]/15 bg-white p-5 sm:p-7 md:p-8 dark:bg-[var(--ind-navy)]/45">
              <div className="mb-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--ind-emerald)]/35 bg-[var(--ind-emerald)]/10 text-xs font-semibold tracking-wider text-[var(--ind-emerald)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[var(--ind-navy)] md:text-[1.35rem] dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ind-steel)] md:text-[0.9375rem] md:leading-[1.7]">
                {pillar.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}

export function RenewableSection() {
  return (
    <SectionShell id="portfolio" className="bg-[var(--ind-mist)]/50 dark:bg-transparent">
      <FadeUp>
        <SectionHeader
          eyebrow="Portfolio"
          title="From resource to renewable power"
          description="Mining and field systems, oil and gas operations, solar, and wind — presented as long-horizon energy assets."
          titleClassName="text-[var(--ind-navy)] dark:text-white"
          descriptionClassName="text-[var(--ind-steel)]"
        />
      </FadeUp>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {renewableGrid.map((item, i) => (
          <FadeUp key={item.title} delayMs={i * 70} as="article" variant="scale">
            <div className="nx-card group flex h-full flex-col overflow-hidden border-[var(--ind-steel)]/15 bg-white dark:bg-[var(--ind-navy)]/40">
              <div className="nx-media relative aspect-[4/5] shrink-0">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  loading="lazy"
                  quality={88}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ind-navy)]/40 via-transparent to-transparent opacity-90" />
              </div>
              <div className="flex flex-1 flex-col space-y-2.5 p-5 sm:p-6 md:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--ind-navy)] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--ind-steel)]">{item.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}

export function ManufacturingSection() {
  return (
    <SectionShell
      id="systems"
      className="border-y border-[var(--ind-steel)]/12 bg-[var(--ind-mist)] dark:bg-[var(--ind-navy)]/55"
    >
      <FadeUp>
        <SectionHeader
          eyebrow="Systems & infrastructure"
          title="Plant, safety, and grid"
          description="Generation facilities, site operations, and process infrastructure that keep energy moving."
          titleClassName="text-[var(--ind-navy)] dark:text-white"
          eyebrowClassName="text-[var(--ind-blue)]"
          descriptionClassName="text-[var(--ind-steel)]"
        />
      </FadeUp>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {manufacturingCards.map((card, i) => (
          <FadeUp key={card.title} delayMs={i * 70} as="article">
            <div className="nx-card flex h-full flex-col overflow-hidden border-[var(--ind-steel)]/15 bg-white dark:bg-black/20">
              <div className="nx-media relative aspect-[16/10] shrink-0">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  loading="lazy"
                  quality={88}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2.5 p-6 md:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--ind-navy)] dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--ind-steel)]">{card.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}

/** Dense signature band — section-y-sm, not full story padding. */
export function StatsSection() {
  return (
    <section
      id="impact"
      className="bg-[var(--ind-navy)] px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] py-[var(--section-y-sm)]"
    >
      <div className="nx-container">
        <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {industrialStats.map((stat, i) => (
            <FadeUp key={stat.label} delayMs={i * 55} as="div">
              <div
                className={cn(
                  "border-white/10 p-5 text-center sm:p-6 md:p-8",
                  "border-b border-r",
                  i % 2 === 1 && "border-r-0",
                  i >= 2 && "border-b-0",
                  "md:border-b-0 md:border-r",
                  i === industrialStats.length - 1 && "md:border-r-0",
                )}
              >
                <p className="nx-meta mb-2 text-white/60 sm:mb-3 sm:tracking-[0.2em]">
                  {stat.label}
                </p>
                <p className="font-energy text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                  {stat.value}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Quiet enterprise cross-links — industrial theme. */
export function IndustrialCta() {
  return (
    <SectionShell
      id="connect"
      className="border-t border-[var(--ind-steel)]/15 bg-[var(--ind-navy)] text-white"
    >
      <FadeUp>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-xl md:max-w-2xl">
            <p className="nx-eyebrow mb-3 text-[var(--ind-emerald-soft,var(--ind-emerald))]">
              {industrialCta.eyebrow}
            </p>
            <h2 className="font-energy text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
              {industrialCta.title}
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/75 md:mt-5 md:text-base md:leading-[1.7]">
              {industrialCta.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-stretch sm:justify-end">
            <Link href={industrialCta.primary.href} className="nx-btn nx-btn-energy nx-btn-wide">
              {industrialCta.primary.label}
            </Link>
            <Link href={industrialCta.secondary.href} className="nx-btn nx-btn-on-dark nx-btn-wide">
              {industrialCta.secondary.label}
            </Link>
          </div>
        </div>
      </FadeUp>
    </SectionShell>
  )
}
