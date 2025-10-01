import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export const ProsConsSection = () => {
  const { t } = useLanguage();

  const advantages = [
    t("adv1"),
    t("adv2"),
    t("adv3"),
    t("adv4"),
  ];

  const disadvantages = [
    t("dis1"),
    t("dis2"),
    t("dis3"),
    t("dis4"),
  ];

  return (
    <section id="pros-cons" className="min-h-screen py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center glow-text"
        >
          {t("pros_cons")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-advantage/10 border-advantage/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-advantage-foreground">
                <CheckCircle2 className="w-8 h-8 text-advantage" />
                {t("advantages")}
              </h3>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-advantage mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{advantage}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-disadvantage/10 border-disadvantage/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <XCircle className="w-8 h-8 text-disadvantage" />
                {t("disadvantages")}
              </h3>
              <ul className="space-y-4">
                {disadvantages.map((disadvantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-disadvantage mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{disadvantage}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
