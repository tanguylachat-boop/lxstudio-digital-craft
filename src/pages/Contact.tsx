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
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (error) throw error;

      console.log("Email sent successfully:", data);
      toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Erreur lors de l'envoi du message");
    }
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
            Remplissez le formulaire ci-dessous, et nous reviendrons vers vous dans les 24h.
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
