import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, category, description, image }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-card border border-border rounded-xl hover-lift">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-primary font-medium mb-2">{category}</p>
        <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <Button variant="outline" size="default" className="group">
          Voir le projet
          <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
