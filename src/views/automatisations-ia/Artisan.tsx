import { Hammer, FileText, Phone } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-artisan.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Artisan = () => {
  return (
    <AutomationMetierLayout
      metier="Artisan / Entreprise de Construction"
      intro="Concentrez-vous sur les chantiers pendant que des agents IA gèrent vos devis, vos appels et votre suivi client automatiquement pour développer votre activité."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Accueil IA",
          description: "Répond aux demandes de devis, collecte les informations du projet et planifie les visites de chantier automatiquement.",
          icon: Phone,
        },
        {
          name: "Agent Devis IA",
          description: "Génère des devis standardisés, envoie les documents, relance pour signature et suit l'avancement des propositions.",
          icon: FileText,
        },
        {
          name: "Agent Suivi Chantier IA",
          description: "Tient les clients informés de l'avancement, envoie photos et mises à jour, et gère les demandes de modifications.",
          icon: Hammer,
        },
      ]}
      stats={[
        { label: "Gain de temps admin", value: 60, icon: "⏱️" },
        { label: "Augmentation devis traités", value: 70, icon: "💸" },
        { label: "Taux de transformation", value: 35, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Appels manqués sur chantier, clients perdus",
          "Devis établis avec retard, opportunités ratées",
          "Clients sans nouvelles, insatisfaction",
          "Temps admin volé sur les chantiers",
        ],
        after: [
          "Réponse immédiate 24/7, zéro appel manqué",
          "Devis générés et envoyés automatiquement",
          "Communication transparente, clients rassurés",
          "Focus terrain, admin automatisée",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Artisan;
