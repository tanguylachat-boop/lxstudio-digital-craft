# Schema.org Structured Data Audit -- lxstudio.ch

**Audit date:** 2026-03-25
**Site:** https://www.lxstudio.ch
**Type:** Swiss digital agency (French language)
**Source files analyzed:** `index.html` + all React page components + sitemap.xml

---

## Overall Score: 32 / 100

The site has a basic foundation with Organization and 3 Service schemas in `index.html`, but is missing critical schema types for a multi-page digital agency website. All structured data lives in a single static HTML file, with zero JSON-LD injected on individual pages via React Helmet. Blog articles, the contact page, the about page, and all 20+ automatisations-ia subpages have no structured data whatsoever.

---

## 1. Existing Schema Detection

All structured data is located exclusively in `index.html` (lines 40-119). No JSON-LD or Microdata was found in any React component or page file.

### Block 1: Organization (lines 41-62)

**Issues found:**

| # | Issue | Priority | Details |
|---|-------|----------|---------|
| 1 | `logo` URL likely returns 404 | **Critical** | `https://www.lxstudio.ch/logo.png` -- no `logo.png` exists in `/public/` |
| 2 | Missing `postalCode` in address | Medium | Should include `"postalCode": "2854"` for Bassecourt |
| 3 | Missing `streetAddress` in address | Low | Recommended for LocalBusiness eligibility |
| 4 | Missing `contactPoint` | Medium | Google recommends ContactPoint with `contactType`, `telephone`, `availableLanguage` |
| 5 | Missing `@id` | Medium | Should have `"@id": "https://www.lxstudio.ch/#organization"` for cross-referencing |
| 6 | `areaServed` uses plain strings | Low | Better to use `AdministrativeArea` types |
| 7 | Missing TikTok in `sameAs` | Low | Footer links to TikTok but not in sameAs |
| 8 | Missing `foundingDate` | Low | Recommended property |

### Blocks 2-4: Service schemas (3x)

**Issues (all three):**

| # | Issue | Priority | Details |
|---|-------|----------|---------|
| 9 | Missing `name` property | Medium | Service should have `name` distinct from `serviceType` |
| 10 | Missing `url` property | Medium | Should link to respective service pages |
| 11 | Offer missing `price`/`priceCurrency` | Medium | Homepage lists pricing from 490 CHF |
| 12 | Provider duplicates Organization data | Low | Should use `@id` reference instead |

---

## 2. Deprecated / Restricted Schema Check

| Schema Type | Status | Found? |
|-------------|--------|--------|
| HowTo | Deprecated (Sept 2023) | Not found -- PASS |
| FAQPage | Restricted to gov/healthcare (Aug 2023) | Not found as schema |

**Note:** FAQ content exists on homepage and `/agents-ia` but adding FAQPage schema won't generate Google rich results for commercial sites. Optional for GEO/AI citation benefit only.

---

## 3. Missing Schema Types -- Prioritized

### CRITICAL -- WebSite
Not present. Enables sitelinks and connects site identity.

### CRITICAL -- BreadcrumbList
Not present on any page. Critical for the 20+ automatisations-ia subpages with 3-level depth.

### CRITICAL -- WebPage (per page)
Not present on any page. Should be injected via Helmet on each route.

### HIGH -- BlogPosting (3 blog articles)
Three blog articles exist with zero structured data. Strong rich result candidates.

### HIGH -- ProfessionalService
Upgrade from Organization -- most accurate type for a digital agency.

### MEDIUM -- Person (Founder)
Tanguy Lachat named as "Fondateur & Directeur" -- strengthens E-E-A-T signals.

### MEDIUM -- ContactPage, AboutPage, CollectionPage
Type-specific WebPage subtypes for key pages.

---

## 4. Technical Issues

| # | Issue | Priority | Details |
|---|-------|----------|---------|
| 20 | `<html lang="en">` but site is French | **Critical** | Must be `lang="fr"` or `lang="fr-CH"` |
| 21 | Schema only in static `index.html` | **High** | All 30+ pages serve the same static JSON-LD |
| 22 | No schema on 30+ individual pages | **High** | Zero structured data on subpages |
| 23 | Canonical URL inconsistency | Medium | index.html canonical is www, Home.tsx og:url is non-www |

---

## 5. Scoring Breakdown

| Category | Max | Score | Notes |
|---|---|---|---|
| Organization / LocalBusiness | 15 | 8 | Present but incomplete |
| WebSite schema | 10 | 0 | Missing |
| WebPage schemas | 10 | 0 | Missing on all pages |
| BreadcrumbList | 10 | 0 | Missing |
| Service schemas | 15 | 8 | 3 present but incomplete |
| Article / BlogPosting | 15 | 0 | 3 articles, zero schema |
| Person / Author (E-E-A-T) | 5 | 0 | Data exists, no schema |
| Technical correctness | 10 | 6 | Correct @context, no deprecated types; lang="en" and logo 404 |
| Cross-page coverage | 10 | 2 | Schema only on homepage shell |
| **Total** | **100** | **32** | |

---

## 6. Priority Action Plan

### Phase 1 -- Critical (Immediate)
1. Fix `<html lang="en">` to `<html lang="fr">`
2. Verify/add `logo.png` to `/public/`
3. Add WebSite schema
4. Fix canonical www/non-www inconsistency
5. Add `@id` to Organization block and add `postalCode`

### Phase 2 -- High (This week)
6. Add BreadcrumbList via Helmet on all pages
7. Add BlogPosting schema to 3 blog articles
8. Add WebPage schema to all main pages
9. Add `name` and `url` to all 3 Service schemas

### Phase 3 -- Medium (This month)
10. Upgrade Organization to ProfessionalService with `geo`, `priceRange`
11. Add Person schema for founder
12. Enrich Offer schemas with CHF pricing
13. Add ContactPage and AboutPage schemas
14. Add TikTok to sameAs

### Phase 4 -- Low
15. CollectionPage for /blog index
16. Proper AdministrativeArea types in areaServed
17. Consider FAQPage for GEO/AI citation benefits only
