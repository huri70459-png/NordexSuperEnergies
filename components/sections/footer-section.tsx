"use client"

import Link from "next/link"
import { BRAND } from "@/content/brand"

/** Only real destinations — no placeholder # links. */
const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Antiques", href: "/heritage" },
    { label: "Energy", href: "/industrial" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/contact" },
  ],
  about: [
    { label: "About", href: "/#about" },
    { label: "Mission", href: "/#pillars" },
    { label: "Energy portfolio", href: "/industrial" },
    { label: "Collection", href: "/heritage" },
  ],
}

export function FooterSection() {
  return (
    <footer className="bg-background pb-[var(--safe-bottom)]">
      <div className="border-t border-border px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] py-12 sm:py-16 md:py-20">
        <div className="nx-container grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              className="nx-touch inline-flex items-center text-lg font-medium text-foreground"
            >
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {BRAND.description}
            </p>
            <div className="mt-5 flex max-w-sm flex-col gap-5">
              {BRAND.offices.map((office) => (
                <address
                  key={office.label}
                  className="not-italic text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground/90">
                    {office.label}
                  </span>
                  <span className="mt-1 block font-medium text-foreground">
                    {office.name}
                  </span>
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-foreground sm:mb-4">Explore</p>
            <ul className="space-y-0.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="nx-touch inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-foreground sm:mb-4">About</p>
            <ul className="space-y-0.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="nx-touch inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] py-5 sm:py-6">
        <div className="nx-container flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © 2026 {BRAND.name}. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground sm:text-right">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
