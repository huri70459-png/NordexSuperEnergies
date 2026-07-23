# Project status

**Last updated:** 2026-07-23  
**Canonical handoff:** [`PROJECT-HANDOFF.md`](PROJECT-HANDOFF.md)  
**Agent session:** `session/20260723_contact_deploy/`

## Git / production

| Item | Value |
|------|--------|
| Branch | `main` |
| Tip | `881223d` (company address) · prior `9d37302` (contact page) |
| Remote | `origin/main` up to date |
| Repo | https://github.com/huri70459-png/NordexSuperEnergies |
| Live | https://nordexsuperenergies.com |
| Vercel | `nordex-super-energies` / `raybeam-s-projects` |

## Live routes

| Page | Route | Status |
| --- | --- | --- |
| Home | `/` | Live; footer address |
| Antiques | `/heritage` | Live |
| Energy | `/industrial` | Live |
| Contact | `/contact` | Live (mailto form + emails + address) |

## Brand

- Tagline: **Energy Portfolio · Antiques**
- Contact emails: `arshad@…`, `noor@…` (need Cloudflare Email Routing for delivery)
- Address: Nordex SE, Langenhorner Chaussee 600, 22418 Hamburg, Germany

## Ops pending

1. Cloudflare Email Routing (free) — domain has no MX yet  
2. Confirm legal name/address vs brand collision (Nordex SE)  

## Run

```bash
npm run dev
```

Open http://localhost:3000 · `/heritage` · `/industrial` · `/contact`
