"use client"

import Image from "next/image"
import { FadeUp } from "@/components/motion/fade-up"
import { homeAbout, homeStats } from "@/content/home"
import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 bg-background">
      <div className="nx-pad-x py-[var(--section-y)]">
        <div className="nx-container">
          <FadeUp>
            <p className="nx-eyebrow text-muted-foreground">{homeAbout.eyebrow}</p>
            <p className="mx-auto mt-6 max-w-4xl text-pretty text-xl leading-relaxed text-foreground sm:mt-8 sm:text-2xl md:text-3xl lg:text-[2.25rem] lg:leading-snug">
              {homeAbout.body}
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {homeStats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "border-border p-6 text-center sm:p-8",
              "border-b md:border-b-0",
              i % 2 === 0 && "border-r",
              "md:border-r",
              i === homeStats.length - 1 && "md:border-r-0",
              i >= 2 && "border-b-0",
            )}
          >
            <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              {stat.label}
            </p>
            <p className="text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src={homeAbout.image}
          alt={homeAbout.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
    </section>
  )
}
