import type { Metadata } from "next"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { sustainability } from "@/content/sustainability"

export const metadata: Metadata = {
  title: sustainability.meta.title,
  description: sustainability.meta.description,
}

export default function SustainabilityPage() {
  return (
    // Light page only — no signature/dark band
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">
        {sustainability.eyebrow}
      </p>
      <h1 className="mt-3 text-h1 text-foreground">{sustainability.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {sustainability.intro}
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {sustainability.pillars.map((pillar) => (
          <li key={pillar.id} className="min-h-0">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-h3 font-semibold">
                  {pillar.title}
                </CardTitle>
                <CardDescription className="text-body">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
