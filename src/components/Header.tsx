import { useState } from "react";
import Link from "@/components/Link";
import { imgSrc } from "@/lib/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoText from "@/assets/logo-text.png";

interface HeaderProps {
  currentPath?: string;
}

const Header = ({ currentPath = "/" }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Agents IA", path: "/agents-ia" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img src={imgSrc(logoText)} alt="LX Studio" className="h-8 md:h-10 w-auto transition-all duration-300 group-hover:scale-105 hover-glow" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="default">
              <Link to="/contact">Réserver un appel</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-1 animate-fade-in border-t border-border/20 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-primary py-2.5 px-2 rounded-lg hover:bg-primary/5 ${
                  isActive(item.path) ? "text-primary bg-primary/5" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild variant="hero" size="default" className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Réserver un appel
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
