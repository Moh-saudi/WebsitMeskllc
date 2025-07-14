import React from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnersSection = ({ partners }) => {
  const { t } = useTranslation();

  const supporters = [
    {
      name: "Peachscore + Dealum",
      logo: "/plugins/supports/peachscore-dealum.png",
    },
    { name: "Microsoft", logo: "/plugins/supports/microsoft.png" },
    { name: "Nvidia", logo: "/plugins/supports/Nvidia.png" },
    { name: "MCIT Qatar", logo: "/plugins/supports/mcit%20qatar.jpg" },
    { name: "FIFA", logo: "/plugins/supports/fifa.png" },
    { name: "QFA", logo: "/plugins/supports/qfa.png" },
    { name: "QFC", logo: "/plugins/supports/qfc.png" },
  ];

  return (
    <section id="partners" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("partnersTitle")}{" "}
            <span className="gradient-text">{t("partnersTitleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("partnersSubtitle")}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            480: { slidesPerView: 4, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 24 },
            768: { slidesPerView: 5, spaceBetween: 28 },
            1024: { slidesPerView: 6, spaceBetween: 32 },
            1280: { slidesPerView: 7, spaceBetween: 36 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {[...partners, ...supporters]
            .filter((p) => p.logo && p.logo.trim() !== "")
            .map((partner, index) => (
              <SwiperSlide key={partner.name + index}>
                <div className="flex flex-col items-center justify-center bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 shadow-lg h-32">
                  <img
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    src={partner.logo}
                  />
                  <span className="mt-2 text-xs text-gray-300 text-center">
                    {partner.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSection;
