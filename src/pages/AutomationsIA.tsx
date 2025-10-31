import { Bot, Clock, Zap, Shield, TrendingUp, Calendar, MessageSquare, FileText, CheckCircle2, Briefcase, Home, UtensilsCrossed, ShoppingCart, Stethoscope, Scale, Dumbbell, Megaphone, Calculator, Wrench, Scissors, Hammer, GraduationCap, Sparkles, Truck, Rocket, Factory, UserCheck, PartyPopper, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const AutomationsIA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    { icon: Clock, text: "Disponibles 24/7" },
    { icon: Zap, text: "Intégrés à votre stack (Stripe, n8n/Make, Supabase, Calendars, WhatsApp, Slack, Gmail…)" },
    { icon: TrendingUp, text: "Fiables & mesurables" },
    { icon: Shield, text: "Sécurité & conformité" },
    { icon: CheckCircle2, text: "ROI rapide" },
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: "Réception téléphonique & messages",
      description: "Accueil automatisé, tri des demandes, réponses aux FAQ, transfert intelligent vers les bons interlocuteurs.",
    },
    {
      icon: TrendingUp,
      title: "Marketing & growth",
      description: "DM/WhatsApp automatisés, relances de panier abandonné, nurturing de leads, qualification automatique.",
    },
    {
      icon: FileText,
      title: "Administratif & back-office",
      description: "Génération de devis/factures, gestion de dossiers, mise à jour CRM/ERP, récapitulatifs e-mail/SMS.",
    },
    {
      icon: Calendar,
      title: "Prise de RDV & ventes",
      description: "Qualification des prospects, connexion à votre agenda, envoi de rappels automatiques.",
    },
  ];

  const integrations = [
    "Stripe", "n8n", "Make", "Supabase", "Google Calendar", 
    "Outlook Calendar", "WhatsApp API", "Slack", "Gmail", 
    "Webhooks", "Shopify", "WordPress", "Framer"
  ];

  const methodology = [
    { step: "1", title: "Audit & cadrage", description: "Analyse de vos processus et identification des opportunités d'automatisation" },
    { step: "2", title: "Design de l'agent", description: "Conception des workflows et des interactions de votre agent IA" },
    { step: "3", title: "Intégrations & tests", description: "Connexion à vos outils et validation en environnement de test" },
    { step: "4", title: "Go-live & monitoring", description: "Déploiement en production et suivi des performances" },
  ];

  const results = [
    "Temps de réponse < 1 minute",
    "+20–40% de rendez-vous qualifiés",
    "–30–60% de charge sur les tâches répétitives",
    "Disponibilité 24/7 sans interruption",
  ];

  const guarantees = [
    "Revue humaine des conversations critiques",
    "Journalisation complète de toutes les interactions",
    "Accès minimaux et permissions granulaires",
    "Chiffrement TLS/SSL de bout en bout",
    "Conformité RGPD et législation suisse",
  ];

  const offers = [
    {
      name: "Starter",
      description: "Parfait pour commencer avec un agent IA simple : accueil automatisé, FAQ, qualification basique. 1-2 intégrations incluses.",
    },
    {
      name: "Pro",
      description: "Agent IA avancé avec workflows complexes, prise de RDV, relances automatiques. 3-5 intégrations + reporting mensuel.",
      featured: true,
    },
    {
      name: "Entreprise",
      description: "Solution sur mesure avec plusieurs agents spécialisés, intégrations illimitées, SLA garanti et support prioritaire.",
    },
  ];

  const metiers = [
    { icon: Briefcase, name: "Assistant administratif", path: "/automatisations-ia/assistant-administratif" },
    { icon: Home, name: "Agence immobilière", path: "/automatisations-ia/agence-immobiliere" },
    { icon: UtensilsCrossed, name: "Restaurant / Hôtel", path: "/automatisations-ia/restaurant" },
    { icon: ShoppingCart, name: "E-commerce", path: "/automatisations-ia/ecommerce" },
    { icon: Stethoscope, name: "Cabinet médical", path: "/automatisations-ia/cabinet-medical" },
    { icon: Scale, name: "Cabinet d'avocat", path: "/automatisations-ia/cabinet-avocat" },
    { icon: Dumbbell, name: "Coach sportif", path: "/automatisations-ia/coach-sportif" },
    { icon: Megaphone, name: "Agence marketing", path: "/automatisations-ia/agence-marketing" },
    { icon: Calculator, name: "Comptable", path: "/automatisations-ia/comptable" },
    { icon: Wrench, name: "Garage", path: "/automatisations-ia/garage" },
    { icon: Scissors, name: "Salon de beauté", path: "/automatisations-ia/salon-beaute" },
    { icon: Hammer, name: "Artisan", path: "/automatisations-ia/artisan" },
    { icon: GraduationCap, name: "Centre de formation", path: "/automatisations-ia/centre-formation" },
    { icon: Sparkles, name: "Agence de nettoyage", path: "/automatisations-ia/agence-nettoyage" },
    { icon: Truck, name: "Transport", path: "/automatisations-ia/transport" },
    { icon: Rocket, name: "Start-up", path: "/automatisations-ia/startup" },
    { icon: Factory, name: "Industrie", path: "/automatisations-ia/industrie" },
    { icon: UserCheck, name: "Ressources humaines", path: "/automatisations-ia/ressources-humaines" },
    { icon: PartyPopper, name: "Événementiel", path: "/automatisations-ia/evenementiel" },
    { icon: Building2, name: "Administration publique", path: "/automatisations-ia/administration" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Sticky CTA */}
      <div className="fixed top-20 right-6 z-40 hidden lg:flex flex-col gap-3">
        <Button onClick={() => setIsModalOpen(true)} variant="hero" size="lg">
          Obtenir une démo
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-semibold">Automatisations IA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Automatisations IA (Agents IA) pour entreprises suisses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Des agents IA sur mesure qui répondent, qualifient et convertissent 24/7 — pour votre marketing, votre administratif et votre accueil téléphonique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsModalOpen(true)} variant="hero" size="xl">
                Obtenir une démo
              </Button>
              <Button onClick={() => setIsModalOpen(true)} variant="outline" size="xl">
                Diagnostiquer mon process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-primary/20 bg-card/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{value.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cas d'usage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des agents IA qui transforment votre façon de travailler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Intégrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Connectez vos outils préférés en quelques clics
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-card border border-primary/20 px-6 py-3 rounded-full">
                <span className="text-foreground font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notre méthode
            </h2>
            <p className="text-xl text-muted-foreground">
              Un processus éprouvé en 4 étapes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métiers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Automatisations par métier
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nos agents IA transforment votre secteur d'activité
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metiers.map((metier, index) => (
              <Link key={index} to={metier.path}>
                <Card className="h-full hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer group">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="bg-primary/10 group-hover:bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                      <metier.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {metier.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Résultats attendus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Garanties & sécurité
            </h2>
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{guarantee}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos offres
            </h2>
            <p className="text-xl text-muted-foreground">
              Choisissez la formule adaptée à vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offers.map((offer, index) => (
              <Card key={index} className={offer.featured ? "border-primary shadow-lg" : ""}>
                <CardHeader>
                  {offer.featured && (
                    <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                      Recommandé
                    </div>
                  )}
                  <CardTitle className="text-2xl">{offer.name}</CardTitle>
                  <CardDescription className="text-base mt-4">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setIsModalOpen(true)} className="w-full" variant={offer.featured ? "default" : "outline"}>
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et voyons comment nos agents IA peuvent transformer vos processus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsModalOpen(true)} variant="hero" size="xl">
              Obtenir une démo
            </Button>
            <Button onClick={() => setIsModalOpen(true)} variant="outline" size="xl">
              Diagnostiquer mon process
            </Button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Automatisations IA" />
    </div>
  );
};

export default AutomationsIA;
