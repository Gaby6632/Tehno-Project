import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { ContributorsCard } from "./ContributorsCard";

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [showContributors, setShowContributors] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary glow-border" />
          <span className="font-bold text-lg glow-text">{t("hero_title")}</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("home")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("about")}
          </button>
          <button
            onClick={() => scrollToSection("pros-cons")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("pros_cons")}
          </button>
          <button
            onClick={() => scrollToSection("more-plants")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("more_plants")}
          </button>

          <div className="flex gap-2 ml-4 border-l border-border pl-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowContributors(true)}
              className="gap-2"
            >
              <Users className="h-4 w-4" />
              Contributors
            </Button>
            <Button
              variant={language === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("en")}
            >
              EN
            </Button>
            <Button
              variant={language === "ro" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("ro")}
            >
              RO
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
    <ContributorsCard isOpen={showContributors} onClose={() => setShowContributors(false)} />
    </>
  );
};
