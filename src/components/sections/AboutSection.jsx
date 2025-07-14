import { Button } from "@/components/ui/button";
import { Shield, Target, Users } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const handleJoinTeam = () => {
    window.open(
      "https://forms.gle/HorX8STkN9VEAYz97",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("aboutTitle")}{" "}
              <span className="gradient-text">{t("aboutTitleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t("aboutSubtitle")}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Target
                  className={`w-6 h-6 text-purple-400 ${
                    i18n.language === "ar" ? "ml-3" : "mr-3"
                  }`}
                />
                <span>{t("aboutVision")}</span>
              </div>
              <div className="flex items-center">
                <Shield
                  className={`w-6 h-6 text-purple-400 ${
                    i18n.language === "ar" ? "ml-3" : "mr-3"
                  }`}
                />
                <span>{t("aboutMission")}</span>
              </div>
              <div className="flex items-center">
                <Users
                  className={`w-6 h-6 text-purple-400 ${
                    i18n.language === "ar" ? "ml-3" : "mr-3"
                  }`}
                />
                <span>{t("aboutValues")}</span>
              </div>
            </div>

            <Button
              onClick={handleJoinTeam}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3"
            >
              {t("aboutJoinTeam")}
              <Users
                className={`w-5 h-5 ${
                  i18n.language === "ar" ? "mr-2" : "ml-2"
                }`}
              />
            </Button>
          </div>

          <div className="relative scroll-reveal">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="rounded-2xl shadow-2xl floating-animation"
                alt="فريق ميسك يعمل على مشروع تقني"
                src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d"
              />
              <img
                className="rounded-2xl shadow-2xl floating-animation"
                style={{ animationDelay: "2s" }}
                alt="تقنيات الذكاء الاصطناعي"
                src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9"
              />
              <img
                className="rounded-2xl shadow-2xl floating-animation"
                style={{ animationDelay: "4s" }}
                alt="تطبيقات الرعاية الصحية"
                src="https://images.unsplash.com/photo-1666886573301-b5d526cfd518"
              />
              <img
                className="rounded-2xl shadow-2xl floating-animation"
                style={{ animationDelay: "1s" }}
                alt="التكنولوجيا الرياضية"
                src="https://images.unsplash.com/photo-1609096458733-95b38583ac4e"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
