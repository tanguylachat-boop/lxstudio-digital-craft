import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover-lift relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)]">
        <Icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={28} />
      </div>
      <h3 className="relative z-10 text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-gradient-gold">{title}</h3>
      <p className="relative z-10 text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
