"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeUp } from "@/components/motion/fade-up"
import { SectionShell } from "@/components/shared/section-shell"
import { homeCollectionTeaser } from "@/content/home"

export function CollectionSection() {
  const { eyebrow, title, description, href, cta, items } = homeCollectionTeaser

  return (
    <SectionShell id="collection" className="border-t border-border/60">
      <FadeUp>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="nx-eyebrow text-muted-foreground">{eyebrow}</p>
            <h2 className="nx-h2 mt-2 text-foreground">{title}</h2>
            <p className="nx-lead mt-3 text-muted-foreground">{description}</p>
          </div>
          <Link
            href={href}
            className="nx-touch inline-flex shrink-0 items-center text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {cta}
          </Link>
        </div>
      </FadeUp>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-4 md:gap-6">
        {items.map((item, i) => (
          <FadeUp key={item.title} delayMs={i * 70} as="article" variant="scale">
            <Link
              href={href}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="nx-media relative aspect-[3/4] overflow-hidden rounded-[var(--radius)] bg-muted">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {item.meta}
                </p>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}
