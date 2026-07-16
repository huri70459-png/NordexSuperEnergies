"use client"

import { useEffect, useMemo, useState } from "react"
import { LayoutGroup, motion } from "framer-motion"
import { heritageItems, type HeritageItem } from "@/content/heritage"
import { ArtifactCard } from "@/components/heritage/artifact-card"
import { FadeUp } from "@/components/motion/fade-up"
import { SectionHeader, SectionShell } from "@/components/shared/section-shell"
import { cn } from "@/lib/utils"
import { transitions } from "@/lib/motion"

const GALLERY_PANEL_ID = "heritage-gallery-panel"

function heritageTabId(cat: string) {
  return `heritage-tab-${cat === "All" ? "all" : cat.replace(/\s+/g, "-").toLowerCase()}`
}

type MasonryGalleryProps = {
  filterCategory?: string | null
}

export function MasonryGallery({ filterCategory = null }: MasonryGalleryProps) {
  const items = useMemo(() => {
    if (!filterCategory || filterCategory === "All") return heritageItems
    return heritageItems.filter((i) => i.category === filterCategory)
  }, [filterCategory])

  return (
    <div
      id={GALLERY_PANEL_ID}
      role="tabpanel"
      aria-live="polite"
      className="heritage-masonry columns-1 sm:columns-2 lg:columns-3"
    >
      {items.map((item, index) => (
        <FadeUp
          key={item.id}
          delayMs={Math.min(index * 40, 240)}
          as="div"
          className="break-inside-avoid"
        >
          <ArtifactCard item={item} tall={index % 3 === 0} />
        </FadeUp>
      ))}
      {items.length === 0 && (
        <p className="w-full py-16 text-center text-sm text-[var(--heritage-label)]">
          No pieces in this category yet.
        </p>
      )}
    </div>
  )
}

export function HeritageCategoryNav({
  active,
  onChange,
  categories,
}: {
  active: string
  onChange: (c: string) => void
  categories: readonly string[]
}) {
  // Keep active chip in view on the horizontal phone strip
  useEffect(() => {
    const el = document.getElementById(heritageTabId(active))
    if (!el) return
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    })
  }, [active])

  return (
    <LayoutGroup>
      <div
        className="nx-scroll-x items-stretch gap-1 border-b border-[var(--heritage-card-border)] md:gap-0.5"
        role="tablist"
        aria-label="Collection categories"
      >
        {["All", ...categories].map((cat) => {
          const selected = active === cat
          const tabId = heritageTabId(cat)
          return (
            <button
              key={cat}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={GALLERY_PANEL_ID}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(cat)}
              onKeyDown={(e) => {
                const tabs = ["All", ...categories]
                const i = tabs.indexOf(cat)
                if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                  e.preventDefault()
                  const next = tabs[(i + 1) % tabs.length]
                  onChange(next)
                  requestAnimationFrame(() => {
                    document.getElementById(heritageTabId(next))?.focus()
                  })
                }
                if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                  e.preventDefault()
                  const prev = tabs[(i - 1 + tabs.length) % tabs.length]
                  onChange(prev)
                  requestAnimationFrame(() => {
                    document.getElementById(heritageTabId(prev))?.focus()
                  })
                }
                if (e.key === "Home") {
                  e.preventDefault()
                  onChange(tabs[0])
                }
                if (e.key === "End") {
                  e.preventDefault()
                  onChange(tabs[tabs.length - 1])
                }
              }}
              className={cn(
                "heritage-filter-tab nx-meta nx-touch relative shrink-0 px-3.5 py-2.5 transition-colors",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--heritage-focus)]",
                selected
                  ? "font-medium text-[var(--heritage-filter-active)]"
                  : "font-normal text-[var(--heritage-filter-idle)] hover:text-[var(--heritage-charcoal)]",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="heritage-cat-underline"
                  className="absolute inset-x-2 -bottom-px z-[1] h-0.5 bg-[var(--heritage-gold)]"
                  transition={transitions.chrome}
                  aria-hidden
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{cat}</span>
            </button>
          )
        })}
      </div>
    </LayoutGroup>
  )
}

export function HeritageGallerySection() {
  const [active, setActive] = useState("All")
  const categories = useMemo(() => {
    const set = new Set(heritageItems.map((i: HeritageItem) => i.category))
    return Array.from(set)
  }, [])

  const count =
    active === "All"
      ? heritageItems.length
      : heritageItems.filter((i) => i.category === active).length

  return (
    <SectionShell id="collection" className="bg-[var(--heritage-ivory)]">
      <FadeUp>
        <SectionHeader
          eyebrow="The collection"
          title="Selected antiques & heritage objects"
          description="Institutional presentation of material culture — each piece with era, origin, and narrative. Filter by room or browse the full holdings."
          className="mb-10 md:mb-12"
          titleClassName="text-[var(--heritage-charcoal)]"
          descriptionClassName="text-[var(--heritage-label)]"
        />
      </FadeUp>

      {/* Toolbar: filters + count as one vertical stack (8-rhythm) */}
      <FadeUp delayMs={60}>
        <div className="mb-8 md:mb-10">
          <HeritageCategoryNav
            active={active}
            onChange={setActive}
            categories={categories}
          />
          <p
            className="nx-meta mt-4 text-[var(--heritage-meta)] md:mt-5"
            aria-atomic="true"
            aria-live="polite"
          >
            {active === "All" ? `${count} works` : `${count} works · ${active}`}
          </p>
        </div>
      </FadeUp>

      <MasonryGallery filterCategory={active === "All" ? null : active} />
    </SectionShell>
  )
}
