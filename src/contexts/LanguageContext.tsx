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
    about_desc: "Nuclear power plants generate electricity through a process called nuclear fission. Inside the reactor, uranium atoms are split apart, releasing a huge amount of energy in the form of heat. This heat is used to convert water into high-pressure steam, which is directed toward turbines. As the turbines spin, they drive generators that produce electricity. One of the main advantages of nuclear energy is its ability to provide a stable supply of power 24/7, regardless of weather conditions. Additionally, nuclear energy produces very low carbon emissions, making it a cleaner alternative compared to coal or gas power plants.",
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
    hydroelectric_detailed: "Hydroelectric power plants are one of the oldest and most established renewable energy sources. They work by capturing the energy of moving water, typically by building dams across rivers to create large reservoirs. When water is released from the reservoir, it flows through turbines, spinning them to generate electricity. The amount of power generated depends on both the volume of water and the height from which it falls (the 'head'). Modern hydroelectric plants can be quite flexible, ramping power production up or down quickly to meet demand. Some facilities even use pumped-storage hydroelectricity, where water is pumped back up to the reservoir during low-demand periods to be released again when needed. Hydroelectric power provides about 16% of global electricity and offers advantages like flood control, irrigation, and recreational opportunities. However, large dams can disrupt ecosystems, displace communities, and affect fish migration patterns.",
    thermal: "Thermal Power",
    thermal_desc: "Burns fossil fuels like coal, oil, or natural gas to heat water into steam that drives turbines. Traditional but carbon-intensive energy source.",
    thermal_detailed: "Thermal power plants, also known as fossil fuel power plants, have been the backbone of electricity generation for over a century. These plants burn coal, natural gas, or oil to heat water in large boilers, creating high-pressure steam. This steam is then directed at turbines, causing them to spin and drive generators that produce electricity. After passing through the turbines, the steam is cooled in condensers and the water is recycled back to the boiler. Modern thermal plants can achieve efficiency rates of 40-60%, meaning much of the fuel's energy is lost as waste heat. Natural gas combined-cycle plants are among the most efficient, using both gas and steam turbines. While thermal plants provide reliable, dispatchable power that can ramp up or down to meet demand, they are major contributors to greenhouse gas emissions and air pollution. Coal plants are particularly problematic, emitting not just CO2 but also particulates, sulfur dioxide, and mercury. Many countries are phasing out coal power in favor of cleaner alternatives.",
    wind: "Wind Power",
    wind_desc: "Converts kinetic energy from wind into electricity using turbines with large blades. Clean and renewable but dependent on wind conditions.",
    wind_detailed: "Wind power has experienced remarkable growth over the past two decades, becoming one of the fastest-growing renewable energy sources. Wind turbines work by using large blades (typically 50-80 meters long for utility-scale turbines) to capture the kinetic energy of moving air. As wind flows over the blades, it creates lift—similar to an airplane wing—causing them to rotate. This rotation drives a generator inside the turbine's nacelle (the housing at the top), producing electricity. Modern turbines can generate 2-8 megawatts each, with offshore turbines being particularly large and powerful due to stronger, more consistent ocean winds. Wind farms can be built on land (onshore) or at sea (offshore), with offshore installations being more expensive but producing more power. Wind power has minimal operating costs and produces no emissions during operation. However, it faces challenges including intermittency (wind doesn't always blow when needed), visual and noise impacts, and effects on bird and bat populations. Energy storage and grid management technologies are helping to address the intermittency issue.",
    solar: "Solar Power",
    solar_desc: "Captures sunlight using photovoltaic cells or mirrors to generate electricity. Abundant and clean but varies with weather and time of day.",
    solar_detailed: "Solar power captures energy from the sun, the most abundant energy source available to Earth. There are two main technologies: photovoltaic (PV) panels and concentrated solar power (CSP). PV panels, the most common type, use semiconductor materials (usually silicon) to directly convert sunlight into electricity through the photovoltaic effect. When photons from sunlight hit the panel, they knock electrons loose, creating an electrical current. Modern solar panels are about 15-22% efficient for residential systems and up to 40% for specialized multi-junction cells. CSP plants use mirrors or lenses to concentrate sunlight onto a receiver, heating a fluid to create steam that drives traditional turbines. Solar power has seen dramatic cost reductions over the past decade, making it competitive with fossil fuels in many locations. Rooftop solar allows distributed generation, reducing transmission losses. However, solar power only works during daylight hours and is affected by weather, cloud cover, and seasonal variations. Battery storage systems are increasingly paired with solar installations to provide power after sunset.",
    geothermal: "Geothermal Power",
    geothermal_desc: "Uses heat from Earth's interior to generate steam for turbines. Reliable and sustainable but geographically limited.",
    geothermal_detailed: "Geothermal power taps into the immense heat stored beneath Earth's surface, particularly in tectonically active regions where hot rock, magma, or geothermally heated water exists closer to the surface. There are three main types of geothermal power plants: dry steam plants (which use steam directly from underground), flash steam plants (which reduce pressure on high-temperature water to create steam), and binary cycle plants (which use a secondary fluid with a lower boiling point). Wells are drilled 1-3 kilometers deep to reach the heat source. The steam or hot water rises through the wells, drives turbines to generate electricity, and then is typically reinjected underground to maintain reservoir pressure and sustainability. Geothermal power is extremely reliable, operating 24/7 with capacity factors often exceeding 90%, much higher than solar or wind. It has a small land footprint and produces minimal emissions. However, it's geographically limited to areas with suitable geology, primarily along tectonic plate boundaries in places like Iceland, New Zealand, the Philippines, and the western United States. Initial drilling and exploration costs are high, and there's some risk of induced seismicity.",
    tidal: "Tidal Power",
    tidal_desc: "Harnesses ocean tides and waves to generate electricity. Predictable and renewable but still in early development stages.",
    tidal_detailed: "Tidal power, also called tidal energy, harnesses the predictable movement of ocean tides caused by the gravitational pull of the moon and sun. Unlike wind and solar, tides are highly predictable, making tidal power a reliable renewable energy source. There are several approaches to capturing tidal energy: tidal barrages (dam-like structures across estuaries), tidal stream generators (underwater turbines similar to wind turbines), and tidal lagoons (artificial structures that create a differential between enclosed water and the open sea). Tidal stream generators are the most promising technology, using underwater turbines placed in areas with strong tidal currents. As the tide flows in and out, it spins the turbines, generating electricity. The technology is still relatively early in development compared to wind and solar, with only a handful of commercial-scale projects worldwide, including the MeyGen project in Scotland and the Rance Tidal Power Station in France. Advantages include predictability and high energy density in suitable locations. Challenges include high installation costs, limited suitable sites (requiring both strong tides and close proximity to electrical demand), potential environmental impacts on marine ecosystems, and the corrosive nature of saltwater requiring robust, expensive materials.",
    footer_text: "Educational project about power plants and nuclear energy",
    contributors_title: "Project Contributors",
    contributor_1_name: "Joian Gabriel",
    contributor_1_task_1: "Website Development",
    contributor_1_task_2: "Website Hosting",
    contributor_1_task_3: "Language System & AI Assistant Implementation",
    contributor_1_task_4: "UI/UX Design & Styling",
    contributor_2_name: "Name",
    contributor_2_task_1: "Content Writing",
    contributor_2_task_2: "UI/UX Design & Styling",
    contributor_2_task_3: "Research on Power Plants & Energy Production",
    contributor_2_task_4: "Content Structuring",
    contributor_2_task_5: "Image & Diagram Selection",
    footer_text_c: "Developed by Gabi and much coffee."
  },
  ro: {
    home: "Acasă",
    about: "Despre",
    pros_cons: "Avantaje/Dezavantaje",
    more_plants: "Mai Multe Centrale",
    hero_title: "Energie Nucleară",
    hero_subtitle: "Viitorul Generării de Energie Curată",
    about_title: "Despre Energia Nucleară",
    about_desc: "Centralele nucleare produc energie electrică printr-un proces numit fisiune nucleară. În interiorul reactorului, atomii de uraniu sunt divizați, iar acest lucru eliberează o cantitate uriașă de energie sub formă de căldură. Căldura încălzește apa, transformând-o în abur sub presiune. Aburul este apoi direcționat către turbine, care încep să se învârtă și să genereze electricitate prin intermediul generatoarelor. Un avantaj major al energiei nucleare este că poate furniza energie constantă, zi și noapte, indiferent de condițiile meteo. În plus, emisiile de carbon sunt foarte reduse, ceea ce face ca energia nucleară să fie o alternativă mult mai curată comparativ cu centralele pe bază de cărbune sau gaz.",
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
    hydroelectric_detailed: "Centralele hidroelectrice sunt una dintre cele mai vechi și consacrate surse de energie regenerabilă. Funcționează prin captarea energiei apei în mișcare, de obicei prin construirea de baraje pe râuri pentru a crea rezervoare mari. Când apa este eliberată din rezervor, aceasta curge prin turbine, rotindu-le pentru a genera electricitate. Cantitatea de energie produsă depinde atât de volumul de apă, cât și de înălțimea de la care cade ('capul hidraulic'). Centralele hidroelectrice moderne pot fi destul de flexibile, crescând sau reducând rapid producția de energie pentru a satisface cererea. Unele facilități folosesc chiar hidroelectricitate prin pompaj, unde apa este pompată înapoi în rezervor în perioadele de cerere redusă pentru a fi eliberată din nou când este necesar. Energia hidroelectrică furnizează aproximativ 16% din electricitatea globală și oferă avantaje precum controlul inundațiilor, irigațiile și oportunitățile recreative. Cu toate acestea, barajele mari pot perturba ecosistemele, pot deplasa comunități și pot afecta migrația peștilor.",
    thermal: "Energie Termică",
    thermal_desc: "Arde combustibili fosili precum cărbune, petrol sau gaz natural pentru a încălzi apa în abur care acționează turbinele. Sursă de energie tradițională dar intensivă în carbon.",
    thermal_detailed: "Centralele termoelectrice, cunoscute și sub numele de centrale pe combustibili fosili, au fost coloana vertebrală a generării de electricitate de peste un secol. Aceste centrale ard cărbune, gaz natural sau petrol pentru a încălzi apa în cazane mari, creând abur cu presiune ridicată. Acest abur este apoi direcționat către turbine, determinându-le să se rotească și să antreneze generatoare care produc electricitate. După trecerea prin turbine, aburul este răcit în condensatoare și apa este reciclată înapoi la cazan. Centralele termice moderne pot atinge rate de eficiență de 40-60%, ceea ce înseamnă că o mare parte din energia combustibilului se pierde sub formă de căldură reziduală. Centralele cu ciclu combinat pe gaz natural sunt printre cele mai eficiente, folosind atât turbine cu gaz, cât și cu abur. Deși centralele termice oferă energie de încredere, care poate fi ajustată pentru a satisface cererea, ele sunt contribuitori majori la emisiile de gaze cu efect de seră și la poluarea aerului. Centralele pe cărbune sunt deosebit de problematice, emițând nu doar CO2, ci și particule, dioxid de sulf și mercur. Multe țări elimină treptat energia pe cărbune în favoarea alternativelor mai curate.",
    wind: "Energie Eoliană",
    wind_desc: "Convertește energia cinetică din vânt în electricitate folosind turbine cu pale mari. Curată și regenerabilă dar dependentă de condițiile vântului.",
    wind_detailed: "Energia eoliană a experimentat o creștere remarcabilă în ultimele două decenii, devenind una dintre cele mai rapid crescânde surse de energie regenerabilă. Turbinele eoliene funcționează prin utilizarea de pale mari (de obicei 50-80 metri lungime pentru turbinele la scară industrială) pentru a capta energia cinetică a aerului în mișcare. Pe măsură ce vântul curge peste pale, creează portanță - similar cu o aripă de avion - determinându-le să se rotească. Această rotație antrenează un generator în interiorul nacelei turbinei (carcasa de sus), producând electricitate. Turbinele moderne pot genera 2-8 megawați fiecare, turbinele offshore fiind deosebit de mari și puternice datorită vânturilor oceanice mai puternice și mai constante. Parcurile eoliene pot fi construite pe uscat (onshore) sau în mare (offshore), instalațiile offshore fiind mai scumpe dar producând mai multă energie. Energia eoliană are costuri operaționale minime și nu produce emisii în timpul funcționării. Cu toate acestea, se confruntă cu provocări precum intermitența (vântul nu bate întotdeauna când este nevoie), impactul vizual și sonor și efectele asupra populațiilor de păsări și lilieci. Tehnologiile de stocare a energiei și de gestionare a rețelei ajută la rezolvarea problemei intermitențelor.",
    solar: "Energie Solară",
    solar_desc: "Captează lumina soarelui folosind celule fotovoltaice sau oglinzi pentru a genera electricitate. Abundentă și curată dar variază cu vremea și ora din zi.",
    solar_detailed: "Energia solară captează energia de la soare, cea mai abundentă sursă de energie disponibilă pe Pământ. Există două tehnologii principale: panouri fotovoltaice (PV) și energie solară concentrată (CSP). Panourile PV, cel mai comun tip, folosesc materiale semiconductoare (de obicei siliciu) pentru a converti direct lumina soarelui în electricitate prin efectul fotovoltaic. Când fotonii din lumina soarelui lovesc panoul, eliberează electroni, creând un curent electric. Panourile solare moderne au o eficiență de aproximativ 15-22% pentru sistemele rezidențiale și până la 40% pentru celulele multi-joncțiune specializate. Centralele CSP folosesc oglinzi sau lentile pentru a concentra lumina soarelui pe un receptor, încălzind un fluid pentru a crea abur care acționează turbinele tradiționale. Energia solară a cunoscut reduceri dramatice de costuri în ultimul deceniu, devenind competitivă cu combustibilii fosili în multe locații. Sistemele solare pe acoperiș permit generarea distribuită, reducând pierderile de transmisie. Cu toate acestea, energia solară funcționează doar în timpul zilei și este afectată de vreme, acoperirea norilor și variațiile sezoniere. Sistemele de stocare cu baterii sunt din ce în ce mai mult asociate cu instalațiile solare pentru a furniza energie după apus.",
    geothermal: "Energie Geotermală",
    geothermal_desc: "Folosește căldura din interiorul Pământului pentru a genera abur pentru turbine. Fiabilă și durabilă dar limitată geografic.",
    geothermal_detailed: "Energia geotermală valorifică căldura imensă stocată sub suprafața Pământului, în special în regiunile tectonic active unde roca fierbinte, magma sau apa încălzită geotermal există mai aproape de suprafață. Există trei tipuri principale de centrale geotermale: centrale cu abur uscat (care folosesc direct aburul din subteran), centrale cu abur flash (care reduc presiunea asupra apei cu temperatură ridicată pentru a crea abur) și centrale cu ciclu binar (care folosesc un fluid secundar cu un punct de fierbere mai scăzut). Sondele sunt forate la 1-3 kilometri adâncime pentru a ajunge la sursa de căldură. Aburul sau apa fierbinte urcă prin sonde, acționează turbinele pentru a genera electricitate și apoi este de obicei reinjectată în subteran pentru a menține presiunea rezervorului și durabilitatea. Energia geotermală este extrem de fiabilă, funcționând 24/7 cu factori de capacitate care depășesc adesea 90%, mult mai mari decât energia solară sau eoliană. Are o amprentă redusă pe teren și produce emisii minime. Cu toate acestea, este limitată geografic la zone cu geologie adecvată, în principal de-a lungul limitelor plăcilor tectonice în locuri precum Islanda, Noua Zeelandă, Filipine și vestul Statelor Unite. Costurile inițiale de forare și explorare sunt ridicate și există un anumit risc de seismicitate indusă.",
    tidal: "Energie Maremotrică",
    tidal_desc: "Valorifică mareele și valurile oceanului pentru a genera electricitate. Previzibilă și regenerabilă dar încă în stadii incipiente de dezvoltare.",
    tidal_detailed: "Energia maremotrică, numită și energie de maree, valorifică mișcarea previzibilă a mareelor oceanice cauzată de atracția gravitațională a lunii și soarelui. Spre deosebire de vânt și solar, mareele sunt extrem de previzibile, făcând energia maremotrică o sursă de energie regenerabilă fiabilă. Există mai multe abordări pentru captarea energiei mareice: baraje de maree (structuri similare barajelor pe estuare), generatoare de curent de maree (turbine submarine similare turbinelor eoliene) și lagune de maree (structuri artificiale care creează un diferențial între apa închisă și marea deschisă). Generatoarele de curent de maree sunt tehnologia cea mai promițătoare, folosind turbine submarine plasate în zone cu curenți puternici de maree. Pe măsură ce mareea intră și iese, aceasta rotește turbinele, generând electricitate. Tehnologia este încă relativ timpurie în dezvoltare comparativ cu energia eoliană și solară, cu doar câteva proiecte la scară comercială în lume, inclusiv proiectul MeyGen din Scoția și Centrala de Energie Maremotrică Rance din Franța. Avantajele includ previzibilitatea și densitatea mare de energie în locații adecvate. Provocările includ costuri ridicate de instalare, site-uri adecvate limitate (necesitând atât maree puternice, cât și proximitate față de cererea electrică), potențiale impacturi asupra mediului asupra ecosistemelor marine și natura corozivă a apei sărate care necesită materiale robuste și scumpe.",
    footer_text: "Proiect educațional despre centrale electrice și energie nucleară",
    contributors_title: "Contribuitori la Proiect",
    contributor_1_name: "Joian Gabriel",
    contributor_1_task_1: "Dezvoltarea paginii web",
    contributor_1_task_2: "Hosting-ul paginii web",
    contributor_1_task_3: "Implementarea Sistemului de Limbi & Asistent AI",
    contributor_1_task_4: "Design UI/UX & Stilizare",
    contributor_2_name: "Nume",
    contributor_2_task_1: "Redactare conținut",
    contributor_2_task_2: "Design UI/UX & Stilizare",
    contributor_2_task_3: "Cercetare despre centrale electrice și producerea energiei",
    contributor_2_task_4: "Structurarea conținutului",
    contributor_2_task_5: "Selectarea imaginilor și diagramelor",
    footer_text_c: "Dezvoltat de Gabi și multa cafea."
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
