import { ArrowRight, Sparkles, Palette, TrendingUp, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const expertiseDomains = [
    {
      icon: Sparkles,
      title: "Luxe & Mode",
      description: "Identités digitales élégantes et immersives pour maisons de prestige, bijouteries et marques horlogères.",
    },
    {
      icon: TrendingUp,
      title: "Sport & Performance",
      description: "Sites et applications pour marques sportives haut de gamme.",
    },
    {
      icon: Palette,
      title: "E-commerce Premium",
      description: "Boutiques en ligne Shopify et Framer optimisées pour convertir sans sacrifier l'esthétique.",
    },
    {
      icon: Award,
      title: "Start-ups & IA",
      description: "Landing pages et identités digitales pour start-ups technologiques et projets IA suisses.",
    },
  ];

  const approachPillars = [
    {
      number: "01",
      title: "Analyse & stratégie",
      description: "Comprendre la marque, son audience et ses objectifs.",
    },
    {
      number: "02",
      title: "Design & émotion",
      description: "Concevoir une identité digitale qui suscite la confiance et l'admiration.",
    },
    {
      number: "03",
      title: "Performance & pérennité",
      description: "Livrer un site rapide, mesurable et durable dans le temps.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>LX Studio – Agence web & SEO dans le Jura (Suisse romande)</title>
        <meta name="description" content="LX Studio, agence digitale suisse basée à Bassecourt, experte en création de sites haut de gamme, SEO local et automatisations IA pour entreprises." />
        <meta property="og:title" content="LX Studio – Agence web & SEO Jura Suisse" />
        <meta property="og:description" content="Agence digitale suisse spécialisée en création de sites haut de gamme, SEO local et automatisations IA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lxstudio.ch" />
      </Helmet>
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.8)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ParticlesBackground />
        <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-glow">
            Agence web et digitale d'excellence
            <span className="text-gradient-gold block mt-2">en Suisse romande</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            La précision suisse au service du design, de la performance et de l'émotion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="xl" className="hover-glow">
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('notre-approche')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-primary/50 hover:border-primary hover-glow"
            >
              <a href="#notre-approche">Notre approche</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Notre Approche Section */}
      <section id="notre-approche" className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Une approche fondée sur la précision et l'émotion
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nous allions l'élégance du design suisse à une stratégie digitale mesurable.
            </p>
            <div className="text-left space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Chez LX Studio, chaque projet naît d'une vision claire : créer des expériences digitales 
                qui marquent par leur beauté, leur efficacité et leur sens.
              </p>
              <p className="font-semibold text-foreground">
                Notre démarche s'articule autour de trois piliers :
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {approachPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-8 hover-lift"
              >
                <div className="text-5xl font-bold text-gradient-gold mb-4">
                  {pillar.number}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-left space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Nos processus sont rigoureux, nos outils de pointe, et notre exigence sans compromis.
            </p>
            <p className="text-xl font-semibold text-gradient-gold text-center">
              🎯 Chaque pixel compte. Chaque interaction raconte une histoire.
            </p>
          </div>
        </div>
      </section>

      {/* Domaines d'Expertise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos domaines d'excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LX Studio accompagne des marques exigeantes dans quatre univers où le design et la performance se rencontrent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseDomains.map((domain, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...domain} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Exclusif Section */}
      <section className="py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Bientôt disponible</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos réalisations arrivent bientôt
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              LX Studio prépare actuellement une sélection de projets sur mesure, conçus pour refléter 
              l'alliance du design suisse et de la performance digitale.
            </p>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8 text-left space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nous collaborons avec des marques ambitieuses issues du luxe, du sport et de la technologie 
                pour créer des expériences digitales d'exception.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque projet que nous acceptons est traité comme une œuvre unique, pensée dans les moindres 
                détails — du concept à l'exécution.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  🕰️ Les premières réalisations exclusives seront dévoilées prochainement.
                </p>
                <p className="text-lg font-semibold text-gradient-gold">
                  💌 Vous souhaitez faire partie de cette première sélection ?
                </p>
              </div>
            </div>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Réserver un appel découverte
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La confiance de nos clients est notre plus belle récompense
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maison Duret",
                location: "Genève",
                text: "Service exceptionnel. LX Studio a créé un site au design luxueux et une vitesse incroyable.",
                rating: 5
              },
              {
                name: "Bijouterie Alpina",
                location: "Lausanne",
                text: "Résultats visibles dès le premier mois sur Google. Une équipe à l'écoute.",
                rating: 5
              },
              {
                name: "Hôtel Le Grand Jura",
                location: "Jura",
                text: "Professionnalisme, réactivité et design d'exception.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos zones d'intervention en Suisse romande
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Basés à Bassecourt dans le Jura, nous accompagnons les entreprises de toute la Suisse romande
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              { name: "Delémont", icon: MapPin },
              { name: "Porrentruy", icon: MapPin },
              { name: "Bienne", icon: MapPin },
              { name: "Neuchâtel", icon: MapPin },
              { name: "Lausanne", icon: MapPin },
            ].map((zone, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <zone.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground">{zone.name}</p>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-luxury">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21719.845844634547!2d7.227741!3d47.343583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791e5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sBassecourt%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LX Studio - Bassecourt, Jura, Suisse"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 30% 50%, hsl(var(--gold) / 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, hsl(var(--electric-blue) / 0.2) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à élever votre image digitale ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Réservez un appel gratuit et découvrons ensemble votre potentiel.
          </p>
          <Button 
            asChild 
            variant="hero" 
            size="xl"
            className="hover:shadow-[0_0_40px_hsl(var(--gold)/0.5)] transition-all duration-300"
          >
            <Link to="/contact">
              Réserver un appel maintenant
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
