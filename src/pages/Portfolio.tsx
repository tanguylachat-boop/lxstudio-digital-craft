import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import projectChronos from "@/assets/project-chronos.jpg";
import projectAthlit from "@/assets/project-athlit.jpg";
import projectAura from "@/assets/project-aura.jpg";
import projectZenith from "@/assets/project-zenith.jpg";
import projectClarity from "@/assets/project-clarity.jpg";
import projectSwiss from "@/assets/project-swiss.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Chronos Genève",
      category: "Horlogerie de Luxe",
      description: "Site vitrine premium pour une marque horlogère suisse prestigieuse.",
      image: projectChronos,
    },
    {
      title: "Athlit App",
      category: "Start-up IA",
      description: "Application sportive innovante avec intelligence artificielle intégrée.",
      image: projectAthlit,
    },
    {
      title: "Aura Beauty",
      category: "E-commerce Beauté",
      description: "Boutique en ligne haut de gamme pour une marque de cosmétiques premium.",
      image: projectAura,
    },
    {
      title: "Zenith Motors",
      category: "Automobile Prestige",
      description: "Site showcase élégant pour une marque automobile de luxe.",
      image: projectZenith,
    },
    {
      title: "Clarity AI",
      category: "SaaS Innovant",
      description: "Plateforme SaaS moderne avec dashboard intuitif et performant.",
      image: projectClarity,
    },
    {
      title: "Swiss Timepieces",
      category: "Horlogerie",
      description: "Vitrine digitale sophistiquée pour une collection horlogère exclusive.",
      image: projectSwiss,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez l'univers LX Studio — des créations élégantes et performantes
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vous aimez notre style ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Collaborons sur votre prochain projet et créons ensemble quelque chose d'exceptionnel
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
