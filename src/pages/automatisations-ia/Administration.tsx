import { Building2, FileText, Users } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-administration.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Administration = () => {
  return (
    <AutomationMetierLayout
      metier="Collectivité Publique / Administration"
      intro="Modernisez vos services publics avec des agents IA qui répondent aux citoyens 24/7, traitent les demandes administratives et optimisent les processus internes."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Accueil Citoyen IA",
          description: "Répond aux questions courantes, oriente vers le bon service, et fournit des informations sur les démarches administratives.",
          icon: Users,
        },
        {
          name: "Agent Traitement Dossiers IA",
          description: "Collecte les pièces justificatives, vérifie la complétude des dossiers, et suit l'avancement des demandes automatiquement.",
          icon: FileText,
        },
        {
          name: "Agent Communication IA",
          description: "Informe les citoyens de l'état de leur demande, envoie les rappels nécessaires, et collecte les retours de satisfaction.",
          icon: Building2,
        },
      ]}
      stats={[
        { label: "Gain de temps agents", value: 60, icon: "⏱️" },
        { label: "Réduction délais traitement", value: 50, icon: "💸" },
        { label: "Satisfaction citoyens", value: 75, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Guichets saturés, temps d'attente importants",
          "Dossiers incomplets, va-et-vient répétés",
          "Citoyens sans nouvelles de leurs demandes",
          "Agents débordés par les demandes de renseignement",
        ],
        after: [
          "Réponses immédiates 24/7, accessibilité maximale",
          "Vérification automatique, dossiers complets du premier coup",
          "Suivi transparent, citoyens informés en continu",
          "Agents concentrés sur le traitement, efficacité accrue",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Administration;
