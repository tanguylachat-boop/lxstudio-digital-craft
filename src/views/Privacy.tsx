
const Privacy = () => {
  return (
    <>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Politique de Confidentialité
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Studio LX ("nous") fournit des services d'automatisation marketing et de publication de contenu.
                  Nous collectons uniquement les informations nécessaires à l'utilisation de notre service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Données collectées
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Identifiants du compte de réseaux sociaux</li>
                  <li>Contenus envoyés pour publication</li>
                  <li>Données d'authentification OAuth</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Finalités
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Permettre la création et la publication de contenu sur les réseaux sociaux</li>
                  <li>Améliorer les performances du service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Partage des données
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous ne vendons, n'échangeons, ni ne partageons les données personnelles avec des tiers non autorisés.
                  Les données peuvent être stockées auprès de prestataires sécurisés (hébergement, API).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Droits utilisateurs
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les utilisateurs peuvent demander l'accès, la rectification ou la suppression de leurs données à : <a href="mailto:contact@lxstudio.ch" className="text-primary hover:underline">contact@lxstudio.ch</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Sécurité
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Toutes les communications sont protégées et chiffrées conformément aux standards du secteur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Contact & réclamations
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité : <a href="mailto:contact@lxstudio.ch" className="text-primary hover:underline">contact@lxstudio.ch</a>
                </p>
              </section>

              <section className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Dernière mise à jour : Janvier 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
