import Link from "next/link"

import { site } from "@/content/site"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-body font-semibold text-foreground">
              {site.brandName}
            </p>
            <p className="mt-2 text-small text-muted-foreground">
              {site.tagline}
            </p>
            <p className="mt-4 text-small text-muted-foreground">
              {site.contact.email}
            </p>
            <p className="mt-1 text-small text-muted-foreground">
              {site.contact.hq}
            </p>
          </div>

          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-small font-semibold text-foreground">
                {column.title}
              </p>
              <ul className="mt-3 space-y-1">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-small text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-small font-semibold text-foreground">Legal</p>
            <ul className="mt-3 space-y-1">
              {site.footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-small text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-small text-muted-foreground">
          {site.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
