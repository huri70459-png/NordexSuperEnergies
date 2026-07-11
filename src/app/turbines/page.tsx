import type { Metadata } from "next"

import { ContactCtaLink } from "@/components/marketing/ContactCtaLink"
import { ProductModelTabs } from "@/components/marketing/ProductModelTabs"
import { turbines, turbinesPage } from "@/content/turbines"

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

      <div className="mt-12">
        <h2 className="text-h2 text-foreground">{turbinesPage.platformTitle}</h2>
        <p className="mt-3 max-w-2xl text-body text-muted-foreground">
          {turbinesPage.platformSummary}
        </p>
        <div className="mt-8">
          <ProductModelTabs models={turbines} />
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <p className="max-w-xl text-body text-muted-foreground">
          Need datasheets, site-class guidance, or a model comparison for your
          wind regime?
        </p>
        <div className="mt-6">
          <ContactCtaLink
            href="/contact?intent=technical"
            label={turbinesPage.cta.label}
            location="turbines"
            intent="technical"
          />
        </div>
      </div>
    </div>
  )
}
