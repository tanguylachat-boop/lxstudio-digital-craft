import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

// Lazy-loaded pages -- only downloaded when the user navigates to them
const AgentsIAPage = lazy(() => import("./pages/AgentsIA"));
const InfrastructurePage = lazy(() => import("./pages/Infrastructure"));
const Services = lazy(() => import("./pages/Services"));
const AutomationsIA = lazy(() => import("./pages/AutomationsIA"));
const SeoGeo = lazy(() => import("./pages/SeoGeo"));
const Blog = lazy(() => import("./pages/Blog"));
const VisibiliteJura = lazy(() => import("./pages/blog/VisibiliteJura"));
const AutomatisationsIASuisse = lazy(() => import("./pages/blog/AutomatisationsIASuisse"));
const ErreursSEO2025 = lazy(() => import("./pages/blog/ErreursSEO2025"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Automatisations IA sub-pages
const AssistantAdministratif = lazy(() => import("./pages/automatisations-ia/AssistantAdministratif"));
const AgenceImmobiliere = lazy(() => import("./pages/automatisations-ia/AgenceImmobiliere"));
const Restaurant = lazy(() => import("./pages/automatisations-ia/Restaurant"));
const Ecommerce = lazy(() => import("./pages/automatisations-ia/Ecommerce"));
const CabinetMedical = lazy(() => import("./pages/automatisations-ia/CabinetMedical"));
const CabinetAvocat = lazy(() => import("./pages/automatisations-ia/CabinetAvocat"));
const CoachSportif = lazy(() => import("./pages/automatisations-ia/CoachSportif"));
const AgenceMarketing = lazy(() => import("./pages/automatisations-ia/AgenceMarketing"));
const Comptable = lazy(() => import("./pages/automatisations-ia/Comptable"));
const Garage = lazy(() => import("./pages/automatisations-ia/Garage"));
const SalonBeaute = lazy(() => import("./pages/automatisations-ia/SalonBeaute"));
const Artisan = lazy(() => import("./pages/automatisations-ia/Artisan"));
const CentreFormation = lazy(() => import("./pages/automatisations-ia/CentreFormation"));
const AgenceNettoyage = lazy(() => import("./pages/automatisations-ia/AgenceNettoyage"));
const Transport = lazy(() => import("./pages/automatisations-ia/Transport"));
const Startup = lazy(() => import("./pages/automatisations-ia/Startup"));
const Industrie = lazy(() => import("./pages/automatisations-ia/Industrie"));
const RessourcesHumaines = lazy(() => import("./pages/automatisations-ia/RessourcesHumaines"));
const Evenementiel = lazy(() => import("./pages/automatisations-ia/Evenementiel"));
const Administration = lazy(() => import("./pages/automatisations-ia/Administration"));

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
            <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agents-ia" element={<AgentsIAPage />} />
              <Route path="/infrastructure" element={<InfrastructurePage />} />
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
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
