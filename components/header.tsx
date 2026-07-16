"use client"

import { useState, useEffect, useId, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { BRAND, SITE_NAV } from "@/content/brand"

const navLinks = SITE_NAV

const FOCUSABLE_SEL =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

type HeaderProps = {
  /** overDark = white text until scroll (heroes). solid = always ink on glass. */
  variant?: "overDark" | "solid"
}

export function Header({ variant = "overDark" }: HeaderProps) {
  const pathname = usePathname()
  const menuId = useId()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const wasMenuOpen = useRef(false)

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

  // Focus trap + Escape; restore focus to menu button on close
  useEffect(() => {
    if (isMenuOpen) {
      wasMenuOpen.current = true
      const panel = document.getElementById(menuId)
      const firstLink = panel?.querySelector<HTMLElement>("a[href]")
      // Move focus into the panel so keyboard users land in the menu
      requestAnimationFrame(() => firstLink?.focus())

      /** Mobile chrome only — fixed-header offsetParent is unreliable */
      const getFocusables = () => {
        const out: HTMLElement[] = []
        const mobileBar = menuButtonRef.current?.parentElement
        if (mobileBar) {
          out.push(...Array.from(mobileBar.querySelectorAll<HTMLElement>(FOCUSABLE_SEL)))
        }
        if (panel) {
          out.push(...Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SEL)))
        }
        return out.filter((el, i, arr) => arr.indexOf(el) === i)
      }

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault()
          closeMenu()
          return
        }
        if (e.key !== "Tab") return

        const focusables = getFocusables()
        if (focusables.length === 0) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const active = document.activeElement as HTMLElement | null
        const inTrap = active ? focusables.includes(active) : false

        if (e.shiftKey) {
          if (!inTrap || active === first) {
            e.preventDefault()
            last.focus()
          }
        } else if (!inTrap || active === last) {
          e.preventDefault()
          first.focus()
        }
      }

      document.addEventListener("keydown", onKeyDown)
      return () => document.removeEventListener("keydown", onKeyDown)
    }

    if (wasMenuOpen.current) {
      wasMenuOpen.current = false
      menuButtonRef.current?.focus()
    }
  }, [isMenuOpen, closeMenu, menuId])

  // Desktop overDark: white until scroll. Mobile always glass (bright hero sky).
  const solid = variant === "solid" || isScrolled || isMenuOpen

  return (
    <>
      {/* Scrim under sheet; div so only the X is named "Close menu" (M-03/M-14) */}
      {isMenuOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/45 md:hidden"
          aria-hidden
          onClick={closeMenu}
        />
      ) : null}

      <header
        ref={headerRef}
        className={cn(
          // pointer-events-none: empty fixed chrome must not block backdrop dismiss
          "pointer-events-none fixed z-50 w-full transition-[background,box-shadow,color] duration-300 ease-[var(--ease-out-soft)]",
          "left-0 right-0 top-0",
          "px-[max(0.75rem,var(--safe-left))] pr-[max(0.75rem,var(--safe-right))]",
          "pt-[max(0.5rem,var(--safe-top))]",
          "sm:left-1/2 sm:right-auto sm:w-[min(92%,56rem)] sm:-translate-x-1/2 sm:px-0 sm:pt-4",
        )}
      >
        <div
          className={cn(
            "pointer-events-auto overflow-hidden transition-all duration-300 ease-[var(--ease-out-soft)]",
            // M-01: max-md always solid glass (first paint, no FOUC) so white chrome never sits on bright sky
            solid
              ? "rounded-sm border border-border/60 bg-background/95 shadow-sm backdrop-blur-md"
              : "rounded-sm border border-transparent bg-transparent max-md:border-border/60 max-md:bg-background/95 max-md:shadow-sm max-md:backdrop-blur-md",
            isMenuOpen && "rounded-sm",
          )}
        >
          <div className="flex h-12 items-center justify-between gap-2 px-2 pl-3.5 sm:h-auto sm:gap-3 sm:px-2 sm:py-2 sm:pl-5">
            <Link
              href="/"
              className={cn(
                "inline-flex min-h-11 max-w-[9.5rem] items-center text-sm font-medium leading-tight tracking-tight transition-colors duration-300 sm:max-w-none sm:text-base",
                solid ? "text-foreground" : "text-white max-md:text-foreground",
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
                  "nx-btn px-4 py-2",
                  solid ? "nx-btn-solid" : "nx-btn-on-dark-solid",
                )}
              >
                Energy
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile bar always glass (M-01) → ink chrome */}
              <ThemeToggle solid />
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMenuOpen((o) => !o)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-foreground transition-colors"
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
            // ponytail: inert keeps closed drawer out of tab order without extra tabIndex plumbing
            {...(!isMenuOpen ? { inert: true } : {})}
          >
            <div className="overflow-hidden">
              {/* M-02: remaining viewport under bar; sticky CTAs so landscape never clips them */}
              <div className="flex max-h-[min(calc(100dvh-3.25rem-var(--safe-top)-var(--safe-bottom)),30rem)] flex-col border-t border-border">
                <nav
                  className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain px-3 py-3"
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
                          "flex min-h-12 items-center rounded-sm px-3 text-base font-medium transition-colors",
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
                </nav>
                <div className="grid shrink-0 gap-2 border-t border-border/60 bg-background/95 px-3 py-3 pb-[max(0.75rem,var(--safe-bottom))]">
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
