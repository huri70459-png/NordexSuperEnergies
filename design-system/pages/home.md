# Page override — Home (`/`)

Overrides `design-system/MASTER.md` for this route only.

## Intent

Institutional **dual-division gateway** (Energy + Antiques). Not e-commerce, not outdoor products, not gadget features.

## Theme

- Wrapper: `main#main.nx-page` (default homepage tokens — no `.theme-heritage` / `.theme-industrial`)
- Surfaces: background / card / thin borders; **`--radius`** (sharp), not soft `rounded-2xl`
- Type: Inter body; eyebrows via `.nx-eyebrow`; CTAs via `.nx-btn*`
- Layout: `SectionShell` for mission, collection, about rhythm

## Status

**Done** on `pre-deploy` (audit polish included). See root `PROJECT-HANDOFF.md`.

## Section order

1. Header (`overDark` over hero)
2. Hero — local energy still + dual CTAs → `/industrial`, `/heritage` + 4-frame strip
3. Philosophy / mission (`#pillars`) — purpose copy + **two pillar cards only** (sole division entry)
4. Gallery (`#gallery`) — mixed frames (prefer not duplicating hero primary / collection teaser set)
5. Collection teaser (`#collection`) — three heritage holdings → `/heritage`
6. About (`#about`) — brand description + institutional stats + full-bleed still
7. Footer — real destinations only (no placeholder `#` links)

## Catalog source

- Content: `content/home.ts` (+ `content/brand.ts`)
- Assets: `public/images/energy/*`, `public/images/heritage/*` only
- No Unsplash / remote blob video
- Dead template sections removed: products / testimonials / technology / editorial

## Layout rules

| Rule | Detail |
|------|--------|
| Hero | Full-bleed still, gradient, dual CTAs (`.nx-btn-on-dark-solid` / `.nx-btn-on-dark`) |
| Pillars | 1 → 2 md cards; image first; whole card is link (`.nx-card`) |
| Gallery | Keep `#gallery` for site nav |
| Motion | `FadeUp` reveals; gallery scrub only when not phone / not reduced-motion |
| Stats | Honest labels only (no decorative “tone” metrics) |

## Do not

- Reintroduce Alpine / Forest / bottles / accessories / product prices
- Unsplash or remote marketing video
- Shop / buy language
- Duplicate pillar story as a second “spotlights” block
- Redesign Heritage or Energy pages from home work
- New font families or glass/neon chrome
- Placeholder footer/service/social links
