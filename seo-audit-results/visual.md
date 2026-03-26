# Visual & Mobile Rendering Audit -- lxstudio.ch

**Date:** 2026-03-25
**Auditor:** Claude Opus 4.6 (source-code analysis)
**Method:** Full source-code review of React/Tailwind/Three.js codebase, CSS variables, responsive breakpoints, asset inventory, and build output.
**Note:** Playwright screenshot capture was unavailable due to sandbox restrictions. All findings below are derived from deterministic code analysis and are verifiable by running the site in a browser.

---

## Overall Visual / Mobile Quality Score: 72 / 100

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Mobile rendering (375px) | 70 | 25% | 17.5 |
| Tablet rendering (768px) | 78 | 15% | 11.7 |
| Desktop rendering (1440px+) | 82 | 15% | 12.3 |
| Above-the-fold content | 75 | 15% | 11.3 |
| Visual hierarchy & readability | 74 | 10% | 7.4 |
| CTA visibility & placement | 80 | 10% | 8.0 |
| Image rendering & sizing | 52 | 5% | 2.6 |
| Font loading & FOUT/FOIT | 65 | 5% | 3.3 |
| **Total** | | **100%** | **74.1 -> 72** |

Score rounded down to 72 due to cumulative impact of image optimization and font loading issues.

---

## 1. Mobile Rendering Quality

### 1.1 Viewport: 375px (iPhone SE / small phones)

**Findings:**

| # | Issue | Priority | Details |
|---|---|---|---|
| M1 | Hero H1 font size may be cramped | MEDIUM | `text-3xl` = 30px at 375px. With `leading-[1.1]` and a two-line heading plus gradient span, this leaves very little breathing room. The second line "Gardez le controle." with `text-gradient-gold` could clip on narrow screens. |
| M2 | Hero CTA buttons stack correctly | PASS | `flex-col sm:flex-row` ensures vertical stacking below 640px. Both buttons are `w-full`. Good. |
| M3 | Trust band metrics grid may feel cramped | LOW | `grid-cols-2` with 4 items at 375px. Each cell has `text-xl` monospace value + `text-xs` label. Functional but tight. |
| M4 | Pain point cards have no horizontal scroll issue | PASS | `grid-cols-1` on mobile. Each card gets full width. |
| M5 | Agent cards (Tier 1) are single column on mobile | PASS | `grid-cols-1 md:grid-cols-2`. Good responsive behavior. |
| M6 | WhatsApp FAB overlaps bottom content | MEDIUM | Fixed at `bottom-6 right-6` with `w-16 h-16` (64px). On a 375px-wide viewport, this consumes 17% of the width. On pages with bottom CTAs, the FAB may overlap the last visible content or the "Reserver un appel" button text. |
| M7 | Contact page hero text not responsive | HIGH | `text-5xl md:text-6xl` -- the `text-5xl` (48px) is too large for 375px. No `text-3xl` mobile breakpoint defined. Will likely overflow or cause awkward line breaks on "Discutons de votre projet". |
| M8 | Contact page form padding is desktop-first | MEDIUM | `px-6` on the outer container and `p-8 lg:p-10` on the form card. At 375px, 24px padding + 32px card padding = 56px lost from each side. Effective content width is only ~263px. |
| M9 | Google Maps iframe on Contact page has no responsive height | MEDIUM | Fixed `height="450"` on the iframe. At 375px, this creates an extremely tall, narrow map that looks disproportionate. Should use `aspect-ratio` or responsive height. |
| M10 | AutomationMetierLayout hero image has fixed height | MEDIUM | `h-[400px]` with `object-cover`. At 375px, this is a very tall image relative to the viewport. Should scale down to ~250px on mobile. |

### 1.2 Viewport: 768px (iPad / tablets)

**Findings:**

| # | Issue | Priority | Details |
|---|---|---|---|
| T1 | Navigation switches from mobile hamburger to desktop at `md:` (768px) | PASS | `hidden md:flex` for desktop nav and `md:hidden` for hamburger. Breakpoint is correct for tablets in landscape. |
| T2 | Hero grid becomes two-column at 768px | PASS | `md:grid-cols-[1fr_0.65fr]`. The logo visual appears. Proportion is good. |
| T3 | Agent cards become 2-column at 768px | PASS | `md:grid-cols-2`. Good use of space. |
| T4 | Footer switches to 3-column at 768px | PASS | `md:grid-cols-3`. Appropriate for tablet width. |
| T5 | Three.js Aurora renders at 768px (not mobile) | PASS | The `useIsMobile` hook uses `window.innerWidth < 768` so Aurora renders at exactly 768px. This is fine. |

### 1.3 Viewport: 1024px (small laptop / tablet landscape)

**Findings:**

| # | Issue | Priority | Details |
|---|---|---|---|
| L1 | No specific 1024px breakpoint concerns | PASS | The `lg:` breakpoint at 1024px is used appropriately for Infrastructure grid layout (`lg:grid-cols-2`), hero text sizing (`lg:text-7xl`), etc. |
| L2 | Container max-width is 1400px at 2xl | PASS | Content is well-contained with `container mx-auto`. |

### 1.4 Viewport: 1440px (standard desktop)

**Findings:**

| # | Issue | Priority | Details |
|---|---|---|---|
| D1 | Hero section renders well at 1440px | PASS | Two-column layout with Aurora background. H1 at `lg:text-7xl` (72px) is appropriately sized. |
| D2 | Max content width is 1400px | PASS | Via `tailwind.config.ts` container screens `2xl: 1400px`. Prevents ultra-wide stretching. |
| D3 | Aurora shader performance on high-DPI | LOW | `Math.min(window.devicePixelRatio, 2)` caps pixel ratio. Good practice. However, the shader runs 35 iterations in a loop per fragment, which may cause frame drops on integrated GPUs. |

---

## 2. Above-the-Fold Content Analysis

### Desktop (1920x1080)

| Element | Visible? | Assessment |
|---|---|---|
| H1 "Automatisez votre business. Gardez le controle." | YES | Prominent, well-sized at `lg:text-7xl` (72px). |
| Badge "Agents IA pour PME suisses" | YES | Small pill above H1. Good context. |
| Subtitle text | YES | `lg:text-xl` (20px). Good readability. |
| Primary CTA "Reserver un appel decouverte" | YES | Gold button, `size="xl"` (h-14). Highly visible. |
| Secondary CTA "Voir nos offres" | YES | Outline button next to primary. |
| Logo emblem (right column) | YES | With glow rings animation. Branded visual. |
| Aurora background | YES | Three.js shader effect. Atmospheric. |
| Navigation header | YES | Fixed, transparent with blur. |

**Verdict:** Above-the-fold on desktop is STRONG. All essential elements are visible without scrolling.

### Mobile (375x812)

| Element | Visible? | Assessment |
|---|---|---|
| H1 | YES | `text-3xl` (30px) centered. Two-line heading fits. |
| Badge | YES | Smaller at `text-xs`. |
| Subtitle | YES | `text-base` (16px). |
| Primary CTA | LIKELY YES | Full-width button. Should be visible just above the fold. |
| Secondary CTA | BORDERLINE | Stacked below primary CTA. May require slight scroll on shorter devices. |
| Logo emblem | NO (hidden) | `hidden md:flex`. Correctly hidden on mobile. |
| Aurora background | NO | CSS fallback gradient used instead. Performance-conscious. Good. |

**Verdict:** Mobile above-the-fold is GOOD but the secondary CTA may fall just below the fold on smaller viewports (e.g., iPhone SE at 375x667). The `pt-20` (80px) top padding pushes content down.

---

## 3. Visual Hierarchy & Readability

### Typography System

| Element | Font | Size (mobile) | Size (desktop) | Assessment |
|---|---|---|---|---|
| Body text | Satoshi (Fontshare) | 16px base | 16px base | GOOD - meets minimum 16px requirement |
| Headings | Instrument Serif (Google) | 30px (H1) | 72px (H1) | GOOD - clear serif/sans-serif contrast |
| Monospace accents | JetBrains Mono | Varies | Varies | GOOD - used for prices and tech details |
| Muted text | Satoshi | 12-14px | 14-16px | MEDIUM - some `text-xs` (12px) and `text-[10px]` (10px) text may be too small |

**Issues:**

| # | Issue | Priority | Details |
|---|---|---|---|
| VH1 | Micro text at 10px is below accessibility minimum | HIGH | `text-[10px]` used in pack taglines on mobile, "Livre en X jours" labels, and security badges. 10px is below the 12px minimum recommended for readability. Affects at least 6 text instances across Home page. |
| VH2 | Color contrast on muted text | MEDIUM | `--muted-foreground: 0 0% 42%` means `hsl(0, 0%, 42%)` = `#6B6B6B`. Against `--background: 0 0% 2%` = `#050505`, the contrast ratio is approximately 5.0:1. This passes WCAG AA for normal text (4.5:1) but fails for `text-[10px]` which requires large-text AA. |
| VH3 | Gold gradient text readability | LOW | `text-gradient-gold` uses `bg-clip-text text-transparent` with gold-to-gold-light gradient. On dark background, this is generally readable but may lose contrast at the lighter end of the gradient. |
| VH4 | Section alternation is consistent | PASS | Alternating `bg-background` and `bg-[hsl(var(--surface))]` (2% vs 5% black) creates subtle section separation. |

### Dark Mode

The site is **dark-only by design**. The Tailwind config has `darkMode: ["class"]` but the CSS defines only one set of variables (dark theme). There is no light mode toggle or `prefers-color-scheme` media query.

| # | Issue | Priority | Details |
|---|---|---|---|
| DM1 | No light mode support | LOW | For a premium Swiss tech agency, dark-only is an intentional brand choice. However, some users with visual impairments or astigmatism find light text on dark backgrounds harder to read. Consider offering a light mode toggle as an accessibility option. |
| DM2 | No `prefers-color-scheme` consideration | LOW | System-level dark mode preference is ignored. The site is always dark regardless of OS setting. |

---

## 4. CTA Visibility & Placement

### CTA Inventory

| Location | CTA Text | Variant | Size | Visible? | Assessment |
|---|---|---|---|---|---|
| Hero (primary) | "Reserver un appel decouverte" | `hero` | `xl` (h-14) | YES | Gold, prominent, with Phone icon and ArrowRight. Excellent. |
| Hero (secondary) | "Voir nos offres" | `outline` | `xl` | YES | Clear secondary action. Good. |
| Header (desktop) | "Reserver un appel" | `hero` | `default` | YES | Persistent in fixed nav. Good. |
| Header (mobile) | "Reserver un appel" | `hero` | `default` | ON MENU OPEN | Only visible when hamburger menu is expanded. Acceptable. |
| Agent cards | "En savoir plus" | text link | N/A | YES | Small text link at bottom of each card. |
| Pack cards | "Demander ce pack" | `hero` | `default` | YES | Full-width gold button in each pack card. |
| Infrastructure section | "Discutons de votre projet" | `hero` | `xl` | YES | |
| Process section | None | -- | -- | NO | Missing CTA after the 3-step process. Users who read "how it works" need a next step. |
| Tech stack section | None | -- | -- | NO | Missing CTA after showcasing technology credibility. |
| CTA final section | "Reserver mon appel decouverte" | `hero` | `xl` | YES | Prominent final CTA with email fallback. |
| WhatsApp FAB | WhatsApp icon | N/A | 64x64px | ALWAYS | Fixed bottom-right. Always visible. |

**Issues:**

| # | Issue | Priority | Details |
|---|---|---|---|
| CTA1 | No CTA after "Comment ca marche" section | MEDIUM | After explaining the 3-step process (the moment of highest intent), there is no call-to-action. Users must scroll to the next section or all the way to the bottom. Add a CTA here. |
| CTA2 | No CTA after Tech Stack section | LOW | After establishing credibility with tech logos and security badges, a "Start now" type CTA would capture intent. |
| CTA3 | WhatsApp FAB could overlap mobile CTAs | MEDIUM | On the final CTA section, the "Reserver mon appel decouverte" button at `w-full sm:w-auto` may visually conflict with the WhatsApp FAB at `bottom-6 right-6`. |

---

## 5. Image Rendering & Sizing

### Asset Inventory

| File | Size | Format | Dimensions (est.) | Assessment |
|---|---|---|---|---|
| logo-emblem.png | 97 KB | PNG | ~400x400 | OVERSIZED for a 128-160px display size. Should be optimized to WebP. |
| logo-text.png | 28 KB | PNG | ~300xAuto | Acceptable size. Could be SVG for perfect scaling. |
| logo-monogram.png | 28 KB | PNG | -- | Acceptable. |
| hero-background.jpg | 78 KB | JPEG | -- | Good size. |
| portfolio-hero-bg.jpg | 126 KB | JPEG | -- | Acceptable. |
| automation-*.jpg (20 files) | 150-440 KB each | JPEG | -- | PROBLEMATIC. Total: ~4.9 MB of JPEGs for automation sub-pages. |
| project-*.jpg (6 files) | 54-95 KB each | JPEG | -- | Acceptable sizes. |

**Issues:**

| # | Issue | Priority | Details |
|---|---|---|---|
| IMG1 | No WebP/AVIF format usage | HIGH | All images are JPEG or PNG. Modern formats (WebP, AVIF) would reduce file sizes by 25-50%. This directly impacts LCP on mobile connections. |
| IMG2 | No responsive image srcset | HIGH | All `<img>` tags use a single `src` with no `srcset` or `<picture>` element. A 375px mobile device downloads the same image as a 1920px desktop. Example: `automation-transport.jpg` at 440 KB is served to all devices. |
| IMG3 | Automation page images use fixed height | MEDIUM | `h-[400px] object-cover` in `AutomationMetierLayout`. No responsive height adjustment. On mobile (375px), a 400px-tall image is nearly half the viewport, with potential aspect ratio distortion. |
| IMG4 | Logo emblem could be SVG | LOW | The emblem logo is displayed at 128-160px but served as a 97 KB PNG. An SVG would be resolution-independent and likely smaller. |
| IMG5 | No lazy loading on hero images | MEDIUM | The hero section logo emblem does not have `loading="lazy"`. While above-the-fold images should NOT be lazy-loaded (correct behavior), the automation sub-page hero images do have `loading="lazy"` (correct). However, the emblem in the hero should have `fetchpriority="high"` for LCP optimization. |
| IMG6 | Missing width/height attributes on images | MEDIUM | Most `<img>` elements lack explicit `width` and `height` attributes, relying on CSS classes instead. This can cause layout shifts (CLS) during loading because the browser cannot reserve space before the image loads. |

---

## 6. Font Loading & FOUT/FOIT

### Font Stack

| Font | Source | Weight(s) | Strategy |
|---|---|---|---|
| Instrument Serif | Google Fonts | Regular, Italic | `display=swap` |
| JetBrains Mono | Google Fonts | 400, 500, 600, 700 | `display=swap` |
| Satoshi | Fontshare API | 400, 500, 700 | `display=swap` |

**Issues:**

| # | Issue | Priority | Details |
|---|---|---|---|
| F1 | Three external font sources | HIGH | Fonts are loaded from 3 different origins: `fonts.googleapis.com`, `fonts.gstatic.com`, and `api.fontshare.com`. Each requires a separate DNS lookup, TLS handshake, and HTTP connection. This creates a waterfall of 6+ network requests before fonts render. |
| F2 | No font preload for critical fonts | HIGH | While `preconnect` is set for Google Fonts origins, there is no `<link rel="preload">` for the actual font files. The browser must: (1) fetch the CSS, (2) parse it, (3) then fetch the font files. A `preload` for Satoshi (body font) and Instrument Serif (heading font) would eliminate this render-blocking chain. |
| F3 | FOUT will occur (expected with display=swap) | MEDIUM | All three fonts use `display=swap`, which means the browser will show fallback fonts (system-ui, Georgia, monospace) first, then swap to the custom fonts when loaded. On slow connections, the "flash" of system fonts is noticeable, especially for Instrument Serif headings which swap from Georgia (similar but not identical). |
| F4 | Fontshare API is a third-party dependency | MEDIUM | If `api.fontshare.com` is slow or down, the Satoshi body font will not load. The fallback chain is `'Satoshi', system-ui, -apple-system, sans-serif`. Self-hosting Satoshi would improve reliability and eliminate the third-party dependency. |
| F5 | JetBrains Mono loads 4 weights | LOW | Weights 400, 500, 600, 700 are loaded but the site primarily uses `font-bold` (700) for monospace elements. Reducing to 400 and 700 would save bandwidth. |

---

## 7. Dark Mode Support

As noted in section 3, the site operates in **dark mode exclusively**.

| Aspect | Status | Notes |
|---|---|---|
| Dark theme implementation | Implemented via CSS custom properties | All colors defined in HSL. Clean system. |
| Light mode toggle | Not available | Intentional brand decision. |
| `prefers-color-scheme` | Not supported | Site ignores system preference. |
| Print stylesheet | Not present | Printing the dark site will waste ink/toner. |
| Forced colors / high contrast | Not tested | `forced-colors` media query not addressed. |

**Recommendation (LOW priority):** While dark-only is a valid brand choice for a premium tech agency, adding `@media print { ... }` styles that invert to white background would improve practical usability.

---

## 8. Touch Target Sizes

### Analysis per Component

| Element | Size | Passes 48x48px? | Details |
|---|---|---|---|
| Hero CTA button | h-14 (56px), full-width on mobile | YES | 56px height exceeds 48px minimum. |
| Header hamburger icon | 24x24px icon, no explicit padding | NO | The `<button>` wraps a 24x24 icon with no padding defined. Effective touch target may be as small as 24x24px. |
| Header nav links (desktop) | `text-sm` with `space-x-8` | N/A | Desktop only; not a touch target concern. |
| Mobile nav links | `py-2.5 px-2` with `text-sm` | BORDERLINE | `py-2.5` = 10px vertical padding + ~20px text height = ~40px. Below 48px minimum. |
| Agent "En savoir plus" link | `text-xs md:text-sm` | NO | Small text link with no padding. Estimated touch target: ~16x20px. Well below minimum. |
| Pack "Demander ce pack" button | Full-width, default height (h-10 = 40px) | BORDERLINE | 40px is below the 48px recommendation but commonly accepted. |
| FAQ accordion triggers | `py-4 md:py-5` | YES | 16px top + 16px bottom + text = ~52px. Passes. |
| WhatsApp FAB | 64x64px | YES | Generously sized. |
| Footer social icons | 20x20px icons | NO | `<a>` elements wrap 20x20 icons with no explicit padding. Touch target is approximately 20x20px. |
| Footer nav links | `text-sm` in `space-y-2` | NO | Small text links with 8px vertical spacing. Touch target is approximately 20x28px. |

**Issues:**

| # | Issue | Priority | Details |
|---|---|---|---|
| TT1 | Hamburger menu button too small | HIGH | The mobile menu toggle button is only 24x24px. This is exactly half the 48x48px minimum recommended by WCAG 2.5.8 and Google's mobile usability guidelines. Add `p-3` to make it at least 48x48px. |
| TT2 | Mobile nav links below 48px | MEDIUM | `py-2.5` provides ~40px height. Increase to `py-3.5` or `min-h-[48px]` to meet the standard. |
| TT3 | "En savoir plus" links on agent cards | MEDIUM | These are small text links that serve as secondary CTAs. On mobile, they need at least `py-2 px-3` of padding to reach 48px touch targets. |
| TT4 | Footer social media icons | MEDIUM | 20x20px icons are too small for touch interaction. Wrap in 44-48px containers or add padding. |
| TT5 | Footer navigation links | LOW | These are tertiary navigation. While they should still meet 48px, the impact is lower than primary CTAs. |

---

## 9. Additional Visual Issues

| # | Issue | Priority | Details |
|---|---|---|---|
| V1 | Contact page layout is not responsive | HIGH | The Contact page uses `grid-cols-1 lg:grid-cols-2 gap-12` with the Google Maps `<iframe>` placed INSIDE the grid as a third item. At viewport widths between 768px and 1023px (tablet), the form and contact info stack but the map at `mt-16` with 100% width creates an awkward single-column layout. The map should be outside the grid. |
| V2 | Contact page Google Maps embed uses placeholder coordinates | MEDIUM | The iframe src contains `!2sBassecourt%2C%20Switzerland` with what appear to be placeholder parameters (`0x4791e5e5e5e5e5e5`). The map may not load correctly or may show an incorrect location. |
| V3 | `overflow-x: hidden` on html and body | LOW | Line 67-68 of `index.css` sets `overflow-x: hidden` on both `html` and `body`. While this prevents horizontal scroll, it also masks layout bugs that cause content to overflow. If any element extends beyond the viewport, users will not see it and may miss content. Prefer fixing the root cause of overflow rather than hiding it. |
| V4 | Aurora shader heavy on battery | LOW | The Three.js fragment shader runs continuously via `requestAnimationFrame` with no visibility check. When the hero section scrolls out of view, the shader continues consuming GPU resources. Add an IntersectionObserver to pause animation when off-screen. |
| V5 | `animate-slide-up` with `animationDelay` uses inline styles | LOW | `style={{ animationDelay: "0.15s" }}` on hero subtitle and CTAs. The animation uses `forwards` fill mode, meaning these elements start invisible (`opacity: 0`) until the animation triggers. On slow connections where JS/CSS loads slowly, these elements may appear invisible for an extended time. |
| V6 | No skeleton/loading states | MEDIUM | The React app renders a blank `<div id="root"></div>` until JavaScript loads and hydrates. On slow 3G connections, users see a white (actually near-black) blank screen for several seconds. Consider adding inline critical CSS or a loading skeleton in `index.html`. |
| V7 | No `<noscript>` fallback | LOW | If JavaScript is disabled, users see nothing. A `<noscript>` tag with basic content would improve progressive enhancement. |

---

## 10. Summary of All Findings by Priority

### CRITICAL (0)

None.

### HIGH (6)

| # | Finding | Category |
|---|---|---|
| M7 | Contact page hero text-5xl not responsive for 375px | Mobile |
| IMG1 | No WebP/AVIF format usage across all images | Images |
| IMG2 | No responsive srcset on any images | Images |
| F1 | Three external font sources creating loading waterfall | Fonts |
| F2 | No font preload for critical fonts | Fonts |
| TT1 | Hamburger menu button touch target only 24x24px | Touch |
| VH1 | text-[10px] below accessibility minimum (6 instances) | Readability |
| V1 | Contact page layout broken at tablet widths | Layout |

### MEDIUM (13)

| # | Finding | Category |
|---|---|---|
| M1 | Hero H1 cramped at 375px | Mobile |
| M6 | WhatsApp FAB overlaps bottom content on mobile | Mobile |
| M8 | Contact form padding too large for mobile | Mobile |
| M9 | Google Maps iframe not responsive height | Mobile |
| M10 | AutomationMetierLayout hero image fixed at 400px | Mobile |
| VH2 | Muted text contrast borderline for small text | Readability |
| CTA1 | No CTA after "Comment ca marche" section | CTA |
| CTA3 | WhatsApp FAB may overlap final CTA section | CTA |
| IMG3 | Automation images fixed height on mobile | Images |
| IMG5 | Missing fetchpriority on LCP image | Images |
| IMG6 | Missing width/height attributes causing potential CLS | Images |
| F3 | FOUT with display=swap noticeable on slow connections | Fonts |
| F4 | Fontshare third-party dependency risk | Fonts |
| TT2 | Mobile nav links below 48px touch target | Touch |
| TT3 | "En savoir plus" links too small for touch | Touch |
| TT4 | Footer social icons too small for touch | Touch |
| V2 | Google Maps embed may use placeholder coordinates | Layout |
| V6 | No skeleton/loading states for SPA | Performance |

### LOW (9)

| # | Finding | Category |
|---|---|---|
| M3 | Trust band metrics tight at 375px | Mobile |
| D3 | Aurora shader performance on integrated GPUs | Desktop |
| VH3 | Gold gradient text contrast at lighter end | Readability |
| DM1 | No light mode option | Dark Mode |
| DM2 | No prefers-color-scheme support | Dark Mode |
| CTA2 | No CTA after Tech Stack section | CTA |
| IMG4 | Logo emblem could be SVG | Images |
| F5 | JetBrains Mono loads unnecessary weights | Fonts |
| TT5 | Footer nav links below touch target | Touch |
| V3 | overflow-x: hidden masks layout bugs | Layout |
| V4 | Aurora shader runs when off-screen | Performance |
| V5 | Animation delay may hide content on slow load | Performance |
| V7 | No noscript fallback | Progressive Enhancement |

---

## 11. Recommended Fixes (Ordered by Impact)

### Quick Wins (< 1 hour each)

1. **Add responsive text size to Contact hero H1:** Change `text-5xl md:text-6xl` to `text-3xl md:text-5xl lg:text-6xl`.

2. **Increase hamburger button touch target:** Add `p-3` to the hamburger `<button>` element in `Header.tsx`.

3. **Replace text-[10px] with text-xs (12px):** Search and replace all instances of `text-[10px]` in `Home.tsx`. Affected elements: pack taglines, "Livre en X jours" labels, security badge text.

4. **Add font preload:** Add to `index.html`:
   ```html
   <link rel="preload" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" as="style" />
   ```

5. **Add width/height to critical images:** Add explicit dimensions to `logo-emblem.png` and `logo-text.png` img tags.

6. **Add CTA after Process section:** Insert a simple "Reserver un appel" button after the 3-step process section.

### Medium Effort (1-4 hours)

7. **Convert images to WebP:** Use a build tool (vite-plugin-imagemin or sharp) to auto-convert all JPEG/PNG to WebP with JPEG fallback.

8. **Implement srcset for automation images:** Create 375px, 768px, and 1200px variants of each automation hero image.

9. **Fix Contact page layout:** Move the Google Maps iframe outside the `lg:grid-cols-2` grid. Add responsive height (aspect-ratio or height classes per breakpoint).

10. **Self-host Satoshi font:** Download from Fontshare, add to `/public/fonts/`, reference via `@font-face` in CSS to eliminate third-party dependency.

11. **Increase mobile nav link touch targets:** Change `py-2.5` to `py-3.5` on mobile nav links. Add `min-h-[48px]` to footer links and social icons.

### Larger Effort (4+ hours)

12. **Add loading skeleton in index.html:** Inject inline CSS and a minimal HTML skeleton that matches the site's dark theme, visible until React hydrates.

13. **Add IntersectionObserver to Aurora shader:** Pause `requestAnimationFrame` when the hero section is not in the viewport.

14. **Add print stylesheet:** `@media print` rules that invert to light background, hide navigation/footer, and optimize for paper.

---

## 12. Positive Observations

The following aspects of the visual implementation are well-executed:

- **Consistent design system:** CSS custom properties for all colors, shadows, and transitions. No hardcoded values scattered across components.
- **Dark premium aesthetic:** The gold-on-black palette with subtle gradients and noise textures creates a premium, Swiss-tech brand identity.
- **Progressive Aurora rendering:** Three.js for desktop, CSS gradient fallback for mobile. Performance-conscious decision.
- **Responsive grid system:** Most sections correctly transition from single-column mobile to multi-column desktop.
- **Smooth animations:** `cubic-bezier(0.4, 0, 0.2, 1)` easing and `hover-lift` utility provide polished micro-interactions.
- **Tailwind responsive prefixes:** Good use of `md:`, `lg:`, and `sm:` breakpoints across most components.
- **WhatsApp integration:** Persistent FAB provides always-available contact channel, important for Swiss SME audience.
- **Accessibility basics:** `aria-label` on icon buttons, `sr-only` text on WhatsApp button, semantic HTML structure.

---

*Generated by Claude Opus 4.6 -- Source code analysis of lxstudio-digital-craft repository.*
*For visual confirmation, run Playwright screenshots at the four tested viewports.*
