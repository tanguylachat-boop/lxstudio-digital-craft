import { Dumbbell, Calendar, TrendingUp } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-coach.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const CoachSportif = () => {
  return (
    <AutomationMetierLayout
      metier="Coach Sportif / Personal Trainer"
      intro="Développez votre clientèle et optimisez votre temps avec des agents IA qui gèrent vos réservations, motivent vos clients et automatisent votre suivi personnalisé."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Réservation IA",
          description: "Gère les inscriptions aux sessions, optimise les créneaux disponibles et envoie les confirmations automatiques.",
          icon: Calendar,
        },
        {
          name: "Agent Motivation IA",
          description: "Envoie des messages de motivation personnalisés, rappelle les objectifs, et encourage la régularité des entraînements.",
          icon: Dumbbell,
        },
        {
          name: "Agent Suivi Performance IA",
          description: "Collecte les résultats, envoie des statistiques de progression, et propose des ajustements de programme automatiquement.",
          icon: TrendingUp,
        },
      ]}
      stats={[
        { label: "Gain de temps gestion", value: 60, icon: "⏱️" },
        { label: "Rétention clients", value: 75, icon: "💸" },
        { label: "Capacité d'encadrement", value: 50, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Temps perdu en gestion des réservations et rappels",
          "Clients qui abandonnent par manque de suivi",
          "Difficulté à maintenir la motivation à distance",
          "Limite du nombre de clients par manque de temps",
        ],
        after: [
          "Gestion automatisée, focus sur le coaching",
          "Rétention maximale grâce au suivi personnalisé",
          "Motivation continue, engagement renforcé",
          "Capacité d'encadrement doublée sans surcharge",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default CoachSportif;
