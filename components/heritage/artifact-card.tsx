"use client"

import Image from "next/image"
import type { HeritageItem } from "@/content/heritage"
import { cn } from "@/lib/utils"

type ArtifactCardProps = {
  item: HeritageItem
  className?: string
  tall?: boolean
}

/**
 * Museum-label card: object first, provenance second, no product CTA language.
 */
export function ArtifactCard({ item, className, tall }: ArtifactCardProps) {
  return (
    <article
      id={item.id}
      className={cn(
        "group relative mb-[var(--heritage-gallery-gap)] break-inside-avoid lg:mb-[var(--heritage-gallery-gap-lg)]",
        className,
      )}
    >
      <div
        className={cn(
          "overflow-hidden border border-[var(--heritage-card-border)] bg-[var(--heritage-ivory)]",
          "transition-[border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
          "hover:border-[var(--heritage-gold)]/45 hover:shadow-[var(--card-shadow-hover)]",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-[var(--heritage-charcoal)]/[0.06]",
            tall ? "aspect-[3/4]" : "aspect-[4/5]",
          )}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            loading="lazy"
            quality={88}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--heritage-charcoal)]/35 to-transparent" />
        </div>

        {/* Museum label: category · era → title → body → origin rule */}
        <div className="border-t border-[var(--heritage-card-border)] px-5 py-5 md:px-6 md:py-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
            <span className="nx-meta text-[var(--heritage-bronze)]">
              {item.category}
            </span>
            <span className="text-xs tabular-nums tracking-wide text-[var(--heritage-meta)]">
              {item.era}
            </span>
          </div>

          <h3 className="font-display mt-3 text-xl leading-snug tracking-[-0.015em] text-[var(--heritage-charcoal)] md:mt-3.5 md:text-[1.35rem]">
            {item.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[var(--heritage-label)] md:mt-3 md:leading-[1.65]">
            {item.description}
          </p>

          <p className="nx-meta mt-4 border-t border-[var(--heritage-card-border)] pt-3 tracking-[0.14em] text-[var(--heritage-meta)]">
            {item.origin}
          </p>
        </div>
      </div>
    </article>
  )
}
