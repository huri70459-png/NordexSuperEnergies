import type { Metadata } from "next"

import { sustainability } from "@/content/sustainability"

export const metadata: Metadata = {
  title: sustainability.meta.title,
  description: sustainability.meta.description,
}

export default function SustainabilityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">
        {sustainability.eyebrow}
      </p>
      <h1 className="mt-3 text-h1 text-foreground">{sustainability.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {sustainability.intro}
      </p>
    </div>
  )
}
