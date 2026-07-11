"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { track } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type HeroCinematicProps = {
  eyebrow: string
  title: string
  summary: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  image: { src: string; alt: string }
  className?: string
}

export function HeroCinematic({
  eyebrow,
  title,
  summary,
  primaryCta,
  secondaryCta,
  image,
  className,
}: HeroCinematicProps) {
  return (
    <section
      aria-labelledby="home-hero-title"
      className={cn(
        // motion-hero-media: PR8 parallax/scale hook — inert stub for now
        "relative overflow-hidden border-b border-border bg-background",
        className
      )}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <div className="motion-hero-copy relative z-10 max-w-xl">
          <p className="text-small font-medium text-primary">{eyebrow}</p>
          <h1
            id="home-hero-title"
            className="mt-3 text-display text-foreground"
          >
            {title}
          </h1>
          <p className="mt-6 text-body text-muted-foreground">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="min-h-11">
              <Link
                href={primaryCta.href}
                onClick={() => track("cta_click", { location: "hero" })}
              >
                {primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="outline" className="min-h-11">
              <Link
                href={secondaryCta.href}
                onClick={() => track("cta_click", { location: "hero" })}
              >
                {secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="motion-hero-media relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted shadow-md ring-1 ring-foreground/10 sm:aspect-[16/10] lg:aspect-square">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={80}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
