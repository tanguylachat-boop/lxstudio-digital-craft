import { Link } from "react-router-dom";
import { Instagram, Linkedin, Music } from "lucide-react";
import logoText from "@/assets/logo-text.png";

const Footer = () => {
  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "À propos", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoText} alt="LX Studio" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Excellence Digitale Suisse
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/lxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/lxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://tiktok.com/@lxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
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
              <li>Bassecourt, Suisse</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 LX Studio — Excellence Digitale Suisse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
