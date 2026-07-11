"use client"

import Link from "next/link"

import { track } from "@/lib/analytics"
import { Button } from "@/components/ui/button"

export function HeaderContactCta({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  return (
    <Button asChild className={className}>
      <Link
        href="/contact"
        onClick={() => {
          track("cta_click", { location: "header" })
          onNavigate?.()
        }}
      >
        Contact Us
      </Link>
    </Button>
  )
}
