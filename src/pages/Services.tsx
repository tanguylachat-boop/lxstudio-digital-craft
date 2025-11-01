import { Sparkles, Bot, Search, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {

  const services = [
    {
      icon: Sparkles,
      title: "Création de sites web haut de gamme",
      description: "Design unique, rapidité, expérience utilisateur fluide. Sites vitrines et e-commerce pour marques suisses exigeantes.",
      link: "/services",
    },
    {
      icon: Search,
      title: "SEO & GEO-SEO",
      description: "Référencement local Suisse & Jura pour attirer vos clients régionaux. Optimisation Google, contenus et pages géolocalisées.",
      link: "/seo-geo",
    },
    {
      icon: Bot,
      title: "Automatisations IA",
      description: "Automatisation des devis, emails, gestion client et publications. Agents IA sur mesure intégrés à votre stack.",
      link: "/automatisations-ia",
    },
    {
      icon: Palette,
      title: "Branding & Identité visuelle",
      description: "Une image cohérente et mémorable sur tous vos supports digitaux et print. Design suisse premium.",
      link: "/contact",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <Helmet>
        <title>Services LX Studio – Création de sites, SEO & IA en Suisse</title>
        <meta name="description" content="Découvrez nos services digitaux haut de gamme : création de sites web, SEO & GEO-SEO, automatisations IA et branding pour entreprises suisses." />
        <meta property="og:title" content="Services LX Studio – Agence digitale Suisse" />
        <meta property="og:description" content="Création de sites web, SEO local, automatisations IA et branding pour entreprises en Suisse romande." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-glow">
            Nos services digitaux haut de gamme
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales sur mesure pour propulser votre entreprise suisse vers l'excellence
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
