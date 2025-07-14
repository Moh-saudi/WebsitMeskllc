import React from "react";
import { useTranslation } from "react-i18next";

const HeroStats = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-black/80 py-8 md:py-12 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
        <div className="flex flex-col items-center min-w-[120px]">
          <span className="text-3xl md:text-4xl font-bold text-sky-300">+4</span>
          <span className="text-base md:text-lg text-gray-200 mt-1">{t("statsProjects")}</span>
        </div>
        <div className="flex flex-col items-center min-w-[120px]">
          <span className="text-3xl md:text-4xl font-bold text-sky-300">+1220</span>
          <span className="text-base md:text-lg text-gray-200 mt-1">{t("statsClients")}</span>
        </div>
        <div className="flex flex-col items-center min-w-[120px]">
          <span className="text-3xl md:text-4xl font-bold text-sky-300">+30</span>
          <span className="text-base md:text-lg text-gray-200 mt-1">{t("statsExperts")}</span>
        </div>
        <div className="flex flex-col items-center min-w-[120px]">
          <span className="text-3xl md:text-4xl font-bold text-sky-300">2</span>
          <span className="text-base md:text-lg text-gray-200 mt-1">{t("statsYears")}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroStats;