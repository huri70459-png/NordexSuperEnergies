# Nordex Super Energies — Enterprise Web Reengineering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the broken static dump into a six-route Next.js marketing product with Arctic Trust tokens, lead-gen form, and scoped cinematic motion under `F:\Projects\Ray-studio Creations\Nordex Super Energies` only.

**Architecture:** Typed content modules (`src/content/*`) compose RSC App Router pages. shadcn/ui + Tailwind v4 `@theme` tokens implement Arctic Trust. Client islands: form, tabs, Sheet, optional CSS-first motion. Form is an honest in-browser stub (no CRM, no `mailto:`). PR9 Figma frozen until brand decision; no public deploy until then.

**Tech Stack:** Next.js App Router (target 15.x+), React, TypeScript, Tailwind CSS v4, shadcn/ui (new-york / Radix), Zod, Lucide, Geist fonts, `next/image`. Optional `framer-motion` only if CSS cannot deliver a chapter effect.

**Spec:** `docs/superpowers/specs/2026-07-11-nordex-enterprise-reengineering-design.md` (v1.1.2)

**Scope gates:**
- **Execute now:** PR1–PR8 + PR10
- **Frozen:** PR9 (Figma), public production deploy, brand rename
- **Work only** under the project folder. Quote paths with spaces.

---

## File map (create / own)

| Path | Responsibility |
|------|----------------|
| `package.json`, `next.config.ts`, `tsconfig.json`, `components.json`, `.gitignore` | Scaffold / tooling |
| `src/app/globals.css` | Tailwind + Arctic Trust tokens (color, type, elevation, motion) |
| `src/app/layout.tsx` | Root shell: fonts, SkipLink, Header, Footer |
| `src/app/{page,turbines,services,company,sustainability,contact}/page.tsx` | Routes |
| `src/app/{not-found,error,robots,sitemap}.ts(x)` | Chrome + SEO stubs |
| `src/components/ui/*` | shadcn primitives only |
| `src/components/layout/*` | SiteHeader, SiteFooter, MobileNav, SkipLink |
| `src/components/marketing/*` | Hero, StatGrid, CtaBand (signature once on Home), tabs, cards, FAQ |
| `src/components/forms/ProjectInquiryForm.tsx` | Lead form client island |
| `src/components/motion/*` | CSS-first motion islands (dynamic import) |
| `src/content/*` | Typed modules + `types.ts` |
| `src/lib/utils.ts` | `cn()` |
| `src/lib/validations/inquiry.ts` | Zod schema |
| `src/lib/analytics.ts` | `track()` no-op / console.debug; no PII |
| `public/assets/*` | Hero + aerial only |
| `_legacy/source.html` | Archived HTML from misnamed `.css` (delete in PR10) |
| `src/lib/validations/inquiry.test.ts` | Schema + abuse helper unit tests |

---

## Task 1 — PR1: Scaffold Next + Tailwind v4 + shadcn + tokens

**Files:**
- Create: project scaffold files under project root
- Create: `src/app/globals.css`, `src/lib/utils.ts`, smoke page using Button/Card

- [ ] **Step 1: Scaffold from project root**

```powershell
Set-Location -LiteralPath "F:\Projects\Ray-studio Creations\Nordex Super Energies"
# Preserve docs/ and .superpowers/. Prefer create-next-app in place:
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```

If create-next-app refuses non-empty dir: scaffold into a temp subfolder then move app files up, **keeping** `docs/`, `.superpowers/`, legacy root assets.

Expected: `package.json`, `src/app/`, `next` starts.

- [ ] **Step 2: Init shadcn (Radix base, new-york)**

```powershell
npx shadcn@latest init -d --base radix
npx shadcn@latest add button card
```

- [ ] **Step 3: Fix fonts + write Arctic Trust tokens in `src/app/globals.css`**

Use `next/font/google` or Geist package; put **literal** font family names in `@theme inline` (never circular `var(--font-sans)` referencing itself).

Include at minimum:

```css
@import "tailwindcss";

@theme inline {
  --font-sans: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;

  --color-background: #f8fafc;
  --color-foreground: #0f172a;
  --color-card: #ffffff;
  --color-primary: #0f766e;
  --color-primary-foreground: #ffffff;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #475569;
  --color-accent: #ccfbf1;
  --color-border: #e2e8f0;
  --color-ring: #0f766e;
  --color-signature-bg: #0b3b36;
  --color-signature-foreground: #f0fdfa;

  --radius-lg: 0.75rem;
  --radius-md: 0.625rem;

  --shadow-sm: 0 1px 2px rgb(15 23 42 / 0.06);
  --shadow-md: 0 4px 12px rgb(15 23 42 / 0.08);
  --shadow-lg: 0 12px 32px rgb(15 23 42 / 0.12);

  --duration-instant: 100ms;
  --duration-fast: 180ms;
  --duration-base: 300ms;
  --duration-cinematic: 700ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Type scale utilities (or CSS variables for Display/H1–Small) per design § type scale — fluid `clamp()` between mobile and desktop.

- [ ] **Step 4: Ensure `cn()` exists**

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 5: Smoke render Button + Card on `src/app/page.tsx`**

- [ ] **Step 6: Verify build**

```powershell
npm run build
```

Expected: success, no font circular-ref warnings.

- [ ] **Step 7: Commit**

```powershell
git add -A
git commit -m "feat(pr1): scaffold Next, shadcn, Arctic Trust tokens"
```

**Acceptance:** `next build` clean; tokens for color/type/elevation/motion present in `globals.css`.

---

## Task 2 — PR2: Assets + content extraction (archive, do not delete legacy yet)

**Files:**
- Create: `public/assets/`, `_legacy/source.html`, `src/content/*`
- Create: `src/content/types.ts` and all content modules

- [ ] **Step 1: Magic-byte migrate assets**

```powershell
New-Item -ItemType Directory -Force -Path "public\assets","_legacy" | Out-Null
# HTML-as-.css → archive
Copy-Item -LiteralPath "index (2).css" -Destination "_legacy\source.html"
# JPEG-as-.html → aerial
Copy-Item -LiteralPath "index (2).html" -Destination "public\assets\wind_farm_aerial.jpg"
# Hero
Copy-Item -LiteralPath "wind_farm_hero.jpg" -Destination "public\assets\wind_farm_hero.jpg"
```

Do **not** delete `index (2).*` yet (PR10).

- [ ] **Step 2: Write `src/content/types.ts`**

```ts
export type PageMeta = {
  title: string
  description: string
  ogImage?: string
}

export type NavItem = { label: string; href: string }

export type Stat = {
  id: string
  value: string
  label: string
}

export type TurbineModel = {
  id: "n149" | "n163" | "n175"
  name: string
  ratedPowerKw: number
  rotorDiameterM: number
  sweptAreaM2: number
  iecClass: string
  features: { title: string; description: string }[]
}

export type Service = {
  id: string
  title: string
  summary: string
  icon: "building-2" | "map" | "wrench"
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type SiteConfig = {
  brandName: string
  tagline: string
  nav: NavItem[]
  footer: {
    columns: { title: string; links: NavItem[] }[]
    copyright: string
    legalLinks: NavItem[]
  }
  contact: { email: string; hq: string }
  defaultMeta: PageMeta
  siteUrl: string // placeholder until domain known
}
```

- [ ] **Step 3: Write `src/content/site.ts` with draft contact strings**

```ts
import type { SiteConfig } from "./types"

export const site: SiteConfig = {
  brandName: "Nordex Super Energies",
  tagline: "Enterprise wind energy systems",
  siteUrl: "https://nordex-super-energies.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Turbines", href: "/turbines" },
    { label: "Services", href: "/services" },
    { label: "Company", href: "/company" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Turbines", href: "/turbines" },
          { label: "Services", href: "/services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/company" },
          { label: "Sustainability", href: "/sustainability" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    copyright: "© 2026 NORDEX SUPER ENERGIES SE. All rights reserved.",
    legalLinks: [
      { label: "Legal Notice", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  contact: {
    email: "info@nordex-super-energies.com",
    hq: "Hamburg & Legal Register: Rostock, Germany",
  },
  defaultMeta: {
    title: "Nordex Super Energies",
    description:
      "Enterprise wind turbines and project services for utilities, IPPs, and EPCs.",
    ogImage: "/assets/wind_farm_hero.jpg",
  },
}
```

- [ ] **Step 4: Write `src/content/turbines.ts` with full legacy `specsData`**

```ts
import type { TurbineModel } from "./types"

export const turbines: TurbineModel[] = [
  {
    id: "n149",
    name: "N149",
    ratedPowerKw: 4500,
    rotorDiameterM: 149,
    sweptAreaM2: 17437,
    iecClass: "IEC S (Medium / High)",
    features: [],
  },
  {
    id: "n163",
    name: "N163",
    ratedPowerKw: 5700,
    rotorDiameterM: 163,
    sweptAreaM2: 20867,
    iecClass: "IEC S (Medium / Low)",
    features: [],
  },
  {
    id: "n175",
    name: "N175",
    ratedPowerKw: 6800,
    rotorDiameterM: 175,
    sweptAreaM2: 24053,
    iecClass: "IEC S (Low Wind)",
    features: [],
  },
]
```

Extract feature bullets / services / FAQ / sustainability / about copy from `_legacy/source.html` into the matching modules. Polish clarity only — **no invented specs**.

- [ ] **Step 5: Write remaining content modules**

- `company.ts` — stats: 40+, 4–7 MW, 380+, 30+ with exact labels from design
- `services.ts` — three services (turnkey / development / servicing) with Lucide icon names
- `sustainability.ts` — four pillars (recyclable blades, low-carbon concrete, hybrid wood-steel, net-zero 2030)
- `faq.ts` — questions from legacy
- `home.ts` — hero copy; primary CTA Contact, secondary Turbines (**invert legacy order**)
- `contact.ts` — form intro + re-export site contact

- [ ] **Step 6: Product media rule**

Do **not** reference missing `wind_turbine_product.jpg`. Prefer omit product diagram.

- [ ] **Step 7: Commit**

```powershell
git commit -m "feat(pr2): archive legacy HTML, migrate assets, typed content modules"
```

**Acceptance:** Turbine table matches all three models × four fields; site contact draft strings present; product image not 404ing.

---

## Task 3 — PR3: Shell + six routes + SEO stubs

**Files:**
- Create: layout components, six route pages (shell content OK), `not-found.tsx`, `error.tsx`, `robots.ts`, `sitemap.ts`
- Install: sheet, separator, button (already), badge as needed

```powershell
npx shadcn@latest add sheet separator
```

- [ ] **Step 1: `SkipLink`**

```tsx
// src/components/layout/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-40 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      Skip to main content
    </a>
  )
}
```

- [ ] **Step 2: `SiteHeader` + `MobileNav` (Sheet)**

- Desktop nav from `site.nav`
- CTA Button “Contact Us” → `/contact`
- Mobile: Sheet &lt; `md`, focus trap via Radix
- Sticky header `z-10`; scrolled state may use `shadow-md`

- [ ] **Step 3: `SiteFooter`**

- Nav columns + legalLinks stubs + copyright + email/HQ draft strings

- [ ] **Step 4: Wire `src/app/layout.tsx`**

```tsx
// pattern
<html lang="en" className={geistSans.variable}>
  <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
    <SkipLink />
    <SiteHeader />
    <main id="main">{children}</main>
    <SiteFooter />
  </body>
</html>
```

- [ ] **Step 5: Six routes with `metadata`**

Each page: one `h1`, short placeholder or real intro from content, export `metadata` from content modules.

- [ ] **Step 6: `robots.ts` + `sitemap.ts`**

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next"
import { site } from "@/content/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  }
}
```

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next"
import { site } from "@/content/site"

const paths = ["", "/turbines", "/services", "/company", "/sustainability", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.siteUrl}${path || "/"}`,
    lastModified: new Date(),
  }))
}
```

- [ ] **Step 7: Manual keyboard check** — Tab: skip → nav → CTA → footer. Touch targets ≥ 44px on primary controls.

- [ ] **Step 8: Commit**

```powershell
git commit -m "feat(pr3): shell, six routes, SEO stubs"
```

**Acceptance:** Skip link + landmarks; keyboard tab order sane; Legal/Privacy/Cookies stubs in footer.

---

## Task 4 — PR4: Contact form + analytics helper

**Files:**
- Create: `src/lib/validations/inquiry.ts`, `src/lib/analytics.ts`, `src/components/forms/ProjectInquiryForm.tsx`
- Create: `src/lib/validations/inquiry.test.ts` (or vitest/node assert)
- Install: `input textarea label alert` (+ optional form deps)

```powershell
npx shadcn@latest add input textarea label alert
npm install zod
```

- [ ] **Step 1: Zod schema**

```ts
// src/lib/validations/inquiry.ts
import { z } from "zod"

export const inquirySchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  capacityMw: z.number().min(10).max(500).multipleOf(10),
  message: z.string().min(20),
  company_website: z.string().max(0).optional().or(z.literal("")), // honeypot must be empty
})

export type InquiryInput = z.infer<typeof inquirySchema>

export const TIME_TRAP_MS = 3000

export function isTimeTrap(
  firstFocusAt: number | null,
  submitAt: number
): boolean {
  if (firstFocusAt == null) return true // no focus → treat as bot-ish
  return submitAt - firstFocusAt < TIME_TRAP_MS
}
```

- [ ] **Step 2: Unit tests for schema + time-trap**

```ts
// src/lib/validations/inquiry.test.ts
import { inquirySchema, isTimeTrap, TIME_TRAP_MS } from "./inquiry"

const valid = {
  fullName: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  capacityMw: 50,
  message: "We need a 50 MW proposal for coastal sites.",
  company_website: "",
}

console.assert(inquirySchema.safeParse(valid).success, "valid ok")
console.assert(
  !inquirySchema.safeParse({ ...valid, message: "too short" }).success,
  "message min 20"
)
console.assert(isTimeTrap(0, TIME_TRAP_MS - 1) === true, "trap under 3s")
console.assert(isTimeTrap(0, TIME_TRAP_MS + 1) === false, "pass over 3s")
console.log("inquiry tests passed")
```

Run:

```powershell
npx tsx src/lib/validations/inquiry.test.ts
```

Expected: `inquiry tests passed`

- [ ] **Step 3: Analytics helper (no PII)**

```ts
// src/lib/analytics.ts
type AllowedProps = {
  location?: "header" | "hero" | "turbines" | "services" | "signature"
  capacityMw?: number
  intent?: "technical" | "proposal"
  modelId?: "n149" | "n163" | "n175"
  blockedReason?: "honeypot" | "time_trap"
}

export type AnalyticsEvent =
  | "cta_click"
  | "form_submit_attempt"
  | "form_submit_success"
  | "form_submit_blocked"
  | "turbine_tab_change"

export function track(event: AnalyticsEvent, props: AllowedProps = {}) {
  // ponytail: Phase 1 console only — swap provider in Phase 2 without changing call sites
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, props)
  }
}
```

- [ ] **Step 4: `ProjectInquiryForm` client component**

Behavior checklist:
1. Controlled fields + honeypot (`company_website`) visually clipped, `tabindex={-1}`, `aria-hidden`, `autocomplete="off"`
2. On first focus of a real field, record `firstFocusAt = Date.now()`
3. On submit: `track("form_submit_attempt")`, set `pending` + `aria-busy`, validate with Zod
4. If honeypot non-empty OR `isTimeTrap`: show same success UI; `track("form_submit_blocked", { blockedReason })`; **never** `form_submit_success`
5. If valid: short artificial delay optional; success panel with **honest** copy:

```text
Thank you. Your details were checked in this browser only. This Phase 1 demo does not transmit inquiries to our team yet. When production intake is connected, a real confirmation path will replace this message.
```

6. Forbidden: `mailto:`, console.log of name/email/message, “transmitted / we received / specialists will contact”
7. Capacity range: step 10, default 50, `aria-valuetext={`${value} megawatts`}`

- [ ] **Step 5: Contact page composes form + HQ/email from content**

- [ ] **Step 6: Wire header CTA analytics**

`track("cta_click", { location: "header" })` on Contact Us.

- [ ] **Step 7: Commit**

```powershell
git commit -m "feat(pr4): inquiry form Zod, honeypot, time-trap, honest success, analytics"
```

**Acceptance:** Scripted abuse paths block; success never claims delivery; no mailto; no PII in track props.

---

## Task 5 — PR5: Home structure + signature CtaBand (motion stubs only)

**Files:**
- Create: `HeroCinematic`, `StatGrid` (teaser), services teaser, `CtaBand` signature variant
- Modify: `src/app/page.tsx` only consumer of signature band

- [ ] **Step 1: Hero**

- `next/image` `priority` for `/assets/wind_farm_hero.jpg`, explicit sizes, quality ~75–80
- Primary CTA → `/contact` (“Contact / Request proposal”)
- Secondary CTA → `/turbines` (“Our turbines”)
- **Do not** restore legacy CTA order

- [ ] **Step 2: Stats teaser + services teaser from content**

- [ ] **Step 3: Signature `CtaBand` once**

```tsx
// only imported from src/app/page.tsx
// uses bg-[var(--color-signature-bg)] text-[var(--color-signature-foreground)]
// CTA → /contact "Request project proposal"
// track cta_click location: "signature"
```

Invariant: no other page imports signature variant.

- [ ] **Step 4: Motion stubs only**

CSS classes / empty hooks for parallax & count-up; full cinematic polish is PR8. Under `prefers-reduced-motion`, stubs must be inert.

- [ ] **Step 5: Commit**

```powershell
git commit -m "feat(pr5): home hero, teasers, signature CtaBand once"
```

**Acceptance:** Signature band exactly once site-wide; CTAs inverted; reduced-motion safe stubs.

---

## Task 6 — PR6: Turbines + Services

**Files:**
- Create: `ProductModelTabs`, service cards
- Modify: `/turbines`, `/services` pages
- Install: `tabs badge`

```powershell
npx shadcn@latest add tabs badge
```

- [ ] **Step 1: Model tabs bound to `turbines` content**

Show power, rotor, swept area, IEC class for active model. Values must match content module (legacy `specsData`).

- [ ] **Step 2: Tab change analytics**

`track("turbine_tab_change", { modelId })`

- [ ] **Step 3: Tab crossfade uses `--duration-base` / `--ease-standard`**

- [ ] **Step 4: Services three cards + light CTA to `/contact`**

No dark/signature band on Services.

- [ ] **Step 5: Turbines light CTA** “Request technical data” → `/contact?intent=technical`

- [ ] **Step 6: Commit**

```powershell
git commit -m "feat(pr6): turbines specs tabs and services cards"
```

**Acceptance:** All three models full specs; no second dark band.

---

## Task 7 — PR7: Company + Sustainability + FAQ

**Files:**
- Create: full StatGrid, sustainability pillars section, FaqAccordion
- Install: `accordion`

```powershell
npx shadcn@latest add accordion
```

- [ ] **Step 1: Company page** — about paragraph from legacy + full stats (40+ / 4–7 MW / 380+ / 30+)

- [ ] **Step 2: Sustainability** — four pillars; **light** page only

- [ ] **Step 3: FAQ accordion on light surface** (Company and/or Home teaser) — never dark legacy banding

- [ ] **Step 4: Commit**

```powershell
git commit -m "feat(pr7): company stats, sustainability pillars, light FAQ"
```

**Acceptance:** No dark FAQ/footer; no invented claims.

---

## Task 8 — PR8: Motion + a11y + SEO polish

**Depends on:** PR4–PR7

**Files:**
- Create/polish: `src/components/motion/*` (dynamic import)
- Modify: Home hero media motion, count-up, View Transitions if supported
- Verify: form keyboard path, Lighthouse, contrast

- [ ] **Step 1: CSS-first cinematic polish**

- Hero slow scale / parallax only if reduced-motion is **not** set
- Count-up stats via Intersection Observer; disabled under reduced motion
- Prefer CSS; add `framer-motion` only if CSS fails a specific chapter — then dynamic import

- [ ] **Step 2: View Transitions progressive enhancement**

Silent no-op when unsupported.

- [ ] **Step 3: A11y audit**

- Focus-visible rings on buttons/inputs/nav
- Form labels + `aria-describedby` errors
- Capacity `aria-valuetext`
- Landmarks intact

- [ ] **Step 4: Performance**

- Confirm hero `priority` + sizes
- Dynamic-import motion islands so Home interactive JS stays under ~150 KB gzipped

- [ ] **Step 5: Lighthouse mobile (throttled)**

Targets: Perf ≥ 90, A11y ≥ 95, BP ≥ 95, SEO 100.

- [ ] **Step 6: Contrast re-check** on rendered pixels (primary teal, muted-foreground)

- [ ] **Step 7: Commit**

```powershell
git commit -m "feat(pr8): motion polish, a11y, SEO, performance budget"
```

**Acceptance:** Lighthouse thresholds; form keyboard path green; reduced-motion disables theater.

---

## Task 9 — PR9: Figma system mirror — **FROZEN**

Do **not** execute until user resolves final keep-vs-rename brand decision.

When unfrozen: generate tokens + Home (with signature CtaBand) / Turbines / Contact frames from built UI; code remains source of truth.

---

## Task 10 — PR10: Cleanup

**Depends on:** PR8

- [ ] **Step 1: Delete legacy dumps after re-extract confidence**

```powershell
Remove-Item -LiteralPath "index (2).css","index (2).html","wind_farm_hero.jpg" -ErrorAction SilentlyContinue
# optional: Remove-Item -Recurse -LiteralPath "_legacy"
```

- [ ] **Step 2: `.gitignore`**

```
node_modules
.next
.superpowers
.codebase-memory
.qodo
.env*
```

- [ ] **Step 3: README** — how to `npm run dev` / build; note Phase 1 form is stub; brand draft disclaimer

- [ ] **Step 4: Final `npm run build`**

- [ ] **Step 5: Commit**

```powershell
git commit -m "chore(pr10): remove legacy dumps, gitignore, README"
```

**Acceptance:** No `index (2).*` at root; build green.

---

## Self-review (plan vs spec)

| Spec requirement | Plan task |
|------------------|-----------|
| Next + Tailwind v4 + shadcn + tokens | Task 1 |
| Magic-byte asset migration + archive | Task 2 |
| Full `specsData` three models | Task 2 |
| Six routes + shell + SEO | Task 3 |
| Form Zod, honeypot, 3s focus trap, honest success, analytics | Task 4 |
| Home + signature CtaBand once | Task 5 |
| Turbines + Services | Task 6 |
| Company + Sustainability + FAQ light | Task 7 |
| Motion + a11y + Lighthouse | Task 8 |
| Figma | Task 9 frozen |
| Delete legacy | Task 10 |
| No invented claims / no mailto / no public deploy brand freeze | Gates in header |

**Placeholder scan:** No TBD implementation steps remaining for PR1–PR8/PR10.

**Type consistency:** `TurbineModel.id`, analytics enums, and form field names are consistent across tasks.

---

## Execution handoff

Plan complete and saved to:

`docs/superpowers/plans/2026-07-11-nordex-enterprise-reengineering.md`

**Two execution options:**

1. **Subagent-Driven (recommended)** — dispatch a fresh subagent per task, review between tasks  
2. **Inline Execution** — execute tasks in this session with checkpoints  

**Which approach?**
