import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  /** Constrain inner content width */
  containerClassName?: string
  /** Bleed full-bleed background while content stays aligned */
  as?: "section" | "div"
}

/**
 * Shared vertical rhythm + horizontal gutters.
 * Uses CSS tokens: --section-x, --section-y, --content-max
 */
export function SectionShell({
  id,
  children,
  className,
  containerClassName,
  as: Tag = "section",
}: SectionShellProps) {
  return (
    <Tag id={id} className={cn("nx-section", className)}>
      <div className={cn("nx-container", containerClassName)}>{children}</div>
    </Tag>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  eyebrowClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}) {
  return (
    <div className={cn("mb-12 max-w-3xl md:mb-16", className)}>
      {eyebrow ? (
        <p className={cn("nx-eyebrow mb-3", eyebrowClassName)}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("nx-h2", titleClassName)}>{title}</h2>
      {description ? (
        <p className={cn("nx-lead mt-4", descriptionClassName)}>{description}</p>
      ) : null}
    </div>
  )
}
