import { UserCheck, FileText, Calendar } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-rh.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const RessourcesHumaines = () => {
  return (
    <AutomationMetierLayout
      metier="Ressources Humaines / Recrutement"
      intro="Accélérez vos recrutements et optimisez la gestion RH avec des agents IA qui qualifient les candidats, planifient les entretiens et automatisent l'onboarding."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Pré-qualification IA",
          description: "Analyse les CV, évalue l'adéquation avec le poste, pose des questions de qualification et sélectionne les meilleurs profils.",
          icon: UserCheck,
        },
        {
          name: "Agent Coordination RH IA",
          description: "Planifie les entretiens selon disponibilités, envoie confirmations et rappels, et collecte les feedbacks automatiquement.",
          icon: Calendar,
        },
        {
          name: "Agent Onboarding IA",
          description: "Guide les nouveaux collaborateurs, envoie les documents d'intégration, et assure le suivi des premiers jours.",
          icon: FileText,
        },
      ]}
      stats={[
        { label: "Gain de temps recrutement", value: 70, icon: "⏱️" },
        { label: "Réduction coûts", value: 60, icon: "💸" },
        { label: "Qualité candidats", value: 80, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Tri manuel de centaines de CV chronophage",
          "Planification d'entretiens complexe et fastidieuse",
          "Onboarding incomplet, nouveaux perdus",
          "Processus lent, talents qui partent ailleurs",
        ],
        after: [
          "Tri automatique, focus sur les meilleurs profils",
          "Coordination fluide, expérience candidat optimale",
          "Onboarding structuré, intégration réussie",
          "Time-to-hire divisé par 2, talents sécurisés",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default RessourcesHumaines;
