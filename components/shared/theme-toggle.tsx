"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
  solid?: boolean
}

export function ThemeToggle({ className, solid }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <span
        className={cn("inline-flex h-9 w-9 items-center justify-center", className)}
        aria-hidden
      />
    )
  }

  const isDark = (resolvedTheme ?? theme) === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "nx-touch inline-flex items-center justify-center rounded-full transition-colors",
        solid
          ? "text-foreground hover:bg-secondary"
          : "text-white hover:bg-white/10",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
