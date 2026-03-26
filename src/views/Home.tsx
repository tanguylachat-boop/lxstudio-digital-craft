import { lazy, Suspense, useEffect, useState } from "react";
import Link from "@/components/Link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  FileText,
  MessageCircle,
  Share2,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  Phone,
  Zap,
  Shield,
  BarChart3,
  Users,
  CalendarCheck,
  Clock,
} from "lucide-react";
import { imgSrc } from "@/lib/image";
import logoEmblem from "@/assets/logo-emblem.png";

const AuroraBackground = lazy(() => import("@/components/AuroraBackground"));

/* ── Mobile detection hook ── */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

/* ──────────────────────────────────────────
   Section 1 : HERO — 2 colonnes desktop
   ────────────────────────────────────────── */
const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 noise-overlay">
      {/* Background: Three.js aurora on desktop, CSS fallback on mobile */}
      {!isMobile ? (
        <Suspense fallback={<div className="absolute inset-0 gradient-mesh-hero z-0" />}>
          <AuroraBackground />
        </Suspense>
      ) : (
        <div className="absolute inset-0 z-0 aurora-fallback" />
      )}
      <div className="absolute inset-0 gradient-mesh-hero z-[1]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.65fr] gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left — Text (60%) */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs md:text-sm font-medium tracking-wide">
                Agents IA pour PME suisses
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-foreground mb-4 md:mb-6 leading-[1.1] animate-slide-up">
              Automatisez votre business.
              <br />
              <span className="text-gradient-gold">Gardez le contrôle.</span>
            </h1>

            {/* Sous-titre */}
            <p
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.15s" }}
            >
              Agents IA et infrastructure digitale sur mesure
              pour les PME suisses. Résultats en 5 jours.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Réserver un appel découverte
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#offres" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10 text-foreground w-full sm:w-auto">
                  Voir nos offres
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right — Logo visual placeholder (40%) — hidden on mobile */}
          {/* TODO: Remplacer par vidéo Veo3 du logo animé */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full animate-glow-ring opacity-20" />
              <div className="absolute inset-4 rounded-full animate-glow-ring opacity-15" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-8 rounded-full animate-glow-ring opacity-10" style={{ animationDelay: "2s" }} />

              {/* Logo */}
              <img
                src={imgSrc(logoEmblem)}
                alt="LX Studio"
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain relative z-10 drop-shadow-[0_0_40px_hsl(var(--gold)/0.4)]"
              />

              {/* Static glow behind logo */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--gold) / 0.2) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────
   Section 2 : BANDE DE CONFIANCE
   ────────────────────────────────────────── */
const metrics = [
  { value: "50+", label: "automatisations déployées" },
  { value: "4", label: "secteurs d'activité" },
  { value: "CH", label: "Suisse romande" },
  { value: "7j/7", label: "support réactif" },
];

const TrustBand = () => (
  <section className="py-5 md:py-6 border-y border-border/30 bg-[hsl(var(--surface))]">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-16">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2 md:gap-3 justify-center">
            <span className="font-mono-tech text-xl md:text-3xl font-bold text-primary">
              {m.value}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 3 : LE PROBLÈME
   ────────────────────────────────────────── */
const painPoints = [
  { icon: Mail, text: "Vous répondez encore manuellement à chaque email client ?" },
  { icon: FileText, text: "Vos relances de factures passent à la trappe ?" },
  { icon: Clock, text: "Vos clients attendent 48h pour un devis ?" },
];

const ProblemSection = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6">
          Vous perdez du temps sur des tâches
          <br className="hidden md:block" />
          <span className="text-gradient-gold"> que l'IA fait mieux.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
        {painPoints.map((p, i) => (
          <div
            key={i}
            className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 md:p-8 text-center hover-lift"
          >
            <p.icon className="w-8 h-8 md:w-10 md:h-10 text-destructive/70 mx-auto mb-4 md:mb-5" />
            <p className="text-foreground text-sm md:text-base font-medium leading-snug">{p.text}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-base md:text-xl text-muted-foreground italic">
        Et si un agent IA s'en occupait pour vous ?
      </p>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 4 : AGENTS IA — TIER 1
   ────────────────────────────────────────── */
const agents = [
  {
    icon: Mail,
    name: "Secrétaire Email IA",
    description: "Trie, classifie et répond à vos emails professionnels. Notifications intelligentes pour les urgences.",
    setup: "790",
    monthly: "90",
    delay: "5 jours",
  },
  {
    icon: FileText,
    name: "Relance Factures Auto",
    description: "Rappels automatiques à 30, 45 et 60 jours. Messages professionnels personnalisés.",
    setup: "690",
    monthly: "90",
    delay: "3 jours",
  },
  {
    icon: MessageCircle,
    name: "Chatbot WhatsApp/Site",
    description: "Répond à vos clients 24h/24, prend des rendez-vous et transfère les demandes complexes.",
    setup: "990",
    monthly: "90",
    delay: "7 jours",
  },
  {
    icon: Share2,
    name: "Posts Réseaux Sociaux Auto",
    description: "Génère et publie du contenu adapté à votre métier. Restez visible sans y passer 2h par jour.",
    setup: "490",
    monthly: "90",
    delay: "5 jours",
  },
];

const AgentsTier1 = () => (
  <section id="offres" className="py-16 md:py-24 bg-[hsl(var(--surface))] relative overflow-hidden noise-overlay">
    <div className="absolute inset-0 gradient-mesh-gold z-0" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
          Un agent IA. <span className="text-gradient-gold">Un problème résolu.</span>
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Déployé en moins d'une semaine. Résultats immédiats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        {agents.map((agent, i) => (
          <div
            key={i}
            className="bg-background/80 backdrop-blur border border-border/50 rounded-2xl p-5 md:p-8 hover-lift card-glow group"
          >
            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-11 h-11 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <agent.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1.5 md:mb-2" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  {agent.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-5 leading-relaxed">
                  {agent.description}
                </p>
                <div className="flex items-baseline gap-2 md:gap-3 mb-4 md:mb-5">
                  <span className="font-mono-tech text-xl md:text-2xl font-bold text-primary">
                    {agent.setup} CHF
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm">
                    + {agent.monthly} CHF/mois
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Livré en {agent.delay}
                  </span>
                  <Link to="/agents-ia" className="text-primary text-xs md:text-sm font-medium hover:underline flex items-center gap-1">
                    En savoir plus <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 5 : PACKS MÉTIER — TIER 2
   ────────────────────────────────────────── */
const packs = [
  {
    name: "Pack Artisan Connecté",
    tagline: "Email + Relance + Chatbot",
    setup: "2'500",
    monthly: "290",
    saving: "25",
    features: ["Secrétaire Email IA", "Relance Factures Auto", "Chatbot WhatsApp/Site"],
  },
  {
    name: "Pack Visibilité PME",
    tagline: "Chatbot + Posts + Google Reviews",
    setup: "2'000",
    monthly: "290",
    saving: "20",
    features: ["Chatbot WhatsApp/Site", "Posts Réseaux Sociaux Auto", "Gestion Google Reviews"],
  },
];

const PacksTier2 = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
          Packs tout-en-un <span className="text-gradient-gold">pour votre métier</span>
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Combinez plusieurs agents pour une automatisation complète.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
        {packs.map((pack, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--surface))] border border-border/50 rounded-2xl p-6 md:p-8 hover-lift card-glow relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary/20 text-primary text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full font-mono-tech">
              -{pack.saving}%
            </div>

            <p className="text-[10px] md:text-sm text-muted-foreground mb-1 uppercase tracking-wider" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {pack.tagline}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 md:mb-6">{pack.name}</h3>

            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {pack.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-2 md:gap-3 mb-5 md:mb-6">
              <span className="font-mono-tech text-2xl md:text-3xl font-bold text-primary">
                {pack.setup} CHF
              </span>
              <span className="text-muted-foreground text-xs md:text-sm">
                + {pack.monthly} CHF/mois
              </span>
            </div>

            <Link to="/contact">
              <Button variant="hero" className="w-full group">
                Demander ce pack
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 6 : INFRASTRUCTURE — TIER 3
   ────────────────────────────────────────── */
const infraFeatures = [
  { icon: CalendarCheck, label: "Planification intelligente" },
  { icon: FileText, label: "Devis & factures automatisés" },
  { icon: BarChart3, label: "Rapports et analytics" },
  { icon: Users, label: "Gestion multi-utilisateurs" },
];

const InfraSection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden noise-overlay">
    <div className="absolute inset-0 bg-[hsl(var(--surface))]" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, hsl(var(--gold) / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, hsl(var(--electric-blue) / 0.04) 0%, transparent 50%)",
      }}
    />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
            Pour les PME qui veulent
            <br />
            <span className="text-gradient-gold">tout digitaliser.</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed">
            Dashboard sur mesure. Workflows automatisés. IA intégrée.
          </p>

          <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 inline-block text-left">
            {infraFeatures.map((f) => (
              <li key={f.label} className="flex items-center gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <f.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="text-foreground text-sm md:text-base font-medium">{f.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline gap-2 md:gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
            <span className="font-mono-tech text-xs md:text-sm text-muted-foreground">À partir de</span>
            <span className="font-mono-tech text-2xl md:text-3xl font-bold text-primary">5'000 CHF</span>
            <span className="text-muted-foreground text-xs md:text-sm">+ 790 CHF/mois</span>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Link to="/infrastructure">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Discutons de votre projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-border/30 bg-background/50 backdrop-blur overflow-hidden grid-pattern flex items-center justify-center">
            <div className="text-center p-6 md:p-8">
              <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-primary/40 mx-auto mb-3 md:mb-4" />
              <p className="text-muted-foreground text-sm">Dashboard IA sur mesure</p>
              <p className="text-muted-foreground/50 text-xs mt-1">Aperçu bientôt disponible</p>
            </div>
          </div>
          <div
            className="absolute -inset-4 -z-10 rounded-3xl opacity-50"
            style={{
              background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 7 : COMMENT ÇA MARCHE
   ────────────────────────────────────────── */
const steps = [
  { number: "01", title: "Appel découverte", subtitle: "15 min", description: "On comprend vos besoins et identifie les tâches à automatiser." },
  { number: "02", title: "Setup de votre agent", subtitle: "3-7 jours", description: "On configure, intègre et teste votre agent avec vos outils existants." },
  { number: "03", title: "Votre agent travaille", subtitle: "Dès la 1ère semaine", description: "Résultats mesurables. Vous gardez le contrôle à tout moment." },
];

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
          Simple. Rapide. <span className="text-gradient-gold">Efficace.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

        {steps.map((step) => (
          <div key={step.number} className="text-center relative">
            <div className="font-mono-tech text-4xl md:text-5xl font-bold text-primary/20 mb-3 md:mb-4">
              {step.number}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {step.title}
            </h3>
            <p className="text-primary text-xs md:text-sm font-medium mb-2 md:mb-3 font-mono-tech">
              {step.subtitle}
            </p>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 8 : STACK TECHNIQUE
   ────────────────────────────────────────── */
const techLogos = ["n8n", "Supabase", "OpenAI", "Claude", "Next.js", "Vercel"];
const badges = ["RGPD compliant", "Hébergé en Europe", "Chiffrement TLS"];

const TechStack = () => (
  <section className="py-14 md:py-20 bg-[hsl(var(--surface))] border-y border-border/30 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
          Technologie de pointe.{" "}
          <span className="text-gradient-gold">Fiabilité suisse.</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3 md:gap-6 mb-8 md:mb-10 max-w-3xl mx-auto">
        {techLogos.map((tech) => (
          <div
            key={tech}
            className="bg-background/50 border border-border/30 rounded-xl px-3 py-2.5 md:px-6 md:py-3 text-muted-foreground text-xs md:text-sm font-medium hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default font-mono-tech text-center"
          >
            {tech}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {badges.map((badge) => (
          <div
            key={badge}
            className="flex items-center gap-1.5 md:gap-2 bg-primary/5 border border-primary/10 rounded-full px-3 py-1.5 md:px-4 md:py-2"
          >
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-foreground text-[10px] md:text-xs font-medium">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 9 : FAQ
   ────────────────────────────────────────── */
const faqItems = [
  { q: "Combien de temps pour déployer un agent ?", a: "Entre 3 et 7 jours selon la complexité. Les agents solo (Tier 1) sont opérationnels en 3-5 jours." },
  { q: "Est-ce que ça fonctionne avec mes outils actuels ?", a: "Oui. Nos agents s'intègrent avec Gmail, Outlook, WhatsApp, Bexio, et la plupart des outils que vous utilisez déjà." },
  { q: "Que se passe-t-il si l'agent fait une erreur ?", a: "Chaque agent a des garde-fous intégrés. Les actions critiques (facturation, envoi de devis) sont validées avant exécution. Vous gardez toujours le contrôle." },
  { q: "Puis-je annuler à tout moment ?", a: "Oui, pas d'engagement minimum. Vous payez mensuellement et pouvez arrêter quand vous voulez." },
  { q: "Comment fonctionne la facturation ?", a: "Un setup unique à la mise en place, puis un abonnement mensuel. Tout est facturé en CHF, TVA incluse." },
  { q: "Est-ce sécurisé ?", a: "Toutes les données sont chiffrées, hébergées en Europe, et conformes au RGPD et à la législation suisse sur la protection des données." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
          Questions <span className="text-gradient-gold">fréquentes</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-[hsl(var(--surface))] border border-border/30 rounded-xl px-4 md:px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-foreground text-left text-sm md:text-base hover:no-underline py-4 md:py-5" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 md:pb-5 leading-relaxed text-sm">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   Section 10 : CTA FINAL
   ────────────────────────────────────────── */
const CTASection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden noise-overlay">
    <div className="absolute inset-0 bg-[hsl(var(--surface))]" />
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.12) 0%, transparent 60%)",
      }}
    />

    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-foreground mb-4 md:mb-6">
          Prêt à automatiser
          <br />
          <span className="text-gradient-gold">votre business ?</span>
        </h2>
        <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10">
          Réservez un appel de 15 minutes. C'est gratuit.
        </p>
        <div className="flex justify-center">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Réserver mon appel découverte
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm mt-5 md:mt-6">
          Ou écrivez-nous :{" "}
          <a href="mailto:contact@lxstudio.ch" className="text-primary hover:underline">
            contact@lxstudio.ch
          </a>
        </p>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────
   HOME PAGE
   ────────────────────────────────────────── */
const Home = () => (
  <div className="min-h-screen">

    <HeroSection />
    <TrustBand />
    <ProblemSection />
    <AgentsTier1 />
    <PacksTier2 />
    <InfraSection />
    <ProcessSection />
    <TechStack />
    <FAQSection />
    <CTASection />
  </div>
);

export default Home;
