# Performance Audit Report -- lxstudio.ch

**Date:** 2026-03-25
**URL:** https://lxstudio.ch
**Type:** Single Page Application (React + Vite)
**Hosting:** Unknown (likely Vercel or similar, based on Vite stack)

---

## Executive Summary

**Estimated Performance Score: 38/100 (Mobile) | 55/100 (Desktop)**

The site is a React SPA with several critical performance bottlenecks. The largest issues are the massive JavaScript bundle sizes (1.2 MB uncompressed total), Three.js loaded for a background effect, render-blocking font requests from two different providers, no code splitting beyond the Aurora component, and all images served as unoptimized JPG/PNG without modern formats. The site will fail Core Web Vitals assessment on mobile for the majority of users.

---

## 1. Core Web Vitals Assessment

### LCP (Largest Contentful Paint)

| Target | Estimated Mobile | Estimated Desktop | Status |
|--------|-----------------|-------------------|--------|
| <=2.5s | 4.5-6.0s | 2.8-3.5s | POOR (mobile), NEEDS IMPROVEMENT (desktop) |

**LCP Element:** The hero `<h1>` text ("Automatisez votre business. Gardez le controle.") or the logo-emblem.png image (97 KB PNG, no preload).

**LCP Subpart Breakdown (estimated):**

| Subpart | Estimated Time | Issue |
|---------|---------------|-------|
| TTFB | 200-400ms | Acceptable if on CDN edge |
| Resource Load Delay | 1500-2500ms | JS must parse and execute before React renders any content |
| Resource Load Time | 500-800ms | logo-emblem.png is 97 KB unoptimized PNG |
| Element Render Delay | 800-1200ms | Two font CSS files block render; Three.js initialization |

**Root Causes:**
1. SPA architecture: entire React app must download, parse, and execute before ANY content is visible
2. No server-side rendering (SSR) or static generation (SSG) -- `<div id="root"></div>` is empty HTML
3. Main JS bundle is 724 KB (uncompressed) -- blocks first paint
4. Two render-blocking font stylesheet requests (Google Fonts + Fontshare)
5. Hero logo image (logo-emblem.png, 97 KB) is not preloaded and is PNG format
6. No `<link rel="preload">` hints for critical resources

### INP (Interaction to Next Paint)

| Target | Estimated Mobile | Estimated Desktop | Status |
|--------|-----------------|-------------------|--------|
| <=200ms | 250-400ms | 100-200ms | NEEDS IMPROVEMENT (mobile), GOOD (desktop) |

**Root Causes:**
1. Three.js Aurora shader runs continuously via `requestAnimationFrame`, consuming GPU and CPU every frame (35-iteration fragment shader loop)
2. GSAP library loaded (8 KB) but scroll animations add overhead
3. Lenis smooth scroll library hijacks native scroll events
4. Large component tree: all 19 automatisations-ia sub-pages are imported eagerly in App.tsx (lines 26-45) -- no lazy loading
5. lucide-react icons are imported individually but the library adds runtime overhead
6. Full Radix UI component suite (49 components in ui/ directory) imported regardless of page

### CLS (Cumulative Layout Shift)

| Target | Estimated Mobile | Estimated Desktop | Status |
|--------|-----------------|-------------------|--------|
| <=0.1 | 0.15-0.25 | 0.05-0.10 | NEEDS IMPROVEMENT (mobile), GOOD (desktop) |

**Root Causes:**
1. Hero logo image (`logo-emblem.png`) has no explicit width/height attributes -- only CSS classes `w-32 h-32 lg:w-40 lg:h-40` which depend on CSS loading
2. Font swaps cause FOUT: `display=swap` on both Google Fonts and Fontshare means system font renders first, then shifts when custom fonts load
3. Three.js canvas insertion is dynamic -- the `<Suspense>` fallback switches to the canvas after JS loads, causing potential reflow
4. Header logo (`logo-text.png`) uses `h-8 md:h-10 w-auto` -- width is auto-calculated, can shift during load
5. Mobile menu has no reserved space, shifts content when opened
6. `react-helmet` dynamically injects `<title>` and `<meta>` tags, but this is cosmetic (no visual CLS)

---

## 2. Page Load Performance

### TTFB (Time to First Byte)
- **Estimated:** 150-400ms depending on CDN and visitor location (Swiss users likely ~150ms if on Vercel)
- **Status:** Acceptable, but SPA negates any TTFB advantage since HTML is essentially empty

### FCP (First Contentful Paint)
- **Estimated Mobile:** 3.5-5.0s
- **Estimated Desktop:** 2.0-3.0s
- **Status:** POOR

FCP is blocked by:
1. Main JS bundle download and parsing (724 KB)
2. CSS bundle download (84 KB)
3. Two external font stylesheet requests
4. React hydration/render cycle

### Speed Index
- **Estimated Mobile:** 5.0-7.0s
- **Estimated Desktop:** 3.0-4.5s
- **Status:** POOR

The SPA renders nothing until JS executes. No progressive loading, no skeleton screens, no SSR.

### TTI (Time to Interactive)
- **Estimated Mobile:** 6.0-8.0s
- **Estimated Desktop:** 3.5-5.0s
- **Status:** POOR

After initial render, Three.js Aurora background chunk (480 KB) loads asynchronously, further delaying full interactivity.

---

## 3. Resource Loading Analysis

### JavaScript Bundles

| File | Size (uncompressed) | Gzipped (est.) | Contents |
|------|---------------------|-----------------|----------|
| `index-CPdXTZRm.js` | **724 KB** | ~220 KB | React, React Router, ALL pages, ALL components, Radix UI, TanStack Query, Recharts, GSAP, Lenis, Supabase, lucide-react, date-fns, embla-carousel, react-hook-form, zod, sonner, cmdk |
| `AuroraBackground-BNGLVZbH.js` | **480 KB** | ~150 KB | Three.js (entire library) + shader code |
| **Total JS** | **1,204 KB** | **~370 KB** | |

**Critical Issues:**
- **No route-based code splitting**: All 19 automatisations-ia pages, 3 blog pages, and 10+ other pages are bundled into the single index.js file. Only AuroraBackground is lazy-loaded.
- **Three.js is 480 KB for a background effect**: This is the full Three.js library for a single 2D shader. A standalone WebGL shader or CSS animation would achieve the same visual at <5 KB.
- **Unused Radix UI components**: 49 UI components in the ui/ directory, but most pages use only a handful (Button, Accordion, Tooltip). Tree-shaking helps but Radix has significant runtime overhead.
- **recharts (charting library)** is included but appears to be unused on the homepage
- **date-fns** is included but only for the calendar component
- **react-resizable-panels** is bundled but not used on visible pages
- **Supabase client** is bundled into the main chunk

### CSS

| File | Size | Contents |
|------|------|----------|
| `index-DYv1cx24.css` | **84 KB** | Tailwind output + animations + custom utilities |

- CSS size is reasonable but could be reduced by purging unused Tailwind classes from the 49 unused UI components.

### Images

| Image | Size | Format | Issue |
|-------|------|--------|-------|
| logo-emblem.png | 97 KB | PNG | Should be WebP/AVIF (~15-25 KB). No preload. No width/height. |
| logo-text.png | 28 KB | PNG | Should be WebP/AVIF (~5-8 KB). Used in Header + Footer (loaded twice). |
| portfolio-hero-bg.jpg | 126 KB | JPEG | No WebP/AVIF alternative. No lazy loading on non-home pages. |
| automation-transport.jpg | 439 KB | JPEG | Largest image. No responsive srcset. Not lazy loaded. |
| automation-ecommerce.jpg | 370 KB | JPEG | Similar issues. |
| automation-industrie.jpg | 341 KB | JPEG | Similar issues. |
| automation-evenementiel.jpg | 321 KB | JPEG | Similar issues. |
| 20 more automation images | 150-260 KB each | JPEG | All unoptimized, no WebP/AVIF, no responsive sizes, no lazy loading |
| **Total image assets** | **~5.7 MB** | | Entire automation image set bundled into dist |

**Critical Image Issues:**
1. **No modern formats**: All images are JPEG/PNG. WebP would save 25-35%, AVIF would save 40-60%.
2. **No responsive images**: No `srcset` or `<picture>` elements. Same large images served to mobile and desktop.
3. **No lazy loading**: Images imported via Vite are loaded eagerly. No `loading="lazy"` attribute used.
4. **PNG logos should be SVG**: The logo emblem and text logo are raster PNG when they should be vector SVG for crisp rendering at any size and smaller file size.
5. **No image compression pipeline**: Images appear to be raw exports with no optimization step in the build.

### Fonts

| Font | Provider | Weight/Styles | Issue |
|------|----------|---------------|-------|
| Instrument Serif | Google Fonts | Regular, Italic | Render-blocking stylesheet |
| JetBrains Mono | Google Fonts | 400, 500, 600, 700 | 4 weights loaded; only 400 and 700 appear used |
| Satoshi | Fontshare | 400, 500, 700 | Separate provider = additional DNS lookup + connection |

**Critical Font Issues:**
1. **Two separate font providers**: Google Fonts AND Fontshare. Each requires its own DNS lookup, TCP connection, and TLS handshake. This adds 200-400ms on mobile.
2. **Render-blocking font stylesheets**: Both `<link rel="stylesheet">` tags in the `<head>` block rendering until downloaded.
3. **JetBrains Mono loads 4 weights but only 2 are used**: Weights 500 and 600 appear unused. Each weight adds ~15-25 KB of font data.
4. **No `font-display: optional`**: Using `display=swap` causes visible layout shift when fonts load.
5. **No font preload**: Critical fonts should use `<link rel="preload" as="font">`.
6. **No self-hosting**: Self-hosting fonts eliminates the extra DNS lookups and gives full cache control.

---

## 4. Render-Blocking Resources

| Resource | Type | Impact | Priority to Fix |
|----------|------|--------|-----------------|
| Google Fonts CSS (`fonts.googleapis.com/css2?...`) | Stylesheet | Blocks FCP by 200-600ms | HIGH |
| Fontshare CSS (`api.fontshare.com/v2/css?...`) | Stylesheet | Blocks FCP by 200-400ms | HIGH |
| `index-DYv1cx24.css` (84 KB) | Stylesheet | Blocks FCP until downloaded | MEDIUM |
| `index-CPdXTZRm.js` (724 KB) | Module script | Blocks ALL rendering (SPA) | CRITICAL |

**Total render-blocking time estimated: 2.5-4.0s on mobile 3G/4G**

---

## 5. Caching Strategy

### Current State
- **No evidence of cache headers configuration** in the source code
- Vite build produces content-hashed filenames (e.g., `index-CPdXTZRm.js`) which is good for cache-busting
- No service worker detected
- No `Cache-Control` headers configured in source (depends on hosting platform)

### Recommendations
- Hashed assets should have `Cache-Control: public, max-age=31536000, immutable`
- `index.html` should have `Cache-Control: no-cache` (or short max-age)
- Font files (if self-hosted) should have long cache headers
- Images should have at least 1-year cache with content hashing

---

## 6. Compression

### Current State
- **No compression configuration in Vite build**: Default Vite does not generate `.gz` or `.br` pre-compressed files
- Compression depends entirely on hosting platform (Vercel, Netlify, etc.)
- No `vite-plugin-compression` or similar detected

### Recommendations
- Add `vite-plugin-compression` for pre-built Brotli/Gzip assets
- Verify hosting platform enables Brotli compression (30% smaller than Gzip)
- With Brotli: main JS would be ~180 KB (vs ~220 KB Gzip, vs 724 KB raw)

---

## 7. Third-Party Script Impact

| Script/Service | Impact | Loaded When |
|----------------|--------|-------------|
| Google Fonts (`fonts.googleapis.com`) | HIGH -- render-blocking, adds DNS+connection overhead | Page load (head) |
| Fontshare (`api.fontshare.com`) | HIGH -- render-blocking, adds DNS+connection overhead | Page load (head) |
| Supabase JS Client | MEDIUM -- bundled in main JS, adds ~40 KB | Page load (in bundle) |
| Three.js | HIGH -- 480 KB loaded after initial paint | Lazy loaded on desktop |
| Google Site Verification meta tag | LOW -- no runtime impact | Page load (meta tag) |

**No analytics, tracking, or ad scripts detected** -- this is positive for performance.

---

## 8. Architecture Issues

### SPA Without SSR/SSG (CRITICAL)

The single most impactful issue is that the entire site is a client-rendered SPA. The HTML delivered to browsers is:

```html
<div id="root"></div>
<script type="module" src="/assets/index-CPdXTZRm.js"></script>
```

This means:
- **Zero content visible until 724 KB of JS downloads, parses, and executes**
- Search engines that don't execute JS will see an empty page
- FCP is entirely gated on JavaScript execution
- No progressive enhancement possible

### No Route-Based Code Splitting

`App.tsx` eagerly imports ALL 30+ page components. Only `AuroraBackground` is lazy-loaded. This means a user visiting `/contact` downloads the code for all 19 automatisations-ia pages, the blog, the portfolio, and every other route.

### `<html lang="en">` for a French Site

The HTML lang attribute is set to `en` but the site content is entirely in French. This should be `fr` or `fr-CH`.

---

## 9. Prioritized Recommendations

### CRITICAL Priority (Expected Impact: 40-60 point improvement combined)

| # | Recommendation | Expected Impact | Effort |
|---|---------------|-----------------|--------|
| 1 | **Add SSR/SSG**: Migrate to Next.js, Astro, or Vite SSR plugin. Pre-render static pages at build time. This is the single highest-impact change. | LCP -2.0s, FCP -2.5s | HIGH |
| 2 | **Implement route-based code splitting**: Lazy-load all page components in App.tsx using `React.lazy()` + `Suspense`. Currently only AuroraBackground is lazy. | JS bundle -40-60% for initial load | LOW |
| 3 | **Replace Three.js with CSS/SVG aurora**: The 480 KB Three.js chunk is used for a single 2D shader effect. Replace with a CSS gradient animation or a standalone WebGL shader (~2 KB). | -480 KB JS, INP improvement | MEDIUM |
| 4 | **Self-host fonts and eliminate render-blocking**: Download Instrument Serif, JetBrains Mono, and Satoshi. Inline critical `@font-face` declarations in CSS. Use `font-display: swap` with font preloads, or `font-display: optional` to eliminate CLS. | FCP -400-800ms, CLS improvement | LOW |

### HIGH Priority (Expected Impact: 15-25 point improvement combined)

| # | Recommendation | Expected Impact | Effort |
|---|---------------|-----------------|--------|
| 5 | **Convert all images to WebP/AVIF**: Use a Vite image plugin (e.g., `vite-plugin-image-optimizer` or `@svgr/webpack` for logos). Convert logo PNGs to SVG. Add responsive `srcset`. | -50-70% image weight | MEDIUM |
| 6 | **Add `loading="lazy"` to below-fold images**: All automation images and portfolio images should be lazy-loaded. | Faster initial load | LOW |
| 7 | **Preload LCP image**: Add `<link rel="preload" as="image" href="/assets/logo-emblem-DX7K3v9R.png">` to index.html. Better yet, convert to SVG and inline it. | LCP -200-500ms | LOW |
| 8 | **Remove unused dependencies**: Audit and remove `recharts`, `react-resizable-panels`, `embla-carousel-react`, `cmdk`, `input-otp`, `react-day-picker` if not used. Remove unused Radix UI components. | JS bundle -50-100 KB | MEDIUM |
| 9 | **Reduce JetBrains Mono weights**: Load only 400 and 700 weights instead of 400, 500, 600, 700. | Font size -30-50 KB | LOW |

### MEDIUM Priority (Expected Impact: 5-10 point improvement combined)

| # | Recommendation | Expected Impact | Effort |
|---|---------------|-----------------|--------|
| 10 | **Add explicit width/height to all images**: Prevent CLS from images that load after initial paint. | CLS improvement | LOW |
| 11 | **Remove or defer Lenis smooth scroll**: Native CSS `scroll-behavior: smooth` achieves similar effect without JS overhead. Lenis adds event listeners that worsen INP. | INP -20-50ms | LOW |
| 12 | **Add Brotli pre-compression**: Install `vite-plugin-compression` to generate `.br` files at build time. | -10-15% transfer size | LOW |
| 13 | **Fix `<html lang="en">`**: Change to `lang="fr"` or `lang="fr-CH"`. This is an accessibility and SEO issue, not directly performance. | Accessibility/SEO | TRIVIAL |
| 14 | **Add resource hints**: `<link rel="dns-prefetch">` for any external domains. `<link rel="preconnect">` already exists for fonts but should include Supabase endpoint. | Minor TTFB improvement | LOW |
| 15 | **Limit Three.js Aurora pixel ratio**: Currently uses `Math.min(window.devicePixelRatio, 2)` -- on mobile, even 2x is expensive for a 35-iteration shader. Cap at 1 or use CSS fallback on all devices. | INP/battery improvement | LOW |

### LOW Priority (Maintenance)

| # | Recommendation | Expected Impact | Effort |
|---|---------------|-----------------|--------|
| 16 | **Add a service worker**: Cache static assets for repeat visits. | Repeat visit speed | MEDIUM |
| 17 | **Use `<link rel="modulepreload">` for lazy chunks**: Hint the browser to preload the Aurora chunk before it is needed. | Minor improvement | LOW |
| 18 | **Audit Tailwind CSS purge**: Ensure unused UI component styles are purged from the 84 KB CSS bundle. | CSS -10-30 KB | LOW |

---

## 10. Bundle Size Deep Dive

### Estimated Main Bundle Composition (724 KB uncompressed)

| Library | Estimated Size | Used On | Verdict |
|---------|---------------|---------|---------|
| React + React DOM | ~130 KB | All pages | Required |
| React Router DOM | ~30 KB | All pages | Required |
| Radix UI (all 20+ components) | ~120 KB | Various | Trim to only used components |
| lucide-react icons | ~40 KB | All pages | Consider replacing with direct SVG imports |
| TanStack React Query | ~35 KB | Unknown usage | Remove if only used for Supabase |
| Recharts | ~80 KB | Possibly unused | Remove if not needed |
| GSAP | ~60 KB | Scroll animations | Consider Intersection Observer API |
| Lenis | ~15 KB | Smooth scroll | Remove, use CSS |
| Supabase JS | ~40 KB | Contact forms? | Lazy load to contact page only |
| date-fns | ~25 KB | Calendar component | Lazy load or remove |
| zod + react-hook-form | ~30 KB | Forms | Lazy load to form pages |
| embla-carousel | ~15 KB | Carousel | Lazy load to pages that use it |
| sonner + cmdk + vaul | ~25 KB | Toasts, command, drawer | Lazy load |
| Page components (all 30+) | ~80 KB | Eagerly loaded | Code split by route |

---

## 11. Comparison Against Competitors

For a Swiss digital agency website, the performance bar is:
- **Target Lighthouse score**: 90+ (mobile), 95+ (desktop)
- **Target LCP**: <2.0s (achievable with SSG)
- **Target CLS**: <0.05
- **Target INP**: <150ms
- **Target total JS**: <150 KB (compressed) for initial page load

Current state is significantly below these targets.

---

## 12. Quick Wins (Implementable in <1 Day)

1. **Lazy-load all routes in App.tsx** -- Change all page imports to `const Home = lazy(() => import("./pages/Home"))` etc. Wrap `<Routes>` in `<Suspense>`. Expected bundle reduction: 40-60%.

2. **Fix `<html lang="en">` to `lang="fr"`** -- One character change.

3. **Add font preloads** -- Add `<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?...">` to `index.html`.

4. **Add `fetchpriority="high"` to hero logo** -- On the `<img>` tag for logo-emblem.png.

5. **Reduce JetBrains Mono weights** -- Change from `wght@400;500;600;700` to `wght@400;700`.

6. **Add width/height to logo images** -- Prevent CLS.

---

## Methodology Note

This audit was performed via static source code analysis of the repository at `/Users/tanguylachat/lxstudio-digital-craft/`. Performance estimates are based on:
- Build output analysis (dist/ directory file sizes)
- Source code review of rendering patterns, resource loading, and architecture
- Standard benchmarks for React SPA performance on mobile 4G networks
- Core Web Vitals thresholds as of March 2026

For precise field data, run PageSpeed Insights or check CrUX data via [CrUX Vis](https://cruxvis.withgoogle.com) after the site has accumulated sufficient traffic. Lab testing via `npx lighthouse https://lxstudio.ch --output json` will provide exact Lighthouse scores.

---

## Files Analyzed

- `/Users/tanguylachat/lxstudio-digital-craft/index.html` -- Entry HTML
- `/Users/tanguylachat/lxstudio-digital-craft/dist/index.html` -- Built HTML
- `/Users/tanguylachat/lxstudio-digital-craft/dist/assets/` -- Built output (27 files)
- `/Users/tanguylachat/lxstudio-digital-craft/src/main.tsx` -- App entry point
- `/Users/tanguylachat/lxstudio-digital-craft/src/App.tsx` -- Router (all routes eagerly loaded)
- `/Users/tanguylachat/lxstudio-digital-craft/src/pages/Home.tsx` -- Homepage (10 sections)
- `/Users/tanguylachat/lxstudio-digital-craft/src/components/AuroraBackground.tsx` -- Three.js shader
- `/Users/tanguylachat/lxstudio-digital-craft/src/components/Header.tsx` -- Fixed header
- `/Users/tanguylachat/lxstudio-digital-craft/src/components/Footer.tsx` -- Footer
- `/Users/tanguylachat/lxstudio-digital-craft/src/components/WhatsAppButton.tsx` -- Fixed CTA
- `/Users/tanguylachat/lxstudio-digital-craft/src/index.css` -- Global styles
- `/Users/tanguylachat/lxstudio-digital-craft/package.json` -- Dependencies
- `/Users/tanguylachat/lxstudio-digital-craft/vite.config.ts` -- Build config
- `/Users/tanguylachat/lxstudio-digital-craft/tailwind.config.ts` -- Tailwind config
