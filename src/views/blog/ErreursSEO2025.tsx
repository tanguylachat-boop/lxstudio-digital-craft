import Link from "@/components/Link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErreursSEO2025 = () => {
  const relatedArticles = [
    {
      title: "Comment booster la visibilité locale de votre entreprise dans le Jura",
      slug: "visibilite-jura",
      category: "SEO Local"
    },
    {
      title: "Les avantages de l'automatisation IA pour les PME suisses",
      slug: "automatisations-ia-suisse",
      category: "Intelligence Artificielle"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">

      {/* Hero Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2000"
          alt="Erreurs SEO 2025 - Optimisation référencement Suisse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
          <div className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SEO
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl">
            5 erreurs SEO que font encore les entreprises en 2025
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>5 janvier 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-16 max-w-[900px]">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Même en 2025, beaucoup d'entreprises suisses commettent encore les mêmes erreurs SEO fondamentales. Ces oublis freinent leur visibilité en ligne et les empêchent d'apparaître en haut des résultats Google. Découvrez les 5 erreurs les plus courantes et comment les corriger pour améliorer durablement votre référencement.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            1. Ignorer les balises meta
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Les balises meta (title et meta description) sont les premiers éléments que Google et les utilisateurs voient dans les résultats de recherche. Pourtant, de nombreux sites négligent encore cet aspect crucial.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">❌ Erreurs fréquentes :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Titres génériques identiques sur toutes les pages ("Accueil", "Page 2")</li>
              <li>Meta descriptions manquantes ou dupliquées</li>
              <li>Titres trop longs (plus de 60 caractères) qui sont tronqués dans Google</li>
              <li>Absence de mots-clés locaux pertinents</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">✅ Bonnes pratiques :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Créez un titre unique et descriptif pour chaque page (50-60 caractères)</li>
              <li>Intégrez vos mots-clés principaux naturellement dans le titre</li>
              <li>Rédigez une meta description engageante de 150-160 caractères maximum</li>
              <li>Incluez votre localisation pour le SEO local : "Agence web Jura", "SEO Delémont"</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            2. Négliger la vitesse de chargement
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            La vitesse de chargement est un facteur de classement majeur pour Google. Un site lent frustre les visiteurs et augmente le taux de rebond, ce qui nuit considérablement à votre référencement.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">📊 Statistiques clés :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>53% des utilisateurs mobiles quittent un site qui met plus de 3 secondes à charger</li>
              <li>Une seconde de délai peut réduire les conversions de 7%</li>
              <li>Google privilégie les sites rapides dans son classement</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">⚡ Solutions :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Compressez toutes vos images (format WebP recommandé)</li>
              <li>Activez le lazy loading pour les images et vidéos</li>
              <li>Minimisez le CSS et JavaScript</li>
              <li>Utilisez un hébergement performant en Suisse pour réduire la latence</li>
              <li>Implémentez un système de cache efficace</li>
              <li>Utilisez un CDN (Content Delivery Network)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            3. Ne pas optimiser le SEO local
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Pour les entreprises suisses, le SEO local est absolument crucial. C'est par ce biais que vos clients potentiels vous trouvent lorsqu'ils recherchent un service ou produit dans votre région.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">❌ Erreurs courantes :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Absence de mention géographique sur le site</li>
              <li>Fiche Google Business Profile non optimisée ou inexistante</li>
              <li>Pas de pages dédiées aux différentes villes ciblées</li>
              <li>Coordonnées et adresse manquantes ou incomplètes</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">✅ Actions essentielles :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Mentionnez systématiquement votre ville et canton dans vos titres H1, H2 et meta descriptions</li>
              <li>Créez une page dédiée pour chaque zone géographique ciblée</li>
              <li>Optimisez votre fiche Google Business Profile (photos, horaires, avis)</li>
              <li>Intégrez une carte Google Maps sur votre page contact</li>
              <li>Ajoutez des données structurées LocalBusiness</li>
              <li>Collectez et affichez des avis clients géolocalisés</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            4. Publier sans stratégie de mots-clés
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Beaucoup d'entreprises créent du contenu sans recherche préalable de mots-clés. Résultat : des articles qui génèrent peu ou pas de trafic organique, car ils ne répondent pas aux requêtes réelles des utilisateurs.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">🎯 Méthodologie efficace :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Recherche :</strong> utilisez Google Keyword Planner, Ubersuggest ou SEMrush</li>
              <li><strong>Analyse :</strong> identifiez le volume de recherche et la difficulté de chaque mot-clé</li>
              <li><strong>Intention :</strong> comprenez l'intention de recherche (informationnelle, commerciale, navigationnelle)</li>
              <li><strong>Long-tail :</strong> ciblez des expressions longues et spécifiques moins concurrentielles</li>
              <li><strong>Localisation :</strong> ajoutez toujours la dimension géographique (Jura, Suisse romande, Delémont)</li>
            </ul>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Chaque article doit être construit autour d'un mot-clé principal et de plusieurs mots-clés secondaires. Intégrez-les naturellement dans vos titres, sous-titres et paragraphes.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            5. Oublier les liens internes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Le maillage interne (internal linking) est souvent négligé, alors qu'il joue un rôle majeur dans le SEO. Les liens internes aident Google à comprendre la structure de votre site et à distribuer l'autorité entre vos pages.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">🔗 Avantages des liens internes :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Navigation facilitée :</strong> les visiteurs trouvent plus facilement l'information recherchée</li>
              <li><strong>Temps passé sur le site :</strong> augmentation de la durée des sessions</li>
              <li><strong>Distribution du PageRank :</strong> transmission de l'autorité entre vos pages</li>
              <li><strong>Indexation améliorée :</strong> Google explore et indexe mieux vos contenus</li>
              <li><strong>Positionnement renforcé :</strong> boost du référencement sur vos mots-clés stratégiques</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">✅ Bonnes pratiques :</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Créez 3 à 5 liens internes par article vers des contenus pertinents</li>
              <li>Utilisez des ancres descriptives (évitez "cliquez ici")</li>
              <li>Reliez vos articles de blog à vos pages de services</li>
              <li>Créez des pages piliers (cornerstone content) vers lesquelles pointent plusieurs articles</li>
              <li>Vérifiez régulièrement l'absence de liens cassés</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Conclusion
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le SEO est une stratégie continue qui exige rigueur et régularité. En évitant ces 5 erreurs fondamentales, votre site se hissera naturellement parmi les meilleurs résultats de recherche. Gardez à l'esprit que le référencement est un marathon, pas un sprint : les résultats arrivent progressivement, mais ils sont durables.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              LX Studio accompagne les entreprises suisses pour créer des stratégies SEO solides, mesurables et adaptées au marché local. De l'audit technique à la création de contenu optimisé, nous vous aidons à dominer votre marché.
            </p>
          </div>

          <div className="flex justify-center my-12">
            <Button asChild variant="hero" size="lg" className="hover-glow">
              <Link to="/contact">
                Améliorer mon référencement
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

export default ErreursSEO2025;
