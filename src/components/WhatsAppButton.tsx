import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "41787038800"; // Swiss format without +
  const message = encodeURIComponent("Bonjour, je suis intéressé par vos services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 group animate-fade-in"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      <span className="sr-only">Contactez-nous sur WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
