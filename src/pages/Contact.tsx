import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Discutons de votre projet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous accompagnons les marques ambitieuses vers l'excellence digitale
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Votre entreprise"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.ch"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Type de projet</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="site">Site vitrine</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="startup">Start-up / SaaS</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionnez un budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less1000">Moins de CHF 1'000</SelectItem>
                      <SelectItem value="1000-3000">CHF 1'000 - 3'000</SelectItem>
                      <SelectItem value="3000-8000">CHF 3'000 - 8'000</SelectItem>
                      <SelectItem value="8000plus">Plus de CHF 8'000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:contact@lxstudio.ch"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@lxstudio.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <a
                        href="tel:+41787038800"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +41 78 703 88 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium text-foreground">Localisation</p>
                      <p className="text-muted-foreground">Bassecourt, Suisse</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Réservez un appel gratuit
                </h3>
                <p className="text-muted-foreground mb-6">
                  Discutons de votre projet lors d'un appel de découverte de 30 minutes, 
                  sans engagement.
                </p>
                <Button asChild variant="hero" size="lg" className="w-full">
                  <a href="tel:+41787038800">
                    <Phone className="mr-2" size={20} />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
