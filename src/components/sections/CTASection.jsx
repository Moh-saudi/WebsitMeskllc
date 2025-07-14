import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Rocket, Users } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const handleFeatureClick = () => {
    toast({
      title: t("featureNotImplementedTitle"),
      description: t("featureNotImplementedDesc"),
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto scroll-reveal"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ctaTitle")}{" "}
            <span className="gradient-text">{t("ctaTitleHighlight")}</span>{" "}
            {t("ctaTitleCont")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">{t("ctaSubtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleFeatureClick}
              className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-3 pulse-glow"
            >
              {t("ctaStartProject")}
              <Rocket
                className={`w-5 h-5 ${
                  i18n.language === "ar" ? "mr-2" : "ml-2"
                }`}
              />
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-3"
            >
              <a
                href="https://wa.me/97472053188"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('ctaTalkToExperts')}
                <Users className={`w-5 h-5 ${i18n.language === 'ar' ? 'mr-2' : 'ml-2'}`} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
