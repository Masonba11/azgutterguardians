# SEO Strategy — Arizona Gutter Guardians

Domain: https://azgutterguardians.com  
Primary service: Gutter Guard Installation  
Secondary: Gutter Cleaning, Gutter Repair  
Geo focus: Arizona White Mountains — Show Low, Lakeside, Pinetop

---

## 1. Site architecture

```
/ (homepage — primary commercial page)
├── /gutter-guard-installation/   ← primary money page
├── /gutter-cleaning/
├── /gutter-repair/
├── /service-areas/
│   ├── /show-low/
│   ├── /lakeside/
│   └── /pinetop/
├── /about/
├── /contact/
├── /get-a-quote/                 ← conversion page
└── /blog/
    ├── /gutter-guards-for-pine-needles/
    ├── /gutter-guard-cost/
    ├── /gutter-guards-vs-screens/
    └── /do-gutter-guards-work-with-snow/
```

Service-area hierarchy is always: **Home → Service Areas → City**.  
City pages describe coverage for one business — not fake branch locations.

---

## 2. Target keywords

### Primary
- gutter guard installation White Mountains AZ
- gutter guard installation Show Low AZ
- gutter guard installation Pinetop AZ
- gutter guard installation Lakeside AZ

### Supporting commercial
- gutter guards / gutter protection / gutter covers / gutter screens
- pine needle gutter guards / leaf guards
- gutter guard installers
- gutter cleaning White Mountains / Show Low / Pinetop / Lakeside
- gutter repair Show Low / Pinetop / Lakeside

### Informational (blog)
- best gutter guards for pine needles Arizona
- gutter guard cost Arizona
- gutter guards vs screens
- do gutter guards work with snow

---

## 3. Keyword-to-page mapping

| Intent | Primary page |
|--------|----------------|
| Install guards (region) | `/gutter-guard-installation/` + `/` |
| Install guards (Show Low) | `/service-areas/show-low/` |
| Install guards (Pinetop) | `/service-areas/pinetop/` |
| Install guards (Lakeside) | `/service-areas/lakeside/` |
| Service area hub | `/service-areas/` |
| Cleaning | `/gutter-cleaning/` |
| Repair | `/gutter-repair/` |
| Quote conversion | `/get-a-quote/` |
| Pine needles research | `/blog/gutter-guards-for-pine-needles/` |
| Cost research | `/blog/gutter-guard-cost/` |
| Product comparison | `/blog/gutter-guards-vs-screens/` |
| Snow / winter | `/blog/do-gutter-guards-work-with-snow/` |

---

## 4. Internal linking strategy

- Homepage links to primary service, three cities, cleaning/repair, and key blog posts.
- Service page links to city pages + pine needle + cost articles.
- Each city page links to `/gutter-guard-installation/`, sibling cities, and `/get-a-quote/`.
- Cleaning/repair pages link to guards as longer-term prevention.
- Blog posts link to the main service page and quote CTA.
- Use descriptive anchors; avoid “click here” and keyword stuffing.

---

## 5. Local SEO strategy

1. Consistent NAP-style naming: **Arizona Gutter Guardians** everywhere (site, GBP, citations).
2. Do not invent a street address until a real one exists.
3. Create/claim **Google Business Profile** with correct categories (e.g., gutter service / home improvement).
4. Service areas listed on GBP should match site cities.
5. Use city pages + GBP posts for seasonal needle drop / pre-winter reminders.
6. Collect genuine reviews only (see off-page section).
7. Embed map only when a verified address exists.

---

## 6. Technical SEO checklist

- [x] Trailing-slash URL architecture
- [x] Unique title + meta description per page
- [x] Canonical tags via Next.js metadata
- [x] Open Graph + Twitter metadata
- [x] `sitemap.xml` + `robots.txt`
- [x] Custom 404
- [x] Semantic HTML + breadcrumbs
- [x] JSON-LD (business, service, FAQ, breadcrumbs, articles)
- [x] Mobile sticky CTA with content padding
- [ ] Replace phone placeholder
- [ ] Add real OG image (`public/images/og-default.jpg`)
- [ ] Add GA4 + Search Console verification IDs
- [ ] Connect quote form webhook/email
- [ ] Compress and add real photography
- [ ] Counsel-approved Privacy + Terms

---

## 7. Structured data strategy

See `/docs/SCHEMA.md` for entity details.

Summary:
- One `HomeAndConstructionBusiness` at `https://azgutterguardians.com/#business`
- `Service` entities for installation (sitewide + city-specific areaServed)
- `BreadcrumbList` on nested pages
- `FAQPage` only where FAQs are visible
- `Article` on blog posts
- **No** fake per-city `LocalBusiness` entities

---

## 8. Off-page SEO strategy

### Citations & profiles (claim/create accurately)
- [ ] Google Business Profile
- [ ] Bing Places
- [ ] Apple Business Connect
- [ ] Yelp
- [ ] Facebook Business Page
- [ ] Nextdoor Business
- [ ] Local chamber(s) of commerce (Show Low / Pinetop-Lakeside area)
- [ ] Relevant home-service directories (only reputable, non-spam)

### Partnerships & referral relationships
- [ ] Roofers
- [ ] Realtors / property managers
- [ ] Home inspectors
- [ ] Landscapers
- [ ] Painters / exterior contractors
- [ ] HOA communications where appropriate and permitted

### Review strategy (genuine only)
- Ask happy customers after completed jobs.
- Make review links easy (GBP first).
- Respond to all reviews professionally.
- Never buy reviews, never gate extreme ratings, never post fake reviews.
- Photograph completed work only with customer permission.

### Link building
- Do not automate link spam from the website.
- Earn mentions via local sponsorships, helpful guides, and partner referrals.
- Pitch useful seasonal content (pine needle season, pre-winter gutter prep).

---

## 9. Content roadmap

Near-term additions:
1. Seasonal checklist: “Fall gutter prep in the White Mountains”
2. “Cabin & second-home gutter maintenance”
3. “Signs you need gutter repair before guards”
4. City-specific FAQs expansion as real customer questions arrive
5. Before/after project stories (with permission; no fabricated testimonials)

Refresh cadence: update city pages annually; refresh cost article when pricing factors change.

---

## 10. Google Search Console launch checklist

1. Verify property (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or DNS).
2. Submit `https://azgutterguardians.com/sitemap.xml`.
3. Inspect homepage + primary service URL; request indexing.
4. Confirm no soft-404s on city pages.
5. Set up email alerts for coverage issues.
6. After GA4 is live, link GA4 ↔ Search Console.
7. Monitor queries for Show Low / Pinetop / Lakeside + “gutter guard”.
8. Fix crawl/index issues before scaling content.

### Analytics placeholders
Configure via `.env.local` (see `.env.example`):
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
