import { Sparkles, ShoppingCart, Rocket, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";

const Services = () => {
  const mainServices = [
    {
      icon: Sparkles,
      title: "Site Vitrine",
      description: "Création sur Framer ou Webflow, design épuré et optimisé pour transformer vos visiteurs en clients.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Shopify",
      description: "Boutique complète, expérience d'achat fluide et design premium qui inspire confiance.",
    },
    {
      icon: Rocket,
      title: "SaaS / Start-up",
      description: "Landing pages, storytelling et visuels qui inspirent confiance et génèrent des conversions.",
    },
    {
      icon: Palette,
      title: "Branding & Identité",
      description: "Logo, direction artistique et charte visuelle cohérente qui marque les esprits.",
    },
  ];

  const pricingPacks = [
    {
      name: "Pack Start",
      price: "1'490",
      features: [
        "Site vitrine jusqu'à 5 pages",
        "Design responsive premium",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "2 révisions incluses",
      ],
    },
    {
      name: "Pack Pro",
      price: "2'490",
      featured: true,
      features: [
        "Site vitrine jusqu'à 10 pages",
        "Design sur mesure avancé",
        "Optimisation SEO complète",
        "Animations personnalisées",
        "Intégration CMS",
        "4 révisions incluses",
        "Support 30 jours",
      ],
    },
    {
      name: "Pack Elite",
      price: "3'990",
      features: [
        "Site complet illimité",
        "E-commerce ou SaaS",
        "Branding complet inclus",
        "Animations & interactions avancées",
        "Intégrations API",
        "Formation équipe",
        "Révisions illimitées (1 mois)",
        "Support prioritaire 90 jours",
      ],
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
            Des solutions digitales sur mesure pour les marques ambitieuses
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl">
            <p className="text-xl text-foreground font-semibold">
              Des solutions taillées pour l'excellence. Chaque projet est une œuvre digitale unique.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos Packs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez le pack qui correspond à vos ambitions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPacks.map((pack, index) => (
              <PricingCard key={index} {...pack} />
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
