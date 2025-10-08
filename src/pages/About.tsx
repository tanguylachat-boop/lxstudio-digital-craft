import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TeamMember from "@/components/TeamMember";
import { Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const team = [
    { name: "Tanguy Lachat", role: "Fondateur & Directeur" },
    { name: "Ali", role: "Développeur Web" },
    { name: "Sara", role: "Designer UI" },
    { name: "Rohan", role: "Spécialiste SEO" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons la perfection dans chaque détail de nos créations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et tendances du design.",
    },
    {
      icon: Award,
      title: "Résultats",
      description: "Chaque projet est conçu pour générer un impact mesurable.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-gradient-gold">Précision suisse.</span>
            <br />
            Créativité mondiale.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une agence digitale qui allie rigueur suisse et talent international
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                LX Studio est une agence digitale fondée par{" "}
                <span className="text-primary font-semibold">Tanguy Lachat</span>, 
                entrepreneur, designer et champion suisse de pêche sportive.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre mission : combiner créativité, technologie et performance pour concevoir 
                des expériences digitales d'exception.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Basée en Suisse, notre équipe internationale travaille avec des clients dans le 
                monde entier pour offrir des designs élégants, efficaces et intemporels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Ce qui guide notre approche au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background border border-border rounded-xl hover-lift"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notre équipe
            </h2>
            <p className="text-xl text-muted-foreground">
              Des talents passionnés au service de votre réussite
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre vision
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "Nous croyons que le design doit être à la fois beau, stratégique et rentable."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Chaque projet que nous créons est pensé pour durer, pour marquer les esprits 
              et pour générer des résultats concrets. L'élégance n'est pas un luxe, 
              c'est une nécessité pour les marques qui veulent se démarquer.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Construisons quelque chose d'extraordinaire ensemble
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
