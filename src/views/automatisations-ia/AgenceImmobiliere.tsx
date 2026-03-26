import { Home, MessageSquare, Calendar } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-immobilier.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const AgenceImmobiliere = () => {
  return (
    <AutomationMetierLayout
      metier="Agence Immobilière"
      intro="Transformez votre prospection immobilière avec des agents IA qui qualifient les leads, organisent les visites et suivent chaque prospect automatiquement. Plus de temps pour vendre, moins de temps perdu en gestion."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Qualification Lead IA",
          description: "Analyse automatiquement chaque demande, qualifie budget et critères, et priorise les prospects les plus chauds pour vos agents.",
          icon: Home,
        },
        {
          name: "Agent Communication IA",
          description: "Répond aux questions fréquentes, envoie les fiches techniques, et maintient le contact avec les prospects via WhatsApp, SMS et e-mail.",
          icon: MessageSquare,
        },
        {
          name: "Agent Visite IA",
          description: "Planifie les visites selon disponibilités, envoie confirmations et rappels, et collecte les retours clients après chaque visite.",
          icon: Calendar,
        },
      ]}
      stats={[
        { label: "Gain de temps", value: 70, icon: "⏱️" },
        { label: "Réduction des coûts", value: 55, icon: "💸" },
        { label: "Leads qualifiés", value: 85, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Des heures au téléphone pour qualifier chaque lead",
          "Visites non-qualifiées, perte de temps sur le terrain",
          "Suivi manuel fastidieux, prospects oubliés",
          "Communication sporadique avec les clients",
        ],
        after: [
          "Qualification automatique instantanée 24/7",
          "Visites ciblées avec prospects qualifiés uniquement",
          "Suivi automatisé, relances intelligentes",
          "Communication multicanale fluide et continue",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default AgenceImmobiliere;
