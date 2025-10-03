import { motion } from "framer-motion";
import { NuclearPlant3D } from "./NuclearPlant3D";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 glow-text">{t("hero_title")}</h1>
          <p className="text-base md:text-xl text-muted-foreground px-4">{t("hero_subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NuclearPlant3D />
        </motion.div>
      </div>
    </section>
  );
};
