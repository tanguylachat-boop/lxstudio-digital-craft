import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
  CheckCircle,
  Phone,
  Zap,
  Clock,
  Plug,
  Shield,
} from "lucide-react";

/* ── Agent data ── */
const agents = [
  {
    icon: Mail,
    name: "Secrétaire Email IA",
    description:
      "Trie, classifie et répond à vos emails professionnels. Notifications intelligentes pour les urgences. Vous ne ratez plus rien.",
    setup: "790",
    monthly: "90",
    delay: "5 jours",
    features: [
      "Tri automatique par catégorie (urgent, commercial, admin, spam)",
      "Réponses pré-rédigées personnalisées à votre ton",
      "Notifications push pour les emails critiques",
      "Résumé quotidien de votre inbox",
      "Archivage intelligent et recherche rapide",
    ],
    integrations: ["Gmail", "Outlook", "Yahoo Mail", "IMAP/SMTP"],
  },
  {
    icon: FileText,
    name: "Relance Factures Auto",
    description:
      "Rappels automatiques à 30, 45 et 60 jours. Messages professionnels personnalisés. Récupérez votre argent sans effort.",
    setup: "690",
    monthly: "90",
    delay: "3 jours",
    features: [
      "Rappels à J+30, J+45 et J+60 personnalisables",
      "Messages adaptés au ton de votre entreprise",
      "Escalade automatique (email → SMS → appel)",
      "Tableau de bord des factures en attente",
      "Rapports mensuels de recouvrement",
    ],
    integrations: ["Bexio", "Abacus", "Excel/CSV", "Stripe"],
  },
  {
    icon: MessageCircle,
    name: "Chatbot WhatsApp/Site",
    description:
      "Répond à vos clients 24h/24, prend des rendez-vous et transfère les demandes complexes. Disponible même quand vous dormez.",
    setup: "990",
    monthly: "90",
    delay: "7 jours",
    features: [
      "Disponible 24h/24, 7j/7 sur WhatsApp et votre site",
      "Prise de rendez-vous automatique via calendrier",
      "Qualification des leads et transfert humain",
      "Base de connaissances personnalisable",
      "Historique complet des conversations",
    ],
    integrations: ["WhatsApp Business", "Widget site web", "Google Calendar", "Calendly"],
  },
  {
    icon: Share2,
    name: "Posts Réseaux Sociaux Auto",
    description:
      "Génère et publie du contenu adapté à votre métier. Restez visible sans y passer 2 heures par jour.",
    setup: "490",
    monthly: "90",
    delay: "5 jours",
    features: [
      "Génération de contenu adapté à votre secteur",
      "Planification et publication automatique",
      "Visuels générés par IA (images + légendes)",
      "Calendrier éditorial mensuel",
      "Rapport d'engagement hebdomadaire",
    ],
    integrations: ["Instagram", "Facebook", "LinkedIn", "Google Business"],
  },
];

const packs = [
  {
    name: "Pack Artisan Connecté",
    tagline: "Email + Relance + Chatbot",
    setup: "2'500",
    monthly: "290",
    saving: "25",
    agents: ["Secrétaire Email IA", "Relance Factures Auto", "Chatbot WhatsApp/Site"],
    ideal: "Artisans, PME de services, indépendants",
  },
  {
    name: "Pack Visibilité PME",
    tagline: "Chatbot + Posts + Google Reviews",
    setup: "2'000",
    monthly: "290",
    saving: "20",
    agents: ["Chatbot WhatsApp/Site", "Posts Réseaux Sociaux Auto", "Gestion Google Reviews"],
    ideal: "Commerces, restaurants, cabinets, salons",
  },
];

const faqItems = [
  {
    q: "Combien de temps faut-il pour déployer un agent ?",
    a: "Entre 3 et 7 jours selon l'agent. Les agents simples (Posts Réseaux, Relance Factures) sont prêts en 3 jours. Le chatbot, qui nécessite une base de connaissances, prend 5 à 7 jours.",
  },
  {
    q: "Est-ce que l'agent fonctionne avec mes outils actuels ?",
    a: "Oui. Chaque agent s'intègre nativement avec les outils standards (Gmail, Outlook, WhatsApp, Bexio, etc.). Si vous utilisez un outil spécifique, nous vérifions la compatibilité lors de l'appel découverte.",
  },
  {
    q: "Que se passe-t-il si l'agent fait une erreur ?",
    a: "Chaque agent a des garde-fous intégrés. Les actions critiques (envoi de devis, facturation) sont toujours validées avant exécution. Vous pouvez aussi définir des règles de contrôle personnalisées.",
  },
  {
    q: "Puis-je combiner plusieurs agents sans prendre un pack ?",
    a: "Oui, vous pouvez souscrire à autant d'agents individuels que vous le souhaitez. Les packs offrent simplement une réduction de 20 à 25% par rapport aux prix individuels.",
  },
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Non. Vous payez un setup unique à la mise en place, puis un abonnement mensuel sans engagement. Vous pouvez annuler à tout moment.",
  },
  {
    q: "Comment est facturé le service ?",
    a: "Setup unique + abonnement mensuel. Tout est facturé en CHF, TVA incluse. Paiement par virement ou carte bancaire.",
  },
];

const AgentsIAPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Agents IA pour PME suisses — Dès 490 CHF | LX Studio</title>
      <meta
        name="description"
        content="Agents IA pour automatiser vos emails, factures, chatbot et réseaux sociaux. Déployés en 3-7 jours. Dès 490 CHF + 90 CHF/mois."
      />
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 gradient-mesh-hero z-0" />
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Déployé en moins d'une semaine</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
          Un agent IA.{" "}
          <span className="text-gradient-gold">Un problème résolu.</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Des agents IA dédiés à une seule tâche, déployés en quelques jours.
          Résultats immédiats, prix transparents.
        </p>
      </div>
    </section>

    {/* Agents détaillés */}
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[hsl(var(--surface))]">
      <div className="container mx-auto max-w-5xl space-y-8 md:space-y-12">
        {agents.map((agent, i) => (
          <div
            key={i}
            id={agent.name.toLowerCase().replace(/[\s\/]/g, "-")}
            className="bg-background/80 backdrop-blur border border-border/50 rounded-2xl p-6 md:p-10 card-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl text-foreground">{agent.name}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {agent.description}
                </p>

                <h3 className="text-foreground font-semibold mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  Fonctionnalités
                </h3>
                <ul className="space-y-2 mb-6">
                  {agent.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-foreground font-semibold mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  Intégrations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {agent.integrations.map((integ) => (
                    <span
                      key={integ}
                      className="bg-primary/5 border border-primary/10 rounded-full px-3 py-1 text-xs text-foreground font-mono-tech"
                    >
                      {integ}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — pricing card */}
              <div className="bg-[hsl(var(--surface))] border border-border/30 rounded-xl p-6 h-fit">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
                  <Clock className="w-3 h-3" />
                  <span>Livré en {agent.delay}</span>
                </div>

                <div className="mb-2">
                  <span className="font-mono-tech text-3xl font-bold text-primary">
                    {agent.setup} CHF
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Setup unique + {agent.monthly} CHF/mois
                </p>

                <Link to="/contact" className="block">
                  <Button variant="hero" className="w-full group">
                    Réserver un appel
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-center text-muted-foreground text-xs mt-3">
                  Sans engagement • TVA incluse
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Packs Métier */}
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Packs tout-en-un <span className="text-gradient-gold">pour votre métier</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Combinez plusieurs agents et économisez jusqu'à 25%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {packs.map((pack, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--surface))] border border-border/50 rounded-2xl p-6 md:p-8 hover-lift card-glow relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full font-mono-tech">
                -{pack.saving}%
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {pack.tagline}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{pack.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Idéal pour : {pack.ideal}
              </p>

              <ul className="space-y-3 mb-6">
                {pack.agents.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{a}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-mono-tech text-2xl md:text-3xl font-bold text-primary">
                  {pack.setup} CHF
                </span>
                <span className="text-muted-foreground text-sm">+ {pack.monthly} CHF/mois</span>
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

    {/* FAQ */}
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[hsl(var(--surface))]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Questions <span className="text-gradient-gold">fréquentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background/80 border border-border/30 rounded-xl px-4 md:px-6 data-[state=open]:border-primary/30 transition-colors"
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
          Prêt à automatiser <span className="text-gradient-gold">votre quotidien ?</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
          Réservez un appel de 15 minutes. On identifie ensemble les tâches à automatiser.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="xl" className="group w-full sm:w-auto">
            <Phone className="w-5 h-5 mr-2" />
            Réserver un appel découverte
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

export default AgentsIAPage;
