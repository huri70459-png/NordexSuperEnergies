import type { Metadata } from "next"

import { servicesPage } from "@/content/services"

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">
        {servicesPage.eyebrow}
      </p>
      <h1 className="mt-3 text-h1 text-foreground">{servicesPage.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {servicesPage.intro}
      </p>
    </div>
  )
}
