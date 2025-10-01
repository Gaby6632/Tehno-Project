import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContributorsCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContributorsCard = ({ isOpen, onClose }: ContributorsCardProps) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-card border-2 border-primary/20 rounded-lg shadow-2xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold glow-text">{t("contributors_title")}</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-5 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {t("contributor_1_name")}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_1_task_1")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_1_task_2")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_1_task_3")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_1_task_4")}
                  </li>
                </ul>
              </div>

              <div className="bg-background/50 p-5 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {t("contributor_2_name")}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_2_task_1")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_2_task_2")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_2_task_3")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("contributor_2_task_4")}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
