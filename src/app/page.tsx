import type { Metadata } from "next"
import Link from "next/link"

import { home } from "@/content/home"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
}

export default function HomePage() {
  const { hero } = home

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">{hero.eyebrow}</p>
      <h1 className="mt-3 text-display text-foreground">{hero.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {hero.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="min-h-11">
          <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
        </Button>
        <Button asChild variant="outline" className="min-h-11">
          <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
        </Button>
      </div>
    </div>
  )
}
