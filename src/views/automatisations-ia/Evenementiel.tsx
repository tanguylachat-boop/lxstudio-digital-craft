import { PartyPopper, Users, CheckSquare } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-evenementiel.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Evenementiel = () => {
  return (
    <AutomationMetierLayout
      metier="Agence Événementielle"
      intro="Simplifiez la coordination de vos événements avec des agents IA qui gèrent les inscriptions, la logistique et la communication pour des événements sans accroc."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Inscription IA",
          description: "Gère les inscriptions en ligne, envoie confirmations et billets, et répond aux questions des participants automatiquement.",
          icon: Users,
        },
        {
          name: "Agent Coordination IA",
          description: "Coordonne les prestataires, suit l'avancement de chaque tâche, et envoie des rappels pour respecter les délais.",
          icon: CheckSquare,
        },
        {
          name: "Agent Communication IA",
          description: "Tient les participants informés, envoie le programme, gère les modifications de dernière minute et collecte les feedbacks.",
          icon: PartyPopper,
        },
      ]}
      stats={[
        { label: "Gain de temps coordination", value: 65, icon: "⏱️" },
        { label: "Réduction erreurs logistiques", value: 70, icon: "💸" },
        { label: "Satisfaction participants", value: 85, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Gestion manuelle des inscriptions, risque d'erreurs",
          "Coordination prestataires chronophage et stressante",
          "Communication parcellaire, participants mal informés",
          "Oublis et retards dans l'organisation",
        ],
        after: [
          "Inscriptions automatisées, processus fluide",
          "Coordination facilitée, chacun au bon endroit",
          "Communication proactive, expérience participant optimale",
          "Organisation millimétrée, événements sans accroc",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Evenementiel;
