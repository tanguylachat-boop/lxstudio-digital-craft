import { Megaphone, Users, BarChart } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-marketing.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const AgenceMarketing = () => {
  return (
    <AutomationMetierLayout
      metier="Agence Marketing"
      intro="Multipliez votre capacité de génération de leads et automatisez la qualification avec des agents IA qui prospectent, qualifient et nurturent vos prospects 24/7."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Prospection IA",
          description: "Envoie des messages personnalisés sur LinkedIn, e-mail et réseaux sociaux, et identifie les leads intéressés automatiquement.",
          icon: Users,
        },
        {
          name: "Agent Qualification Lead IA",
          description: "Analyse les interactions, score les prospects selon leur maturité, et les transmet au commercial au bon moment.",
          icon: BarChart,
        },
        {
          name: "Agent Nurturing IA",
          description: "Maintient le contact avec les leads tièdes, envoie du contenu pertinent et réchauffe les opportunités automatiquement.",
          icon: Megaphone,
        },
      ]}
      stats={[
        { label: "Génération de leads", value: 90, icon: "⏱️" },
        { label: "Réduction coûts acquisition", value: 60, icon: "💸" },
        { label: "Taux de conversion", value: 45, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Prospection manuelle chronophage et répétitive",
          "Leads non-qualifiés transmis trop tôt aux commerciaux",
          "Prospects oubliés, opportunités perdues",
          "Coût d'acquisition élevé, ROI limité",
        ],
        after: [
          "Prospection automatisée à grande échelle 24/7",
          "Leads ultra-qualifiés, prêts à convertir",
          "Nurturing continu, zéro opportunité perdue",
          "CAC divisé par deux, ROI multiplié",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default AgenceMarketing;
