# Technical SEO Audit Report -- lxstudio.ch

**Audit Date:** 2026-03-25
**Auditor:** Claude Opus 4.6 (Automated Source-Code Analysis)
**Target:** https://lxstudio.ch (and https://www.lxstudio.ch)
**Framework:** React 18 + Vite (Client-Side Rendered SPA)
**Hosting:** Likely Vercel/Lovable (inferred from lovable-tagger dev dependency)

---

## Overall Technical SEO Score: 52/100

| Category                    | Score | Status         |
| --------------------------- | ----- | -------------- |
| 1. Crawlability             | 6/10  | Needs Work     |
| 2. Indexability              | 4/10  | Critical       |
| 3. Security                  | 5/10  | Needs Work     |
| 4. URL Structure             | 8/10  | Good           |
| 5. Mobile Optimization       | 7/10  | Good           |
| 6. Core Web Vitals           | 4/10  | Critical       |
| 7. Structured Data           | 6/10  | Needs Work     |
| 8. JavaScript Rendering      | 2/10  | Critical       |
| 9. IndexNow Protocol         | 0/10  | Not Implemented|

---

## CRITICAL ISSUES (Must Fix Immediately)

### C1. Pure Client-Side Rendering (CSR) -- No SSR/Prerendering
**Priority:** CRITICAL
**Category:** 8. JavaScript Rendering / 2. Indexability
**Impact:** All pages except the homepage shell are invisible to search crawlers

**Finding:** The entire site is a React SPA using `react-router-dom` with `BrowserRouter`. The built HTML (`dist/index.html`) contains only:
```html
<div id="root"></div>
<script type="module" crossorigin src="/assets/index-CPdXTZRm.js"></script>
```

All page content (30+ routes) is rendered entirely by JavaScript at runtime. Google's renderer will eventually process this, but:
- Googlebot's rendering queue adds delays of hours to weeks
- Bing, Yandex, Baidu, and other crawlers have limited JS rendering
- Social media crawlers (Facebook, LinkedIn, Twitter) will not execute JS
- AI crawlers (GPTBot, ClaudeBot, etc.) typically do not render JS

**Evidence:**
- `/src/main.tsx`: `createRoot(document.getElementById("root")!).render(<App />);`
- `/src/App.tsx`: All 30+ routes use client-side `<Routes>` with `<Route>` components
- No SSR framework (Next.js, Remix, Astro) detected
- No prerendering plugin (vite-plugin-ssr, react-snap, prerender-spa-plugin) in `package.json`
- `react-helmet` is used instead of `react-helmet-async` (react-helmet does not support SSR properly and is unmaintained)

**Recommendation:**
1. **Best option:** Migrate to a framework with SSR support:
   - **Astro** with React islands (best for a mostly-static marketing site)
   - **Next.js** with App Router (SSG/SSR hybrid)
   - **Remix** (full SSR)
2. **Minimum viable fix:** Add a prerendering step to the Vite build:
   - Install `vite-plugin-ssr` or use `react-snap` to generate static HTML for all routes at build time
   - This produces real HTML that crawlers can index without JS execution

### C2. html lang="en" on a French-Language Site
**Priority:** CRITICAL
**Category:** 2. Indexability
**Impact:** Sends incorrect language signal to all search engines

**Finding:** In `index.html` line 2:
```html
<html lang="en">
```
The site content is entirely in French (`fr-CH`). The `<meta name="language" content="fr-CH" />` tag is present but non-standard and does not override the `lang` attribute. The `lang` attribute on `<html>` is the authoritative signal for document language.

**Recommendation:**
Change `index.html` line 2 to:
```html
<html lang="fr">
```
Or more specifically: `<html lang="fr-CH">` for Swiss French.

### C3. Canonical URL Inconsistency (www vs non-www)
**Priority:** CRITICAL
**Category:** 2. Indexability
**Impact:** Potential duplicate content / split link equity between two versions

**Finding:** Mixed usage of `www.lxstudio.ch` and `lxstudio.ch` across the site:
- `index.html` canonical tag: `https://www.lxstudio.ch` (with www)
- `robots.txt` Sitemap directive: `https://www.lxstudio.ch/sitemap.xml` (with www)
- `sitemap.xml` all URLs: `https://www.lxstudio.ch/...` (with www)
- `Home.tsx` Helmet og:url: `https://lxstudio.ch` (WITHOUT www)
- JSON-LD Organization url: `https://www.lxstudio.ch` (with www)

The Helmet component in `Home.tsx` sets `og:url` to `https://lxstudio.ch` (no www), conflicting with the canonical in the HTML shell.

**Recommendation:**
1. Pick one canonical domain (recommend `https://www.lxstudio.ch`)
2. Set up a 301 redirect from `lxstudio.ch` to `www.lxstudio.ch` (or vice versa) at the hosting/DNS level
3. Fix `Home.tsx` line 649 to use `https://www.lxstudio.ch`
4. Ensure ALL canonical tags, og:url tags, JSON-LD urls, and sitemap entries use the same domain consistently

---

## HIGH PRIORITY ISSUES

### H1. Missing Canonical Tags on Most Pages
**Priority:** HIGH
**Category:** 2. Indexability
**Impact:** Only 3 out of 30+ pages have canonical tags

**Finding:** Canonical tags found only on:
- `index.html`: `<link rel="canonical" href="https://www.lxstudio.ch" />` (homepage shell)
- `Privacy.tsx`: `<link rel="canonical" href="https://www.lxstudio.ch/privacy" />`
- `Terms.tsx`: `<link rel="canonical" href="https://www.lxstudio.ch/terms" />`

Missing on ALL other pages: `/agents-ia`, `/infrastructure`, `/services`, `/automatisations-ia`, `/seo-geo`, `/blog`, `/blog/*`, `/automatisations-ia/*`, `/portfolio`, `/about`, `/contact`.

**Recommendation:**
Add `<link rel="canonical" href="https://www.lxstudio.ch/{path}" />` via Helmet on every page component. Example for AgentsIA.tsx:
```jsx
<Helmet>
  <link rel="canonical" href="https://www.lxstudio.ch/agents-ia" />
  ...
</Helmet>
```

### H2. Sitemap Stale and Incomplete
**Priority:** HIGH
**Category:** 1. Crawlability
**Impact:** Crawlers receive outdated information; some routes are missing

**Finding:**
- All `<lastmod>` dates are `2025-01-23` -- over 14 months old. The site has clearly been updated since (the `refonte` commit is recent).
- **Missing from sitemap:** `/agents-ia` and `/infrastructure` (both exist in App.tsx routing)
- Sitemap includes `/services` but the nav no longer links to it (Header.tsx nav items: Accueil, Agents IA, Infrastructure, Blog, Contact). Services may be an orphan page.

**Recommendation:**
1. Update all `<lastmod>` dates to reflect actual last modification
2. Add `/agents-ia` and `/infrastructure` to sitemap.xml
3. Automate sitemap generation (e.g., `vite-plugin-sitemap` or a build script) to keep it in sync with routes
4. Review whether `/services` should be removed or redirected to `/agents-ia`

### H3. Robots.txt Missing AI Crawler Directives
**Priority:** HIGH
**Category:** 1. Crawlability
**Impact:** No control over AI crawlers scraping site content

**Finding:** Current robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://www.lxstudio.ch/sitemap.xml
```

No directives for AI crawlers. As a digital agency, you should explicitly manage these.

**Recommendation:**
Add directives for known AI crawlers. Example:
```
User-agent: *
Allow: /
Sitemap: https://www.lxstudio.ch/sitemap.xml

# AI Crawlers - allow for GEO-SEO visibility
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

# Block scraping bots
User-agent: Bytespider
Disallow: /

User-agent: PetalBot
Disallow: /
```

### H4. Three.js Aurora Background -- Major LCP/Bundle Impact
**Priority:** HIGH
**Category:** 6. Core Web Vitals (LCP)
**Impact:** ~489KB JavaScript chunk loaded for visual effect on desktop

**Finding:** The `AuroraBackground.tsx` component is lazy-loaded but still represents a ~489KB chunk (`AuroraBackground-BNGLVZbH.js`). It uses Three.js with a custom WebGL fragment shader running 35 iterations per pixel per frame. While lazy-loaded on desktop only (mobile gets a CSS fallback), this:
- Adds significant download weight (489KB for a background effect)
- Competes with the main thread during hero section rendering
- The Three.js library itself is bundled (three.js is ~600KB minified)
- GPU-intensive shader runs continuously via `requestAnimationFrame`

**Recommendation:**
1. Consider replacing with a CSS-only or lightweight Canvas2D animation
2. If Three.js is kept, ensure the chunk is loaded with low priority and does not block LCP
3. Add `loading="lazy"` behavior by deferring the Three.js init until after LCP fires
4. Consider using `requestIdleCallback` or `IntersectionObserver` to start the animation

### H5. Render-Blocking Font Loads (2 External Font Sources)
**Priority:** HIGH
**Category:** 6. Core Web Vitals (LCP)
**Impact:** Two external font sources delay text rendering

**Finding:** In `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif..." rel="stylesheet" />
<link href="https://api.fontshare.com/v2/css?f[]=satoshi..." rel="stylesheet" />
```

Two separate external font services (Google Fonts + Fontshare) are loaded as render-blocking stylesheets. Neither uses `<link rel="preload">` or `font-display: swap` enforcement. Google Fonts does include `display=swap` in the URL which is good, but Fontshare also includes `display=swap`.

However, having two external font sources doubles the DNS resolution + connection overhead.

**Recommendation:**
1. Self-host all fonts (download WOFF2 files, serve from `/fonts/`) to eliminate external requests
2. If self-hosting is not possible, add `<link rel="preload">` for the most critical font files
3. Add explicit `font-display: swap` in CSS as a fallback
4. Consider reducing font variations: currently loading Instrument Serif (2 variants), JetBrains Mono (4 weights), and Satoshi (3 weights) = 9 font files minimum

### H6. No Preload/Fetchpriority for LCP Element
**Priority:** HIGH
**Category:** 6. Core Web Vitals (LCP)
**Impact:** The hero section's main text/content has no prioritization hints

**Finding:** No `<link rel="preload">` or `fetchpriority="high"` attributes found anywhere in the codebase. The hero section content is pure text (which is good for LCP), but the logo image in the hero (`logo-emblem.png`) has no preload hint. Blog pages use large Unsplash hero images with no preload or fetchpriority.

**Recommendation:**
1. Add `fetchpriority="high"` to the hero logo image
2. For blog pages, add `<link rel="preload" as="image" href="...">` for the hero image
3. Add `<link rel="preload" as="font" ...>` for the primary heading font

---

## MEDIUM PRIORITY ISSUES

### M1. react-helmet Is Deprecated -- Use react-helmet-async
**Priority:** MEDIUM
**Category:** 2. Indexability / 8. JavaScript Rendering
**Impact:** react-helmet is unmaintained and has known issues with React 18 concurrent mode

**Finding:** `package.json` includes `"react-helmet": "^6.1.0"`. This library is unmaintained (last release 2020, last commit 2020). It does not support:
- React 18 concurrent features
- Server-side rendering (critical for future SSR migration)
- Thread-safe Helmet contexts

**Recommendation:**
Replace with `react-helmet-async` which is actively maintained and supports React 18:
```
npm uninstall react-helmet
npm install react-helmet-async
```
Wrap App in `<HelmetProvider>` and update imports.

### M2. OG Image Hosted on External gpt-engineer Storage
**Priority:** MEDIUM
**Category:** 2. Indexability / Social Sharing
**Impact:** Social preview image depends on third-party storage that could be deprecated

**Finding:** In `index.html`:
```html
<meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/...lx studio.PNG">
```

Issues:
1. Hosted on `storage.googleapis.com/gpt-engineer-file-uploads/` -- not a permanent, controlled URL
2. Filename contains a space (`lx studio.PNG`) which can cause encoding issues
3. PNG format with uppercase extension is unusual
4. Only the homepage shell has OG images; page-specific Helmet components do not set `og:image`

**Recommendation:**
1. Download the image, optimize it (recommend 1200x630 JPG), rename it properly
2. Host it at `https://www.lxstudio.ch/og-image.jpg` (self-hosted)
3. Add page-specific OG images via Helmet on key pages

### M3. Missing Structured Data: FAQPage Schema
**Priority:** MEDIUM
**Category:** 7. Structured Data
**Impact:** FAQ sections on homepage and /agents-ia will not generate FAQ rich results

**Finding:** Both the homepage (`Home.tsx`) and `/agents-ia` (`AgentsIA.tsx`) have detailed FAQ sections with Accordion UI. However, no `FAQPage` JSON-LD schema is present anywhere. The FAQ content is only rendered client-side.

**Recommendation:**
Add FAQPage structured data. Since the site is CSR, this must go in `index.html` or be injected via Helmet. Example for the homepage:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien de temps pour deployer un agent ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 3 et 7 jours selon la complexite..."
      }
    }
  ]
}
```

### M4. Missing Structured Data: BreadcrumbList
**Priority:** MEDIUM
**Category:** 7. Structured Data
**Impact:** No breadcrumb rich results in SERPs

**Finding:** A `BreadcrumbList` UI component exists in `src/components/ui/breadcrumb.tsx` but is not used anywhere in the page components. No BreadcrumbList JSON-LD schema exists.

**Recommendation:**
1. Implement visual breadcrumbs on all sub-pages (especially `/automatisations-ia/*` and `/blog/*`)
2. Add BreadcrumbList JSON-LD for each page hierarchy

### M5. Missing Structured Data: Article Schema for Blog Posts
**Priority:** MEDIUM
**Category:** 7. Structured Data
**Impact:** Blog posts will not generate Article rich results

**Finding:** Three blog posts exist (`VisibiliteJura.tsx`, `AutomatisationsIASuisse.tsx`, `ErreursSEO2025.tsx`) with proper titles, dates, and content. However, none include `Article` JSON-LD schema.

**Recommendation:**
Add Article structured data to each blog post via Helmet:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "2025-01-15",
  "author": {"@type": "Organization", "name": "LX Studio"},
  "publisher": {"@type": "Organization", "name": "LX Studio"}
}
```

### M6. JSON-LD Organization Schema -- logo.png Does Not Exist
**Priority:** MEDIUM
**Category:** 7. Structured Data
**Impact:** Invalid logo reference in Organization schema

**Finding:** In `index.html` JSON-LD:
```json
"logo": "https://www.lxstudio.ch/logo.png"
```
But `public/` only contains `favicon.ico` and `placeholder.svg`. The actual logo files are in `src/assets/` as `logo-emblem.png`, `logo-monogram.png`, and `logo-text.png`. After Vite build, these get hashed filenames like `logo-emblem-XXXXX.png`.

**Recommendation:**
1. Place a `logo.png` file in the `public/` directory so it is available at `https://www.lxstudio.ch/logo.png`
2. Or update the JSON-LD to reference an existing, stable URL

### M7. Missing Helmet/Meta on Several Pages
**Priority:** MEDIUM
**Category:** 2. Indexability
**Impact:** Some pages have no title/description override

**Finding:** The following pages do NOT use Helmet for SEO meta:
- `About.tsx` -- no Helmet, no title/description
- `Contact.tsx` -- no Helmet, no title/description
- `NotFound.tsx` -- no Helmet, should have `<meta name="robots" content="noindex" />`
- All 19 `/automatisations-ia/*` sub-pages use `AutomationMetierLayout.tsx` which has no Helmet

These pages will all display the default `index.html` title: "LX Studio -- Agence Web & Automatisations IA en Suisse (Jura, Romandie)" which causes duplicate title issues.

**Recommendation:**
Add unique `<Helmet>` blocks with title, description, and canonical to:
- About.tsx
- Contact.tsx
- NotFound.tsx (with `<meta name="robots" content="noindex, nofollow" />`)
- AutomationMetierLayout.tsx (accept title/description as props)

### M8. CLS Risk -- Hero Background Swap (Desktop)
**Priority:** MEDIUM
**Category:** 6. Core Web Vitals (CLS)
**Impact:** Content layout may shift when AuroraBackground loads

**Finding:** In `Home.tsx` HeroSection, the component conditionally renders:
```jsx
{!isMobile ? (
  <Suspense fallback={<div className="absolute inset-0 gradient-mesh-hero z-0" />}>
    <AuroraBackground />
  </Suspense>
) : (
  <div className="absolute inset-0 z-0 aurora-fallback" />
)}
```
The `useIsMobile()` hook starts with `false` (line 33: `useState(false)`) then updates to `true` on mobile after `useEffect`. This means on mobile, the Three.js component briefly starts loading before being replaced by the CSS fallback, causing unnecessary work. On desktop, the Suspense fallback swap could cause visual jank.

**Recommendation:**
1. Use `matchMedia` for initial state or SSR-safe detection
2. Use CSS `display: none` at the media query level instead of conditional rendering
3. Alternatively, initialize `isMobile` from `window.innerWidth` in `useState`:
   ```js
   const [isMobile, setIsMobile] = useState(() =>
     typeof window !== 'undefined' ? window.innerWidth < 768 : false
   );
   ```

---

## LOW PRIORITY ISSUES

### L1. Sitemap Uses Deprecated changefreq and priority
**Priority:** LOW
**Category:** 1. Crawlability
**Impact:** Google ignores these attributes; adds noise

**Finding:** All sitemap entries include `<changefreq>` and `<priority>` tags. Google has officially confirmed these are ignored. They add unnecessary bytes to the sitemap.

**Recommendation:**
Remove `<changefreq>` and `<priority>`. Keep only `<loc>` and `<lastmod>` (with accurate dates).

### L2. Blog Hero Images from Unsplash -- External Dependency
**Priority:** LOW
**Category:** 6. Core Web Vitals (LCP) / Reliability
**Impact:** External images add latency and create dependency on third-party service

**Finding:** Blog posts load hero images from Unsplash:
```
https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000
```
These are large (w=2000), external, and have no `loading="lazy"` on the hero (above-the-fold) images, nor `fetchpriority="high"`.

**Recommendation:**
1. Download, optimize (WebP/AVIF), and self-host blog hero images
2. Add `fetchpriority="high"` to above-the-fold hero images
3. Use `srcset` and `sizes` attributes for responsive image serving

### L3. Missing hreflang Tags
**Priority:** LOW
**Category:** 2. Indexability
**Impact:** Minor for a single-language site, but relevant for Swiss market

**Finding:** No `hreflang` tags present. Since the site targets Swiss French specifically (`fr-CH` locale), and Switzerland has 4 official languages, adding hreflang could help with regional targeting.

**Recommendation:**
If the site only has French content, add a self-referencing hreflang:
```html
<link rel="alternate" hreflang="fr-CH" href="https://www.lxstudio.ch/" />
<link rel="alternate" hreflang="x-default" href="https://www.lxstudio.ch/" />
```

### L4. Accessibility Concerns Affecting SEO
**Priority:** LOW
**Category:** 5. Mobile Optimization
**Impact:** Screen readers and accessibility crawlers may have issues

**Finding:**
- Header mobile menu button has `aria-label="Toggle menu"` (good)
- WhatsApp button has `aria-label` (good)
- Footer social links have `aria-label` (good)
- However, many interactive elements lack ARIA attributes
- Skip-to-content link is absent

**Recommendation:**
Add a skip-to-content link at the top of the page:
```html
<a href="#main-content" class="sr-only focus:not-sr-only">Aller au contenu principal</a>
```

### L5. Contact Page Missing Helmet
**Priority:** LOW
**Category:** 2. Indexability
**Impact:** Contact page has no unique title or description

**Finding:** `Contact.tsx` has no `<Helmet>` component. The Google Maps iframe uses a placeholder embed ID (`0x4791e5e5e5e5e5e5`).

**Recommendation:**
1. Add Helmet with title "Contact LX Studio -- Agence IA Bassecourt, Jura" and appropriate description
2. Fix the Google Maps embed with the correct place ID for Bassecourt

### L6. Missing Open Graph Image on Subpages
**Priority:** LOW
**Category:** Social Sharing
**Impact:** Social shares of subpages will use default/no image

**Finding:** Only the `index.html` shell has an `og:image`. Individual pages via Helmet either override it (Home.tsx does not set og:image) or don't set it at all (most pages).

**Recommendation:**
Create a default OG image and add page-specific ones for key pages (agents-ia, blog posts).

---

## DETAILED CATEGORY ANALYSIS

### 1. Crawlability (6/10)

| Check                        | Status | Notes                                          |
| ---------------------------- | ------ | ---------------------------------------------- |
| robots.txt exists            | PASS   | Present at /public/robots.txt                  |
| robots.txt Allow: /          | PASS   | Correctly allows all crawlers                  |
| Sitemap reference            | PASS   | Referenced in robots.txt                       |
| Sitemap XML valid            | PASS   | Well-formed XML with 29 URLs                   |
| Sitemap dates current        | FAIL   | All dates show 2025-01-23 (14+ months stale)   |
| Sitemap complete             | FAIL   | Missing /agents-ia and /infrastructure          |
| AI crawler directives        | FAIL   | No GPTBot/ClaudeBot/etc. directives            |
| Crawl budget optimization    | WARN   | 19 /automatisations-ia/* pages may dilute focus |
| meta robots                  | PASS   | Homepage has "index, follow"                   |

### 2. Indexability (4/10)

| Check                        | Status | Notes                                          |
| ---------------------------- | ------ | ---------------------------------------------- |
| Canonical tags               | FAIL   | Only 3 of 30+ pages have canonical tags        |
| html lang attribute          | FAIL   | Set to "en" instead of "fr" or "fr-CH"         |
| Unique page titles           | FAIL   | ~20 pages have no Helmet = duplicate titles     |
| Unique meta descriptions     | FAIL   | ~20 pages missing descriptions                 |
| noindex on 404               | FAIL   | NotFound.tsx has no noindex directive           |
| Content visible to crawlers  | FAIL   | CSR-only; no static HTML content               |
| Canonical consistency        | FAIL   | www vs non-www conflict                        |
| Duplicate content risk       | WARN   | www/non-www may create duplicates              |
| hreflang                     | WARN   | None present (single language, low priority)   |

### 3. Security (5/10)

| Check                        | Status | Notes                                          |
| ---------------------------- | ------ | ---------------------------------------------- |
| HTTPS                        | PASS   | All URLs reference https://                    |
| Mixed content                | PASS   | No http:// resource references found           |
| External resource integrity  | WARN   | No SRI hashes on external font stylesheets     |
| HSTS header                  | N/A    | Cannot verify from source (hosting-level)      |
| X-Content-Type-Options       | N/A    | Cannot verify from source (hosting-level)      |
| X-Frame-Options              | N/A    | Cannot verify from source (hosting-level)      |
| CSP header                   | N/A    | Cannot verify from source (hosting-level)      |
| rel="noopener noreferrer"    | PASS   | External links in Footer use these attributes  |

*Note: Security headers must be verified via live HTTP response. Since this audit is source-code-based, hosting-level headers are marked N/A. Recommend testing with securityheaders.com.*

### 4. URL Structure (8/10)

| Check                        | Status | Notes                                          |
| ---------------------------- | ------ | ---------------------------------------------- |
| Clean URLs                   | PASS   | No query parameters, clean paths               |
| Lowercase URLs               | PASS   | All routes are lowercase                       |
| Descriptive slugs            | PASS   | /automatisations-ia/cabinet-medical etc.       |
| French-friendly URLs         | PASS   | Accented chars avoided, readable French slugs  |
| URL depth                    | PASS   | Max 2 levels (/automatisations-ia/X)           |
| No trailing slashes          | PASS   | Consistent no-trailing-slash pattern            |
| 404 handling                 | PASS   | Catch-all route `path="*"` renders NotFound    |
| SPA routing fallback         | WARN   | Requires hosting config for SPA fallback       |

### 5. Mobile Optimization (7/10)

| Check                        | Status | Notes                                          |
| ---------------------------- | ------ | ---------------------------------------------- |
| Viewport meta tag            | PASS   | `width=device-width, initial-scale=1.0`        |
| Responsive design            | PASS   | Tailwind CSS with md:/lg: breakpoints throughout|
| Mobile navigation            | PASS   | Hamburger menu with proper toggle              |
| Touch targets                | PASS   | Buttons use adequate padding (py-2.5+)         |
| Mobile-first design          | PASS   | Base classes target mobile, md: for desktop    |
| Font scaling                 | PASS   | Text sizes responsive (text-sm md:text-base)   |
| Three.js disabled on mobile  | PASS   | CSS fallback on mobile < 768px                 |
| useIsMobile initialization   | WARN   | Starts false, flashes on mobile (M8)           |

### 6. Core Web Vitals (4/10)

| Metric | Risk Level | Notes                                               |
| ------ | ---------- | --------------------------------------------------- |
| LCP    | HIGH RISK  | Three.js 489KB chunk, 2 external font sources, no preloads |
| INP    | MEDIUM     | React re-renders, GSAP animations, Accordion state  |
| CLS    | MEDIUM     | Suspense fallback swap, mobile detection flash      |

**LCP Concerns:**
- Main JS bundle + Three.js chunk = likely 1MB+ JS to parse on desktop
- Two external font sources (fonts.googleapis.com + api.fontshare.com) block rendering
- No `<link rel="preload">` for any critical resources
- No `fetchpriority` attributes on any images
- Hero images on blog pages are external (Unsplash), large (w=2000), unoptimized

**INP Concerns:**
- React 18 without concurrent features (no `useTransition`, `useDeferredValue`)
- Accordion components with state changes
- GSAP library included (animation overhead)
- Multiple event listeners (`resize` in useIsMobile, AuroraBackground)

**CLS Concerns:**
- Suspense boundary in hero swaps fallback div for Three.js canvas
- Images in AutomationMetierLayout have explicit dimensions via CSS (`h-[400px]`) -- good
- Blog hero images have `h-[500px]` -- good for preventing layout shift
- Font loading could cause FOUT (flash of unstyled text)

### 7. Structured Data (6/10)

| Schema Type   | Present | Valid | Notes                                    |
| ------------- | ------- | ----- | ---------------------------------------- |
| Organization  | YES     | WARN  | logo URL points to non-existent file     |
| Service (x3)  | YES     | PASS  | Three service schemas for main offerings |
| FAQPage       | NO      | --    | FAQ content exists but no schema         |
| Article       | NO      | --    | Blog posts exist but no schema           |
| BreadcrumbList| NO      | --    | Component exists but unused              |
| LocalBusiness | NO      | --    | Should be added for local SEO            |
| WebSite       | NO      | --    | Missing sitelinks searchbox opportunity  |

**Organization Schema Issues:**
- `"logo": "https://www.lxstudio.ch/logo.png"` -- file does not exist in public/
- Missing `postalCode` in address
- Missing `foundingDate`
- `areaServed` uses plain strings instead of `Place` or `AdministrativeArea` types

### 8. JavaScript Rendering (2/10)

| Check                              | Status | Notes                                    |
| ---------------------------------- | ------ | ---------------------------------------- |
| SSR/SSG support                    | FAIL   | Pure CSR application                     |
| Pre-rendering                      | FAIL   | No pre-rendering configured              |
| Static HTML content                | FAIL   | Only `<div id="root"></div>` in HTML     |
| Critical CSS inlined               | FAIL   | CSS loaded as external stylesheet        |
| JS bundle splitting                | PASS   | AuroraBackground is lazy-loaded          |
| Dynamic imports                    | PASS   | Three.js code-split into separate chunk  |
| react-helmet for meta management   | WARN   | Works for Googlebot but not other crawlers|
| Helmet async support               | FAIL   | Using deprecated react-helmet            |

**Key Issue:** Every page on this site delivers the SAME HTML to all crawlers. The `<title>`, `<meta description>`, and all page content are only available after JavaScript execution. While Googlebot can eventually render and index JS content, this significantly delays indexation and makes the site invisible to:
- Bing Bot (limited JS rendering)
- Yandex Bot
- Social media crawlers (Facebook, Twitter, LinkedIn)
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- SEO tools (Screaming Frog in default mode, Ahrefs, Semrush)

### 9. IndexNow Protocol (0/10)

| Check                        | Status | Notes                                          |
| ---------------------------- | ------ | ---------------------------------------------- |
| IndexNow API key file        | FAIL   | No key file in public/                         |
| IndexNow implementation      | FAIL   | No code references to IndexNow                |
| Bing IndexNow support        | FAIL   | Not configured                                |
| Yandex IndexNow support      | FAIL   | Not configured                                |
| Naver IndexNow support       | FAIL   | Not configured                                |

**Recommendation:**
1. Generate an IndexNow API key at https://www.bing.com/indexnow
2. Place the key file at `public/{key}.txt`
3. Submit URLs via IndexNow API when content changes (can be automated via a build/deploy hook)
4. This benefits Bing, Yandex, Naver, and Yep search engines

---

## PRIORITIZED ACTION PLAN

### Phase 1: Critical Fixes (Week 1)

1. **Fix `<html lang="en">` to `<html lang="fr">`** -- 5 minute fix, immediate impact
2. **Normalize canonical domain** -- choose www vs non-www, fix all references
3. **Add canonical tags** to all page components via Helmet
4. **Add Helmet to all pages missing it** (About, Contact, NotFound, all automatisations-ia/*)
5. **Add `noindex` to NotFound.tsx** via Helmet

### Phase 2: High Impact (Weeks 2-3)

6. **Implement pre-rendering** -- minimum viable fix: add `vite-plugin-ssr` or `react-snap` to generate static HTML for all 30+ routes at build time
7. **Update sitemap.xml** -- add missing routes, fix lastmod dates, remove deprecated fields
8. **Self-host fonts** -- eliminate external font dependencies
9. **Add `<link rel="preload">`** for critical fonts and hero images
10. **Fix Organization schema logo URL** -- place logo.png in public/

### Phase 3: Medium Impact (Weeks 3-4)

11. **Replace react-helmet with react-helmet-async**
12. **Add FAQPage JSON-LD** to homepage and /agents-ia
13. **Add Article JSON-LD** to all blog posts
14. **Add BreadcrumbList JSON-LD** for sub-page hierarchies
15. **Self-host OG image** and blog hero images
16. **Add AI crawler directives** to robots.txt
17. **Fix useIsMobile initial state** to prevent flash

### Phase 4: Polish (Month 2)

18. **Implement IndexNow** protocol
19. **Add LocalBusiness structured data**
20. **Add WebSite schema** with SearchAction for sitelinks
21. **Add hreflang** self-referencing tags
22. **Optimize Three.js or replace** with lighter alternative
23. **Add skip-to-content link** for accessibility
24. **Fix Google Maps embed** with correct place ID

---

## FILES REQUIRING CHANGES

| File                                  | Changes Needed                                    |
| ------------------------------------- | ------------------------------------------------- |
| `index.html`                          | lang="fr", fix canonical, fix OG image, logo URL  |
| `public/robots.txt`                   | Add AI crawler directives                         |
| `public/sitemap.xml`                  | Add missing URLs, update lastmod, remove deprecated|
| `src/pages/Home.tsx`                  | Fix og:url to www, add canonical                  |
| `src/pages/About.tsx`                 | Add Helmet with title/desc/canonical              |
| `src/pages/Contact.tsx`              | Add Helmet, fix Maps embed                        |
| `src/pages/NotFound.tsx`             | Add Helmet with noindex                           |
| `src/pages/AgentsIA.tsx`             | Add canonical, add FAQPage schema                 |
| `src/pages/Infrastructure.tsx`       | Add canonical                                     |
| `src/pages/Services.tsx`             | Add canonical                                     |
| `src/pages/SeoGeo.tsx`              | Add canonical                                     |
| `src/pages/Blog.tsx`                 | Add canonical                                     |
| `src/pages/blog/*.tsx`               | Add canonical, Article schema                     |
| `src/pages/automatisations-ia/*.tsx` | Add Helmet via AutomationMetierLayout props       |
| `src/components/AutomationMetierLayout.tsx` | Accept & render Helmet with title/desc/canonical |
| `package.json`                        | Replace react-helmet with react-helmet-async      |

---

*This audit was performed via static source-code analysis. A live-site audit (using tools like Lighthouse, PageSpeed Insights, Google Search Console, and Screaming Frog with JS rendering) is strongly recommended to validate HTTP-level findings (redirects, HSTS, security headers, actual Core Web Vitals measurements).*
