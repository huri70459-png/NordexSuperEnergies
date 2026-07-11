import Link from "next/link"

import { site } from "@/content/site"
import { HeaderContactCta } from "@/components/layout/HeaderContactCta"
import { MobileNav } from "@/components/layout/MobileNav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-body font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {site.brandName}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center rounded-md px-3 text-small font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <HeaderContactCta className="hidden min-h-11 md:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
