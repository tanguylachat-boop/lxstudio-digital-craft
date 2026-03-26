import Link from "@/components/Link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisibiliteJura = () => {
  const relatedArticles = [
    {
      title: "Les avantages de l'automatisation IA pour les PME suisses",
      slug: "automatisations-ia-suisse",
      category: "Intelligence Artificielle"
    },
    {
      title: "5 erreurs SEO que font encore les entreprises en 2025",
      slug: "erreurs-seo-2025",
      category: "SEO"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">

      {/* Hero Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000"
          alt="SEO Jura LX Studio - Référencement local entreprise Jura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
          <div className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SEO Local
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl">
            Comment booster la visibilité locale de votre entreprise dans le Jura
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 janvier 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-16 max-w-[900px]">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Dans un marché local de plus en plus digitalisé, être visible sur Google est devenu essentiel pour les entreprises jurassiennes. Que vous soyez à Delémont, Porrentruy ou Bienne, une stratégie SEO locale bien pensée peut transformer votre présence en ligne.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            1. Optimisez votre fiche Google Business Profile
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            La fiche Google Business Profile est votre vitrine numérique gratuite. C'est souvent le premier point de contact entre votre entreprise et vos clients potentiels. Pour maximiser son impact :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Créez ou revendiquez votre fiche Google officielle</li>
            <li>Ajoutez des photos professionnelles de qualité (façade, intérieur, équipe, produits)</li>
            <li>Renseignez vos horaires d'ouverture avec précision</li>
            <li>Intégrez votre site web et vos coordonnées complètes</li>
            <li>Insérez vos mots-clés locaux dans la description : "Agence web Jura", "Création site internet Delémont"</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            2. Soignez vos avis clients
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Les avis clients influencent directement votre positionnement local sur Google. Une entreprise avec de nombreux avis positifs et récents sera naturellement mieux classée. Pour optimiser cette dimension :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Sollicitez activement vos clients satisfaits pour laisser un avis</li>
            <li>Répondez systématiquement à chaque avis, qu'il soit positif ou négatif</li>
            <li>Mettez en valeur vos meilleurs témoignages sur votre site web</li>
            <li>Créez une page dédiée aux avis clients avec captures d'écran</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            3. Optimisez votre site pour le SEO local
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Votre site web doit être parfaitement optimisé pour le référencement local. Voici les actions essentielles :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Utilisez vos mots-clés géographiques dans vos titres H1, H2 et meta descriptions</li>
            <li>Créez une page dédiée à chaque ville ou région ciblée (Delémont, Porrentruy, Bienne, etc.)</li>
            <li>Intégrez une carte Google Maps interactive avec votre localisation</li>
            <li>Affichez clairement vos coordonnées (adresse, téléphone, email) dans le footer</li>
            <li>Ajoutez des données structurées LocalBusiness pour améliorer votre référencement</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            4. Créez du contenu local régulier
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Le contenu reste roi en SEO. Pour dominer les recherches locales, vous devez publier régulièrement des articles ciblant des requêtes régionales :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>"Meilleure agence web dans le Jura"</li>
            <li>"Création site e-commerce Suisse romande"</li>
            <li>"Agence SEO Delémont"</li>
            <li>"Automatisations IA pour entreprises jurassiennes"</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Publiez au minimum un article par mois pour maintenir votre visibilité et prouver à Google que votre site est actif et pertinent.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            5. Faites confiance à une agence experte du Jura
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Le référencement local exige une expertise technique et une connaissance approfondie du marché suisse. LX Studio, basée à Bassecourt dans le Jura, accompagne les entreprises locales dans leur stratégie SEO pour leur assurer une visibilité durable et des résultats mesurables.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nous connaissons parfaitement les spécificités du marché jurassien et suisse romand, et nous adaptons nos stratégies en conséquence.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Conclusion
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Le référencement local n'est pas une option : c'est la clé pour exister dans les recherches de vos clients. Avec une stratégie claire et régulière, votre entreprise peut rapidement dominer son marché local. Ne laissez pas vos concurrents prendre l'avantage – investissez dès aujourd'hui dans votre visibilité digitale.
            </p>
          </div>

          <div className="flex justify-center my-12">
            <Button asChild variant="hero" size="lg" className="hover-glow">
              <Link to="/contact">
                Demander un audit SEO gratuit
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Articles similaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.slug}`}
                className="group bg-card border border-border rounded-lg p-6 hover-lift transition-all"
              >
                <span className="text-sm text-primary font-semibold mb-2 block">
                  {article.category}
                </span>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default VisibiliteJura;
