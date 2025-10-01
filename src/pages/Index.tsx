import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProsConsSection } from "@/components/ProsConsSection";
import { MorePlantsSection } from "@/components/MorePlantsSection";
import { Footer } from "@/components/Footer";
import { AIAssistantButton } from "@/components/AIAssistantButton";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProsConsSection />
        <MorePlantsSection />
        <Footer />
        <AIAssistantButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
