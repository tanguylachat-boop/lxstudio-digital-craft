import { GraduationCap, Users, Calendar } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-formation.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const CentreFormation = () => {
  return (
    <AutomationMetierLayout
      metier="Centre de Formation / École Privée"
      intro="Automatisez l'inscription, le suivi pédagogique et la communication avec des agents IA qui gèrent vos apprenants de A à Z pour optimiser votre organisation."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Inscription IA",
          description: "Gère les demandes d'inscription, répond aux questions sur les formations, envoie les dossiers et suit les candidatures.",
          icon: Users,
        },
        {
          name: "Agent Planning IA",
          description: "Organise les sessions, gère les présences, envoie les convocations et rappelle les dates importantes automatiquement.",
          icon: Calendar,
        },
        {
          name: "Agent Suivi Pédagogique IA",
          description: "Suit la progression des apprenants, envoie les évaluations, collecte les retours et signale les difficultés.",
          icon: GraduationCap,
        },
      ]}
      stats={[
        { label: "Gain de temps admin", value: 70, icon: "⏱️" },
        { label: "Réduction coûts gestion", value: 55, icon: "💸" },
        { label: "Satisfaction apprenants", value: 80, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Gestion manuelle des inscriptions, processus lent",
          "Difficultés à suivre la progression de chaque apprenant",
          "Communication sporadique, apprenants perdus",
          "Temps pédagogique grignoté par l'administratif",
        ],
        after: [
          "Inscriptions automatisées, processus fluide",
          "Suivi personnalisé en temps réel pour tous",
          "Communication continue, engagement renforcé",
          "Focus sur la pédagogie, excellence de formation",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default CentreFormation;
