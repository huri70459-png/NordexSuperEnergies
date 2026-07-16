"use client"

import { useEffect, useRef } from "react"

type EnergyParticlesProps = {
  className?: string
  /** Desktop default; auto-scales down on phone/tablet and low-power. */
  particleCount?: number
}

function adaptiveCount(base: number) {
  if (typeof window === "undefined") return base
  const w = window.innerWidth
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  // Coarse performance budget by viewport
  let scale = 1
  if (w < 480) scale = 0.35
  else if (w < 768) scale = 0.5
  else if (w < 1024) scale = 0.7
  // High-DPR phones pay more per pixel — trim further
  if (dpr >= 2 && w < 768) scale *= 0.85
  // Save-Data / low end
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (conn?.saveData) scale *= 0.5
  return Math.max(12, Math.round(base * scale))
}

/**
 * Lightweight canvas particles for Industrial hero only.
 * Pauses under prefers-reduced-motion and when tab is hidden.
 * Particle count auto-tunes for mobile / tablet / desktop.
 */
export function EnergyParticles({ className, particleCount = 72 }: EnergyParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let raf = 0
    let running = true
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number }
    let particles: P[] = []
    let count = adaptiveCount(particleCount)

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      count = adaptiveCount(particleCount)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.15,
        a: Math.random() * 0.45 + 0.15,
      }))
    }

    const draw = () => {
      if (!running) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        grad.addColorStop(0, `rgba(52, 211, 153, ${p.a})`)
        grad.addColorStop(0.5, `rgba(56, 189, 248, ${p.a * 0.45})`)
        grad.addColorStop(1, "rgba(15, 23, 42, 0)")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      running = document.visibilityState === "visible"
      if (running) raf = requestAnimationFrame(draw)
      else cancelAnimationFrame(raf)
    }

    resize()
    draw()
    window.addEventListener("resize", resize, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [particleCount])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
