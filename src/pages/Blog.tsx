import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Blog = () => {
  const articles = [
    {
      title: "Comment booster la visibilité locale de votre entreprise dans le Jura",
      slug: "visibilite-jura",
      excerpt: "Découvrez les meilleures stratégies de référencement local pour dominer les recherches Google dans le canton du Jura et attirer plus de clients régionaux.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
      date: "15 janvier 2025",
      readTime: "8 min",
      category: "SEO Local"
    },
    {
      title: "Les avantages de l'automatisation IA pour les PME suisses",
      slug: "automatisations-ia-suisse",
      excerpt: "L'intelligence artificielle n'est plus réservée aux grandes entreprises. Découvrez comment les PME suisses peuvent automatiser leurs processus et gagner en productivité.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
      date: "10 janvier 2025",
      readTime: "6 min",
      category: "Intelligence Artificielle"
    },
    {
      title: "5 erreurs SEO que font encore les entreprises en 2025",
      slug: "erreurs-seo-2025",
      excerpt: "Évitez ces pièges courants qui nuisent à votre référencement. Des conseils pratiques pour optimiser votre site web et améliorer votre positionnement Google.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2000",
      date: "5 janvier 2025",
      readTime: "10 min",
      category: "SEO"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Blog SEO – LX Studio Suisse</title>
        <meta name="description" content="Conseils SEO, automatisations IA et stratégies digitales pour les entreprises suisses. Expertise locale du Jura et de la Suisse romande." />
        <meta property="og:title" content="Blog LX Studio – Conseils SEO & IA Suisse" />
        <meta property="og:description" content="Articles et guides pratiques sur le référencement local, l'automatisation IA et le marketing digital en Suisse." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-glow">
              Nos conseils SEO & IA pour les entreprises suisses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise digitale, stratégies SEO locales et automatisations intelligentes pour la Suisse romande
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-primary hover-glow">
                    <Link to={`/blog/${article.slug}`}>
                      Lire l'article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
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
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Profitez d'un audit SEO gratuit et découvrez comment améliorer votre visibilité en ligne
          </p>
          <Button 
            asChild 
            variant="hero" 
            size="xl"
            className="hover:shadow-[0_0_40px_hsl(var(--gold)/0.5)] transition-all duration-300"
          >
            <Link to="/contact">
              Demander un audit SEO gratuit
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
