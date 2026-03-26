# GEO / AI Search Readiness Audit -- lxstudio.ch

**Date:** 2026-03-25
**Domain:** https://www.lxstudio.ch
**Type:** Swiss digital agency (French language)

---

## Overall GEO Health Score: 29/100

### Dimension Breakdown

| Dimension | Score | Weighted |
|-----------|-------|----------|
| Citability (25%) | 22/100 | 5.5 |
| Structural Readability (20%) | 35/100 | 7.0 |
| Multi-Modal Content (15%) | 15/100 | 2.3 |
| Authority & Brand Signals (20%) | 38/100 | 7.6 |
| Technical Accessibility (20%) | 33/100 | 6.6 |

---

## AI Crawler Access

All AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) are allowed via wildcard `User-agent: * / Allow: /`, but no explicit rules exist. The fundamental problem: the site is a **client-side rendered React SPA** -- crawlers see an empty `<div id="root"></div>` for every page.

## llms.txt: Missing

404 at both `/llms.txt` and `/.well-known/llms.txt`.

## Platform Scores

| Platform | Score |
|----------|-------|
| Google AI Overviews | 25/100 |
| Bing Copilot | 22/100 |
| Perplexity | 18/100 |
| ChatGPT | 15/100 |

---

## Findings by Priority

### CRITICAL

1. **CSR Architecture blocks all AI crawlers** -- No SSR/SSG. 95% of content invisible to AI crawlers. Impact if fixed: +30-40 points.

### HIGH

2. **No llms.txt** -- No AI-readable site summary. Impact: +3-5 points.
3. **No FAQPage Schema** -- 6 Q&A pairs exist in source but invisible to crawlers (no JSON-LD, CSR). Impact: +5-8 points.
4. **Wrong `lang` attribute** -- `<html lang="en">` on French site. Impact: +2-3 points.
5. **No question-format headings** -- All headings are marketing copy, not questions AI users would ask. Impact: +5-8 points.

### MEDIUM

6. **No definition lists or glossary content** -- AI models prefer structured definitions.
7. **No Person schema for founder** -- Weakens E-E-A-T for AI citation.
8. **Blog content is the most citable** -- But only 3 articles exist with no structured data.
9. **No AI-specific robots.txt rules** -- Should add explicit Allow for GPTBot, ClaudeBot.

---

## Projected Score After Implementation: 72-91/100

Phase 1 quick wins (lang fix, llms.txt, FAQ schema, robots.txt): +8-12 points in Week 1.
Phase 2-4 (SSR migration, content restructuring): +30-50 points over 6 weeks.
