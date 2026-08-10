# Arizona Gutter Guardians

Production-ready marketing website for **Arizona Gutter Guardians** (`azgutterguardians.com`) — gutter guard installation, cleaning, and repair across Arizona’s White Mountains (Show Low, Lakeside, Pinetop).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Server-rendered pages with minimal client JS (header menu, quote form, sticky CTA)

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm start
```

## Key config

| File | Purpose |
|------|---------|
| `src/config/business.ts` | Business name, phone, cities, services, schema ID |
| `src/config/analytics.ts` | GA4 / Search Console placeholders |
| `.env.example` | Env var template |
| `docs/SEO-STRATEGY.md` | SEO + off-page checklist |
| `docs/SCHEMA.md` | JSON-LD documentation |

## Quote form

Submissions hit `POST /api/quote/`. Without `QUOTE_WEBHOOK_URL`, successful validation returns a success state and logs in development — wire email/CRM via the webhook env var.

## Placeholders to replace

1. Phone number in `src/config/business.ts`
2. Analytics / verification IDs in `.env.local`
3. `public/images/og-default.jpg` (Open Graph image)
4. Privacy & Terms legal copy
5. Real photography in place of gradient placeholders
