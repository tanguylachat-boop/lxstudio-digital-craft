import Link from "@/components/Link";
import { imgSrc } from "@/lib/image";
import { Instagram, Linkedin, Music } from "lucide-react";
import logoText from "@/assets/logo-text.png";

const Footer = () => {
  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Agents IA", path: "/agents-ia" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[hsl(var(--surface))] border-t border-border/30 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, hsl(var(--gold)) 0%, transparent 50%)",
      }} />
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 group">
              <img src={imgSrc(logoText)} alt="LX Studio" className="h-12 w-auto transition-all duration-300 group-hover:scale-105 hover-glow" />
            </div>
            <p className="text-sm text-gradient-gold font-semibold mb-4">
              L'agence IA pour les PME suisses
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/lxstudio.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/lxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://tiktok.com/@lxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:contact@lxstudio.ch"
                  className="hover:text-primary transition-colors"
                >
                  contact@lxstudio.ch
                </a>
              </li>
              <li>
                <a
                  href="tel:+41787038800"
                  className="hover:text-primary transition-colors"
                >
                  +41 78 703 88 00
                </a>
              </li>
              <li>LX Studio — Bassecourt (Jura, CH)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 LX Studio — L'agence IA pour les PME suisses.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
