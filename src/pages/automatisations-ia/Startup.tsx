import { Rocket, Users, Zap } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-startup.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Startup = () => {
  return (
    <AutomationMetierLayout
      metier="Start-up Tech / SaaS"
      intro="Scalez rapidement avec des agents IA qui automatisent votre support client, votre onboarding et votre growth pour vous concentrer sur le produit et la croissance."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Support IA",
          description: "Répond 24/7 aux questions produit, résout les problèmes courants, crée des tickets pour les cas complexes et suit la satisfaction.",
          icon: Users,
        },
        {
          name: "Agent Onboarding IA",
          description: "Guide les nouveaux utilisateurs pas à pas, envoie les ressources adaptées, et assure l'activation des fonctionnalités clés.",
          icon: Rocket,
        },
        {
          name: "Agent Growth IA",
          description: "Qualifie les leads, nurture les trials, envoie des messages personnalisés pour convertir en clients payants.",
          icon: Zap,
        },
      ]}
      stats={[
        { label: "Gain de temps support", value: 80, icon: "⏱️" },
        { label: "Réduction CAC", value: 65, icon: "💸" },
        { label: "Taux d'activation", value: 90, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Support débordé, temps de réponse trop long",
          "Nouveaux users perdus, faible taux d'activation",
          "Growth manuelle limitée, scaling difficile",
          "Ressources concentrées sur l'opérationnel, pas sur le produit",
        ],
        after: [
          "Support instantané 24/7, satisfaction maximale",
          "Onboarding guidé, activation record",
          "Growth automatisée, scaling exponentiel",
          "Focus total sur le produit et l'innovation",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Startup;
