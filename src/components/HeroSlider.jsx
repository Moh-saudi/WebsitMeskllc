import React from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
  const { t, i18n } = useTranslation();
  const slides = [
    {
      image: "/images/hero/hero-1.png",
      alt: t("heroSlide1Title1"),
      title1Key: "heroSlide1Title1",
      title2Key: "heroSlide1Title2",
      title3Key: "heroSlide1Title3",
      subtitleKey: "heroSlide1Subtitle",
    },
    {
      image: "/images/hero/hero-2.png",
      alt: t("heroSlide2Title1"),
      title1Key: "heroSlide2Title1",
      title2Key: "heroSlide2Title2",
      title3Key: "heroSlide2Title3",
      subtitleKey: "heroSlide2Subtitle",
    },
    {
      image: "/images/hero/hero-3.png",
      alt: t("heroSlide3Title1"),
      title1Key: "heroSlide3Title1",
      title2Key: "heroSlide3Title2",
      title3Key: "heroSlide3Title3",
      subtitleKey: "heroSlide3Subtitle",
    },
    {
      image: "/images/hero/hero-4.png",
      alt: t("heroSlide4Title1"),
      title1Key: "heroSlide4Title1",
      title2Key: "heroSlide4Title2",
      title3Key: "heroSlide4Title3",
      subtitleKey: "heroSlide4Subtitle",
    },
    {
      image: "/images/hero/hero-5.png",
      alt: t("heroSlide5Title1"),
      title1Key: "heroSlide5Title1",
      title2Key: "heroSlide5Title2",
      title3Key: "heroSlide5Title3",
      subtitleKey: "heroSlide5Subtitle",
    },
    {
      image: "/images/hero/hero-6.png",
      alt: t("heroSlide6Title1"),
      title1Key: "heroSlide6Title1",
      title2Key: "heroSlide6Title2",
      title3Key: "heroSlide6Title3",
      subtitleKey: "heroSlide6Subtitle",
    },
    {
      image: "/images/hero/hero-7.png",
      alt: t("heroSlide7Title1"),
      title1Key: "heroSlide7Title1",
      title2Key: "heroSlide7Title2",
      title3Key: "heroSlide7Title3",
      subtitleKey: "heroSlide7Subtitle",
    },
    {
      image: "/images/hero/hero-8.png",
      alt: t("heroSlide8Title1"),
      title1Key: "heroSlide8Title1",
      title2Key: "heroSlide8Title2",
      title3Key: "heroSlide8Title3",
      subtitleKey: "heroSlide8Subtitle",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="w-full h-screen"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex relative justify-center items-center w-full h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-r to-transparent from-black/80 via-black/40"></div>
              <div className="flex relative z-20 justify-start items-center w-full h-full text-left">
                <div
                  className={`container flex flex-col justify-center px-6 mx-auto max-w-4xl h-full md:pl-12`}
                >
                  <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                    {t(slide.title1Key)}{" "}
                    <span className="gradient-text">{t(slide.title2Key)}</span>
                    <br />
                    {t(slide.title3Key)}
                  </h1>
                  <p className="mb-8 text-lg leading-relaxed text-gray-200 md:text-2xl">
                    {t(slide.subtitleKey)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
