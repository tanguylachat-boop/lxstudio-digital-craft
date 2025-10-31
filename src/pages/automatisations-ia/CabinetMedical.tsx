import { Stethoscope, Calendar, FileText } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-medical.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const CabinetMedical = () => {
  return (
    <AutomationMetierLayout
      metier="Cabinet Médical / Dentaire"
      intro="Modernisez votre cabinet avec des agents IA qui gèrent les rendez-vous, rappellent les patients et optimisent votre organisation pour que vous puissiez vous concentrer sur les soins."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Secrétariat IA",
          description: "Prend les rendez-vous par téléphone et en ligne, gère les annulations, et optimise l'agenda du praticien automatiquement.",
          icon: Calendar,
        },
        {
          name: "Agent Rappel Patient IA",
          description: "Envoie rappels de RDV par SMS/e-mail, relance les patients pour les suivis, et collecte les confirmations de présence.",
          icon: Stethoscope,
        },
        {
          name: "Agent Administratif IA",
          description: "Gère les demandes de documents, certificats médicaux, renouvellements d'ordonnances et communication avec les assurances.",
          icon: FileText,
        },
      ]}
      stats={[
        { label: "Gain de temps secrétariat", value: 70, icon: "⏱️" },
        { label: "Réduction absences", value: 45, icon: "💸" },
        { label: "Satisfaction patients", value: 85, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Secrétariat débordé, téléphone constamment occupé",
          "Absences non prévenues, créneaux perdus",
          "Gestion manuelle des rappels, erreurs fréquentes",
          "Patients mécontents des délais d'attente téléphoniques",
        ],
        after: [
          "Réponses immédiates 24/7, plus jamais de ligne occupée",
          "Rappels automatiques, taux d'absence réduit de moitié",
          "Agenda optimisé, aucun créneau perdu",
          "Expérience patient fluide et moderne",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default CabinetMedical;
