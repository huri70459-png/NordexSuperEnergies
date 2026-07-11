import type { Metadata } from "next"

import { turbinesPage } from "@/content/turbines"

export const metadata: Metadata = {
  title: turbinesPage.meta.title,
  description: turbinesPage.meta.description,
}

export default function TurbinesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">
        {turbinesPage.eyebrow}
      </p>
      <h1 className="mt-3 text-h1 text-foreground">{turbinesPage.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {turbinesPage.intro}
      </p>
    </div>
  )
}
