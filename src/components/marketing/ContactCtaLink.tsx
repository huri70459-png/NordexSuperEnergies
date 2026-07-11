"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { track } from "@/lib/analytics"

type ContactCtaLinkProps = {
  href: string
  label: string
  location: "turbines" | "services"
  intent?: "technical" | "proposal"
  variant?: "default" | "outline"
}

export function ContactCtaLink({
  href,
  label,
  location,
  intent,
  variant = "outline",
}: ContactCtaLinkProps) {
  return (
    <Button asChild variant={variant} size="lg" className="min-h-11">
      <Link
        href={href}
        onClick={() => track("cta_click", { location, intent })}
      >
        {label}
      </Link>
    </Button>
  )
}
