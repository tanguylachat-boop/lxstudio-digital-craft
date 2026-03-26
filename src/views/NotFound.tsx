import Link from "@/components/Link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-24">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient-gold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Page introuvable
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="mr-2" size={20} />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              <ArrowLeft className="mr-2" size={20} />
              Contactez-nous
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
