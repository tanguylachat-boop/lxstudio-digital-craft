import { Search, MapPin, TrendingUp, FileText, BarChart3, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const SeoGeo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { icon: Search, text: "Audit technique & sémantique complet" },
    { icon: MapPin, text: "Création de pages locales ciblées" },
    { icon: Star, text: "Optimisation Google Business Profile" },
    { icon: FileText, text: "Contenus optimisés + schema.org" },
    { icon: BarChart3, text: "Reporting mensuel détaillé" },
  ];

  const methodology = [
    {
      step: "1",
      title: "Audit & stratégie",
      description: "Analyse complète de votre site, de vos concurrents et des opportunités de mots-clés locaux.",
    },
    {
      step: "2",
      title: "Fondations techniques",
      description: "Optimisation de la vitesse, du mobile, des balises méta, et correction des erreurs techniques.",
    },
    {
      step: "3",
      title: "Contenus & GEO-pages",
      description: "Création de pages locales optimisées pour chaque zone géographique ciblée.",
    },
    {
      step: "4",
      title: "Autorité & avis",
      description: "Stratégie d'acquisition d'avis Google et de liens locaux pour renforcer votre autorité.",
    },
  ];

  const localPages = [
    { city: "Delémont", url: "/services/delemont" },
    { city: "Bienne", url: "/services/bienne" },
    { city: "Bâle", url: "/services/bale" },
    { city: "Lausanne", url: "/services/lausanne" },
    { city: "Genève", url: "/services/geneve" },
  ];

  const deliverables = [
    "Plan de mots-clés hiérarchisé par priorité",
    "Roadmap de contenu sur 6-12 mois",
    "3 à 10 pages locales optimisées",
    "Optimisation complète de votre Google Business Profile",
    "Tableaux de bord de suivi mensuel",
    "Recommandations de maillage interne et ancres",
  ];

  const results = [
    "+30% à +150% d'impressions sur requêtes locales",
    "+20% à +80% de clics qualifiés depuis Google",
    "Augmentation des appels et formulaires via GBP",
    "Meilleure visibilité dans Google Maps et recherches 'près de moi'",
    "Positionnement durable sur vos mots-clés stratégiques",
  ];

  return (
    <div className="min-h-screen pt-24">

      {/* Sticky CTA */}
      <div className="fixed top-20 right-6 z-40 hidden lg:flex flex-col gap-3">
        <Button onClick={() => setIsModalOpen(true)} variant="hero" size="lg">
          Lancer mon SEO local
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Search className="w-4 h-4" />
              <span className="text-sm font-semibold">SEO & GEO-SEO</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-glow">
              Boostez votre visibilité locale
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Référencement SEO expert dans le Jura et en Suisse romande pour attirer vos clients régionaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsModalOpen(true)} variant="hero" size="xl">
                Lancer mon SEO local
              </Button>
              <Button onClick={() => setIsModalOpen(true)} variant="outline" size="xl">
                Recevoir un audit gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ce que nous faisons
            </h2>
            <p className="text-xl text-muted-foreground">
              Une approche complète du référencement local
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20 bg-card/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{service.text}</p>
                  </div>
                </CardContent>
              </Card>
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
              Un processus structuré en 4 phases
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
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-primary/20" style={{ width: 'calc(100% - 3rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Pages Examples */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Exemples de pages locales
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Nous créons des pages optimisées pour chaque ville ciblée
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {localPages.map((page, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">{page.city}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 italic">
              Pages optimisées avec contenus locaux, témoignages, et données structurées schema.org
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Livrables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Résultats attendus
            </h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à dominer votre marché local ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Recevez un audit SEO gratuit et découvrez comment nous pouvons booster votre visibilité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsModalOpen(true)} variant="hero" size="xl">
              Lancer mon SEO local
            </Button>
            <Button onClick={() => setIsModalOpen(true)} variant="outline" size="xl">
              Recevoir un audit gratuit
            </Button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="SEO & GEO-SEO" />
    </div>
  );
};

export default SeoGeo;
