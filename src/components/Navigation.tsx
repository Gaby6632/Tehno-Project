import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Menu, X, Home, Info, Scale, Zap } from "lucide-react";
import { ContributorsCard } from "./ContributorsCard";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [showContributors, setShowContributors] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t("home"), icon: Home },
    { id: "about", label: t("about"), icon: Info },
    { id: "pros-cons", label: t("pros_cons"), icon: Scale },
    { id: "more-plants", label: t("more_plants"), icon: Zap },
  ];

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
          <span className="font-bold text-base md:text-lg glow-text truncate max-w-[150px] md:max-w-none">{t("hero_title")}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="flex gap-2 ml-4 border-l border-border pl-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowContributors(true)}
              className="gap-2"
            >
              <Users className="h-4 w-4" />
              <span className="hidden xl:inline">Contributors</span>
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

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowContributors(true)}
          >
            <Users className="h-4 w-4" />
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                ))}
                
                <div className="border-t border-border pt-6 space-y-3">
                  <p className="text-sm text-muted-foreground mb-2">Language</p>
                  <div className="flex gap-2">
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                      className="flex-1"
                    >
                      EN
                    </Button>
                    <Button
                      variant={language === "ro" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("ro")}
                      className="flex-1"
                    >
                      RO
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
    <ContributorsCard isOpen={showContributors} onClose={() => setShowContributors(false)} />
    </>
  );
};
