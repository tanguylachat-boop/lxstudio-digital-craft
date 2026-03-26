import Link from "@/components/Link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  CalendarCheck,
  FileText,
  BarChart3,
  Users,
  Shield,
  Zap,
  Settings,
  Layers,
  Database,
  Bell,
  LineChart,
  Lock,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Planification intelligente",
    description: "Agenda IA qui planifie, replanifie et optimise automatiquement vos rendez-vous et projets.",
  },
  {
    icon: FileText,
    title: "Devis & factures automatisés",
    description: "Génération, envoi et suivi automatisés. Relances intégrées. Compatible Bexio et Abacus.",
  },
  {
    icon: BarChart3,
    title: "Rapports et analytics",
    description: "Tableaux de bord en temps réel : chiffre d'affaires, pipeline, satisfaction client, KPIs métier.",
  },
  {
    icon: Users,
    title: "Gestion multi-utilisateurs",
    description: "Rôles et permissions par équipe. Chaque collaborateur voit uniquement ce qui le concerne.",
  },
  {
    icon: Layers,
    title: "Workflows automatisés",
    description: "Chaînes d'actions sans code : quand X arrive, faire Y puis Z. Notifications, mises à jour, alertes.",
  },
  {
    icon: Database,
    title: "Base de données centralisée",
    description: "Toutes vos données clients, projets et finances au même endroit. Recherche instantanée.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit de vos processus",
    duration: "1 semaine",
    description: "On cartographie vos flux de travail actuels et identifie les points d'automatisation à fort impact.",
  },
  {
    number: "02",
    title: "Design du dashboard",
    duration: "1-2 semaines",
    description: "Maquettes interactives de votre dashboard. Vous validez chaque écran avant le développement.",
  },
  {
    number: "03",
    title: "Développement & intégration",
    duration: "2-4 semaines",
    description: "Construction du dashboard, connexion à vos outils existants, configuration des workflows IA.",
  },
  {
    number: "04",
    title: "Formation & déploiement",
    duration: "1 semaine",
    description: "Formation de votre équipe, migration des données, mise en production avec support dédié.",
  },
];

/* ── Dashboard mockup en CSS/SVG ── */
const DashboardMockup = () => (
  <div className="relative w-full aspect-[16/10] rounded-2xl border border-border/30 bg-background/80 backdrop-blur overflow-hidden">
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20 bg-[hsl(var(--surface))]">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
      </div>
      <span className="text-[10px] text-muted-foreground font-mono-tech ml-2">dashboard.lxstudio.ch</span>
    </div>

    <div className="flex h-[calc(100%-40px)]">
      {/* Sidebar */}
      <div className="w-14 md:w-16 border-r border-border/20 bg-[hsl(var(--surface))] py-4 flex flex-col items-center gap-4">
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
          <BarChart3 className="w-3.5 h-3.5 text-primary" />
        </div>
        <div className="w-7 h-7 rounded-lg bg-muted/50 flex items-center justify-center">
          <Users className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        <div className="w-7 h-7 rounded-lg bg-muted/50 flex items-center justify-center">
          <FileText className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        <div className="w-7 h-7 rounded-lg bg-muted/50 flex items-center justify-center">
          <Settings className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-3 md:p-4 space-y-3">
        {/* Top metrics row */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {[
            { label: "CA mensuel", value: "47'280", trend: "+12%" },
            { label: "Factures en attente", value: "8", trend: "-3" },
            { label: "Clients actifs", value: "34", trend: "+5" },
          ].map((m) => (
            <div key={m.label} className="bg-[hsl(var(--surface))] rounded-lg p-2 md:p-3 border border-border/10">
              <p className="text-[8px] md:text-[10px] text-muted-foreground truncate">{m.label}</p>
              <p className="font-mono-tech text-sm md:text-base font-bold text-foreground">{m.value}</p>
              <p className="text-[8px] md:text-[10px] text-primary">{m.trend}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-[hsl(var(--surface))] rounded-lg p-3 border border-border/10 flex-1">
          <p className="text-[9px] md:text-[10px] text-muted-foreground mb-2">Chiffre d'affaires 2026</p>
          <svg viewBox="0 0 300 80" className="w-full h-12 md:h-16">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(41 50% 57%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(41 50% 57%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,30 T300,15"
              fill="none"
              stroke="hsl(41 50% 57%)"
              strokeWidth="2"
            />
            <path
              d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,30 T300,15 L300,80 L0,80 Z"
              fill="url(#chartGrad)"
            />
          </svg>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div className="bg-[hsl(var(--surface))] rounded-lg p-2 md:p-3 border border-border/10">
            <p className="text-[8px] md:text-[10px] text-muted-foreground mb-1">Tâches IA actives</p>
            <div className="space-y-1">
              {["Relance facture #247", "Email client Müller", "Post LinkedIn"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[7px] md:text-[9px] text-foreground truncate">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--surface))] rounded-lg p-2 md:p-3 border border-border/10">
            <p className="text-[8px] md:text-[10px] text-muted-foreground mb-1">Prochains RDV</p>
            <div className="space-y-1">
              {["14:00 — Appel Dupont SA", "16:30 — Demo dashboard", "Dem. 09:00 — Audit PME"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CalendarCheck className="w-2.5 h-2.5 text-primary flex-shrink-0" />
                  <span className="text-[7px] md:text-[9px] text-foreground truncate">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Glow overlay */}
    <div
      className="absolute -inset-4 -z-10 rounded-3xl opacity-40"
      style={{
        background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
      }}
    />
  </div>
);

const InfrastructurePage = () => (
  <div className="min-h-screen">

    {/* Hero */}
    <section className="pt-32 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 gradient-mesh-hero z-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(var(--gold) / 0.08) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Offre premium</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Votre entreprise,
              <br />
              <span className="text-gradient-gold">pilotée par l'IA.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Dashboard sur mesure. Workflows automatisés. IA intégrée.
              Tout votre business dans une interface unique.
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-mono-tech text-sm text-muted-foreground">À partir de</span>
              <span className="font-mono-tech text-3xl md:text-4xl font-bold text-primary">5'000 CHF</span>
              <span className="text-muted-foreground text-sm">+ 790 CHF/mois</span>
            </div>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Discutons de votre projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[hsl(var(--surface))]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Tout ce dont votre PME <span className="text-gradient-gold">a besoin</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Un outil central qui remplace 5 abonnements différents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background/80 border border-border/30 rounded-2xl p-6 hover-lift card-glow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Comment ça <span className="text-gradient-gold">fonctionne</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          {processSteps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="font-mono-tech text-4xl md:text-5xl font-bold text-primary/20 mb-3">
                {step.number}
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-primary text-xs font-medium mb-2 font-mono-tech">
                {step.duration}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Security & compliance */}
    <section className="py-16 md:py-20 px-4 md:px-6 bg-[hsl(var(--surface))] border-y border-border/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl text-foreground mb-4">
            Sécurité & <span className="text-gradient-gold">conformité</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: Lock, title: "Chiffrement TLS", desc: "Toutes les données chiffrées en transit et au repos" },
            { icon: Globe, title: "Hébergé en Europe", desc: "Serveurs en Suisse et en Europe, conformité RGPD" },
            { icon: Shield, title: "Conforme LPD", desc: "Respect de la loi suisse sur la protection des données" },
          ].map((item) => (
            <div key={item.title} className="bg-background/50 border border-border/30 rounded-xl p-5 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-foreground font-semibold text-sm mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background relative overflow-hidden noise-overlay">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.1) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto relative z-10 text-center max-w-3xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-6">
          Prêt à piloter votre PME <span className="text-gradient-gold">avec l'IA ?</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
          Chaque projet commence par un appel de 15 minutes. On discute de vos besoins, sans engagement.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="xl" className="group w-full sm:w-auto">
            <Phone className="w-5 h-5 mr-2" />
            Discutons de votre projet
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <p className="text-muted-foreground text-sm mt-6">
          Ou écrivez-nous :{" "}
          <a href="mailto:contact@lxstudio.ch" className="text-primary hover:underline">
            contact@lxstudio.ch
          </a>
        </p>
      </div>
    </section>
  </div>
);

export default InfrastructurePage;
