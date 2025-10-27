import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Conditions d'Utilisation — LX Studio</title>
        <meta
          name="description"
          content="Conditions d'utilisation des services LX Studio. Droits et responsabilités."
        />
        <link rel="canonical" href="https://www.lxstudio.ch/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Conditions d'Utilisation
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Studio LX permet aux entreprises de créer et publier automatiquement du contenu sur les réseaux sociaux.
                  En utilisant notre service, vous acceptez les conditions suivantes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Responsabilités de l'utilisateur
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  En utilisant notre service, vous acceptez :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>D'être responsable des contenus publiés</li>
                  <li>De respecter les règles et politiques des plateformes (dont TikTok, Instagram, Facebook, LinkedIn)</li>
                  <li>D'être titulaire des droits sur toutes les vidéos et contenus publiés via notre service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Suspension et violation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Studio LX peut suspendre un compte en cas de non-respect des règles ou d'utilisation abusive du service.
                  Nous nous réservons le droit de modifier ou d'interrompre le service à tout moment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tous les contenus créés par le service restent la propriété du client.
                  Studio LX conserve la propriété de la plateforme, du code source et des éléments techniques du service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Limitation de responsabilité
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Studio LX ne peut être tenu responsable des dommages indirects, incidents ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser le service.
                  Le service est fourni "tel quel" sans garantie d'aucune sorte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Support
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question ou assistance, contactez : <a href="mailto:contact@lxstudio.ch" className="text-primary hover:underline">contact@lxstudio.ch</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Modifications des conditions
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Studio LX se réserve le droit de modifier ces conditions à tout moment.
                  Les utilisateurs seront informés des modifications importantes par e-mail.
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

export default Terms;
