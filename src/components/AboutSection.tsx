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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center glow-text">
            {t("about_title")}
          </h2>
          <Card className="p-4 md:p-8 bg-card border-primary/20 pb-2">
            <p className="text-center md:text-lg leading-relaxed text-foreground pb-10">
              {t("about_desc")}
            </p>
            <Card className=" bg-card border-primary/20 p-3 md:p-6 glow-border">
            <img className="rounded" src="/src/assets/powerplancomp.png" alt="Diagram of a nuclear power plant" />
          </Card>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
