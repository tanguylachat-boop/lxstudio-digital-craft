import { Phone, Mail, Calendar } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-admin.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const AssistantAdministratif = () => {
  return (
    <AutomationMetierLayout
      metier="Assistant Administratif"
      intro="Libérez votre équipe des tâches répétitives grâce à des agents IA intelligents qui gèrent votre standard téléphonique, vos e-mails et vos agendas 24h/24. Concentrez-vous sur l'essentiel pendant que l'IA s'occupe de l'administratif."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Réceptionniste IA",
          description: "Répond aux appels, transfère intelligemment, prend des messages détaillés et qualifie les demandes urgentes automatiquement.",
          icon: Phone,
        },
        {
          name: "Agent E-mail IA",
          description: "Trie, classe, répond aux demandes courantes et vous alerte uniquement sur les e-mails prioritaires nécessitant votre attention.",
          icon: Mail,
        },
        {
          name: "Agent Agenda IA",
          description: "Gère vos rendez-vous, coordonne les disponibilités, envoie rappels et confirmations automatiquement via SMS ou e-mail.",
          icon: Calendar,
        },
      ]}
      stats={[
        { label: "Gain de temps", value: 60, icon: "⏱️" },
        { label: "Réduction des coûts", value: 50, icon: "💸" },
        { label: "Productivité", value: 70, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Heures perdues au téléphone pour des demandes répétitives",
          "E-mails noyés dans la masse, réponses tardives",
          "Erreurs de planification, double-bookings fréquents",
          "Standard saturé aux heures de pointe",
        ],
        after: [
          "IA filtre et qualifie chaque appel automatiquement",
          "Réponses instantanées 24/7, inbox organisée",
          "Agenda synchronisé en temps réel, zéro conflit",
          "Disponibilité permanente, satisfaction client maximale",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default AssistantAdministratif;
