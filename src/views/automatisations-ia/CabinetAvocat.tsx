import { Scale, FileText, Calendar } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-avocat.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const CabinetAvocat = () => {
  return (
    <AutomationMetierLayout
      metier="Cabinet d'Avocat"
      intro="Automatisez la gestion administrative de votre cabinet avec des agents IA qui qualifient les demandes, gèrent les rendez-vous et suivent les dossiers, pour que vous vous concentriez sur le juridique."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Qualification IA",
          description: "Évalue la nature juridique de chaque demande, identifie la spécialité requise et oriente vers l'avocat compétent.",
          icon: Scale,
        },
        {
          name: "Agent Gestion RDV IA",
          description: "Planifie les consultations, envoie confirmations et documents préparatoires, et rappelle les échéances importantes.",
          icon: Calendar,
        },
        {
          name: "Agent Suivi Dossier IA",
          description: "Assure le suivi des dossiers, relance les clients pour documents manquants, et envoie les mises à jour automatiques.",
          icon: FileText,
        },
      ]}
      stats={[
        { label: "Gain de temps admin", value: 65, icon: "⏱️" },
        { label: "Réduction coûts secrétariat", value: 55, icon: "💸" },
        { label: "Qualité du service", value: 80, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Temps précieux perdu en gestion administrative",
          "Clients mal orientés, consultations non-adaptées",
          "Relances manuelles chronophages pour documents",
          "Risque d'oubli des échéances importantes",
        ],
        after: [
          "Focus sur le conseil juridique, admin automatisée",
          "Orientation intelligente dès le premier contact",
          "Suivi automatique, dossiers toujours à jour",
          "Alertes systématiques, zéro échéance manquée",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default CabinetAvocat;
