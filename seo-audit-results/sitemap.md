# Sitemap Audit Report -- lxstudio.ch

**Date:** 2026-03-25
**Domain:** https://www.lxstudio.ch
**Sitemap URL:** https://www.lxstudio.ch/sitemap.xml
**Source file:** `/Users/tanguylachat/lxstudio-digital-craft/public/sitemap.xml`
**Framework:** React SPA (Vite + react-router-dom) -- client-side rendering only

---

## Overall Score: 38 / 100

**Rating: POOR -- Requires significant improvements**

---

## Validation Summary

| Check | Result | Severity | Details |
|-------|--------|----------|---------|
| XML well-formedness | PASS | -- | Valid XML with correct encoding declaration |
| Namespace declaration | PASS | -- | Correct `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` |
| Referenced in robots.txt | PASS | -- | `Sitemap: https://www.lxstudio.ch/sitemap.xml` present |
| URL count within limit | PASS | -- | 28 URLs (limit: 50,000) |
| File size within limit | PASS | -- | ~5.5 KB (limit: 50 MB) |
| Sitemap index needed | N/A | -- | Not needed at 28 URLs |
| All lastmod dates identical | **FAIL** | High | Every URL has `2025-01-23` -- Google treats this as unreliable |
| Deprecated tags present | **FAIL** | Info | `<changefreq>` and `<priority>` on all 28 entries |
| Missing routed pages | **FAIL** | Critical | 2 pages exist in router but missing from sitemap |
| Domain consistency | PASS | -- | All URLs use `https://www.` consistently |
| Trailing slash consistency | PASS | -- | Only homepage has trailing slash (correct) |
| SPA rendering for Googlebot | **FAIL** | Critical | No SSR/prerendering -- sitemap URLs may return empty HTML shells |

---

## Critical Finding #1: SPA Without Server-Side Rendering

The site is a React SPA built with Vite. The `dist/` directory contains only a single `index.html`. Every URL in the sitemap returns the same HTML shell and relies entirely on JavaScript execution to render content. While Googlebot can execute JS, there are real risks:

- Googlebot's JS rendering queue introduces delays (days to weeks before content is indexed)
- Some search engines (Bing, Yandex) have limited JS rendering
- The sitemap declares 28 distinct crawlable pages, but they all serve identical initial HTML
- `lastmod` dates are meaningless when the HTML payload is identical for every URL

**Recommendation:** Implement pre-rendering (e.g., `vite-plugin-ssr`, `prerender-spa-plugin`) or migrate to an SSR-capable framework (Next.js, Remix, Astro).

---

## Critical Finding #2: 2 Pages Missing From Sitemap

These routes are defined in `src/App.tsx` but absent from the sitemap:

| Missing URL | Route | Component |
|-------------|-------|-----------|
| `https://www.lxstudio.ch/agents-ia` | `/agents-ia` | `AgentsIA.tsx` |
| `https://www.lxstudio.ch/infrastructure` | `/infrastructure` | `Infrastructure.tsx` |

---

## High Finding: All lastmod Dates Are Identical

Every single one of the 28 URLs has `<lastmod>2025-01-23</lastmod>`. This is the date the sitemap was generated, not actual content modification dates. When Google detects uniform lastmod across all URLs, it ignores the signal entirely for the domain. The sitemap has not been updated in over 14 months.

---

## Info Finding: Deprecated Tags Throughout

All 28 entries include `<changefreq>` and `<priority>`. Google has publicly confirmed it ignores both.

---

## URL Inventory

**Total routes in App.tsx:** 30 (excluding the `*` 404 handler)
**Total URLs in sitemap:** 28
**Missing from sitemap:** 2

### Breakdown by Section

| Section | Count | Notes |
|---------|-------|-------|
| Core pages (home, services, about, contact, etc.) | 8 | All present |
| Industry automation pages (`/automatisations-ia/*`) | 17 | All present |
| Blog pages | 4 (index + 3 posts) | All present |
| Legal pages (privacy, terms) | 2 | All present |
| New pages (agents-ia, infrastructure) | 0 of 2 | **MISSING** |

---

## Quality Gate: Industry Pages (Doorway Risk)

17 pages under `/automatisations-ia/` -- below the 30-page WARNING threshold but at risk if expanded. Ensure each page has 60%+ unique content.

---

## Prioritized Action Items

### P0 -- Critical
1. **Add missing pages to sitemap** -- `/agents-ia` and `/infrastructure`
2. **Implement pre-rendering or SSR** -- Empty HTML shells undermine sitemap purpose

### P1 -- High
3. **Update lastmod dates to real values** -- Use actual content modification dates

### P2 -- Medium
4. **Remove deprecated tags** -- Strip `<changefreq>` and `<priority>`
5. **Enhance robots.txt** -- Add disallow rules for non-content paths

### P3 -- Low
6. **Automate sitemap generation** -- Integrate into build pipeline
7. **Audit industry pages for unique content** -- Verify 60%+ unique content per page
