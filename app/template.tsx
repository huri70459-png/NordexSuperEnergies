"use client"

import { motion, useReducedMotion } from "framer-motion"
import { easeOutExpo } from "@/lib/motion"

/** Soft route enter for App Router navigation sync. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="w-full overflow-x-clip"
      initial={reduce ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.32, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}
