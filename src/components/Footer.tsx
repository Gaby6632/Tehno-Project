import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2 text-sm md:text-base">© 2025 Nuclear Power Plants Information</p>
          <p className="text-xs md:text-sm">{t("footer_text")}</p>
          <hr className="my-4 border-muted" />
          <p className="text-xs md:text-sm">{t("footer_text_c")}</p>
        </div>
      </div>
    </footer>
  );
};
