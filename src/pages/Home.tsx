import { ArrowRight, Sparkles, Palette, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Sites web de luxe",
      description: "Design immersif, raffiné et impactant pour les marques d'exception.",
    },
    {
      icon: TrendingUp,
      title: "E-commerce Shopify",
      description: "Boutiques haut de gamme conçues pour convertir et séduire.",
    },
    {
      icon: Palette,
      title: "SaaS & Start-ups",
      description: "Landing pages performantes pour lever des fonds et convaincre.",
    },
    {
      icon: Award,
      title: "Branding & Identité",
      description: "Logos et chartes visuelles sur mesure, pensés pour durer.",
    },
  ];

  const whyChoose = [
    {
      title: "Qualité suisse",
      description: "Précision, fiabilité et rigueur dans chaque projet.",
    },
    {
      title: "Équipe internationale",
      description: "Talents créatifs sélectionnés à travers le monde.",
    },
    {
      title: "Résultats mesurables",
      description: "Design au service de la croissance et du ROI.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.8)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nous créons des expériences digitales
            <span className="text-gradient-gold block mt-2">d'exception</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            La précision suisse au service du design, de la performance et de l'émotion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/portfolio">Voir nos projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos expertises
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions digitales pensées pour les marques ambitieuses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pourquoi choisir LX Studio
            </h2>
            <p className="text-xl text-muted-foreground">
              L'excellence suisse rencontre la créativité mondiale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background border border-border rounded-xl hover-lift"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à sublimer votre image en ligne ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Réserver un appel gratuit
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
