import { ShoppingCart, MessageSquare, Package } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-ecommerce.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Ecommerce = () => {
  return (
    <AutomationMetierLayout
      metier="E-commerce / Boutique en ligne"
      intro="Boostez vos ventes en ligne avec des agents IA qui répondent aux clients 24/7, relancent les paniers abandonnés et gèrent le service après-vente automatiquement."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent SAV IA",
          description: "Répond aux questions produits, gère les retours, suit les livraisons et résout les problèmes courants instantanément.",
          icon: MessageSquare,
        },
        {
          name: "Agent Relance Panier IA",
          description: "Détecte les paniers abandonnés, envoie des rappels personnalisés par e-mail/SMS, et propose des codes promo ciblés.",
          icon: ShoppingCart,
        },
        {
          name: "Agent Suivi Commande IA",
          description: "Informe automatiquement les clients du statut de leur commande, gère les notifications de livraison et collecte les avis.",
          icon: Package,
        },
      ]}
      stats={[
        { label: "Gain de temps", value: 75, icon: "⏱️" },
        { label: "Réduction coûts support", value: 65, icon: "💸" },
        { label: "Taux de conversion", value: 40, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Clients sans réponse en dehors des heures de bureau",
          "Paniers abandonnés sans relance, perte de CA",
          "Support client surchargé, délais de réponse longs",
          "Gestion manuelle des avis et réclamations",
        ],
        after: [
          "Support 24/7, réponses instantanées en temps réel",
          "Relances automatiques, récupération des ventes perdues",
          "Temps de réponse < 1 minute, satisfaction maximale",
          "Collecte automatique des avis, gestion proactive",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Ecommerce;
