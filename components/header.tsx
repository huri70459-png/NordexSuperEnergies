"use client"

import { useState, useEffect, useId, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { BRAND, SITE_NAV } from "@/content/brand"

const navLinks = SITE_NAV

type HeaderProps = {
  /** overDark = white text until scroll (heroes). solid = always ink on glass. */
  variant?: "overDark" | "solid"
}

export function Header({ variant = "overDark" }: HeaderProps) {
  const pathname = usePathname()
  const menuId = useId()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isMenuOpen])

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen, closeMenu])

  const solid = variant === "solid" || isScrolled || isMenuOpen

  return (
    <>
      {/* Backdrop outside header stacking context so it always covers the page */}
      {isMenuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/45 md:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

      <header
        className={cn(
          "fixed z-50 w-full transition-[background,box-shadow,color] duration-300 ease-[var(--ease-out-soft)]",
          "left-0 right-0 top-0",
          "px-[max(0.75rem,var(--safe-left))] pr-[max(0.75rem,var(--safe-right))]",
          "pt-[max(0.5rem,var(--safe-top))]",
          "sm:left-1/2 sm:right-auto sm:w-[min(92%,56rem)] sm:-translate-x-1/2 sm:px-0 sm:pt-4",
        )}
      >
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-[var(--ease-out-soft)]",
            solid
              ? "rounded-2xl border border-border/60 bg-background/95 shadow-sm backdrop-blur-md sm:rounded-full"
              : "rounded-2xl border border-transparent bg-transparent sm:rounded-full",
            isMenuOpen && "rounded-2xl sm:rounded-full",
          )}
        >
          <div className="flex h-12 items-center justify-between gap-2 px-2 pl-3.5 sm:h-auto sm:gap-3 sm:px-2 sm:py-2 sm:pl-5">
            <Link
              href="/"
              className={cn(
                "inline-flex min-h-11 max-w-[9.5rem] items-center text-sm font-medium leading-tight tracking-tight transition-colors duration-300 sm:max-w-none sm:text-base",
                solid ? "text-foreground" : "text-white",
              )}
            >
              <span className="sm:hidden">{BRAND.shortName}</span>
              <span className="hidden sm:inline">{BRAND.name}</span>
            </Link>

            <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Primary">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "inline-flex min-h-11 items-center text-sm transition-colors",
                      solid
                        ? active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                        : active
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex lg:gap-3">
              <ThemeToggle solid={solid} />
              <Link
                href="/industrial"
                className={cn(
                  "nx-btn px-4 py-2 text-[11px]",
                  solid ? "nx-btn-solid" : "nx-btn-on-dark-solid",
                )}
              >
                Energy
              </Link>
            </div>

            <div className="flex items-center gap-0.5 md:hidden">
              <ThemeToggle solid={solid} />
              <button
                type="button"
                onClick={() => setIsMenuOpen((o) => !o)}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                  solid ? "text-foreground" : "text-white",
                )}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
              >
                {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
              </button>
            </div>
          </div>

          <div
            id={menuId}
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-soft)] md:hidden",
              isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
            aria-hidden={!isMenuOpen}
          >
            <div className="overflow-hidden">
              <nav
                className="max-h-[min(72dvh,30rem)] space-y-1 overflow-y-auto overscroll-contain border-t border-border px-3 py-4 pb-[max(1rem,var(--safe-bottom))]"
                aria-label="Mobile"
              >
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href || pathname.startsWith(`${link.href}/`)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex min-h-12 items-center rounded-xl px-3 text-base font-medium transition-colors",
                        active
                          ? "bg-secondary text-foreground"
                          : "text-foreground/90 active:bg-secondary/70",
                      )}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="mt-2 grid gap-2 pt-2">
                  <Link
                    href="/industrial"
                    className="nx-btn nx-btn-solid w-full"
                    onClick={closeMenu}
                  >
                    Energy portfolio
                  </Link>
                  <Link
                    href="/heritage"
                    className="nx-btn nx-btn-outline w-full"
                    onClick={closeMenu}
                  >
                    Antiques collection
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
