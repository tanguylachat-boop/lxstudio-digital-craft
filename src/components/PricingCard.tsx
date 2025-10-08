import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

const PricingCard = ({ name, price, features, featured = false }: PricingCardProps) => {
  return (
    <div
      className={`p-8 rounded-xl border transition-all duration-300 ${
        featured
          ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.3)]"
          : "bg-card border-border hover-lift"
      }`}
    >
      <h3 className="text-2xl font-semibold text-foreground mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gradient-gold">{price}</span>
        <span className="text-muted-foreground ml-2">CHF</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-primary mr-3 mt-0.5 flex-shrink-0" size={20} />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? "hero" : "outline"}
        size="lg"
        className="w-full"
      >
        Demander un devis
      </Button>
    </div>
  );
};

export default PricingCard;
