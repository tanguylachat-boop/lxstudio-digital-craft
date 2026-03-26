import { Scissors, Calendar, Star } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-beaute.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const SalonBeaute = () => {
  return (
    <AutomationMetierLayout
      metier="Salon de Coiffure / Institut Beauté"
      intro="Modernisez la gestion de votre salon avec des agents IA qui gèrent les réservations 24/7, fidélisent votre clientèle et optimisent votre planning automatiquement."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Réservation IA",
          description: "Prend les rendez-vous en ligne et par téléphone, gère les annulations et optimise l'occupation des postes de travail.",
          icon: Calendar,
        },
        {
          name: "Agent Fidélisation IA",
          description: "Envoie des rappels de RDV, des offres personnalisées pour anniversaires, et relance les clients inactifs automatiquement.",
          icon: Star,
        },
        {
          name: "Agent Conseil IA",
          description: "Répond aux questions sur les prestations, tarifs, produits et disponibilités, et propose des services complémentaires.",
          icon: Scissors,
        },
      ]}
      stats={[
        { label: "Gain de temps accueil", value: 65, icon: "⏱️" },
        { label: "Réduction no-shows", value: 50, icon: "💸" },
        { label: "Taux de remplissage", value: 85, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Téléphone qui sonne pendant les prestations",
          "Rendez-vous non honorés, créneaux perdus",
          "Clientèle qui s'espace, fidélisation difficile",
          "Taux de remplissage variable, pertes de CA",
        ],
        after: [
          "Réservations automatiques 24/7, équipe concentrée",
          "Rappels systématiques, absences divisées par deux",
          "Fidélisation proactive, clients réguliers",
          "Planning optimisé en continu, CA maximisé",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default SalonBeaute;
