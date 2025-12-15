import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";
import { 
  Bot, 
  FileText, 
  Calculator, 
  MessageCircle, 
  Clock, 
  Brain, 
  Shield, 
  Settings,
  ArrowRight,
  CheckCircle,
  XCircle,
  Sparkles,
  Globe,
  Palette,
  Zap,
  MapPin
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Agents IA & Automatisation Entreprise Suisse | LX Studio</title>
        <meta name="description" content="LX Studio conçoit des agents IA pour automatiser devis, comptabilité et relation client. Solutions sur-mesure pour PME suisses. Audit gratuit." />
        <meta property="og:title" content="Agents IA & Automatisation Entreprise Suisse | LX Studio" />
        <meta property="og:description" content="Automatisez vos tâches répétitives avec des agents IA sur-mesure. Devis, comptabilité, chatbot – gagnez du temps pour votre business." />
        <meta property="og:image" content="https://lxstudio.ch/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lxstudio.ch" />
        <meta name="keywords" content="agents IA entreprise suisse, automatisation entreprise suisse, agent IA devis, agent IA comptabilité, chatbot entreprise suisse, automatisation PME" />
      </Helmet>
      
      {/* Hero Section - Agents IA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ParticlesBackground />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Intelligence Artificielle pour entreprises</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Agents IA & automatisation
              <span className="block text-gradient-gold">pour entreprises suisses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Devis, comptabilité et relation client automatisés.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Moins de tâches manuelles. Plus de temps pour votre business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/automatisations-ia">
                <Button variant="hero" size="xl" className="group">
                  <Bot className="w-5 h-5 mr-2" />
                  Voir les agents IA
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-primary/50 hover:bg-primary/10">
                  Audit gratuit de mon entreprise
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problèmes */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vos équipes perdent du temps sur des{" "}
              <span className="text-gradient-gold">tâches automatisables</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                text: "Devis et factures faits manuellement"
              },
              {
                icon: Clock,
                text: "Relances clients oubliées"
              },
              {
                icon: MessageCircle,
                text: "Emails et demandes clients chronophages"
              },
              {
                icon: XCircle,
                text: "Erreurs humaines et perte de temps administratif"
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <problem.icon className="w-10 h-10 text-destructive mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Solutions : Agents IA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Solutions IA sur-mesure</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos <span className="text-gradient-gold">agents IA</span> pour votre entreprise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions intelligentes qui travaillent pour vous, 24h/24
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Agent Devis & Facturation */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift group relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.1) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Agent IA Devis & Facturation
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Génère devis et factures automatiquement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Envoie, relance et archive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Réduction des erreurs et gain de temps</span>
                  </li>
                </ul>
                <Link to="/automatisations-ia">
                  <Button variant="outline" className="w-full rounded-full border-primary/50 hover:bg-primary/10 group">
                    Voir comment ça fonctionne
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Agent Comptabilité */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift group relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.1) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Agent IA Comptabilité & Suivi
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Centralise les données financières</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Prépare les exports comptables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Vision claire de la trésorerie</span>
                  </li>
                </ul>
                <Link to="/automatisations-ia">
                  <Button variant="outline" className="w-full rounded-full border-primary/50 hover:bg-primary/10 group">
                    Voir comment ça fonctionne
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Agent Chatbot */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift group relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.1) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Agent IA Chatbot & Support
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Répond aux clients 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Qualifie les demandes entrantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Améliore l'expérience client</span>
                  </li>
                </ul>
                <Link to="/automatisations-ia">
                  <Button variant="outline" className="w-full rounded-full border-primary/50 hover:bg-primary/10 group">
                    Voir comment ça fonctionne
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices Business */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pourquoi les entreprises passent aux{" "}
              <span className="text-gradient-gold">agents IA</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Heures gagnées",
                description: "Jusqu'à plusieurs heures gagnées par semaine"
              },
              {
                icon: Brain,
                title: "Moins de charge mentale",
                description: "Libérez-vous des tâches répétitives"
              },
              {
                icon: Shield,
                title: "Processus fiables",
                description: "Automatisations sans erreurs humaines"
              },
              {
                icon: Settings,
                title: "Sur-mesure",
                description: "Solutions adaptées, sans changer vos outils"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Crédibilité */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Une approche <span className="text-gradient-gold">sur-mesure</span>, orientée résultats
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              LX Studio conçoit des agents IA adaptés au fonctionnement réel des entreprises suisses. 
              Chaque automatisation est pensée pour générer un retour sur investissement rapide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Expertise Suisse romande</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Solutions personnalisées</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Accompagnement dédié</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Secondaires */}
      <section className="py-16 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
              Autres services digitaux
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Création de sites web",
                description: "Sites vitrines et e-commerce haut de gamme"
              },
              {
                icon: Palette,
                title: "Branding & design",
                description: "Identité visuelle et image de marque"
              },
              {
                icon: Zap,
                title: "Automatisations avancées",
                description: "Workflows et intégrations sur-mesure"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background/50 border border-border/50 rounded-xl p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Voir tous nos services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 animate-slide-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Zones d'intervention</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Delémont", "Porrentruy", "Bienne", "Neuchâtel", "Lausanne", "Genève"].map((city) => (
                <span 
                  key={city}
                  className="bg-card border border-border rounded-full px-4 py-2 text-muted-foreground text-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.2) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <Bot className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Découvrez ce que l'IA peut automatiser dans votre entreprise
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Audit gratuit et personnalisé de vos processus
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Demander un audit gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
