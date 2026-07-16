# Nordex Super Energies — Design System MASTER

Global source of truth for UI redesign. Page files under `design-system/pages/` override this when present.

## Brand

| Item | Value |
|------|--------|
| Name | Nordex Super Energies |
| Pillars | Energy portfolio · Antiques |
| Tone | Enterprise premium, calm, high-trust |
| Product pattern | Dual-division institutional site (energy + museum collection) |

## Style

- **In:** Soft minimalism, editorial luxury, thin borders, restrained gold accent
- **Out:** Glassmorphism, neon, brutalism, emoji icons, heavy blur chrome

## Typography

| Role | Token / font |
|------|----------------|
| Body / UI | Inter (`--font-inter` / `--font-sans`) |
| Energy / industrial UI | Space Grotesk (`--font-energy`) |
| Display / heritage titles | Cormorant Garamond (`--font-display`) |

Do not introduce new families without an explicit brand change.

## Color primitives (see `app/globals.css`)

| Domain | Keys |
|--------|------|
| Neutral | `--primitive-ink`, paper, mist, stone, line |
| Energy | navy-950/900/800, steel, emerald, cyan |
| Antiques | ivory, beige, gold, bronze, brown, charcoal |

Semantic colors are theme-scoped (`.theme-heritage`, `.theme-industrial`, default homepage). Prefer tokens over raw hex in components.

## Spacing & layout

- 4/8 rhythm via `--space-*`
- Section gutters: `--section-x`, `--section-y`
- Content: `--content-max`, `--content-narrow`, `--content-prose`
- Safe areas: `--safe-top/right/bottom/left`
- Touch floor: `--touch-min` (2.75rem) via `.nx-touch`

## Motion

| Token | Use |
|-------|-----|
| `--duration-fast` 180ms | Hover, chrome |
| `--duration-base` 320ms | Enter / section |
| `--duration-slow` 700ms | Hero, media only |
| `--ease-out-expo` / `--ease-out-soft` | Shared curves |

Rules: animate `transform` / `opacity` only; respect `prefers-reduced-motion` (CSS + Framer `useReducedMotion`).

## Accessibility (non-negotiable)

1. Text contrast ≥ 4.5:1 body; large text ≥ 3:1  
2. Visible focus rings on interactive controls  
3. Touch targets ≥ 44×44px (`.nx-touch`)  
4. No information by color alone  
5. Meaningful `alt` on collection images  
6. Keyboard path for filters / nav  

## Routes & redesign status

| Route | Theme | Status |
|-------|--------|--------|
| `/heritage` | `.theme-heritage` | **Done** — redesign + local assets; polish only |
| `/` | Default | **Done** — dual-division gateway + audit polish |
| `/industrial` | `.theme-industrial` | **Done** — portfolio redesign + local assets; polish only |

**Ship snapshot:** git branch `main` (PR #1; `pre-deploy` merged) · handoff `PROJECT-HANDOFF.md`

## Implementation stack

Next.js 16 · Tailwind v4 · shadcn/ui primitives · Framer Motion · `next/image`

## Shared chrome utilities

| Class | Use |
|-------|-----|
| `.nx-section` / `.nx-container` / `.nx-pad-x` | Section gutters |
| `.nx-eyebrow` / `.nx-h2` / `.nx-lead` | Type roles |
| `.nx-card` / `.nx-media` | Cards + image hover |
| `.nx-btn` / `.nx-btn-solid` / `.nx-btn-outline` / `.nx-btn-on-dark*` | Enterprise CTAs (sharp, not soft pills) |
| `.nx-touch` / `.nx-skip` | A11y hit area / skip link |
| `SectionShell` | Prefer on long-form pages |

## Anti-patterns

- Second brand / new palette mid-redesign  
- Product-cart CTAs on museum objects  
- Unsplash on home/heritage/energy pages (use `public/images/heritage/`, `public/images/energy/`)  
- Hover-only critical actions  
- Crowded section stacking without rhythm tokens  
- Soft `rounded-2xl` product-template cards on Home (use `--radius` / `.nx-card`)  
- Placeholder footer/social `href="#"`  
- Duplicate Home pillars + “spotlights” blocks  
- Committing `Omnisync-Mutated-Folder/`, `*.zip`, `session/` agent noise
