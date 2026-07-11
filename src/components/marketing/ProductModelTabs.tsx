"use client"

import { useState } from "react"

import type { TurbineModel } from "@/content/types"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { track } from "@/lib/analytics"
import { cn } from "@/lib/utils"

function formatNumber(n: number) {
  return n.toLocaleString("en-US")
}

function mwLabel(ratedPowerKw: number) {
  const mw = ratedPowerKw / 1000
  return Number.isInteger(mw) ? `${mw} MW` : `${mw.toFixed(1)} MW`
}

type ProductModelTabsProps = {
  models: TurbineModel[]
  className?: string
}

export function ProductModelTabs({ models, className }: ProductModelTabsProps) {
  const defaultId = models[0]?.id ?? "n149"
  const [activeId, setActiveId] = useState<TurbineModel["id"]>(defaultId)

  return (
    <Tabs
      value={activeId}
      onValueChange={(value) => {
        const modelId = value as TurbineModel["id"]
        setActiveId(modelId)
        track("turbine_tab_change", { modelId })
      }}
      className={cn("relative w-full gap-6", className)}
    >
      <TabsList
        variant="line"
        className="h-auto w-full flex-wrap justify-start gap-1 sm:w-fit"
      >
        {models.map((model) => (
          <TabsTrigger
            key={model.id}
            value={model.id}
            className="min-h-11 px-3 py-2 text-small data-active:text-primary"
          >
            {model.name} / {mwLabel(model.ratedPowerKw)}
          </TabsTrigger>
        ))}
      </TabsList>

      {models.map((model) => (
        <TabsContent
          key={model.id}
          value={model.id}
          forceMount
          className={cn(
            "mt-0 outline-none",
            "data-[state=inactive]:pointer-events-none data-[state=inactive]:absolute data-[state=inactive]:opacity-0",
            "data-[state=active]:relative data-[state=active]:opacity-100",
            "transition-opacity duration-[var(--duration-base)] ease-[var(--ease-standard)]"
          )}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <dl className="grid gap-3 sm:grid-cols-2">
              <SpecCell
                label="Rated power"
                value={`${formatNumber(model.ratedPowerKw)} kW`}
              />
              <SpecCell
                label="Rotor diameter"
                value={`${formatNumber(model.rotorDiameterM)} m`}
              />
              <SpecCell
                label="Swept area"
                value={`${formatNumber(model.sweptAreaM2)} m²`}
              />
              <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                <dt className="text-small text-muted-foreground">IEC class</dt>
                <dd className="mt-2">
                  <Badge variant="secondary" className="h-auto px-2.5 py-1">
                    {model.iecClass}
                  </Badge>
                </dd>
              </div>
            </dl>

            {model.features?.length ? (
              <ul className="grid gap-3">
                {model.features.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-xl bg-card p-4 ring-1 ring-foreground/10"
                  >
                    <p className="text-small font-semibold text-foreground">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-body text-muted-foreground">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
      <dt className="text-small text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-mono text-h3 text-foreground">{value}</dd>
    </div>
  )
}
