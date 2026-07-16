"use client"

import Image from "next/image"
import Link from "next/link"
import {
  featuredProjects,
  impactStill,
  industrialCta,
  industrialStats,
  manufacturingCards,
  missionPillars,
  renewableGrid,
  sustainabilityTimeline,
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

export function StatsSection() {
  return (
    <section
      id="impact"
      className="bg-[var(--ind-navy)] px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] py-12 sm:py-16 md:py-20"
    >
      <div className="nx-container">
        <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {industrialStats.map((stat, i) => (
            <FadeUp key={stat.label} delayMs={i * 55} as="div">
              <div
                className={cn(
                  "border-white/10 p-5 text-center sm:p-6 md:p-10",
                  "border-b border-r",
                  i % 2 === 1 && "border-r-0",
                  i >= 2 && "border-b-0",
                  "md:border-b-0 md:border-r",
                  i === industrialStats.length - 1 && "md:border-r-0",
                )}
              >
                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/60 sm:mb-3 sm:tracking-[0.22em]">
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

export function SustainabilitySection() {
  return (
    <SectionShell id="sustainability">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeUp variant="scale">
          <div className="nx-media relative aspect-[16/11] min-h-[12rem] overflow-hidden rounded-[var(--radius)]">
            <Image
              src={impactStill.image}
              alt={impactStill.imageAlt}
              fill
              loading="lazy"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeUp>

        <div>
          <FadeUp>
            <p className="nx-eyebrow mb-3 text-[var(--ind-emerald)]">Path to leadership</p>
            <h2 className="nx-h2 text-[var(--ind-navy)] dark:text-white">
              From resource base to reliable power
            </h2>
            <p className="nx-lead mt-4 text-[var(--ind-steel)]">
              A clear arc: secure resources, operate complex fields, grow clean capacity, and remain a
              trusted partner for critical energy infrastructure.
            </p>
          </FadeUp>

          <ol className="mt-10 space-y-0 border-l border-[var(--ind-emerald)]/40 pl-6">
            {sustainabilityTimeline.map((step, i) => (
              <FadeUp key={step.year} delayMs={i * 70} as="li">
                <div className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--ind-emerald)] ring-4 ring-[var(--ind-emerald)]/20" />
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--ind-blue)]">
                    {step.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--ind-navy)] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--ind-steel)]">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ol>
        </div>
      </div>

      <FadeUp delayMs={100}>
        <div className="mt-12 grid gap-6 rounded-[var(--radius)] border border-[var(--ind-steel)]/15 bg-[var(--ind-mist)] p-5 sm:mt-16 sm:grid-cols-3 sm:gap-4 sm:p-8 md:gap-6 md:p-12 dark:bg-[var(--ind-navy)]/40">
          {[
            {
              title: "Resource",
              desc: "Mining and extractive systems built for multi-year programmes.",
            },
            {
              title: "Operate",
              desc: "Offshore and field assets run with logistics and safety discipline.",
            },
            {
              title: "Power",
              desc: "Renewables and generation infrastructure for dependable supply.",
            },
          ].map((ring) => (
            <div
              key={ring.title}
              className="flex items-center gap-4 text-left sm:flex-col sm:text-center"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ind-emerald)]/50 bg-[var(--ind-emerald)]/10 sm:mx-auto sm:mb-4 sm:h-24 sm:w-24">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ind-emerald)] sm:text-sm">
                  {ring.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--ind-steel)]">{ring.desc}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </SectionShell>
  )
}

export function FeaturedProjectsSection() {
  return (
    <SectionShell id="projects" className="border-t border-[var(--ind-steel)]/12">
      <FadeUp>
        <SectionHeader
          eyebrow="Featured programmes"
          title="Large frames, precise narratives"
          description="Selected programmes across resources and offshore energy systems."
          titleClassName="text-[var(--ind-navy)] dark:text-white"
          eyebrowClassName="text-[var(--ind-blue)]"
          descriptionClassName="text-[var(--ind-steel)]"
        />
      </FadeUp>

      <div className="space-y-16 sm:space-y-20 md:space-y-28">
        {featuredProjects.map((project, i) => {
          const reverse = i % 2 === 1
          return (
            <FadeUp key={project.id} as="article">
              <div
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                  reverse && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="nx-media relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] lg:aspect-[5/4]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="max-w-lg">
                  <p className="nx-eyebrow text-[var(--ind-emerald)]">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--ind-navy)] md:text-4xl dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[var(--ind-steel)] md:leading-[1.7]">
                    {project.summary}
                  </p>
                  <dl className="mt-8 flex flex-wrap gap-8">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--ind-steel)]">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-[var(--ind-navy)] dark:text-white">
                        {project.location}
                      </dd>
                    </div>
                    {project.metric && (
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--ind-steel)]">
                          Scale
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-[var(--ind-navy)] dark:text-white">
                          {project.metric}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </FadeUp>
          )
        })}
      </div>
    </SectionShell>
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
            <Link
              href={industrialCta.primary.href}
              className="nx-touch inline-flex w-full items-center justify-center border border-[var(--ind-emerald)]/55 bg-[var(--ind-emerald)]/15 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-[var(--duration-fast)] hover:bg-[var(--ind-emerald)]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ind-emerald)] sm:w-auto sm:min-w-[11rem]"
            >
              {industrialCta.primary.label}
            </Link>
            <Link
              href={industrialCta.secondary.href}
              className="nx-touch inline-flex w-full items-center justify-center border border-white/25 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/85 transition-colors duration-[var(--duration-fast)] hover:border-white/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[11rem]"
            >
              {industrialCta.secondary.label}
            </Link>
          </div>
        </div>
      </FadeUp>
    </SectionShell>
  )
}
