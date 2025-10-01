import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center glow-text">
            {t("about_title")}
          </h2>
          <Card className="p-8 bg-card border-primary/20">
            <p className="text-lg leading-relaxed text-foreground">
              {t("about_desc")}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
