import { Sparkles, Calendar, ClipboardCheck } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-nettoyage.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const AgenceNettoyage = () => {
  return (
    <AutomationMetierLayout
      metier="Agence de Nettoyage / Facility Management"
      intro="Optimisez la coordination de vos équipes et la satisfaction client avec des agents IA qui gèrent les plannings, les interventions et le suivi qualité automatiquement."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Planning IA",
          description: "Organise les interventions, optimise les tournées, gère les urgences et notifie les équipes automatiquement.",
          icon: Calendar,
        },
        {
          name: "Agent Communication Client IA",
          description: "Confirme les interventions, envoie les rapports de passage, et collecte les retours de satisfaction après chaque prestation.",
          icon: Sparkles,
        },
        {
          name: "Agent Contrôle Qualité IA",
          description: "Suit les indicateurs de performance, détecte les anomalies, et relance pour les actions correctives automatiquement.",
          icon: ClipboardCheck,
        },
      ]}
      stats={[
        { label: "Gain de temps coordination", value: 65, icon: "⏱️" },
        { label: "Réduction coûts admin", value: 50, icon: "💸" },
        { label: "Satisfaction clients", value: 75, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Coordination manuelle des équipes chronophage",
          "Clients sans visibilité sur les interventions",
          "Retours qualité collectés trop tard ou oubliés",
          "Difficulté à gérer les urgences et imprévus",
        ],
        after: [
          "Coordination automatisée, optimisation en temps réel",
          "Communication proactive, clients informés en continu",
          "Feedback immédiat, amélioration continue",
          "Gestion d'urgence instantanée, réactivité maximale",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default AgenceNettoyage;
