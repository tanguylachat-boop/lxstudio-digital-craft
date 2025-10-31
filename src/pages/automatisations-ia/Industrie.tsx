import { Factory, ClipboardList, AlertTriangle } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-industrie.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Industrie = () => {
  return (
    <AutomationMetierLayout
      metier="Entreprise Industrielle / Production"
      intro="Optimisez votre production avec des agents IA qui surveillent les lignes, gèrent les commandes et coordonnent la maintenance pour maximiser l'efficacité opérationnelle."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Suivi Production IA",
          description: "Monitore les KPI en temps réel, détecte les anomalies, et alerte les responsables en cas de déviation des objectifs.",
          icon: Factory,
        },
        {
          name: "Agent Gestion Commandes IA",
          description: "Suit les commandes fournisseurs, optimise les stocks, et coordonne les approvisionnements pour éviter les ruptures.",
          icon: ClipboardList,
        },
        {
          name: "Agent Maintenance Prédictive IA",
          description: "Analyse les données machines, prédit les pannes, et planifie les maintenances préventives automatiquement.",
          icon: AlertTriangle,
        },
      ]}
      stats={[
        { label: "Réduction temps d'arrêt", value: 45, icon: "⏱️" },
        { label: "Économies maintenance", value: 35, icon: "💸" },
        { label: "Productivité", value: 55, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Pannes imprévues, arrêts de production coûteux",
          "Gestion manuelle des stocks, ruptures fréquentes",
          "Détection tardive des problèmes de qualité",
          "Maintenance réactive, coûts élevés",
        ],
        after: [
          "Maintenance prédictive, pannes anticipées",
          "Gestion automatisée, stocks optimisés en continu",
          "Alertes temps réel, qualité maximale",
          "Maintenance planifiée, coûts réduits de 35%",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Industrie;
