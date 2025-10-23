import { Sparkles, Bot, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Sites vitrines premium",
      description: "Sites web haut de gamme, UX mobile-first, SEO prêt, intégrations essentielles, performance et sécurité garanties.",
      link: "/services",
    },
    {
      icon: Bot,
      title: "Automatisations IA (Agents IA)",
      description: "Agents IA sur mesure : accueil, qualification de leads, prise de RDV, relances automatiques, back-office. Intégrations Stripe, n8n, Supabase, Calendars, WhatsApp.",
      link: "/automatisations-ia",
    },
    {
      icon: Search,
      title: "SEO & GEO-SEO",
      description: "Référencement naturel et local : pages géolocalisées, optimisation Google Business Profile, contenus optimisés, reporting mensuel.",
      link: "/seo-geo",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sites vitrines premium, Automatisations IA (agents IA), SEO & GEO-SEO. Basé à Bassecourt, interventions dans toute la Suisse romande.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-4">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Découvrir</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons de vos besoins spécifiques.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
