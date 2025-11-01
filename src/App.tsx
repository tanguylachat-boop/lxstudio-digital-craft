import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AutomationsIA from "./pages/AutomationsIA";
import SeoGeo from "./pages/SeoGeo";
import Blog from "./pages/Blog";
import VisibiliteJura from "./pages/blog/VisibiliteJura";
import AutomatisationsIASuisse from "./pages/blog/AutomatisationsIASuisse";
import ErreursSEO2025 from "./pages/blog/ErreursSEO2025";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import AssistantAdministratif from "./pages/automatisations-ia/AssistantAdministratif";
import AgenceImmobiliere from "./pages/automatisations-ia/AgenceImmobiliere";
import Restaurant from "./pages/automatisations-ia/Restaurant";
import Ecommerce from "./pages/automatisations-ia/Ecommerce";
import CabinetMedical from "./pages/automatisations-ia/CabinetMedical";
import CabinetAvocat from "./pages/automatisations-ia/CabinetAvocat";
import CoachSportif from "./pages/automatisations-ia/CoachSportif";
import AgenceMarketing from "./pages/automatisations-ia/AgenceMarketing";
import Comptable from "./pages/automatisations-ia/Comptable";
import Garage from "./pages/automatisations-ia/Garage";
import SalonBeaute from "./pages/automatisations-ia/SalonBeaute";
import Artisan from "./pages/automatisations-ia/Artisan";
import CentreFormation from "./pages/automatisations-ia/CentreFormation";
import AgenceNettoyage from "./pages/automatisations-ia/AgenceNettoyage";
import Transport from "./pages/automatisations-ia/Transport";
import Startup from "./pages/automatisations-ia/Startup";
import Industrie from "./pages/automatisations-ia/Industrie";
import RessourcesHumaines from "./pages/automatisations-ia/RessourcesHumaines";
import Evenementiel from "./pages/automatisations-ia/Evenementiel";
import Administration from "./pages/automatisations-ia/Administration";

const queryClient = new QueryClient();

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/automatisations-ia" element={<AutomationsIA />} />
              <Route path="/automatisations-ia/assistant-administratif" element={<AssistantAdministratif />} />
              <Route path="/automatisations-ia/agence-immobiliere" element={<AgenceImmobiliere />} />
              <Route path="/automatisations-ia/restaurant" element={<Restaurant />} />
              <Route path="/automatisations-ia/ecommerce" element={<Ecommerce />} />
              <Route path="/automatisations-ia/cabinet-medical" element={<CabinetMedical />} />
              <Route path="/automatisations-ia/cabinet-avocat" element={<CabinetAvocat />} />
              <Route path="/automatisations-ia/coach-sportif" element={<CoachSportif />} />
              <Route path="/automatisations-ia/agence-marketing" element={<AgenceMarketing />} />
              <Route path="/automatisations-ia/comptable" element={<Comptable />} />
              <Route path="/automatisations-ia/garage" element={<Garage />} />
              <Route path="/automatisations-ia/salon-beaute" element={<SalonBeaute />} />
              <Route path="/automatisations-ia/artisan" element={<Artisan />} />
              <Route path="/automatisations-ia/centre-formation" element={<CentreFormation />} />
              <Route path="/automatisations-ia/agence-nettoyage" element={<AgenceNettoyage />} />
              <Route path="/automatisations-ia/transport" element={<Transport />} />
              <Route path="/automatisations-ia/startup" element={<Startup />} />
              <Route path="/automatisations-ia/industrie" element={<Industrie />} />
              <Route path="/automatisations-ia/ressources-humaines" element={<RessourcesHumaines />} />
              <Route path="/automatisations-ia/evenementiel" element={<Evenementiel />} />
              <Route path="/automatisations-ia/administration" element={<Administration />} />
              <Route path="/seo-geo" element={<SeoGeo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/visibilite-jura" element={<VisibiliteJura />} />
              <Route path="/blog/automatisations-ia-suisse" element={<AutomatisationsIASuisse />} />
              <Route path="/blog/erreurs-seo-2025" element={<ErreursSEO2025 />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
