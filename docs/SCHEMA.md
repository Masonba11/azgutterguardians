# Structured Data (JSON-LD) — Arizona Gutter Guardians

All schema uses [schema.org](https://schema.org) vocabulary and is rendered via `src/lib/schema.tsx`.

Stable business entity ID:

```
https://azgutterguardians.com/#business
```

---

## HomeAndConstructionBusiness

**Where:** Global root layout (`src/app/layout.tsx`)

**Purpose:** Single organization entity for the company.

**Key properties:**
- `@type`: `HomeAndConstructionBusiness`
- `@id`: `https://azgutterguardians.com/#business`
- `name`, `url`, `logo`, `image`, `telephone`, `description`
- `areaServed`: City entities for Show Low, Pinetop, Lakeside (each `containedInPlace` → State Arizona)
- `knowsAbout`: gutter-related service topics

**Notes:**
- Do not create separate `LocalBusiness` entities per city unless a staffed physical location exists there.
- Update `telephone` in `src/config/business.ts` when the real number is available.

---

## WebSite

**Where:** Root layout

**Purpose:** Site-level entity pointing at the business as publisher.

---

## Service

**Where:**
- Homepage + `/gutter-guard-installation/` — regional service
- `/service-areas/show-low/`
- `/service-areas/pinetop/`
- `/service-areas/lakeside/`

**Purpose:** Describe gutter guard installation as a service offered by the main business.

**Pattern:**
```json
{
  "@type": "Service",
  "name": "Gutter Guard Installation in Show Low, Arizona",
  "provider": { "@id": "https://azgutterguardians.com/#business" },
  "areaServed": {
    "@type": "City",
    "name": "Show Low",
    "containedInPlace": { "@type": "State", "name": "Arizona" }
  }
}
```

City pages narrow `areaServed` to that city. Hub/service pages include all three primary cities.

---

## BreadcrumbList

**Where:** Nested pages (services, cities, about, contact, quote, blog, etc.)

**Example (Show Low):**
1. Home → `https://azgutterguardians.com/`
2. Service Areas → `https://azgutterguardians.com/service-areas/`
3. Show Low → `https://azgutterguardians.com/service-areas/show-low/`

Visible breadcrumb UI must match JSON-LD.

---

## FAQPage

**Where:** Pages that render the `FAQ` component with visible Q&A:
- Homepage
- Gutter guard installation
- Gutter cleaning
- Gutter repair
- Show Low / Pinetop / Lakeside
- Select blog posts

**Rule:** Never emit FAQ schema for questions that are not visible on the page.

---

## Article

**Where:** `/blog/[slug]/`

Includes `headline`, dates, `author`/`publisher` pointing at the business entity, and `mainEntityOfPage`.

---

## What we intentionally do not use

- Per-city `LocalBusiness` or `HomeAndConstructionBusiness` branch entities
- Fabricated `AggregateRating` / review schema
- Fabricated `Offer` / price schema
- `geo` / street address until a real address is provided in config
