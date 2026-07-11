import type { Metadata } from "next"
import { Building2Icon, MapIcon, WrenchIcon } from "lucide-react"

import { ContactCtaLink } from "@/components/marketing/ContactCtaLink"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { servicesPage } from "@/content/services"

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
}

const serviceIcons = {
  "building-2": Building2Icon,
  map: MapIcon,
  wrench: WrenchIcon,
} as const

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

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicesPage.items.map((service) => {
          const Icon = serviceIcons[service.icon]
          return (
            <li key={service.id} className="min-h-0">
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <CardTitle className="text-h3 font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-body">
                    {service.summary}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          )
        })}
      </ul>

      {/* Light CTA only — no signature/dark band on Services */}
      <div className="mt-16 border-t border-border pt-10">
        <p className="max-w-xl text-body text-muted-foreground">
          Planning a site or need EPC and long-term servicing scoped together?
        </p>
        <div className="mt-6">
          <ContactCtaLink
            href="/contact"
            label="Request project proposal"
            location="services"
            intent="proposal"
          />
        </div>
      </div>
    </div>
  )
}
