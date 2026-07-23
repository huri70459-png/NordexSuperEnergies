# Project status

**Last updated:** 2026-07-23  
**Canonical handoff:** [`PROJECT-HANDOFF.md`](PROJECT-HANDOFF.md)  
**Agent session:** `session/20260723_contact_deploy/`

## Git / production

| Item | Value |
|------|--------|
| Branch | `main` |
| Tip | **`714d392`** — India branch office + dual offices UI |
| Prior | `842bff8` docs · `881223d` Hamburg address · `9d37302` contact page |
| Remote | `origin/main` up to date |
| Repo | https://github.com/huri70459-png/NordexSuperEnergies |
| Live | https://nordexsuperenergies.com |
| Vercel | `nordex-super-energies` / `raybeam-s-projects` |

## Live routes

| Page | Route | Status |
| --- | --- | --- |
| Home | `/` | Live; footer dual offices |
| Antiques | `/heritage` | Live |
| Energy | `/industrial` | Live |
| Contact | `/contact` | Live — mailto form, emails, Head + Branch offices |

## Brand / offices

- Tagline: **Energy Portfolio · Antiques**
- Emails: `arshad@nordexsuperenergies.com`, `noor@nordexsuperenergies.com`
- **Head office:** Nordex SE · Langenhorner Chaussee 600 · 22418 Hamburg · Germany  
- **Branch office:** Nordex Super Energies · Centura Square 224, 2nd floor · Road no. 27, opp. Lanxess House · S.G. Brave Road, Wagle Estate · Thane, Maharashtra 400604 · India  
- Source: `BRAND.offices` in `content/brand.ts`

## Ops pending

1. **Cloudflare Email Routing (free)** — domain has no MX; without it contact mailto targets will not receive  
2. Confirm legal head-office name/address vs brand collision (Nordex SE)  

## Run

```bash
npm run dev
```

Open http://localhost:3000 · `/heritage` · `/industrial` · `/contact`
