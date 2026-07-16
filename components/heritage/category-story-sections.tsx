"use client"

import {
  activeHeritageCategories,
  heritageCategoryCopy,
} from "@/content/heritage"
import { FadeUp } from "@/components/motion/fade-up"
import { SectionHeader, SectionShell } from "@/components/shared/section-shell"

export function CategoryStorySections() {
  const categories = activeHeritageCategories()

  if (categories.length === 0) return null

  return (
    <SectionShell
      id="categories"
      className="border-t border-[var(--heritage-card-border)] bg-[var(--heritage-beige)]/35"
    >
      <FadeUp>
        <SectionHeader
          eyebrow="Collecting rooms"
          title="Disciplines within the collection"
          description="Rooms reflect active holdings — categories expand only when objects are catalogued."
          className="mb-10 md:mb-12"
          titleClassName="text-[var(--heritage-charcoal)]"
          descriptionClassName="text-[var(--heritage-label)]"
        />
      </FadeUp>

      <div className="grid gap-px border border-[var(--heritage-card-border)] bg-[var(--heritage-card-border)] sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <FadeUp
            key={cat}
            delayMs={Math.min(i * 40, 240)}
            as="article"
            className="h-full min-h-0"
          >
            <div className="flex h-full min-h-[11.5rem] flex-col bg-[var(--heritage-ivory)] p-6 md:min-h-[13rem] md:p-8">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--heritage-bronze)] md:mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl leading-snug tracking-[-0.015em] text-[var(--heritage-charcoal)] md:text-[1.35rem]">
                {cat}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--heritage-label)] md:mt-3 md:leading-[1.7]">
                {heritageCategoryCopy[cat] ??
                  "A curated narrative of form, material, and provenance."}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}
