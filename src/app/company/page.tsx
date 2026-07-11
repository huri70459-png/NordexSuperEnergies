import type { Metadata } from "next"

import { company } from "@/content/company"

export const metadata: Metadata = {
  title: company.meta.title,
  description: company.meta.description,
}

export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">{company.eyebrow}</p>
      <h1 className="mt-3 text-h1 text-foreground">{company.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {company.about}
      </p>
    </div>
  )
}
