# Nordex Super Energies — Enterprise Web Reengineering Design

**Status:** v1.1 — Design-critique pass applied; pending user re-approval before implementation plan
**Date:** 2026-07-11 (revised)
**Scope root:** `F:\Projects\Ray-studio Creations\Nordex Super Energies`
**Authoring mode:** Approach 1 — Typed content modules + Next.js App Router

> **What changed in this revision** — a structured design critique (usability / hierarchy / consistency / accessibility) was run against v1. Nine gaps were found and closed: brand-name collision risk, missing type scale, missing motion tokens, missing elevation/z-index scale, unverified color contrast, missing form abuse protection, missing performance budget, missing browser support matrix, and an unresolved light/dark section-banding inconsistency inherited from the legacy page. Every other v1 decision (stack, IA, CTAs, fonts, PR plan) is unchanged and still locked. Diffs are marked **[NEW]**.

---

## 1. Problem statement

The project currently is a broken static dump:

| File | Reality |
|------|---------|
| `index (2).css` | Full HTML marketing page (misnamed) |
| `index (2).html` | JPEG image (misnamed) |
| `wind_farm_hero.jpg` | Hero photo (loose at root) |
| `index.css` | Missing — page is unstyled if opened as intended |

There is no design system, no multi-route product structure, no accessible component library, and no reliable asset pipeline. The business goal is an **enterprise-grade multi-route marketing product** comparable in craft to Apple / Microsoft / Android platform marketing surfaces: tokens, a11y, deliberate motion, lead conversion, and a Figma system mirror.

**[NEW] Naming note:** "Nordex" is also the name of an existing, publicly traded German wind turbine manufacturer (Nordex SE) operating in the same product category (onshore turbines, 4–7 MW class). This spec proceeds using the client-supplied name as given, but see **Open Question #1** — confirm intent before Figma/brand assets are produced, since renaming later is cheap now and expensive after launch collateral exists.

---

## 2. Goals and non-goals

### Goals (Phase 1)

1. **Ship a Next.js App Router product site** under the project folder only.
2. **Six routes:** Home, Turbines, Services, Company, Sustainability, Contact.
3. **Arctic Trust** visual system (light, institutional, deep teal) via Tailwind v4 tokens + shadcn/ui.
4. **Cinematic storytelling motion** on flagship surfaces (Home, Turbines), quiet chrome elsewhere.
5. **Primary job: qualified project leads** — persistent Contact CTA + full inquiry form UX.
6. **Polish existing copy** into typed content modules (not invent unvalidated technical claims).
7. **Figma design system mirror** after UI stabilizes (tokens + Home / Turbines / Contact frames).
8. **Fix legacy structure** — correct filenames, `public/assets/`, remove obsolete roots.

### Non-goals (Phase 1)

- Headless CMS (Sanity, etc.)
- CRM / email provider / real form API
- i18n / multi-locale
- Auth / customer portal
- Hyperframes promo film render (Phase 2 asset; motion principles may inform web)
- Android/iOS native apps
- Full analytics platform (Phase 1 defines an *event taxonomy* only — wiring a provider is Phase 2)

---

## 3. Key decisions

| Decision | Choice | Rejected alternative | Why |
|----------|--------|----------------------|-----|
| Product form | Next.js + React + Tailwind v4 + shadcn | Static zero-build HTML/CSS only | Enterprise multi-route product needs components, tokens, a11y primitives |
| Information architecture | Multi-route product site | Cinematic one-pager | SEO, growth room, Microsoft-style corporate product feel |
| Visual language | **Arctic Trust** (light institutional) | Midnight Engineering; Kinetic Horizon | Boardroom trust + content-first marketing; still supports teal brand |
| Motion | **Cinematic storytelling** | Quiet-only; measured-only | User-selected; scoped to flagship chapters so chrome stays calm |
| Primary job | **Qualified project leads** | Tech-proof first; brand-story first; balanced | Conversion is north star; other pages support trust |
| Content | **Polish existing** | Full rewrite; placeholders | Existing draft has product substance; elevate for funnel |
| Phase 1 scope | **Web + Figma system** | Web only; full suite + Hyperframes film | Design system claim without diluting web polish |
| Implementation approach | **Typed content modules + App Router** | MDX-first; CMS day one | Type-safe, fast, CMS-ready structure without CMS ops |
| Form backend | Client validation + success UX + stub | Real CRM day one | YAGNI; UI must not depend on provider |
| **[NEW] Section rhythm** | **One deliberate deep-teal "signature" band** (Sustainability or a CTA band), everything else light | Legacy's alternating light/dark banding (dark FAQ, dark footer) carried forward as-is | Legacy banding wasn't a decision, it was default template behavior. Arctic Trust has no dark surface tokens defined — introducing one only where it earns its weight (a single high-conviction moment) keeps "institutional" intact instead of reintroducing "eco AI landing" energy across the whole page |
| **[NEW] Form abuse protection** | Honeypot field + minimum-time-to-submit heuristic, client-side only | No protection (ship stub as-is) | Zero new deps, zero backend, closes the one publicly-writable surface on a site with no CRM/rate-limit yet |

---

## 4. Users and success criteria

### Primary users

1. **Utility / IPP / EPC decision-makers** — evaluate turbines and services, request a proposal.
2. **Technical evaluators** — compare models (N149 / N163 / N175), grid and COE claims.
3. **Brand / partnership reviewers** — company credibility and sustainability posture.

### Success criteria (Phase 1 done)

- [ ] `npm run build` succeeds; no console errors on primary paths
- [ ] All six routes render with shared shell and correct SEO metadata
- [ ] Lead form validates (Zod), shows errors, shows pending state, shows success state
- [ ] Keyboard: skip link → nav → contact → submit success
- [ ] `prefers-reduced-motion: reduce` disables parallax / pinned / count-up theater
- [ ] Legacy misnamed files removed; assets only under `public/assets/`
- [ ] Figma file contains tokens + three key frames (Home, Turbines, Contact)
- [ ] Visual identity is Arctic Trust (light, teal, institutional), not generic "eco AI landing"
- [ ] **[NEW]** Body-copy contrast re-verified on rendered (not just spec'd) pixels ≥ 4.5:1
- [ ] **[NEW]** Lighthouse (mobile, throttled): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100
- [ ] **[NEW]** Hero LCP element (image or text) renders < 2.5s on simulated 4G
- [ ] **[NEW]** Form honeypot + time-trap verified with a scripted fast-submit test

---

## 5. Architecture

### 5.1 Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router), TypeScript, React Server Components by default |
| Styling | Tailwind CSS v4, CSS-first `@theme` / `@theme inline` tokens |
| Components | shadcn/ui (`new-york`, Radix base), `npx shadcn@latest init -d --base radix` |
| Validation | Zod (+ optional react-hook-form if form complexity warrants) |
| Icons | Lucide (`h-4 w-4` / `h-5 w-5` consistent) |
| Fonts | **Geist Sans** (UI/body/display) + **Geist Mono** (metrics/specs). Literal family names in `@theme inline` (never circular `var(--font-sans)`). Fallback only if install fails: Inter + JetBrains Mono |
| Motion | CSS + View Transitions + light Framer Motion only where needed for cinematic chapters |
| Content | Typed TS modules in `src/content/*` |
| Images | `next/image` everywhere; no raw `<img>` for content images |
| Design handoff | Figma generate after UI (Phase 1 end) |

### 5.2 Target directory layout

```text
Nordex Super Energies/
  package.json
  next.config.ts
  tsconfig.json
  components.json
  .gitignore
  public/
    assets/
      wind_farm_hero.jpg
      wind_farm_aerial.jpg    # from misnamed index (2).html JPEG
      # product image: placeholder or derived asset if missing
  src/
    app/
      layout.tsx
      page.tsx                 # Home
      globals.css              # @import "tailwindcss"; @theme tokens
      turbines/page.tsx
      services/page.tsx
      company/page.tsx
      sustainability/page.tsx
      contact/page.tsx
      not-found.tsx             # [NEW] 404
      error.tsx                 # [NEW] route error boundary
    components/
      ui/                      # shadcn primitives only
      layout/                  # SiteHeader, SiteFooter, MobileNav, SkipLink
      marketing/               # HeroCinematic, StatGrid, SectionIntro, …
      forms/                   # ProjectInquiryForm
      motion/                  # ScrollChapter, ParallaxMedia, CountUp, PageTransition
    content/
      site.ts
      home.ts
      turbines.ts
      services.ts
      company.ts
      sustainability.ts
      contact.ts
      faq.ts
      types.ts
    lib/
      utils.ts                 # cn()
      validations/inquiry.ts
      analytics.ts              # [NEW] typed event-fire helper (console-only Phase 1)
  docs/
    superpowers/specs/         # this document
  .superpowers/                # brainstorm session (gitignore)
```

### 5.3 Runtime shape

```text
Browser
  └── Next.js App Router
        ├── RSC pages compose content modules
        ├── Client islands: form, tabs, cinematic motion, mobile sheet
        └── Static assets from /public/assets
```

No server actions required for Phase 1 form submit (stub). Future: `POST /api/inquiry` without redesigning form fields.

### 5.4 Routing and funnel

| Route | Purpose | Funnel role |
|-------|---------|-------------|
| `/` | Cinematic brand + proof teaser | Attention → soft CTA |
| `/turbines` | Models, specs, features | Technical proof → "Request technical data" |
| `/services` | EPC, development, O&M | Trust → proposal CTA |
| `/company` | Stats, history, footprint | Credibility |
| `/sustainability` | Circular design, net-zero story | RFP / ESG buyers |
| `/contact` | **Primary conversion** | Inquiry form |

**Global:** SiteHeader CTA always → `/contact`. Footer mirrors nav + legal placeholders.

### 5.5 **[NEW] Performance budget

| Metric | Target | Lever |
|---|---|---|
| LCP | < 2.5s (simulated 4G, mobile) | `next/image priority` on hero; AVIF/WebP; explicit width/height to avoid CLS |
| Total hero image weight | < 180KB served (down from raw 468KB source JPEG) | Next.js image pipeline, quality 75–80, responsive `sizes` |
| JS shipped to client (Home route) | < 150KB gzipped for interactive islands | Server Components by default; motion/tabs/form are the only client bundles |
| CLS | < 0.1 | Reserve space for hero media, stat cards, and any lazy sections before they load |
| Font loading | No FOIT | `next/font` with Geist, `display: swap` |

---

## 6. Design system (Arctic Trust)

### 6.1 Token hierarchy

```text
Brand (abstract) → Semantic (purpose) → Component (shadcn maps semantic)
```

Use **OKLCH** for semantic colors where practical; hex below are intent anchors for Figma/docs.

| Token | Intent | Anchor |
|-------|--------|--------|
| `--color-background` | Page | `#f8fafc` / oklch light slate |
| `--color-foreground` | Primary text | `#0f172a` |
| `--color-card` | Surfaces | `#ffffff` |
| `--color-primary` | Brand actions | `#0f766e` (teal-700) |
| `--color-primary-foreground` | On primary | `#ffffff` |
| `--color-muted` | Subtle fills | `#f1f5f9` |
| `--color-muted-foreground` | Secondary text | `#475569` (slate-600 — **[NEW]** upgraded from slate-500; see 6.5) |
| `--color-accent` | Soft brand wash | `#ccfbf1` / teal-100 |
| `--color-border` | Hairlines | `#e2e8f0` |
| `--color-ring` | Focus | primary-aligned |
| `--radius` | Institutional | `0.625rem`–`0.75rem` |
| **[NEW]** `--color-signature-bg` | The one deep-teal band (see 3, Section rhythm) | `#0b3b36` (teal-950-ish, custom) |
| **[NEW]** `--color-signature-foreground` | Text on signature band | `#f0fdfa` |

**Rules:**

- Foundational surfaces use tokens (`bg-background`, `bg-card`, `text-muted-foreground`) — no ad-hoc palette sprawl.
- One accent family (teal). No rainbow gradients on chrome.
- Density: comfortable on marketing pages (`gap-6` / `p-6` / `text-sm`–`base`).
- Specs tables: tabular nums + mono for unit values where helpful.
- **[NEW]** The signature dark band (6.6) is the *only* place `--color-signature-bg` is used. It never appears twice in the same viewport scroll.

### 6.2 shadcn primitives (Phase 1 install set)

```bash
npx shadcn@latest init -d --base radix
npx shadcn@latest add button card input textarea label tabs accordion sheet separator badge skeleton alert
```

| Primitive | Usage |
|-----------|--------|
| Button | Primary/secondary CTAs |
| Card | Service cards, stat shells, form container |
| Input / Textarea / Label | Inquiry form |
| Tabs | Turbine models |
| Accordion | FAQ |
| Sheet | Mobile navigation |
| Separator | Header / footer structure |
| Badge | Tags, IEC class chips |
| Skeleton | Optional loading polish |
| Alert | Form / page-level messages |

**Composition anti-patterns (forbidden):** raw `button`/`input` when primitives exist; nested cards thrice deep; glassmorphism on every surface; Dialog for destructive (N/A Phase 1).

### 6.3 Component layers

1. **`ui/*`** — shadcn only, lightly themed via tokens
2. **`layout/*`** — SiteHeader, SiteFooter, MobileNav (Sheet), SkipLink
3. **`marketing/*`** — HeroCinematic, StatGrid, SectionIntro, ProductModelTabs, ServiceCards, FaqAccordion, CtaBand, TrustStrip
4. **`forms/*`** — ProjectInquiryForm
5. **`motion/*`** — ScrollChapter, ParallaxMedia, CountUp, RouteTransition

### 6.4 **[NEW] Type scale

Geist Sans unless noted. All sizes fluid (`clamp()`) between the mobile and desktop values shown.

| Level | Mobile | Desktop | Line-height | Tracking | Weight | Use |
|---|---|---|---|---|---|---|
| Display | 2.25rem / 36px | 4rem / 64px | 1.05 | -0.02em | 600 | Home hero H1 only |
| H1 | 1.875rem / 30px | 2.75rem / 44px | 1.1 | -0.01em | 600 | Page titles |
| H2 | 1.5rem / 24px | 2rem / 32px | 1.2 | -0.01em | 600 | Section headers |
| H3 | 1.25rem / 20px | 1.5rem / 24px | 1.3 | 0 | 600 | Card/subsection titles |
| Body | 1rem / 16px | 1.0625rem / 17px | 1.6 | 0 | 400 | Paragraph copy |
| Small | 0.875rem / 14px | 0.875rem / 14px | 1.5 | 0 | 400 | Labels, captions, footer |
| Mono (specs) | 0.875rem / 14px | 0.9375rem / 15px | 1.4 | 0 | 500 | Geist Mono — spec tables, stat values |

Max line length: `65ch` for body paragraphs; specs tables exempt.

### 6.5 **[NEW] Color contrast verification

Computed against WCAG 2.2 relative luminance (not eyeballed):

| Pair | Ratio | Result |
|---|---|---|
| `--color-primary` `#0f766e` on `--color-card` `#ffffff` | **5.48 : 1** | Passes AA normal text with margin. Do not lighten this value. |
| `--color-muted-foreground` on `--color-background` (old: slate-500 `#64748b`) | 4.55 : 1 | Passed, but no margin — **upgraded to slate-600 `#475569` (6.85:1)** for safety on real anti-aliased text |
| `--color-signature-foreground` `#f0fdfa` on `--color-signature-bg` `#0b3b36` | ~13.8 : 1 | Passes AAA |

Re-verify all three once fonts and final hex/oklch values are rendered — spec values assume sRGB hex, not final OKLCH interpolation, which can drift slightly.

### 6.6 **[NEW] Elevation & layering

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgb(15 23 42 / 0.06)` | Cards at rest |
| `--shadow-md` | `0 4px 12px rgb(15 23 42 / 0.08)` | Cards on hover, header once scrolled |
| `--shadow-lg` | `0 12px 32px rgb(15 23 42 / 0.12)` | Sheet, popovers, the signature band's content card |

| z-index | Layer |
|---|---|
| 0 | Page content |
| 10 | Sticky header |
| 20 | Mobile Sheet overlay |
| 30 | Toasts / Alert (if global) |
| 40 | Skip link (on focus only) |

### 6.7 **[NEW] Component states

Minimum required interactive states — not just shadcn defaults, explicitly verified against Arctic Trust tokens:

| Component | Default | Hover | Focus-visible | Active | Disabled |
|---|---|---|---|---|---|
| Button (primary) | `bg-primary` | `bg-primary/90` + `shadow-md` | 2px `--color-ring` offset ring | `bg-primary/85` scale-[0.98] | `opacity-50 pointer-events-none` |
| Input/Textarea | `border-border` | — | `border-primary` + ring | — | `bg-muted opacity-60` |
| Nav link | `text-foreground` | `text-primary` | ring on link box | — | n/a |

### 6.8 **[NEW] Motion tokens

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 100ms | Focus rings, active press |
| `--duration-fast` | 180ms | Button/link hover, tab switch |
| `--duration-base` | 300ms | Sheet open/close, card reveal |
| `--duration-cinematic` | 600–900ms | Hero parallax settle, chapter reveal |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default UI motion |
| `--ease-emphasized` | `cubic-bezier(0.2, 0, 0, 1)` | Cinematic chapter entrances only |

All tokens collapse to `transition: none` / instant opacity swap under `prefers-reduced-motion: reduce` — no exceptions, including the signature band's entrance.

---

## 7. Content model

Content is **data, not pages**. Pages compose modules.

### 7.1 Types (conceptual)

```ts
// src/content/types.ts (illustrative)
export type PageMeta = {
  title: string
  description: string
  ogImage?: string
}

export type NavItem = { label: string; href: string }

export type Stat = {
  id: string
  value: string // "40+", "4-7 MW"
  label: string
}

export type TurbineModel = {
  id: string // "n149" | "n163" | "n175"
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
  // emoji icons from legacy replaced with Lucide names
  icon: "building-2" | "map" | "wrench" // etc.
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
  footer: { columns: { title: string; links: NavItem[] }[] }
  contact: { email: string; hq: string }
  defaultMeta: PageMeta
}
```

### 7.2 Source content mapping (legacy → modules)

Extract from misnamed HTML (`index (2).css`):

| Legacy section | Module / route |
|----------------|----------------|
| Hero | `home.ts` → `/` |
| Stats (40+, 4-7 MW, 380+, 30+) | `company.ts` + home teaser |
| Product tabs N149/N163/N175 | `turbines.ts` → `/turbines` |
| Services (turnkey, development, servicing) | `services.ts` |
| Sustainability | `sustainability.ts` |
| FAQ | `faq.ts` (shared; home and/or company) |
| Contact form + HQ/email | `contact.ts` + site config |

**Copy policy:** polish clarity and lead-gen CTAs; do not invent certifications, MW installed totals, or legal entities beyond draft text. Brand name treated as client fiction unless legal assets supplied.

### 7.3 **[NEW] Preserved legacy data (turbine specs)

The legacy HTML only wires N149's values through the DOM by default (tab-switch JS swaps them client-side); N163/N175 numeric detail beyond headline power rating isn't present in the source and must not be invented. Carry forward exactly what exists, mark the rest `TBD` in `turbines.ts` rather than guessing:

| Model | Rated power | Rotor diameter | Swept area | IEC class | Source |
|---|---|---|---|---|---|
| N149 | 4,500 kW | 149 m | 17,437 m² | IEC S (Medium/High) | Fully specified in legacy markup |
| N163 | 5,700 kW | 163 m | *TBD — not in legacy source* | *TBD* | Headline power only |
| N175 | 6,800 kW | 175 m | *TBD — not in legacy source* | *TBD* | Headline power only |

`turbines.ts` should type the missing fields as optional rather than backfill plausible-looking numbers.

### 7.4 **[NEW] Stats & sustainability copy (preserved verbatim intent, for `company.ts` / `sustainability.ts`)

| Stat | Value | Label |
|---|---|---|
| Experience | 40+ | Years of Technology Experience |
| Power class | 4–7 MW | Turbine Power Class Portfolio |
| Service points | 380+ | Global After-Sales Service Points |
| Countries | 30+ | Active Operational Countries |

Sustainability pillars to carry into `sustainability.ts`: circular/recyclable rotor blade R&D, low-carbon concrete tower formulations, hybrid wood-steel assemblies, net-zero manufacturing target (nacelle + tower fabrication sites) by 2030.

---

## 8. Lead form (conversion)

### Fields

| Field | Type | Rules |
|-------|------|--------|
| Full name | text | required, min 2 |
| Email | email | required, valid email |
| Company | text | required |
| Planned capacity | range 10–500 MW, step 10 | required, default 50 |
| Message | textarea | required, min length ~20 |
| **[NEW]** Honeypot (`company_website`) | text, visually hidden, `tabindex="-1"`, `autocomplete="off"` | must be empty on submit |

### Behavior

1. Client Zod schema in `src/lib/validations/inquiry.ts`
2. Inline field errors; focus management on first error
3. **[NEW]** Submit button enters a `pending` state (spinner + `aria-busy`) immediately on click, before the stub "network" delay resolves
4. Submit → success panel (replace or overlay form)
5. Phase 1 submit handler: **stub** (console / optional `mailto:`)
6. **[NEW]** Reject silently-but-successfully (fake success UI, no console log) if honeypot is filled, or if submit happens < 1.5s after the form entered the viewport (time-trap) — bot heuristics, not user-facing friction
7. `// ponytail: no CRM — upgrade path: POST /api/inquiry → provider`

### CTAs

- Header: "Contact Us" → `/contact`
- Home hero: primary **Contact / Request proposal** → `/contact`; secondary **Our turbines** → `/turbines`
- Turbines: "Request technical data" → `/contact` (optional query `?intent=technical`)
- Services / CtaBand: "Request project proposal" → `/contact`

---

## 9. Motion system (cinematic, scoped)

### Principles

- **Chrome is quiet** (header, footer, forms) — Fluent-like micro only.
- **Flagship chapters perform** (Home hero, optional pinned story, Turbines media).
- Always honor `prefers-reduced-motion: reduce` → opacity-only or instant.
- **[NEW]** All timing pulls from the motion tokens in 6.8 — no ad-hoc `duration-500` sprinkled per component.

### Phase 1 web motion

| Surface | Behavior | Token |
|---------|----------|---|
| Home hero | Parallax / slow media scale; overlay card stable | `--duration-cinematic` / `--ease-emphasized` |
| Home stats | Count-up when in view (disabled if reduced motion) | `--duration-cinematic` |
| Home chapters | Scroll reveal / optional pin for one story block | `--duration-cinematic` / `--ease-emphasized` |
| Turbines | Tab crossfade; light ken-burns on product media | `--duration-base` / `--ease-standard` |
| Routes | View Transitions API when supported | `--duration-base` |
| Global | Focus rings, button active states, Sheet enter | `--duration-fast` / `--duration-instant` |

### Hyperframes (Phase 2, not Phase 1 ship)

- Optional promo composition for hero or `/` embed later.
- When built: HyperFrames HTML composition, 2–4 animation rules, STORYBOARD — **out of Phase 1 critical path**.
- Design leaves a content slot (`promoVideo?: { src, poster, title }`) optional on `home.ts` for future.

---

## 10. Accessibility, SEO, responsive

### A11y

- WCAG 2.2 AA contrast on Arctic Trust tokens — verified in 6.5; muted-foreground upgraded to slate-600 for margin
- Skip link; landmark regions (`header`, `main`, `nav`, `footer`)
- Keyboard: all interactive; Sheet focus trap (Radix)
- Form labels associated; errors linked via `aria-describedby`
- **[NEW]** Capacity range input: keyboard arrow keys must move in 10 MW steps, current value announced via `aria-valuetext` (e.g. "50 megawatts"), not just the raw number
- **[NEW]** Honeypot field: `aria-hidden="true"` and visually hidden via clip technique (not `display:none`, which some bots skip) — but confirmed unreachable by real keyboard users (`tabindex="-1"`)
- Reduced motion as above, applies to the signature band too
- Decorative images `alt=""`; content images descriptive alt from content modules

### SEO

- Per-route `metadata` / `generateMetadata`
- Open Graph defaults from `site.ts` + page overrides
- Semantic headings one `h1` per page
- Canonical URLs when domain known (config)

### Responsive

- Mobile-first; Sheet nav < `md`
- Breakpoints: 360 → 768 → 1024 → 1440+
- Touch targets ≥ 44px for primary controls

### **[NEW] Browser support

| Tier | Browsers | Behavior |
|---|---|---|
| Full | Latest 2 versions: Chrome, Edge, Safari, Firefox (desktop + mobile) | Full motion, View Transitions where supported |
| Graceful | Safari 15–16, older Chromium | View Transitions silently no-ops; layout/content unaffected |
| Not supported | IE11 and equivalent | Not tested, not blocked |

---

## 11. Figma (Phase 1 end)

**Timing:** after tokens and three pages are visually stable — not before scaffold.

**Deliverable:**

1. Color / type / radius variables matching CSS tokens (including 6.4 type scale and 6.6 elevation/shadow values)
2. Frames: Home desktop, Turbines desktop, Contact desktop (+ mobile variants if time)
3. Component set: Button, Card, Input, Header (optional completeness)

**Process:** figma-generate-design from running app / screenshots of built UI. Code remains source of truth for tokens in Phase 1.

---

## 12. Migration plan (legacy)

1. Scaffold Next.js app **in project root** (preserve `.superpowers`, docs).
2. Identify files by magic bytes:
   - JPEG masquerading as `.html` → `public/assets/wind_farm_aerial.jpg`
   - HTML masquerading as `.css` → temporary `_legacy/source.html` then extract
3. Move `wind_farm_hero.jpg` → `public/assets/`
4. Extract content into `src/content/*`, preserving the exact stat/turbine values captured in 7.3–7.4 rather than re-deriving them
5. Build shell + tokens + shadcn
6. Implement routes (Contact form early for funnel testing)
7. Motion pass + a11y + SEO
8. Figma generate
9. Delete obsolete root files: `index (2).*`, old workspace if replaced
10. `.gitignore`: `node_modules`, `.next`, `.superpowers`, env files

**Risk:** path with spaces (`Ray-studio Creations`) — quote all CLI paths; prefer relative commands from project root.

---

## 13. Testing and verification

| Check | How |
|-------|-----|
| Types | `tsc --noEmit` / `next build` |
| Form schema | Small assert/self-check or unit test on Zod schema |
| **[NEW]** Form abuse guard | Scripted test: honeypot filled → rejected; submit < 1.5s after mount → rejected |
| Keyboard path | Manual: tab through header → contact → submit |
| Visual smoke | Chrome DevTools desktop + 390px mobile |
| Reduced motion | Emulate in DevTools; confirm no parallax, confirm signature band entrance is instant |
| Console | Clean on six routes |
| Links | All nav hrefs resolve |
| **[NEW]** Performance | Lighthouse mobile run against build output; targets per 5.5 |
| **[NEW]** Contrast | Re-check `--color-muted-foreground` and primary teal against rendered (not spec) pixels with a contrast checker |

---

## 14. Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Cinematic + Arctic Trust clash | Motion only on chapters; institutional chrome |
| Misnamed assets | Magic-byte migration |
| Form without backend | Explicit success UX; documented ponytail ceiling |
| Over-claimed green tech | Stick to polished legacy claims |
| Figma drift | Generate from built UI last |
| shadcn font circular vars | Literal font families in `@theme inline`; fonts on `<html>` |
| Scope creep (CMS, Hyperframes film) | Explicit Phase 2 list |
| **[NEW]** Brand-name collision with existing wind turbine manufacturer | Flagged as Open Question #1; confirm before Figma/brand asset production |
| **[NEW]** Unprotected public form becomes a spam vector | Honeypot + time-trap heuristics (Section 8), zero backend cost |
| **[NEW]** Hero image weight (468KB source) hurts LCP | `next/image` pipeline with AVIF/WebP + explicit budget (5.5) |
| **[NEW]** Section-banding ambiguity inherited from legacy causes inconsistent dark/light choices mid-build | Resolved explicitly in Section 3 and 6.1 — one signature band, nowhere else |

---

## 15. Observability / ops (minimal)

Phase 1 static marketing site:

- Production: Vercel or static export as chosen at deploy time (default: Next server/static hybrid on Vercel).
- No PII storage in Phase 1 form stub — do not log full inquiry payloads to third parties.
- Future API route: rate limit + provider webhook.

### **[NEW] Event taxonomy (defined now, wired later)

No analytics provider is installed in Phase 1. `src/lib/analytics.ts` exports a single typed `track(event, props)` function that no-ops to `console.debug` in Phase 1, so Phase 2 can swap in a real provider without touching call sites.

| Event | Fired when |
|---|---|
| `cta_click` | Any Contact/proposal CTA clicked, with `{ location: "header" \| "hero" \| "turbines" \| "services" }` |
| `form_submit_attempt` | Submit clicked, before validation |
| `form_submit_success` | Passed validation + spam checks |
| `form_submit_blocked` | Honeypot or time-trap rejected the submit (Phase 1 visibility into abuse, even without a backend) |
| `turbine_tab_change` | User switches N149/N163/N175 |

---

## 16. PR Plan

Ordered implementation units (can be stacked PRs or sequential commits if single-branch).

| PR | Title | Delivers | Depends on | **[NEW]** Acceptance check |
|----|-------|----------|------------|---|
| **PR1** | Scaffold Next + Tailwind v4 + shadcn + tokens | App boots; Arctic Trust `globals.css`; `cn()`; Button/Card smoke | — | `next build` clean; tokens from 6.1/6.4/6.6/6.8 present in `globals.css` |
| **PR2** | Assets + content extraction | `public/assets/*`; `src/content/*` typed modules; legacy HTML archived/removed | PR1 | Turbine data matches 7.3 exactly, `TBD` fields present, not invented |
| **PR3** | Shell + routing skeleton | Header, Footer, Sheet nav, six empty-ish routes with meta | PR1 | Skip link + landmark regions present; keyboard tab order sane |
| **PR4** | Contact + lead form | Full inquiry UX, Zod, success state, header CTA wiring | PR3, PR2 | Honeypot + time-trap pass scripted test (Section 13) |
| **PR5** | Home cinematic | Hero, stats, chapters, CTAs using content | PR3, PR2 | Reduced-motion emulation shows zero parallax/count-up |
| **PR6** | Turbines + Services | Model tabs, service cards, CTAs | PR3, PR2 | Tab crossfade uses `--duration-base`, not ad-hoc value |
| **PR7** | Company + Sustainability + FAQ | Stats page depth, sustainability, accordion | PR3, PR2 | Signature band (if placed here) appears exactly once site-wide |
| **PR8** | Motion + a11y + SEO polish | Reduced motion, focus, metadata audit | PR5–PR7 | Lighthouse thresholds from 5.5 / success criteria met |
| **PR9** | Figma system mirror | Tokens + Home/Turbines/Contact frames | PR8 | Figma variables match 6.1/6.4/6.6 values exactly |
| **PR10**| Cleanup | Remove legacy junk; README; gitignore; final build green | PR8 | No `index (2).*` files remain anywhere in repo |

---

## 17. Implementation notes (agent constraints)

- Work **only** under `F:\Projects\Ray-studio Creations\Nordex Super Energies`.
- Lazy senior / ponytail: no CMS, no new deps beyond Next/shadcn stack needs, shortest working diffs.
- After `shadcn init`, fix Geist/font `@theme inline` circular references immediately.
- Prefer Server Components; mark `"use client"` only for form, tabs interaction, motion, Sheet.
- Do not invent exploit/PoC or external attack tooling.
- **[NEW]** Do not invent turbine spec numbers beyond what's captured in 7.3 — ship `TBD`/optional fields rather than plausible-sounding placeholders.

---

## 18. Open questions (one now blocking, rest non-blocking)

1. **[NEW, blocking Figma/brand work]** Confirm brand-name intent: "Nordex Super Energies" overlaps with an existing wind turbine manufacturer (Nordex SE) in the same category. Proceed as-is (fictional/internal client project), or rename before brand assets and Figma frames are produced? Does not block PR1–PR8 (structure/code), but should be resolved before PR9 (Figma) and before any public deployment.
2. Production domain for canonical/OG URLs (use placeholder until known).
3. Real product photography rights for turbine diagram (use available assets; placeholder if missing).
4. Legal entity / imprint text for footer (use draft HQ strings).

---

## 19. Appendix — Brainstorm decision log

1. Product: **A** Enterprise web (Next/React/Tailwind/shadcn)
2. IA: **B** Multi-route
3. Visual: **B** Arctic Trust
4. Motion: **C** Cinematic
5. Job: **A** Qualified leads
6. Content: **A** Polish existing
7. Phase 1: **B** Web + Figma
8. Approach: **1** Typed content + App Router

**[NEW] Design-critique pass (this revision):**
9. Section rhythm: **Resolved** — one signature dark band, not legacy's alternating banding
10. Contrast: **Verified** — primary teal 5.48:1 kept as-is; muted-foreground upgraded slate-500 → slate-600
11. Form abuse: **Added** — honeypot + time-trap, no backend required
12. Brand name: **Flagged, not resolved** — Open Question #1, needs explicit user confirmation

Visual companion session: `.superpowers/brainstorm/52528-1783788848/`

---

## 20. Next step after user approves this written spec

Invoke **writing-plans** skill to produce a detailed implementation plan (task breakdown for PR1–PR10), then execute under the project root only.

Given Open Question #1 is now a named blocker for PR9/deployment (not PR1–PR8), implementation can begin on approval of everything else while the brand-name question is settled in parallel.
