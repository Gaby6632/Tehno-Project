import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ro";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: "Home",
    about: "About",
    pros_cons: "Advantages/Disadvantages",
    more_plants: "More Power Plants",
    hero_title: "Nuclear Energy",
    hero_subtitle: "The Future of Clean Power Generation",
    about_title: "About Nuclear Power",
    about_desc: "Nuclear power plants generate electricity through nuclear fission, where uranium atoms are split to release enormous amounts of energy. This process produces heat that converts water into steam, which drives turbines to generate electricity. Nuclear power is one of the most efficient and reliable energy sources, capable of providing baseload power 24/7 with minimal carbon emissions.",
    advantages: "Advantages",
    disadvantages: "Disadvantages",
    adv1: "Low carbon emissions",
    adv2: "High energy density",
    adv3: "Reliable baseload power",
    adv4: "Small land footprint",
    dis1: "Radioactive waste disposal",
    dis2: "High initial construction costs",
    dis3: "Public safety concerns",
    dis4: "Long decommissioning process",
    other_plants: "Other Power Plants",
    hydroelectric: "Hydroelectric Power",
    hydroelectric_desc: "Harnesses the energy of flowing or falling water to generate electricity. Dams create reservoirs where water flow is controlled to spin turbines.",
    thermal: "Thermal Power",
    thermal_desc: "Burns fossil fuels like coal, oil, or natural gas to heat water into steam that drives turbines. Traditional but carbon-intensive energy source.",
    wind: "Wind Power",
    wind_desc: "Converts kinetic energy from wind into electricity using turbines with large blades. Clean and renewable but dependent on wind conditions.",
    solar: "Solar Power",
    solar_desc: "Captures sunlight using photovoltaic cells or mirrors to generate electricity. Abundant and clean but varies with weather and time of day.",
    geothermal: "Geothermal Power",
    geothermal_desc: "Uses heat from Earth's interior to generate steam for turbines. Reliable and sustainable but geographically limited.",
    tidal: "Tidal Power",
    tidal_desc: "Harnesses ocean tides and waves to generate electricity. Predictable and renewable but still in early development stages.",
    footer_text: "Educational project about power plants and nuclear energy",
    contributors_title: "Project Contributors",
    contributor_1_name: "Alex Johnson",
    contributor_1_task_1: "3D Nuclear Plant Model Design",
    contributor_1_task_2: "Frontend Development & Animations",
    contributor_1_task_3: "Language System Implementation",
    contributor_1_task_4: "UI/UX Design & Styling",
    contributor_2_name: "Maria Rodriguez",
    contributor_2_task_1: "Content Research & Writing",
    contributor_2_task_2: "Image Asset Collection",
    contributor_2_task_3: "AI Assistant Integration",
    contributor_2_task_4: "Testing & Quality Assurance",
  },
  ro: {
    home: "Acasă",
    about: "Despre",
    pros_cons: "Avantaje/Dezavantaje",
    more_plants: "Mai Multe Centrale",
    hero_title: "Energie Nucleară",
    hero_subtitle: "Viitorul Generării de Energie Curată",
    about_title: "Despre Energia Nucleară",
    about_desc: "Centralele nucleare generează electricitate prin fisiune nucleară, unde atomii de uraniu sunt divizați pentru a elibera cantități uriașe de energie. Acest proces produce căldură care transformă apa în abur, care acționează turbinele pentru a genera electricitate. Energia nucleară este una dintre cele mai eficiente și fiabile surse de energie, capabilă să furnizeze energie de bază 24/7 cu emisii minime de carbon.",
    advantages: "Avantaje",
    disadvantages: "Dezavantaje",
    adv1: "Emisii reduse de carbon",
    adv2: "Densitate energetică ridicată",
    adv3: "Energie de bază fiabilă",
    adv4: "Amprenta redusă pe teren",
    dis1: "Eliminarea deșeurilor radioactive",
    dis2: "Costuri inițiale ridicate",
    dis3: "Preocupări de siguranță publică",
    dis4: "Proces lung de dezafectare",
    other_plants: "Alte Centrale Electrice",
    hydroelectric: "Energie Hidroelectrică",
    hydroelectric_desc: "Valorifică energia apei curgătoare sau în cădere pentru a genera electricitate. Barajele creează rezervoare unde fluxul de apă este controlat pentru a roti turbinele.",
    thermal: "Energie Termică",
    thermal_desc: "Arde combustibili fosili precum cărbune, petrol sau gaz natural pentru a încălzi apa în abur care acționează turbinele. Sursă de energie tradițională dar intensivă în carbon.",
    wind: "Energie Eoliană",
    wind_desc: "Convertește energia cinetică din vânt în electricitate folosind turbine cu pale mari. Curată și regenerabilă dar dependentă de condițiile vântului.",
    solar: "Energie Solară",
    solar_desc: "Captează lumina soarelui folosind celule fotovoltaice sau oglinzi pentru a genera electricitate. Abundentă și curată dar variază cu vremea și ora din zi.",
    geothermal: "Energie Geotermală",
    geothermal_desc: "Folosește căldura din interiorul Pământului pentru a genera abur pentru turbine. Fiabilă și durabilă dar limitată geografic.",
    tidal: "Energie Maremotrică",
    tidal_desc: "Valorifică mareele și valurile oceanului pentru a genera electricitate. Previzibilă și regenerabilă dar încă în stadii incipiente de dezvoltare.",
    footer_text: "Proiect educațional despre centrale electrice și energie nucleară",
    contributors_title: "Contribuitori la Proiect",
    contributor_1_name: "Alex Johnson",
    contributor_1_task_1: "Design Model 3D Centrală Nucleară",
    contributor_1_task_2: "Dezvoltare Frontend & Animații",
    contributor_1_task_3: "Implementare Sistem Limbi",
    contributor_1_task_4: "Design UI/UX & Stilizare",
    contributor_2_name: "Maria Rodriguez",
    contributor_2_task_1: "Cercetare & Redactare Conținut",
    contributor_2_task_2: "Colectare Imagini",
    contributor_2_task_3: "Integrare Asistent AI",
    contributor_2_task_4: "Testare & Asigurare Calitate",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
