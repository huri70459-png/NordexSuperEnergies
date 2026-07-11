import Link from "next/link"
import { Building2Icon, MapIcon, WrenchIcon } from "lucide-react"

import type { Service } from "@/content/types"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const serviceIcons = {
  "building-2": Building2Icon,
  map: MapIcon,
  wrench: WrenchIcon,
} as const

type ServicesTeaserProps = {
  services: Service[]
  className?: string
  eyebrow?: string
  title?: string
  summary?: string
}

export function ServicesTeaser({
  services,
  className,
  eyebrow = "Services",
  title = "Project lifecycle support",
  summary = "From development and turnkey delivery to global after-sales servicing.",
}: ServicesTeaserProps) {
  return (
    <section
      aria-labelledby="services-teaser-title"
      className={cn("border-b border-border bg-background", className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-small font-medium text-primary">{eyebrow}</p>
            <h2
              id="services-teaser-title"
              className="mt-3 text-h2 text-foreground"
            >
              {title}
            </h2>
            <p className="mt-3 text-body text-muted-foreground">{summary}</p>
          </div>
          <Link
            href="/services"
            className="text-small font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            View all services
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <li key={service.id} className="motion-reveal min-h-0">
                <Link
                  href="/services"
                  className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <Card className="h-full transition-colors hover:bg-muted/40">
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
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
