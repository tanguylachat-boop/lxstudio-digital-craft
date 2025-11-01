import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import portfolioHeroBg from "@/assets/portfolio-hero-bg.jpg";

const Portfolio = () => {
  const services = [
    "Sites web premium pour marques de luxe et artisans suisses",
    "Plateformes e-commerce élégantes et performantes",
    "Applications et SaaS au design minimaliste et impactant"
  ];

  return (
    <div className="min-h-screen pt-24">
      <Helmet>
        <title>Portfolio – Réalisations LX Studio</title>
        <meta name="description" content="Découvrez nos projets web haut de gamme pour entreprises suisses : sites vitrine, e-commerce, SEO et automatisations IA dans le Jura." />
        <meta property="og:title" content="Portfolio LX Studio – Créations web Suisse" />
        <meta property="og:description" content="Nos réalisations pour entreprises du Jura et de Suisse romande : design premium et performance digitale." />
      </Helmet>

      {/* Hero Section with Background */}
      <section 
        className="relative py-32 md:py-40 overflow-hidden"
        style={{
          backgroundImage: `url(${portfolioHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in animate-glow">
              Nos projets et collaborations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              LX Studio collabore avec des marques visionnaires dans les domaines du sport, du luxe et de la technologie.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Chaque création est pensée comme une œuvre digitale sur mesure — élégante, performante et intemporelle.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-16">
              Nous travaillons uniquement avec des marques qui partagent notre exigence d'excellence. 
              Nos projets combinent stratégie, esthétique et performance pour créer des expériences 
              digitales qui captivent et convertissent.
            </p>

            {/* Services List */}
            <div className="space-y-6 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 text-left max-w-2xl mx-auto animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            {/* Final Note */}
            <div className="border-t border-border pt-12">
              <p className="text-lg text-muted-foreground/80 italic mb-8">
                Notre portfolio complet est disponible sur demande pour nos clients et partenaires.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Demander notre portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
