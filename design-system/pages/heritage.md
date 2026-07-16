# Page override — Antiques (`/heritage`)

Overrides `design-system/MASTER.md` for this route only.

## Status

**Done** on `main` — polish only unless user requests changes. See root `PROJECT-HANDOFF.md`.

## Intent

Institutional **museum collection**, not e-commerce. Object photography is the hero; gold is accent (rules/underlines), not fill.

## Theme

- Wrapper: `main.theme-heritage`
- Surfaces: ivory background, charcoal text, beige section bands
- Display type: Cormorant on H1–H3

## Section order

1. Header (`overDark` over hero)  
2. Hero — local lead image + claim + single CTA → `#collection`  
3. Collection — filters + masonry catalog  
4. Collecting rooms — categories with real holdings only  
5. CTA — Energy primary, Home secondary  
6. Footer  

## Catalog source

- Content: `content/heritage.ts`  
- Assets: `public/images/heritage/*`  
- Path helper: local `/images/heritage/{file}` only  

## Gallery rules

| Rule | Detail |
|------|--------|
| Card | Image first, museum label (category · era · title · body · origin rule) |
| Filters | Horizontal scroll; selected underline sits on tablist rule (`-bottom-px`) + stronger weight/color |
| Count | Bound to filter toolbar (`mt-4/5`); solid `--heritage-meta` for ≥4.5:1 |
| Density | Spacious; 1 col phone → 2 sm → 3 lg; column-gap = card stack (`--heritage-gallery-gap`) |
| Motion | Subtle stagger ≤240ms; scale on fine pointer only |

## Component tokens (heritage)

Prefer CSS vars under `.theme-heritage`:

- `--heritage-card-border`
- `--heritage-label` (meta labels — use bronze/brown, not pale gold on beige)
- `--heritage-focus` (gold ring on dark/light as appropriate)
- `--heritage-filter-active` (charcoal text + gold underline)

## A11y on this page

- Filter `role="tablist"` / `tab` with `aria-selected` + `aria-controls` → panel id  
- Focus-visible rings on hero CTA, filter tabs, footer CTAs  
- Reduced motion disables hero parallax  

## Do not

- Rewrite fonts/palette for this page alone  
- Reintroduce Unsplash  
- “Shop / Buy / View details” product language on cards  
