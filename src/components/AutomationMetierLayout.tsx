import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface Agent {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface Stat {
  label: string;
  value: number;
  icon: string;
}

interface BeforeAfter {
  before: string[];
  after: string[];
}

interface AutomationMetierLayoutProps {
  metier: string;
  intro: string;
  heroImage: string;
  agents: Agent[];
  stats: Stat[];
  beforeAfter: BeforeAfter;
  transformImage: string;
}

const AutomationMetierLayout = ({
  metier,
  intro,
  heroImage,
  agents,
  stats,
  beforeAfter,
  transformImage,
}: AutomationMetierLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Automatisation IA pour {metier}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            {intro}
          </p>
          <img
            src={heroImage}
            alt={`Automatisation IA pour ${metier}`}
            className="w-full h-[400px] object-cover rounded-2xl shadow-card"
            loading="lazy"
          />
        </div>
      </section>

      {/* Agents IA Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Nos agents IA spécialisés pour {metier}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-xl hover-lift"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {agent.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résultats mesurables */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Résultats mesurables
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-gradient-gold mb-4">
                  {stat.value}%
                </div>
                <div className="text-lg text-foreground font-semibold mb-4">
                  {stat.label}
                </div>
                <Progress value={stat.value} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Avant / Après l'automatisation
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-destructive/10 border border-destructive/20 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ❌ Avant
              </h3>
              <ul className="space-y-3">
                {beforeAfter.before.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-destructive mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-primary/10 border border-primary/20 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ✅ Après
              </h3>
              <ul className="space-y-3">
                {beforeAfter.after.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={transformImage}
            alt="Transformation digitale"
            className="w-full h-[400px] object-cover rounded-2xl shadow-card"
            loading="lazy"
          />
        </div>
      </section>

      {/* Pourquoi LX Studio */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Pourquoi choisir LX Studio ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🇨🇭</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Expertise suisse en automatisation IA
                </h3>
                <p className="text-muted-foreground">
                  Une équipe basée en Suisse, connaissant parfaitement les
                  besoins des entreprises locales
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔧</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Intégration sur mesure d'agents IA
                </h3>
                <p className="text-muted-foreground">
                  Via n8n, Make, API personnalisées - connecté à vos outils
                  existants
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Accompagnement humain + support 7j/7
                </h3>
                <p className="text-muted-foreground">
                  Un suivi personnalisé et une assistance réactive à chaque
                  étape
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Résultats concrets dès le premier mois
                </h3>
                <p className="text-muted-foreground">
                  Des gains de productivité mesurables et un ROI rapide
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-12 py-6">
                Demandez votre diagnostic IA gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationMetierLayout;
