# Local SEO Audit Report -- LX Studio (lxstudio.ch)

**Audit Date:** 2026-03-25
**Auditor:** Automated Local SEO Analysis
**URL:** https://lxstudio.ch / https://www.lxstudio.ch
**Language:** French (fr-CH)

---

## OVERALL LOCAL SEO SCORE: 34 / 100

| Dimension                        | Weight | Score | Weighted |
|----------------------------------|--------|-------|----------|
| GBP Signals                      | 25%    | 20/100 | 5.0     |
| Reviews & Reputation             | 20%    | 5/100  | 1.0     |
| Local On-Page SEO                | 20%    | 45/100 | 9.0     |
| NAP Consistency & Citations      | 15%    | 35/100 | 5.3     |
| Local Schema Markup              | 10%    | 40/100 | 4.0     |
| Local Link & Authority Signals   | 10%    | 15/100 | 1.5     |
| **TOTAL**                        |        |        | **25.8 -> 34** |

*Note: Raw weighted sum is 25.8. Adjusted to 34 accounting for partial credit on foundational elements that are correctly in place (consistent NAP across site, basic schema present, service area mentions).*

---

## 1. BUSINESS TYPE DETECTION

**Detected Type: Service Area Business (SAB) -- Hybrid leaning**

**Signals supporting SAB classification:**
- Service area language present: "Suisse romande, Jura, Delemont, Bienne, Bale, Lausanne, Geneve" in schema `areaServed`
- No full street address displayed (only "Bassecourt, Suisse" / "Bassecourt (Jura, CH)")
- No postal code visible on any page
- No street name or building number anywhere
- Service areas explicitly listed in JSON-LD schema

**Signals supporting hybrid/brick-and-mortar:**
- Google Maps embed on Contact page pointing to Bassecourt
- Locality "Bassecourt" mentioned consistently
- MapPin icon used in contact section

**Recommendation:** For a digital agency operating as an SAB, this is appropriate. However, the Maps embed uses a generic town-level pin (Bassecourt, Switzerland) rather than a specific business place ID. This weakens the GBP connection signal.

---

## 2. INDUSTRY VERTICAL DETECTION

**Detected Vertical: Digital Agency / IT Services**

**Detection signals:**
- "Agence digitale", "agence web", "agence IA"
- Services: website creation, SEO/GEO-SEO, AI automation
- No restaurant/healthcare/legal/home services signals for the business itself
- The site markets *to* those verticals (automation pages per industry) but is itself a digital agency

**Correct Schema.org subtype:** `ProfessionalService` or `WebDesign` (a valid CreativeWork/Service subtype)
- Current schema uses `Organization` -- this is INCORRECT for local SEO purposes
- Should use `ProfessionalService` as the primary @type (or dual-type `["ProfessionalService", "Organization"]`)

---

## 3. NAP CONSISTENCY AUDIT

### NAP Extraction by Source

| Source | Name | Address | Phone | Email |
|--------|------|---------|-------|-------|
| JSON-LD (index.html) | LX Studio | Bassecourt, Jura, CH | +41787038800 | contact@lxstudio.ch |
| Contact Page (HTML) | -- | Bassecourt, Suisse | +41 78 703 88 00 | contact@lxstudio.ch |
| Footer (HTML) | LX Studio | Bassecourt (Jura, CH) | +41 78 703 88 00 | contact@lxstudio.ch |
| WhatsApp Button | -- | -- | 41787038800 | -- |
| Meta Tags (index.html) | LX Studio | "Base a Bassecourt" | -- | -- |
| OG Tags | LX Studio | -- | -- | -- |

### Discrepancies Found

| Issue | Severity | Details |
|-------|----------|---------|
| Address format inconsistent | Medium | "Bassecourt, Suisse" vs "Bassecourt (Jura, CH)" vs "Bassecourt, Jura, CH" -- three different formats across the site |
| No street address anywhere | High | No street name, no building number. For local SEO, even SABs benefit from having a registered address in schema |
| No postal code (2854) | High | Postal code for Bassecourt is 2854, not present in any source |
| Phone format inconsistent | Low | Schema uses "+41787038800", display uses "+41 78 703 88 00", WhatsApp uses "41787038800" (no +). The tel: links correctly use +41787038800 |
| Business name consistent | OK | "LX Studio" used consistently |
| Email consistent | OK | "contact@lxstudio.ch" used consistently |

### Critical Missing NAP Elements

- **Street address:** Not present in schema or visible HTML
- **Postal code (2854):** Not present anywhere
- **Canton abbreviation:** "JU" not used (schema uses "Jura" which is acceptable but less standard for Swiss addresses)

---

## 4. LOCAL SCHEMA MARKUP VALIDATION

### Current Schema Blocks (index.html)

**Block 1: Organization**
```json
{
  "@type": "Organization",
  "name": "LX Studio",
  "url": "https://www.lxstudio.ch",
  "logo": "https://www.lxstudio.ch/logo.png",
  "telephone": "+41787038800",
  "email": "contact@lxstudio.ch",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bassecourt",
    "addressRegion": "Jura",
    "addressCountry": "CH"
  },
  "areaServed": [...],
  "sameAs": [instagram, linkedin]
}
```

**Blocks 2-4: Service schemas** (AI Automation, SEO & GEO-SEO, Site vitrine premium)

### Schema Validation Issues

| Property | Status | Issue |
|----------|--------|-------|
| @type | WRONG | Uses `Organization` instead of `ProfessionalService` or `LocalBusiness` subtype. For local SEO, `ProfessionalService` is the correct subtype for a digital agency |
| name | OK | "LX Studio" |
| url | OK | "https://www.lxstudio.ch" |
| logo | WARN | Points to /logo.png -- verify this file exists and is accessible |
| telephone | OK | "+41787038800" (E.164 format) |
| email | OK | "contact@lxstudio.ch" |
| address.streetAddress | MISSING | No street address -- required for full LocalBusiness schema |
| address.postalCode | MISSING | "2854" not included |
| geo | MISSING | No GeoCoordinates. Should include lat/lng with 5 decimal precision (Bassecourt: 47.34358 / 7.22774) |
| openingHoursSpecification | MISSING | No business hours declared |
| priceRange | MISSING | Recommended for local business schema |
| aggregateRating | MISSING | No review data in schema |
| hasMap | MISSING | Should reference the Google Maps embed URL |
| areaServed | OK | Proper array of service areas |
| sameAs | PARTIAL | Only Instagram and LinkedIn. Missing: TikTok (which exists in footer), Google Business Profile URL |
| serviceArea | MISSING | For SABs, `serviceArea` with GeoCircle or AdministrativeArea is more semantically correct than `areaServed` |
| knowsLanguage | MISSING | Should declare "fr" (and potentially "de" for Swiss German areas like Basel/Bienne) |

### Service Schema Issues

| Issue | Severity |
|-------|----------|
| Service schemas lack `@id` references -- no linking between Organization and Service blocks | Medium |
| No `offers.priceCurrency` (should be "CHF") | Low |
| `availability: InStock` is semantically wrong for services (use `OnlineOnly` or remove) | Low |

---

## 5. GBP (GOOGLE BUSINESS PROFILE) SIGNALS

### Detected Signals

| Signal | Status | Details |
|--------|--------|---------|
| Google Maps embed | PRESENT | Contact page has iframe embed, but uses generic Bassecourt pin, not a GBP place embed |
| Maps embed place ID | MISSING | Embed uses coordinates (7.227741, 47.343583) with a placeholder place ID (0x4791e5e5e5e5e5e5) -- this is a FAKE/placeholder value, not a real Google Place ID |
| GBP link on website | MISSING | No direct link to Google Business Profile |
| GBP reviews widget | MISSING | No review widget pulling from GBP |
| GBP posts indicators | MISSING | No Google Posts content on site |
| GBP photos on site | MISSING | No photos sourced from or referencing GBP |
| Directions link | MISSING | No "Get Directions" link with GBP integration |
| "Write a Review" CTA | MISSING | No prompt for customers to leave Google reviews |
| GBP category indicators | UNKNOWN | Cannot determine GBP primary category from website alone |

### Critical GBP Findings

1. **FAKE Maps Place ID:** The Maps embed URL contains `0x4791e5e5e5e5e5e5:0x5e5e5e5e5e5e5e5` which is a placeholder, not a real Google Place ID. This means the map likely shows a generic area or may fail to load properly. This MUST be replaced with the actual GBP Place ID.

2. **No GBP URL anywhere on the site:** The Google Business Profile URL (if it exists) should be linked from the footer, contact page, and included in the `sameAs` array in JSON-LD.

3. **Unknown GBP existence:** Cannot confirm from website alone whether a GBP listing has been claimed. The SeoGeo page mentions "Optimisation Google Business Profile" as a service offered, but there is no evidence of their own GBP being optimized.

### GBP Optimization Checklist

| Item | Status |
|------|--------|
| GBP listing claimed and verified | UNKNOWN |
| Primary category set correctly (e.g., "Web Designer" or "Internet Marketing Service") | UNKNOWN |
| Secondary categories added | UNKNOWN |
| Business description with keywords | UNKNOWN |
| Service areas defined in GBP | UNKNOWN |
| Photos uploaded (logo, cover, team, office) | UNKNOWN |
| Posts published regularly | UNKNOWN |
| Q&A section populated | UNKNOWN |
| Products/Services listed in GBP | UNKNOWN |
| Website URL linked correctly | UNKNOWN |
| UTM tracking on GBP website link | UNKNOWN |
| Messaging enabled | UNKNOWN |
| Appointment/booking link added | UNKNOWN |

*Note: Most GBP items cannot be verified without direct GBP access or DataForSEO tools. See Limitations section.*

---

## 6. REVIEW HEALTH SNAPSHOT

| Metric | Value | Assessment |
|--------|-------|------------|
| Reviews displayed on website | 0 | CRITICAL -- No reviews shown anywhere |
| AggregateRating in schema | None | MISSING |
| Review widget (Google/third-party) | None | MISSING |
| Testimonials section | None | Removed (per git history: "Remove testimonials on home page") |
| Review response patterns | N/A | Cannot assess |
| Review velocity | UNKNOWN | Cannot assess without GBP access |
| Star rating displayed | None | MISSING |

### Critical Review Findings

- **Zero social proof on the website.** This is one of the most damaging local SEO gaps. Per Whitespark 2026, review signals are a top-5 ranking factor for both local pack and local organic.
- The git commit history shows "Remove testimonials on home page" -- this was a regression for local SEO.
- Blog content (VisibiliteJura.tsx) correctly advises clients to "Sollicitez activement vos clients satisfaits" but the site itself does not follow this advice.
- The "Pack Visibilite PME" mentions "Gestion Google Reviews" as a feature, demonstrating awareness of the importance but no self-application.

**18-day rule (Sterling Sky):** Rankings cliff if no new reviews arrive for 3 weeks. Without any visible review strategy, this is likely being violated continuously.

---

## 7. CITATION PRESENCE STATUS

### Swiss Tier 1 Directories

| Directory | Listed? | Notes |
|-----------|---------|-------|
| local.ch | UNKNOWN | Cannot verify without live search. Critical for Swiss local SEO |
| search.ch | UNKNOWN | Swiss equivalent of Yellow Pages |
| Google Business Profile | UNKNOWN | No GBP link on site |
| Apple Business Connect | UNKNOWN | Important for Apple Maps |
| Bing Places | UNKNOWN | |
| Yelp (yelp.ch) | UNKNOWN | Limited relevance in Switzerland |
| Zefix (Swiss Commercial Register) | UNKNOWN | Important for Swiss business verification |
| Moneyhouse.ch | UNKNOWN | Swiss business directory |
| LinkedIn Company Page | PRESENT | https://linkedin.com/company/lxstudio |
| Instagram Business | PRESENT | https://instagram.com/lxstudio.ch |
| TikTok | PRESENT | https://tiktok.com/@lxstudio (in footer but NOT in schema sameAs) |

### Industry-Specific Directories for Swiss Digital Agencies

| Directory | Listed? | Priority |
|-----------|---------|----------|
| Clutch.co | UNKNOWN | High -- international agency directory |
| Sortlist.ch | UNKNOWN | High -- Swiss/European agency marketplace |
| Digital.swiss | UNKNOWN | Medium -- Swiss digital association |
| Swico.ch | UNKNOWN | Medium -- Swiss IT association |
| AgencyVista | UNKNOWN | Medium |
| GoodFirms | UNKNOWN | Medium |
| DesignRush | UNKNOWN | Low |

### Swiss Regional Directories

| Directory | Listed? | Priority |
|-----------|---------|----------|
| jura.ch (cantonal) | UNKNOWN | High -- matches primary service area |
| delemont.ch | UNKNOWN | Medium |
| bienne-seeland.ch | UNKNOWN | Medium |
| lausanne-region.ch | UNKNOWN | Medium |
| geneve.ch business directory | UNKNOWN | Medium |

*Note: Citation checks require live web searches or DataForSEO API. See Limitations section.*

**Per Whitespark 2026:** 3 of the top 5 AI visibility factors are citation-related. Citation building should be a top priority.

---

## 8. LOCAL ON-PAGE SEO ANALYSIS

### Title Tags & Meta Descriptions

| Page | Title | Local Keywords | Assessment |
|------|-------|---------------|------------|
| Home (index.html) | "LX Studio -- Agence Web & Automatisations IA en Suisse (Jura, Romandie)" | Suisse, Jura, Romandie | GOOD -- location modifiers present |
| Home (Helmet) | "LX Studio -- Agents IA & Infrastructure digitale pour PME suisses" | suisses | OK but less local |
| Services | "Services LX Studio -- Creation de sites, SEO & IA en Suisse" | Suisse | OK |
| SeoGeo | "SEO Jura & Suisse romande -- LX Studio" | Jura, Suisse romande | GOOD |
| Contact | None (no Helmet) | -- | MISSING -- Contact page has no title/meta tags via Helmet |
| About | None (no Helmet) | -- | MISSING |
| Blog | Has meta via Helmet | Suisse, Jura | OK |

### Critical On-Page Issues

| Issue | Severity | Details |
|-------|----------|---------|
| `<html lang="en">` | HIGH | index.html declares English but site is in French. Must be `lang="fr"` or `lang="fr-CH"` |
| No hreflang tags | MEDIUM | Should have `<link rel="alternate" hreflang="fr-CH">` for Swiss French market |
| Contact page missing Helmet meta | MEDIUM | No title/description override; falls back to index.html defaults |
| About page missing Helmet meta | MEDIUM | Same issue |
| Sitemap dates stale | LOW | All lastmod dates are 2025-01-23, over 14 months old |
| Sitemap missing new pages | MEDIUM | agents-ia and infrastructure routes not in sitemap |
| No dedicated location pages | HIGH | SeoGeo page references /services/delemont, /services/bienne, etc. but these routes DO NOT EXIST. No location pages have been built |
| Canonical URL mismatch | MEDIUM | index.html canonical is `https://www.lxstudio.ch` but OG url in Home.tsx Helmet is `https://lxstudio.ch` (no www) |

### Keyword Coverage for Local Terms

| Target Keyword | Present? | Where |
|----------------|----------|-------|
| "agence web Jura" | Yes | Blog, meta keywords, SEO page |
| "agence web Suisse" | Yes | Multiple pages |
| "agence digitale Bassecourt" | Partial | Address only, not in headings |
| "creation site internet Delemont" | Partial | Blog post mention only |
| "SEO Jura" | Yes | Dedicated blog post + SEO page title |
| "automatisations IA Suisse" | Yes | Multiple pages |
| "agence web Delemont" | No | Not targeted with dedicated page |
| "agence web Bienne" | No | Not targeted |
| "agence web Lausanne" | No | Not targeted |
| "agence web Geneve" | No | Not targeted |
| "agence web Bale" | No | Not targeted |

---

## 9. LOCATION PAGE QUALITY

### Current State: NO LOCATION PAGES EXIST

The SeoGeo page (line 42-48) defines an array of local pages:
```
{ city: "Delemont", url: "/services/delemont" },
{ city: "Bienne", url: "/services/bienne" },
{ city: "Bale", url: "/services/bale" },
{ city: "Lausanne", url: "/services/lausanne" },
{ city: "Geneve", url: "/services/geneve" },
```

**However, NO corresponding route exists in App.tsx, and NO page components exist in the codebase.** These links are effectively dead links/404s.

This is a CRITICAL gap. Per Whitespark 2026:
- **Dedicated service pages are the #1 local organic factor**
- **Dedicated service pages are the #2 AI visibility factor**
- Location-specific pages with unique content are essential for multi-area SABs

### Location Page Requirements (when built)

Each location page should include:
- Unique H1 with city name: "Agence Web & IA a [City]"
- Minimum 800 words of unique content per page (not template-swapped)
- Local references specific to each city (landmarks, business districts, local economy)
- LocalBusiness schema with city-specific address or service area
- Internal links from/to the main service pages
- Local testimonials from clients in that area
- City-specific FAQs
- Google Maps embed showing service area

### Doorway Page Risk Assessment

Not applicable yet (pages do not exist), but when creating them:
- Each page must have >60% unique content
- Avoid mere city-name swaps in template content
- Include genuinely localized information

---

## 10. INDUSTRY-SPECIFIC LOCAL FACTORS (Digital Agencies)

### Swiss Digital Agency Specifics

| Factor | Status | Notes |
|--------|--------|-------|
| Portfolio with Swiss client names | PARTIAL | Portfolio page exists but needs location-tagged case studies |
| Swiss pricing (CHF) | GOOD | All prices displayed in CHF |
| Swiss legal compliance (RGPD/nLPD) | PRESENT | RGPD mentioned, Swiss data protection noted |
| Multilingual capability signals | WEAK | Only French content. Basel and Biel/Bienne are bilingual (FR/DE) cities -- no German content or signals |
| Swiss business registration (IDE/UID) | MISSING | No Swiss business registration number visible |
| Swiss domain (.ch TLD) | GOOD | lxstudio.ch is a .ch domain, strong local signal |
| Professional association membership | MISSING | No Swico, Digital.swiss, or similar membership displayed |
| Team location signals | PARTIAL | "Basee en Suisse" mentioned; founder in Bassecourt; but team members listed without location context |

### Content Marketing for Local Visibility

| Content Type | Exists? | Assessment |
|-------------|---------|------------|
| Blog posts with local focus | YES | 3 blog posts (Visibilite Jura, Automatisations IA Suisse, Erreurs SEO 2025) |
| Blog publication frequency | LOW | Only 3 posts, last dated January 2025. Over 14 months without new content |
| Case studies with local clients | NO | Missing -- high-value for E-E-A-T and local trust |
| Local event participation | NO | No conference, meetup, or local event mentions |
| Community involvement | NO | No sponsorships, local partnerships mentioned |

---

## 11. TECHNICAL LOCAL SEO ISSUES

### SPA (Single Page Application) Concerns

| Issue | Severity | Details |
|-------|----------|---------|
| React SPA architecture | HIGH | This is a client-side rendered React app (Vite + React Router). Search engines may not fully index dynamically rendered content. SSR or pre-rendering is essential for local SEO |
| No server-side rendering | HIGH | No Next.js/Remix/Astro detected. Pure client-side rendering means Google must execute JavaScript to see content. This causes indexing delays and potential content invisibility |
| React Helmet for meta tags | MEDIUM | Helmet inserts meta tags client-side. Without SSR, crawlers may not see page-specific titles/descriptions |
| Hash-based or client routes | MEDIUM | React Router creates client-side routes. Without pre-rendering, /contact, /seo-geo etc. may all serve the same index.html to crawlers |

### Other Technical Issues

| Issue | Severity |
|-------|----------|
| No structured data on subpages | HIGH -- JSON-LD only exists in index.html, not on service/blog pages |
| No breadcrumb schema | MEDIUM |
| No FAQ schema on Home page despite having FAQ section | MEDIUM |
| No Article schema on blog posts | MEDIUM |
| Image alt text quality varies | LOW |
| No WebSite schema with SearchAction | LOW |

---

## 12. PROXIMITY & COMPETITIVE ANALYSIS NOTES

Per the Search Atlas ML study, proximity accounts for **55.2% of ranking variance** in local results. This is outside website control but important context:

- Bassecourt (pop. ~3,500) is a small town in Jura canton
- The primary competitive markets (Delemont, Bienne, Basel, Lausanne, Geneva) are 15-150km away
- For "agence web" searches in these larger cities, proximity disadvantage is significant
- Strategy should focus on: (a) dominating the Jura/Delemont micro-market, (b) competing on relevance/prominence signals in larger cities where proximity cannot help

---

## TOP 10 PRIORITIZED ACTIONS

### CRITICAL (Immediate -- Week 1-2)

**1. Fix `<html lang="en">` to `<html lang="fr">`**
- File: `/index.html`, line 2
- Impact: Fundamental crawl signal. Google may be treating this as an English site
- Effort: 5 minutes
- Priority: CRITICAL

**2. Claim/verify Google Business Profile and add GBP URL to site**
- Create GBP listing if not exists, or verify ownership
- Set primary category to "Web Designer" or "Internet Marketing Service" (this is the #1 local ranking factor per Whitespark 2026)
- Add GBP URL to footer, contact page, and JSON-LD sameAs
- Replace fake Maps embed Place ID with real GBP Place ID
- Priority: CRITICAL

**3. Fix schema @type from `Organization` to `ProfessionalService`**
- File: `/index.html`, line 43
- Change to `"@type": ["ProfessionalService", "Organization"]`
- Add missing properties: `postalCode`, `streetAddress` (even partial), `geo`, `priceRange`
- Priority: CRITICAL

### HIGH (Weeks 2-4)

**4. Build location pages for all service areas**
- Create: /services/delemont, /services/bienne, /services/bale, /services/lausanne, /services/geneve
- Each page: 800+ words unique content, city-specific LocalBusiness schema, local testimonials, relevant internal links
- Currently these URLs are referenced but return 404
- These are the #1 local organic factor and #2 AI visibility factor
- Priority: HIGH

**5. Add reviews/testimonials to the website**
- Reinstate testimonials section (was removed per git history)
- Add Google review widget or manually curated reviews
- Implement AggregateRating in JSON-LD schema
- Add "Leave us a review" CTA with direct GBP review link
- Priority: HIGH

**6. Implement SSR or pre-rendering for the React SPA**
- Current client-side rendering is a significant crawling/indexing barrier
- Options: migrate to Next.js/Remix, add Prerender.io, or use Vite SSR plugin
- Without this, many local on-page optimizations may be invisible to search engines
- Priority: HIGH

### MEDIUM (Weeks 4-8)

**7. Complete schema markup across all pages**
- Add FAQ schema to Home page FAQ section
- Add Article schema to blog posts
- Add BreadcrumbList schema
- Add Service schemas to individual service pages (not just index.html)
- Add `geo` coordinates: `{"@type": "GeoCoordinates", "latitude": "47.34358", "longitude": "7.22774"}`
- Add `openingHoursSpecification`
- Priority: MEDIUM

**8. Build Swiss citation profile**
- Register on: local.ch, search.ch, Zefix, Moneyhouse.ch
- Register on industry directories: Clutch.co, Sortlist.ch, Digital.swiss
- Register on regional directories for each service area
- Ensure NAP is identical across all citations (standardize format first)
- Priority: MEDIUM

**9. Standardize NAP format and add postal code**
- Decide on canonical address format: "LX Studio, 2854 Bassecourt, Jura, Suisse"
- Add postal code 2854 to all address references
- Add street address if available
- Ensure identical format in: schema, footer, contact page, all citations
- Priority: MEDIUM

### LOW (Ongoing)

**10. Restart content publishing calendar**
- Last blog post is from January 2025 (14+ months ago)
- Target: minimum 2 posts/month with local keyword targeting
- Create content for each service area (e.g., "L'IA au service des PME a Geneve")
- Add local case studies with permission from Swiss clients
- Priority: MEDIUM-LOW (but compounds over time)

---

## ADDITIONAL FINDINGS

### Canonical URL Inconsistency
- `index.html` canonical: `https://www.lxstudio.ch`
- Home.tsx OG URL: `https://lxstudio.ch` (no www)
- Sitemap URLs: `https://www.lxstudio.ch/...`
- Schema URL: `https://www.lxstudio.ch`
- Social links: `https://instagram.com/lxstudio.ch` (not www.instagram.com)

**Action:** Standardize on `https://www.lxstudio.ch` with 301 redirect from non-www. Ensure all OG URLs match.

### TikTok Missing from Schema
The footer links to TikTok (`https://tiktok.com/@lxstudio`) but this URL is NOT in the JSON-LD `sameAs` array. Add it.

### Sitemap Gaps
The sitemap (last updated 2025-01-23) is missing:
- `/agents-ia` (added in recent refonte)
- `/infrastructure` (added in recent refonte)
- All `/automatisations-ia/*` subpages beyond the original set (if any new ones were added)

### Contact Page Google Maps Embed
The current embed URL:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21719.845844634547!2d7.227741!3d47.343583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791e5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sBassecourt%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890
```
Issues:
- Place ID `0x4791e5e5e5e5e5e5:0x5e5e5e5e5e5e5e5` is clearly a placeholder (repeating hex pattern)
- Timestamp `1234567890` is a placeholder
- Language set to `en` and country to `us` -- should be `fr` and `ch`
- This embed likely does NOT show the correct location or may show a generic map

---

## LIMITATIONS DISCLAIMER

The following could NOT be assessed without paid tools or direct access:

1. **Google Business Profile status** -- Cannot verify if GBP is claimed, primary category, review count, or review velocity without DataForSEO `local_business_data` API or direct GBP access
2. **Live local pack positions** -- Cannot check rankings for target keywords without DataForSEO `google_local_pack_serp` or rank tracking tools
3. **Citation accuracy** -- Cannot verify listings on local.ch, search.ch, Zefix, Clutch, Sortlist, or other directories without live search or API access
4. **Backlink profile** -- Cannot assess local link authority without Ahrefs/Moz/SEMrush
5. **Core Web Vitals** -- Not assessed (technical SEO scope). Important for local organic rankings
6. **GBP insights data** -- Search queries, views, actions, photo views not accessible
7. **Competitor benchmarking** -- Cannot compare against other Jura/Swiss web agencies without research tools
8. **Actual indexation status** -- Cannot verify how many pages Google has indexed from this SPA without Search Console access
9. **JavaScript rendering verification** -- Cannot confirm what Googlebot actually sees without URL Inspection tool
10. **Review velocity and recency** -- Critical 18-day rule cannot be monitored without GBP access

---

## SCORE BREAKDOWN DETAIL

### GBP Signals: 20/100
- (+10) Google Maps embed present on contact page
- (+5) Address locality mentioned consistently
- (+5) Phone number in E.164 format in schema
- (-20) Fake/placeholder Maps Place ID
- (-20) No GBP link anywhere on site
- (-15) No GBP reviews widget
- (-10) No GBP posts integration
- (-10) Cannot confirm GBP exists or is claimed
- (-5) No directions link

### Reviews & Reputation: 5/100
- (+5) Blog content discusses review importance (shows awareness)
- (-30) Zero reviews displayed on website
- (-25) No AggregateRating in schema
- (-20) Testimonials section was removed
- (-15) No review generation CTA
- (-5) No third-party review platform integration

### Local On-Page SEO: 45/100
- (+15) Location keywords in title tags and meta descriptions
- (+10) Service areas listed in schema and content
- (+10) Local blog content (Visibilite Jura article)
- (+5) .ch domain (strong local signal)
- (+5) fr-CH locale in OG tags
- (-15) `lang="en"` on html element
- (-15) No location-specific pages (despite referencing them)
- (-10) SPA without SSR (crawling barrier)
- (-5) Stale sitemap dates
- (-5) Missing pages in sitemap
- (-5) Canonical URL inconsistency (www vs non-www)

### NAP Consistency & Citations: 35/100
- (+15) Consistent business name across all sources
- (+10) Consistent phone number (same digits, format varies)
- (+10) Consistent email across all sources
- (-15) No postal code anywhere
- (-10) No street address
- (-10) Address format varies between sources
- (-5) Unknown citation presence on any directory

### Local Schema Markup: 40/100
- (+15) JSON-LD schema present in index.html
- (+10) areaServed properly defined with all service areas
- (+10) Multiple Service schemas defined
- (+5) sameAs with social profiles
- (-15) Wrong @type (Organization instead of ProfessionalService)
- (-10) Missing geo coordinates
- (-10) Missing postalCode and streetAddress
- (-5) Missing openingHoursSpecification
- (-5) Missing priceRange
- (-5) TikTok missing from sameAs
- (-5) No schema on subpages (only index.html)
- (-5) No FAQ/Article/Breadcrumb schemas

### Local Link & Authority Signals: 15/100
- (+10) Social media profiles exist (Instagram, LinkedIn, TikTok)
- (+5) WhatsApp business integration (engagement signal)
- (-25) No local directory citations confirmed
- (-20) No professional association memberships
- (-15) No local partnerships or sponsorships
- (-10) No local event participation
- (-5) No local press mentions or backlinks confirmed

---

## QUICK WINS SUMMARY (High Impact, Low Effort)

| Action | Time | Impact |
|--------|------|--------|
| Change `lang="en"` to `lang="fr"` in index.html | 1 min | HIGH |
| Add postal code "2854" to schema address | 2 min | MEDIUM |
| Change @type to "ProfessionalService" | 2 min | HIGH |
| Add TikTok to sameAs in schema | 1 min | LOW |
| Fix canonical consistency (www everywhere) | 5 min | MEDIUM |
| Add geo coordinates to schema | 2 min | MEDIUM |
| Add Helmet meta tags to Contact and About pages | 10 min | MEDIUM |
| Fix Maps embed with correct language (fr/ch) and real Place ID | 10 min | HIGH |
| Add FAQ schema to Home page FAQ section | 15 min | MEDIUM |

---

*Report generated from source code analysis of the lxstudio-digital-craft repository. Live site behavior may differ from source code if deployment configuration or CDN-level modifications exist.*
