# BRIEF DE REFONTE — LX Studio (lxstudio.ch)
## Document pour Claude Code — À exécuter dans le repo `lxstudio-digital-craft`

---

## 1. AUDIT DU SITE ACTUEL

### Tech Stack
- **Framework** : Vite + React 18 + TypeScript
- **Styling** : Tailwind CSS 3.4 + shadcn/ui (composants Radix)
- **Routing** : react-router-dom v6 (multi-page SPA)
- **State** : React Query (tanstack)
- **Backend** : Supabase (Edge Functions pour le formulaire de contact)
- **Déployé sur** : Vercel (probablement)
- **Built with** : Lovable (visible dans devDeps `lovable-tagger`)

### Structure actuelle (12 pages + 20 sous-pages métiers)
```
/ (Home)
/services
/automatisations-ia (+ 20 sous-pages par métier)
/seo-geo
/portfolio
/blog (+ 3 articles)
/about
/contact
/privacy
/terms
```

### Design System actuel
- **Theme** : Dark mode uniquement (fond noir #0A0A0A)
- **Primary** : Gold/doré (HSL 38 54% 54%)
- **Secondary** : Electric blue (HSL 222 89% 63%)
- **Fonts** : Inter/Poppins (body), Playfair Display/Cormorant Garamond (headings)
- **Animations** : CSS basiques (fadeIn, slideUp, glow) — pas de librairie d'animation
- **Particules** : `ParticlesBackground` component sur le hero

### Problèmes identifiés

#### Stratégiques (CRITIQUES)
1. **Pas de prix affichés** — les offres "Starter/Pro/Entreprise" n'ont aucun prix. C'est un frein majeur à la conversion pour les petites offres agents IA.
2. **Positionnement flou** — le site mélange "agence web", "SEO", "branding" et "agents IA". Il faut un positionnement clair : **LX Studio = Agents IA & Infrastructure digitale pour PME suisses**.
3. **20 pages métiers quasi-identiques** — chaque page utilise `AutomationMetierLayout` avec du contenu générique. Peu de valeur SEO ajoutée, dilue le message.
4. **Pas de social proof** — aucun témoignage, aucun logo client, aucune métrique réelle.
5. **CTA faible** — "Demander un devis" / "Audit gratuit" sont trop vagues. Il faut un CTA direct vers un booking call (Calendly).
6. **Pas de pricing page** — les prospects veulent savoir combien ça coûte AVANT de prendre contact.

#### Design/UX
7. **Look Lovable classique** — le site a l'esthétique typique d'un site généré par Lovable (shadcn par défaut, layout cards prévisible). Pas assez premium pour le positionnement visé.
8. **Animations basiques** — CSS fadeIn/slideUp uniquement, pas d'animations scroll-triggered, pas de smooth scroll, pas d'effets premium.
9. **Polices génériques** — Inter est la police par défaut de tout l'écosystème shadcn. Il faut des polices distinctives.
10. **Pas de vidéo/démo** — aucune démo visuelle des dashboards ou des agents en action.
11. **Footer en 2025** — il dit "© 2025", à mettre à jour.

#### Technique
12. **react-helmet au lieu de react-helmet-async** — risque de warnings React 18
13. **Pas de lazy loading** sur les routes — toutes les pages importées directement dans App.tsx
14. **Supabase client exposé** mais semble limité au formulaire de contact (OK)

---

## 2. NOUVELLE STRATÉGIE DU SITE

### Positionnement
**LX Studio = L'agence IA n°1 pour les PME suisses.**
On ne vend plus "des sites web" en priorité. On vend des **agents IA** qui automatisent le business des PME. L'infrastructure complète (dashboards) est le produit premium.

### Objectif du site
1. **Convertir les prospects froids** en calls de 15 min (via Calendly ou formulaire rapide)
2. **Afficher les prix** pour qualifier automatiquement (les petits budgets ne bookent pas, les bons budgets savent à quoi s'attendre)
3. **Montrer la crédibilité** même avec peu de clients (métriques, stack technique, approche)

### Nouvelle arborescence (simplifiée)
```
/ (Home — one-page principale avec toutes les sections clés)
/agents-ia (remplace /automatisations-ia — page détaillée des offres avec prix)
/infrastructure (page teaser du produit premium — dashboards sur mesure)
/blog (garder les 3 articles existants)
/contact (formulaire + Calendly embed)
/privacy
/terms
```

**Pages à SUPPRIMER** :
- `/services` (intégré dans Home)
- `/seo-geo` (pas le core business, mentionné en footnote)
- `/portfolio` (pas de vrais projets à montrer publiquement pour l'instant)
- `/about` (intégré dans Home)
- Les 20 sous-pages `/automatisations-ia/*` (SEO farming faible valeur — garder en archive mais retirer de la nav)

---

## 3. NOUVELLES OFFRES À INTÉGRER

### TIER 1 — Agents Solo (le volume, la prospection)

| Offre | Prix setup | Prix/mois | Délai |
|---|---|---|---|
| Secrétaire Email IA | 790 CHF | 90 CHF | 5 jours |
| Relance Factures Auto | 690 CHF | 90 CHF | 3 jours |
| Chatbot WhatsApp/Site | 990 CHF | 90 CHF | 7 jours |
| Posts Réseaux Sociaux Auto | 490 CHF | 90 CHF | 5 jours |

**Tagline Tier 1** : "Un agent IA dédié. Résultats en moins d'une semaine."

### TIER 2 — Packs Métier (l'upsell)

| Pack | Prix setup | Prix/mois |
|---|---|---|
| Pack Artisan Connecté (email + relance + chatbot) | 2'500 CHF | 290 CHF |
| Pack Visibilité PME (chatbot + posts + Google Reviews) | 2'000 CHF | 290 CHF |

**Tagline Tier 2** : "L'automatisation complète de votre métier."

### TIER 3 — Infrastructure Complète (le premium)

| Offre | Prix setup | Prix/mois |
|---|---|---|
| Dashboard IA sur mesure | dès 5'000 CHF | 790 CHF |

**Tagline Tier 3** : "Votre entreprise, pilotée par l'IA. Dashboard, workflows, rapports — tout intégré."
**CTA** : "Discutons de votre projet" (pas de prix fixe affiché, booking call)

---

## 4. DESIGN DIRECTION — "Dark Premium Swiss Tech"

### Palette
- **Background** : Noir profond `#050505` (quasi-noir, pas gris)
- **Surface/Cards** : `#0D0D0D` avec bordures subtiles `#1A1A1A`
- **Primary accent** : Gold chaud `#C8A55C` (garder le gold actuel mais plus raffiné)
- **Secondary accent** : Bleu froid `#4A7CFF` (pour les éléments tech/données)
- **Text** : Blanc cassé `#F0EDE8` (pas blanc pur — plus luxe)
- **Muted text** : `#6B6B6B`

### Typographie
**IMPORTANT : Ne PAS utiliser Inter, Roboto, Poppins, Space Grotesk — trop générique.**

- **Display/Headings** : `Instrument Serif` (Google Fonts) — élégant, moderne, premium
- **Body** : `Satoshi` (Fontshare) ou `General Sans` (Fontshare) — clean, contemporain, pas banal
- **Mono/technique** : `JetBrains Mono` pour les éléments techniques/prix

### Animations (installer GSAP + ScrollTrigger)
```bash
npm install gsap @studio-freight/lenis
```

Patterns à implémenter :
1. **Hero** : Stagger entry (texte apparaît mot par mot ou ligne par ligne)
2. **Cards offres** : Scroll-triggered reveal avec clip-path ou fade-up
3. **Section transitions** : Parallax subtil entre sections
4. **Compteurs** : Animation de comptage pour les métriques (ex: "150+ agents déployés")
5. **Smooth scroll** : Lenis pour un scroll fluide global
6. **Hover effects** : Cards avec glow doré subtil au hover, micro-interactions
7. **Cursor custom** (optionnel) : Point doré qui suit la souris

### Éléments visuels
- **Grain/noise overlay** : Texture subtile sur le fond pour éviter le "flat" — `mix-blend-mode: overlay` avec un SVG noise
- **Gradient meshes** : Gradients gold/blue subtils en arrière-plan des sections clés
- **Grid pattern** : Grille pointillée très subtile visible en fond (style tech)
- **Glow effects** : Halos lumineux derrière les éléments clés (hero, CTA)

---

## 5. STRUCTURE DE LA HOMEPAGE — Section par section

### Section 1 : HERO
```
[Badge] Agents IA pour PME suisses

[H1] Automatisez votre business.
     Gardez le contrôle.

[Sous-titre] Agents IA et infrastructure digitale sur mesure 
pour les PME suisses. Résultats en 5 jours.

[CTA principal] Réserver un appel découverte →
[CTA secondaire] Voir nos offres ↓

[Élément visuel] Animation de particules ou gradient mesh animé
```

**Animation** : Stagger entry — badge → H1 ligne 1 → H1 ligne 2 → sous-titre → CTAs avec 150ms de délai entre chaque.

### Section 2 : BANDE DE CONFIANCE (social proof light)
```
Bande horizontale avec des métriques animées (compteurs) :
"50+ automatisations déployées" | "4 secteurs d'activité" | "Suisse romande" | "Support 7j/7"
```
*(Même si les chiffres sont modestes, les afficher donne de la crédibilité. On peut les ajuster.)*

### Section 3 : LE PROBLÈME (empathie)
```
[H2] Vous perdez du temps sur des tâches que l'IA fait mieux.

3 colonnes "pain points" avec icônes :
- 📧 Emails noyés dans votre inbox
- 🧾 Relances factures oubliées  
- 📱 Clients sans réponse le week-end

[Transition] "Et si un agent IA s'en occupait pour vous ?"
```

### Section 4 : NOS AGENTS IA — TIER 1 (les offres qui convertissent)
```
[H2] Un agent IA. Un problème résolu.
[Sous-titre] Déployé en moins d'une semaine. Résultats immédiats.

4 cards avec :
- Icône
- Nom de l'agent
- Description (2 lignes max)
- Prix : "dès XXX CHF" + "XX CHF/mois"
- CTA : "En savoir plus →"

Cards disposées en grid 2x2 ou 4 colonnes
```

**Animation** : Cards apparaissent en stagger au scroll, avec un léger scale-up.

### Section 5 : PACKS MÉTIER — TIER 2
```
[H2] Packs tout-en-un pour votre métier
[Sous-titre] Combinez plusieurs agents pour une automatisation complète.

2 cards plus grandes :
- Pack Artisan Connecté (2'500 CHF + 290/mois)
- Pack Visibilité PME (2'000 CHF + 290/mois)

Chaque card liste les agents inclus avec des checkmarks.
Badge "Économisez XX%" par rapport aux agents individuels.
```

### Section 6 : INFRASTRUCTURE COMPLÈTE — TIER 3 (teaser premium)
```
[H2] Pour les PME qui veulent tout digitaliser.
[Sous-titre] Dashboard sur mesure. Workflows automatisés. IA intégrée.

Layout full-width avec :
- Côté gauche : Description + features list
  - Planification intelligente
  - Devis & factures automatisés
  - Rapports et analytics
  - Gestion multi-utilisateurs
- Côté droit : Screenshot/mockup du dashboard (ou placeholder stylisé)

[Prix] "À partir de 5'000 CHF + 790 CHF/mois"
[CTA] "Discutons de votre projet →"

Background : gradient mesh gold subtil
```

### Section 7 : COMMENT ÇA MARCHE (process)
```
[H2] Simple. Rapide. Efficace.

3 étapes horizontales reliées par une ligne :
1. Appel découverte (15 min) — On comprend vos besoins
2. Setup de votre agent — On configure et intègre en 3-7 jours
3. Votre agent travaille — Résultats mesurables dès la 1ère semaine

Chaque étape avec un numéro stylisé (gold, grande typo mono)
```

### Section 8 : STACK TECHNIQUE (crédibilité tech)
```
[H2] Technologie de pointe. Fiabilité suisse.

Logos/badges des technologies : n8n, Supabase, OpenAI/Claude, Next.js, Vercel
+ badges : "RGPD compliant" | "Hébergé en Europe" | "Chiffrement TLS"

Style : logos en gris/blanc, s'illuminent en gold au hover
```

### Section 9 : FAQ
```
Accordion avec 5-6 questions :
- Combien de temps pour déployer un agent ?
- Est-ce que ça fonctionne avec mes outils actuels ?
- Que se passe-t-il si l'agent fait une erreur ?
- Puis-je annuler à tout moment ?
- Comment fonctionne la facturation ?
- Est-ce sécurisé ?
```

### Section 10 : CTA FINAL
```
[H2] Prêt à automatiser votre business ?
[Sous-titre] Réservez un appel de 15 minutes. C'est gratuit.

[CTA] Réserver mon appel découverte →
[Lien secondaire] Ou écrivez-nous : contact@lxstudio.ch
```

---

## 6. INSTRUCTIONS TECHNIQUES POUR CLAUDE CODE

### Étapes de la refonte

#### Phase 1 : Setup
```bash
# Installer les nouvelles dépendances
npm install gsap lenis
# OU si lenis ne marche pas :
npm install @studio-freight/lenis

# Ajouter les fonts dans index.html
# Instrument Serif : https://fonts.google.com/specimen/Instrument+Serif
# Satoshi : https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap
# JetBrains Mono : https://fonts.google.com/specimen/JetBrains+Mono
```

#### Phase 2 : Design System
1. Mettre à jour `src/index.css` avec la nouvelle palette de couleurs
2. Mettre à jour les fonts (body: Satoshi, headings: Instrument Serif, mono: JetBrains Mono)
3. Ajouter les utilitaires CSS : noise texture overlay, gradient meshes, glow effects
4. Créer un hook `useGSAP` pour les animations scroll-triggered (voir pattern dans le brief)
5. Initialiser Lenis smooth scroll dans `App.tsx` ou `main.tsx`

#### Phase 3 : Nouvelles pages
1. **Refonte complète de `Home.tsx`** selon la structure Section 1-10 ci-dessus
2. **Créer `src/pages/AgentsIA.tsx`** — page détaillée des offres Tier 1 avec specs, FAQ par agent, et CTA
3. **Créer `src/pages/Infrastructure.tsx`** — page teaser Tier 3 avec screenshots/mockups du dashboard
4. **Mettre à jour `Header.tsx`** — nouvelle nav simplifiée : Accueil | Agents IA | Infrastructure | Blog | Contact
5. **Mettre à jour `Footer.tsx`** — © 2026, liens mis à jour
6. **Mettre à jour `App.tsx`** — routes simplifiées, lazy loading avec React.lazy + Suspense

#### Phase 4 : Suppression du superflu
1. Retirer de la navigation : Services, SEO-GEO, Portfolio, About
2. Les pages métiers `/automatisations-ia/*` : garder les fichiers pour le SEO mais retirer de la nav principale
3. Supprimer les composants inutilisés : `PricingCard.tsx`, `ProjectCard.tsx`, `ServiceCard.tsx`, `TeamMember.tsx`

#### Phase 5 : Animations
Implémenter avec GSAP + ScrollTrigger :
1. Hero stagger entry
2. Cards scroll-reveal (fade-up + scale)
3. Compteurs animés (métriques)
4. Parallax subtil entre sections
5. Smooth scroll global (Lenis)
6. Hover glow sur les cards

### Fichiers à modifier (priorité)
```
src/index.css          → Nouveau design system complet
src/App.tsx            → Routes simplifiées + lazy loading + Lenis init
src/pages/Home.tsx     → REFONTE COMPLÈTE (10 sections)
src/components/Header.tsx → Nav simplifiée
src/components/Footer.tsx → Mise à jour
index.html             → Ajouter fonts (Instrument Serif, Satoshi, JetBrains Mono)
```

### Fichiers à créer
```
src/pages/AgentsIA.tsx      → Page offres détaillées
src/pages/Infrastructure.tsx → Page produit premium
src/hooks/useGSAP.ts        → Hook animations GSAP
src/components/ScrollReveal.tsx → Composant wrapper pour animations scroll
src/components/Counter.tsx     → Composant compteur animé
```

### Contenu du ContactModal à mettre à jour
Ajouter les nouvelles options de service dans le Select :
- "Agent Email IA"
- "Agent Relance Factures"
- "Chatbot WhatsApp/Site"
- "Agent Posts Réseaux"
- "Pack Artisan Connecté"
- "Pack Visibilité PME"
- "Infrastructure complète"

---

## 7. COPY / TEXTES CLÉS

### Hero
- **H1** : "Automatisez votre business. Gardez le contrôle."
- **Sous-titre** : "Agents IA et infrastructure digitale sur mesure pour les PME suisses. Résultats en 5 jours."
- **CTA 1** : "Réserver un appel découverte"
- **CTA 2** : "Voir nos offres"

### Pain points
- "Vous répondez encore manuellement à chaque email client ?"
- "Vos relances de factures passent à la trappe ?"
- "Vos clients attendent 48h pour un devis ?"

### Descriptions agents
- **Secrétaire Email IA** : "Trie, classifie et répond à vos emails professionnels. Notifications intelligentes pour les urgences. Vous ne ratez plus rien."
- **Relance Factures Auto** : "Rappels automatiques à 30, 45 et 60 jours. Messages professionnels personnalisés. Récupérez votre argent sans effort."
- **Chatbot WhatsApp/Site** : "Répond à vos clients 24h/24, prend des rendez-vous et transfère les demandes complexes. Disponible même quand vous dormez."
- **Posts Réseaux Sociaux Auto** : "Génère et publie du contenu adapté à votre métier. Restez visible sans y passer 2 heures par jour."

### FAQ
- **Q : Combien de temps pour déployer un agent ?**
  R : Entre 3 et 7 jours selon la complexité. Les agents solo (Tier 1) sont opérationnels en 3-5 jours.

- **Q : Est-ce que ça fonctionne avec mes outils actuels ?**
  R : Oui. Nos agents s'intègrent avec Gmail, Outlook, WhatsApp, Bexio, et la plupart des outils que vous utilisez déjà.

- **Q : Que se passe-t-il si l'agent fait une erreur ?**
  R : Chaque agent a des garde-fous intégrés. Les actions critiques (facturation, envoi de devis) sont validées avant exécution. Vous gardez toujours le contrôle.

- **Q : Puis-je annuler à tout moment ?**
  R : Oui, pas d'engagement minimum. Vous payez mensuellement et pouvez arrêter quand vous voulez.

- **Q : Comment fonctionne la facturation ?**
  R : Un setup unique à la mise en place, puis un abonnement mensuel. Tout est facturé en CHF, TVA incluse.

- **Q : Est-ce sécurisé ?**
  R : Toutes les données sont chiffrées, hébergées en Europe, et conformes au RGPD et à la législation suisse sur la protection des données.

---

## 8. PRIORITÉS D'EXÉCUTION

### Sprint 1 (ce soir / demain matin) — CRITIQUE
1. ✅ Nouveau design system (couleurs, fonts, CSS)
2. ✅ Refonte Home.tsx (les 10 sections)
3. ✅ Header simplifié
4. ✅ Footer mis à jour

### Sprint 2 (demain)
5. Page AgentsIA.tsx avec offres détaillées
6. Animations GSAP (hero + scroll reveals)
7. ContactModal mis à jour

### Sprint 3 (J+2)
8. Page Infrastructure.tsx
9. Smooth scroll (Lenis)
10. Optimisations (lazy loading, react-helmet-async)
11. Test mobile responsive

---

*Ce document est conçu pour être donné directement à Claude Code. Il contient toutes les informations nécessaires pour exécuter la refonte sans questions supplémentaires.*

*Dernière mise à jour : 24 mars 2026*