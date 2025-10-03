import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";
import hydroelectricImg from "@/assets/hydroelectric.jpg";
import thermalImg from "@/assets/thermal.jpg";
import windImg from "@/assets/wind.jpg";
import solarImg from "@/assets/solar.jpg";
import geothermalImg from "@/assets/geothermal.jpg";
import tidalImg from "@/assets/tidal.jpg";

interface PowerPlant {
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
}

export const MorePlantsSection = () => {
  const { t } = useLanguage();
  const [selectedPlant, setSelectedPlant] = useState<PowerPlant | null>(null);

  const powerPlants: PowerPlant[] = [
    {
      name: t("hydroelectric"),
      description: t("hydroelectric_desc"),
      detailedDescription: t("hydroelectric_detailed"),
      image: hydroelectricImg,
    },
    {
      name: t("thermal"),
      description: t("thermal_desc"),
      detailedDescription: t("thermal_detailed"),
      image: thermalImg,
    },
    {
      name: t("wind"),
      description: t("wind_desc"),
      detailedDescription: t("wind_detailed"),
      image: windImg,
    },
    {
      name: t("solar"),
      description: t("solar_desc"),
      detailedDescription: t("solar_detailed"),
      image: solarImg,
    },
    {
      name: t("geothermal"),
      description: t("geothermal_desc"),
      detailedDescription: t("geothermal_detailed"),
      image: geothermalImg,
    },
    {
      name: t("tidal"),
      description: t("tidal_desc"),
      detailedDescription: t("tidal_detailed"),
      image: tidalImg,
    },
  ];

  return (
    <section id="more-plants" className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center glow-text"
        >
          {t("other_plants")}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {powerPlants.map((plant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden h-full hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedPlant(plant)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-primary">
                    {plant.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {plant.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedPlant} onOpenChange={() => setSelectedPlant(null)}>
          <DialogContent className="max-w-[90%] md:max-w-[80%] max-h-[90vh] overflow-y-auto">
            <DialogTitle className="sr-only">{selectedPlant?.name}</DialogTitle>
            {selectedPlant && (
              <div className="space-y-6">
                <div className="w-[90%] mx-auto rounded-lg overflow-hidden">
                  <img
                    src={selectedPlant.image}
                    alt={selectedPlant.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-4 px-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    {selectedPlant.name}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    {selectedPlant.detailedDescription}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
