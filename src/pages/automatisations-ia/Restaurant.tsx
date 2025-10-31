import { UtensilsCrossed, Calendar, MessageCircle } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-restaurant.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Restaurant = () => {
  return (
    <AutomationMetierLayout
      metier="Restaurant / Hôtel"
      intro="Optimisez vos réservations et votre service client avec des agents IA qui gèrent les réservations 24/7, répondent aux demandes et fidélisent votre clientèle automatiquement."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Réservation IA",
          description: "Gère les réservations par téléphone, WhatsApp et site web, optimise l'occupation des tables et envoie confirmations automatiques.",
          icon: Calendar,
        },
        {
          name: "Agent Accueil Client IA",
          description: "Répond aux questions sur le menu, les horaires, les allergènes et les options spéciales, en français, allemand et anglais.",
          icon: UtensilsCrossed,
        },
        {
          name: "Agent Fidélisation IA",
          description: "Envoie des rappels, collecte les avis, propose des offres personnalisées et maintient le lien avec vos clients réguliers.",
          icon: MessageCircle,
        },
      ]}
      stats={[
        { label: "Gain de temps", value: 65, icon: "⏱️" },
        { label: "Réduction coûts accueil", value: 60, icon: "💸" },
        { label: "Taux d'occupation", value: 80, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Téléphone qui sonne en plein service, stress permanent",
          "Réservations manquées en dehors des heures d'ouverture",
          "Difficulté à gérer les demandes en plusieurs langues",
          "Oubli de relancer les clients pour avis ou fidélité",
        ],
        after: [
          "Réservations automatiques 24/7, équipe concentrée sur le service",
          "Zéro réservation perdue, disponibilité permanente",
          "Support multilingue instantané pour tous les clients",
          "Fidélisation automatisée, avis clients boostés",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Restaurant;
