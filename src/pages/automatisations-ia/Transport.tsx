import { Truck, MapPin, Package } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-transport.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Transport = () => {
  return (
    <AutomationMetierLayout
      metier="Société de Transport / Logistique"
      intro="Automatisez le suivi des expéditions, la communication client et l'optimisation des tournées avec des agents IA pour une logistique fluide et efficace."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Suivi Livraison IA",
          description: "Informe les clients en temps réel du statut de leur colis, gère les notifications de livraison et les demandes de modification.",
          icon: Package,
        },
        {
          name: "Agent Optimisation Tournée IA",
          description: "Planifie les itinéraires optimaux, ajuste en fonction du trafic et des urgences, et coordonne les équipes automatiquement.",
          icon: MapPin,
        },
        {
          name: "Agent Service Client IA",
          description: "Répond aux questions sur les délais, gère les réclamations, et assure le suivi des litiges jusqu'à résolution.",
          icon: Truck,
        },
      ]}
      stats={[
        { label: "Gain de temps planification", value: 60, icon: "⏱️" },
        { label: "Réduction coûts carburant", value: 25, icon: "💸" },
        { label: "Satisfaction client", value: 85, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Clients qui appellent pour connaître l'état de leur colis",
          "Tournées planifiées manuellement, non-optimisées",
          "Gestion des réclamations chronophage",
          "Difficultés à gérer les imprévus en temps réel",
        ],
        after: [
          "Notifications automatiques, clients informés en continu",
          "Tournées optimisées par IA, gain de temps et carburant",
          "Réclamations traitées automatiquement, satisfaction maximale",
          "Ajustements en temps réel, agilité opérationnelle",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Transport;
