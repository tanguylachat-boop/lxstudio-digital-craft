# SEO Audit Report -- lxstudio.ch

**Date:** 2026-03-25
**Domain:** https://www.lxstudio.ch
**Business Type:** Swiss Digital Agency (SAB -- Service Area Business)
**Language:** French (fr-CH)
**Framework:** React 18 + Vite (Client-Side Rendered SPA)
**Services:** Premium websites, SEO/GEO-SEO, AI automation
**Location:** Bassecourt, Jura, Switzerland
**Service Areas:** Suisse romande, Jura, Delemont, Bienne, Bale, Lausanne, Geneve

---

## SEO HEALTH SCORE: 42 / 100

### Score Breakdown by Category

| Category | Weight | Score | Weighted | Status |
|----------|--------|-------|----------|--------|
| Technical SEO | 22% | 52/100 | 11.4 | Needs Work |
| Content Quality | 23% | 48/100 | 11.0 | Needs Work |
| On-Page SEO | 20% | 40/100 | 8.0 | Critical |
| Schema / Structured Data | 10% | 32/100 | 3.2 | Critical |
| Performance (CWV) | 10% | 38/100 | 3.8 | Critical |
| AI Search Readiness (GEO) | 10% | 29/100 | 2.9 | Critical |
| Images | 5% | 35/100 | 1.8 | Critical |
| **TOTAL** | **100%** | | **42.1** | **Poor** |

### Additional Audits (not in main score)

| Category | Score | Status |
|----------|-------|--------|
| Sitemap Quality | 38/100 | Poor |
| Visual / Mobile | 72/100 | Good |
| Local SEO | 34/100 | Poor |

---

## TOP 3 ARCHITECTURAL PROBLEMS

These three issues account for ~60% of the lost points across ALL categories:

### 1. Pure Client-Side Rendering (SPA) -- THE #1 Problem
**Impact:** Technical, Content, On-Page, Schema, GEO, Performance
**What:** The entire site is a React SPA. Every URL serves `<div id="root"></div>` -- an empty shell. All content is rendered by JavaScript at runtime.
**Why it matters:**
- Googlebot's JS rendering queue delays indexing by hours to weeks
- Bing, Yandex, social crawlers, and AI crawlers (GPTBot, ClaudeBot, PerplexityBot) **cannot see any content at all**
- Schema markup only exists in the static `index.html` shell -- not per-page
- Meta tags set via `react-helmet` are invisible to non-JS crawlers
- The sitemap promises 28 pages, but they all serve identical empty HTML

**Fix:** Migrate to Astro (best for marketing sites), Next.js, or Remix. Minimum viable fix: add `vite-plugin-ssr` or `react-snap` for pre-rendering.

### 2. `<html lang="en">` on a French Site
**Impact:** Technical, On-Page, Local SEO, GEO
**What:** `index.html` line 2 declares `lang="en"` but all content is French.
**Why it matters:** This is the primary signal search engines use for language detection. Google may be treating the site as English, hurting rankings for French queries.
**Fix:** Change to `<html lang="fr">` (5 seconds to fix, immediate impact).

### 3. Canonical URL Mismatch (www vs non-www)
**Impact:** Technical, On-Page, Schema
**What:** The canonical tag, sitemap, and JSON-LD use `www.lxstudio.ch`, but `Home.tsx` sets `og:url` to `lxstudio.ch` (no www). Mixed signals confuse search engines about the canonical domain.
**Fix:** Ensure ALL references use `https://www.lxstudio.ch` consistently, and verify 301 redirect from non-www to www.

---

## ALL FINDINGS BY PRIORITY

### CRITICAL (Fix Immediately) -- 8 Issues

| # | Finding | Category | Details |
|---|---------|----------|---------|
| C1 | **No SSR/SSG -- pure client-side rendering** | Technical | All 30+ routes serve empty HTML. Crawlers can't see content. |
| C2 | **`<html lang="en">` on French site** | Technical | Must be `lang="fr"` or `lang="fr-CH"` |
| C3 | **Canonical URL mismatch (www vs non-www)** | Technical | og:url uses non-www, canonical/sitemap use www |
| C4 | **Missing WebSite schema** | Schema | No WebSite JSON-LD -- needed for sitelinks |
| C5 | **Missing BreadcrumbList schema** | Schema | Critical for 20+ automatisations-ia subpages |
| C6 | **Logo URL returns 404** | Schema | `logo.png` referenced in Organization schema doesn't exist in `/public/` |
| C7 | **No Google Business Profile** | Local | Maps embed uses fake Place ID. No GBP link. #1 local ranking factor missing. |
| C8 | **2 pages missing from sitemap** | Sitemap | `/agents-ia` and `/infrastructure` not in sitemap.xml |

### HIGH (Fix This Week) -- 12 Issues

| # | Finding | Category | Details |
|---|---------|----------|---------|
| H1 | **Missing canonical tags on 27/30 pages** | On-Page | Only homepage has canonical; all other pages lack it |
| H2 | **No code splitting** | Performance | All 30+ page components eagerly imported. Initial bundle 724 KB. |
| H3 | **Three.js for background effect** | Performance | 480 KB chunk for a single 2D shader. CSS gradient alternative = ~5 KB |
| H4 | **Two render-blocking font sources** | Performance | Google Fonts + Fontshare = 400-800ms blocking time on mobile |
| H5 | **No WebP/AVIF images** | Images | All 20+ images are JPEG/PNG -- 30-50% larger than necessary |
| H6 | **No responsive `srcset`** | Images | Mobile downloads desktop-sized images (up to 440 KB each) |
| H7 | **Missing BlogPosting schema** | Schema | 3 blog articles exist with zero structured data |
| H8 | **No AI crawler directives in robots.txt** | GEO | No rules for GPTBot, ClaudeBot, PerplexityBot |
| H9 | **No llms.txt** | GEO | Missing /llms.txt for AI search engines |
| H10 | **Sitemap 14 months stale** | Sitemap | All lastmod dates = 2025-01-23, Google ignores them |
| H11 | **No reviews or social proof** | Local | Testimonials section deliberately removed. Zero AggregateRating. |
| H12 | **Ghost location pages referenced** | Local | SeoGeo page links to 5 city pages (`/services/delemont`, etc.) that don't exist |

### MEDIUM (Fix This Month) -- 14 Issues

| # | Finding | Category | Details |
|---|---------|----------|---------|
| M1 | **Schema: Organization instead of ProfessionalService** | Schema | Should use ProfessionalService for local SEO benefit |
| M2 | **Schema: Missing postalCode, streetAddress** | Schema | Address in JSON-LD lacks postal code (2854) and street |
| M3 | **Schema: Service blocks missing name, url, price** | Schema | 3 Service schemas lack key properties |
| M4 | **Schema: No Person schema for founder** | Schema | Tanguy Lachat named but no structured data for E-E-A-T |
| M5 | **No font preload** | Performance | No `<link rel="preload">` for critical fonts |
| M6 | **Blog hero images from Unsplash CDN** | Performance | External URLs add DNS lookup overhead; no control over caching |
| M7 | **NAP format inconsistent** | Local | 3 different address formats across the site |
| M8 | **Missing TikTok in sameAs** | Schema | Footer links to TikTok but schema doesn't include it |
| M9 | **Contact page text overflow at 375px** | Visual | `text-5xl` (48px) H1 has no mobile breakpoint |
| M10 | **Hamburger menu touch target 24x24px** | Visual | Below 48px minimum for mobile accessibility |
| M11 | **`text-[10px]` used in 6+ places** | Visual | Below 12px accessibility minimum |
| M12 | **Deprecated `<changefreq>` and `<priority>` in sitemap** | Sitemap | Google ignores both; adds unnecessary file weight |
| M13 | **No IndexNow protocol** | Technical | Not implemented -- would speed up re-indexing |
| M14 | **Using deprecated `react-helmet`** | Technical | Should migrate to `react-helmet-async` |

### LOW (Backlog) -- 6 Issues

| # | Finding | Category | Details |
|---|---------|----------|---------|
| L1 | Schema: areaServed uses plain strings | Schema | Better as AdministrativeArea types |
| L2 | Schema: Missing foundingDate | Schema | Recommended Organization property |
| L3 | Schema: ContactPage, AboutPage subtypes | Schema | Nice-to-have WebPage subtypes |
| L4 | Automate sitemap generation in build | Sitemap | Prevent sitemap from going stale |
| L5 | Audit industry pages for unique content | Content | 17 automatisations-ia pages -- verify 60%+ unique content |
| L6 | Self-host Satoshi font | Performance | Eliminate Fontshare dependency |

---

## PRIORITIZED ACTION PLAN

### Phase 1: Quick Wins (< 1 hour, high impact)

1. **Fix `<html lang="en">` to `<html lang="fr">`** -- 5 seconds, immediate SEO impact
2. **Fix canonical www/non-www mismatch** -- Align og:url in Home.tsx to use www
3. **Add missing pages to sitemap** -- Add `/agents-ia` and `/infrastructure`
4. **Add/fix logo.png** -- Ensure file exists in `/public/` or update schema URL
5. **Update sitemap lastmod dates** -- Use real content modification dates
6. **Remove deprecated sitemap tags** -- Strip `<changefreq>` and `<priority>`

### Phase 2: Schema & On-Page (1-2 days)

7. **Add WebSite schema** to `index.html`
8. **Add `@id` to Organization** for cross-referencing
9. **Add `postalCode: "2854"`** to address
10. **Add `name` and `url`** to all 3 Service schemas
11. **Upgrade to ProfessionalService** schema type
12. **Add BreadcrumbList** via Helmet on all pages
13. **Add BlogPosting schema** to 3 blog articles
14. **Add canonical tags** to all pages via Helmet

### Phase 3: Performance Quick Wins (1-2 days)

15. **Lazy-load all page routes** -- Wrap imports in `React.lazy()` (40-60% initial bundle reduction)
16. **Add font preload** -- `<link rel="preload">` for Satoshi and Instrument Serif
17. **Self-host fonts** -- Eliminate Google Fonts + Fontshare external requests
18. **Convert images to WebP** -- 30-50% file size reduction
19. **Add responsive `srcset`** -- Stop mobile from downloading desktop images

### Phase 4: Architecture (1-2 weeks) -- HIGHEST IMPACT

20. **Migrate to SSR/SSG framework** -- Astro recommended for marketing site
    - Solves: CSR, crawlability, GEO, performance (LCP), schema per-page
    - Expected score improvement: +25-35 points across all categories
21. **Replace Three.js with CSS/lightweight shader** -- Save ~480 KB
22. **Create actual city/service area pages** -- `/services/delemont`, etc.
23. **Set up Google Business Profile** -- #1 local ranking factor

### Phase 5: Local & GEO (1-2 weeks)

24. **Create and verify Google Business Profile**
25. **Add llms.txt** for AI crawlers
26. **Add AI crawler directives** to robots.txt
27. **Add reviews/testimonials back** with AggregateRating schema
28. **Build Swiss citation profiles** -- local.ch, search.ch, directories

---

## EXPECTED SCORE IMPROVEMENT

| Action | Estimated Score Gain |
|--------|---------------------|
| Phase 1 (Quick Wins) | +5-8 points → ~48 |
| Phase 2 (Schema & On-Page) | +8-12 points → ~58 |
| Phase 3 (Performance) | +5-8 points → ~64 |
| Phase 4 (SSR Migration) | +20-30 points → ~88 |
| Phase 5 (Local & GEO) | +5-8 points → ~94 |

**With SSR migration, the site could realistically reach 85-95/100.**

---

## DETAILED REPORTS

Individual audit reports are available in `/seo-audit-results/`:

| Report | File | Score |
|--------|------|-------|
| Technical SEO | `technical.md` | 52/100 |
| Performance (CWV) | `performance.md` | 38/100 |
| Schema Markup | `schema.md` | 32/100 |
| Sitemap | `sitemap.md` | 38/100 |
| Visual / Mobile | `visual.md` | 72/100 |
| Local SEO | `local.md` | 34/100 |
| GEO / AI Search | (in this report) | 29/100 |
| Content Quality | (in this report) | ~48/100 |

---

*Audit performed by Claude Opus 4.6 with 8 parallel specialized subagents.*
