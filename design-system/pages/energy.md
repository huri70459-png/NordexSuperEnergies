# Page override — Energy (`/industrial`)

Overrides `design-system/MASTER.md` for this route only. Nav label: **Energy**.

## Status

**Done** on `pre-deploy` — polish only unless user requests changes. See root `PROJECT-HANDOFF.md`.

## Intent

Enterprise **energy portfolio** (resources → oil & gas → renewables → generation/infra), not a pure nuclear brochure and not e-commerce. Photography is local; words match images.

## Theme

- Wrapper: `main.theme-industrial`
- Surfaces: white/mist sections, navy hero + stats + CTA band
- Display / stats: Space Grotesk (`font-energy`)
- Accents: emerald eyebrows, cyan timeline labels, steel body

## Section order

1. Header (`overDark` over hero)  
2. Hero — local poster + optional muted video loop + dual in-page CTAs  
3. Mission — 4 portfolio pillars  
4. Portfolio (`#portfolio`) — 4 media cards  
5. Systems (`#systems`) — plant / safety / infrastructure  
6. Stats — navy signature band  
7. Path / impact — still + timeline + Resource·Operate·Power rings  
8. Featured programmes (`#projects`) — alternating large frames  
9. CTA — Antiques primary, Home secondary  
10. Footer  

## Catalog source

- Content: `content/industrial.ts`  
- Assets: `public/images/energy/*`  
- Path helper: `/images/energy/{file}` only  
- Hero video: `Header-Website-29022024.mp4` (muted, loop, reduced-motion → poster only)  

## Layout rules

| Rule | Detail |
|------|--------|
| Cards | Image first; `h-full` equal cells; thin steel borders |
| Portfolio grid | 1 → 2 sm → 4 lg; aspect `4/5` media |
| Systems grid | 3 cols md; aspect `16/10` |
| Featured | Alternate image/copy on lg; 16/10 → 5/4 |
| Stats | Single deep navy band (page signature) |
| Motion | Fade-up stagger ≤240ms; particles only when hero is still |

## Do not

- Unsplash / remote images on this page  
- Abandoned/ruin art as primary hero (`pexels-wendelinjacober-*`)  
- Nuclear-only claims that contradict portfolio photography  
- New font families or neon/glass chrome  
- Autoplay with sound  
