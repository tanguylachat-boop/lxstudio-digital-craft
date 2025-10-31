import { Wrench, Calendar, Bell } from "lucide-react";
import AutomationMetierLayout from "@/components/AutomationMetierLayout";
import heroImage from "@/assets/automation-garage.jpg";
import transformImage from "@/assets/automation-transformation.jpg";

const Garage = () => {
  return (
    <AutomationMetierLayout
      metier="Garage / Atelier Mécanique"
      intro="Optimisez la gestion de votre garage avec des agents IA qui prennent les rendez-vous, rappellent les entretiens et tiennent vos clients informés en temps réel."
      heroImage={heroImage}
      agents={[
        {
          name: "Agent Rendez-vous IA",
          description: "Gère les prises de rendez-vous par téléphone et WhatsApp, optimise le planning atelier et envoie les confirmations.",
          icon: Calendar,
        },
        {
          name: "Agent Entretien Préventif IA",
          description: "Rappelle automatiquement aux clients les échéances d'entretien (vidange, contrôle technique, pneus) selon le kilométrage.",
          icon: Bell,
        },
        {
          name: "Agent Communication IA",
          description: "Informe en temps réel de l'avancement des réparations, envoie les devis pour validation et collecte les avis clients.",
          icon: Wrench,
        },
      ]}
      stats={[
        { label: "Gain de temps accueil", value: 55, icon: "⏱️" },
        { label: "Augmentation CA entretien", value: 40, icon: "💸" },
        { label: "Satisfaction client", value: 75, icon: "🚀" },
      ]}
      beforeAfter={{
        before: [
          "Mécaniciens interrompus pour répondre au téléphone",
          "Rendez-vous d'entretien oubliés, CA perdu",
          "Clients qui attendent sans nouvelles de leur véhicule",
          "Difficulté à optimiser le planning atelier",
        ],
        after: [
          "Équipe concentrée sur les réparations, prise de RDV automatisée",
          "Rappels automatiques, planning d'entretien optimisé",
          "Communication transparente, clients informés en continu",
          "Planning optimisé automatiquement, productivité maximale",
        ],
      }}
      transformImage={transformImage}
    />
  );
};

export default Garage;
