import { Calculator, FileText, Send } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-comptable.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Comptable = () => {
  return (
    <AutomationMetierLayout
      metier="Comptable / Fiduciaire"
      intro="Automatisez les tâches administratives répétitives avec des agents IA qui collectent les justificatifs, relancent les clients et gèrent les communications pour libérer du temps d'expertise."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Collecte Documents IA",
          description: "Relance automatiquement les clients pour les pièces justificatives manquantes, classe et organise les documents reçus.",
          icon: FileText,
        },
        {
          name: "Agent Communication Client IA",
          description: "Répond aux questions courantes, planifie les rendez-vous, et envoie les rappels d'échéances fiscales automatiquement.",
          icon: Send,
        },
        {
          name: "Agent Saisie IA",
          description: "Extrait les données des factures et reçus, pré-remplit les écritures comptables et signale les anomalies.",
          icon: Calculator,
        },
      ]}
      stats={[
        { label: "Gain de temps admin", value: 70, icon: "⏱️" },
        { label: "Réduction erreurs saisie", value: 80, icon: "💸" },
        { label: "Capacité de traitement", value: 60, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Relances manuelles fastidieuses pour documents",
          "Saisie répétitive chronophage et source d'erreurs",
          "Clients qui oublient les échéances importantes",
          "Temps d'expertise gaspillé en tâches admin",
        ],
        after: [
          "Relances automatiques, documents collectés rapidement",
          "Saisie assistée par IA, erreurs divisées par 5",
          "Rappels automatiques, zéro échéance manquée",
          "Focus sur le conseil, valeur ajoutée maximale",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Comptable;
