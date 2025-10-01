import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import hydroelectricImg from "@/assets/hydroelectric.jpg";
import thermalImg from "@/assets/thermal.jpg";
import windImg from "@/assets/wind.jpg";
import solarImg from "@/assets/solar.jpg";
import geothermalImg from "@/assets/geothermal.jpg";
import tidalImg from "@/assets/tidal.jpg";

interface PowerPlant {
  name: string;
  description: string;
  image: string;
}

export const MorePlantsSection = () => {
  const { t } = useLanguage();

  const powerPlants: PowerPlant[] = [
    {
      name: t("hydroelectric"),
      description: t("hydroelectric_desc"),
      image: hydroelectricImg,
    },
    {
      name: t("thermal"),
      description: t("thermal_desc"),
      image: thermalImg,
    },
    {
      name: t("wind"),
      description: t("wind_desc"),
      image: windImg,
    },
    {
      name: t("solar"),
      description: t("solar_desc"),
      image: solarImg,
    },
    {
      name: t("geothermal"),
      description: t("geothermal_desc"),
      image: geothermalImg,
    },
    {
      name: t("tidal"),
      description: t("tidal_desc"),
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
          className="text-4xl font-bold mb-12 text-center glow-text"
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
              <Card className="overflow-hidden h-full hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {plant.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {plant.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
