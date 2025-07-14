import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    id: 1,
    name: "محمد سعودي",
    nameEn: "Mohamed Saudi",
    position: "المدير التنفيذي",
    positionEn: "Chief Executive Officer",
    image: "/plugins/team/ceo%20.jpg",
  },
  {
    id: 2,
    name: "مصطفي امين",
    nameEn: "Mostafa Amin",
    position: "المستشار القانوني",
    positionEn: "Legal Advisor",
    image: "/plugins/team/law.jpg",
  },
  {
    id: 3,
    name: "مروان فضيل",
    nameEn: "Marwan Fadeel",
    position: "فريق قطر",
    positionEn: "Qatar Team",
    image: "/plugins/team/opetion%20qatar.jpg",
  },
  {
    id: 4,
    name: "حسن اسامة",
    nameEn: "Hassan Osama",
    position: "فريق مصر",
    positionEn: "Egypt Team",
    image: "/plugins/team/opertionegypt.jpg",
  },
  {
    id: 5,
    name: "فريق الميديا",
    nameEn: "Media Team",
    position: "فريق الميديا",
    positionEn: "Media Team",
    image: "/plugins/team/media.jpg",
  },
];

const TeamSection = () => {
  const { t, i18n } = useTranslation();

  const handleContactClick = (member) => {
    toast({
      title: t("teamContactTitle"),
      description: t("teamContactDesc", { name: member.name }),
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("teamTitle")}{" "}
            <span className="gradient-text">{t("teamTitleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("teamSubtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {i18n.language === "ar" ? member.name : member.nameEn}
                  </h3>
                  <p className="text-purple-300 font-semibold text-xl">
                    {i18n.language === "ar"
                      ? member.position
                      : member.positionEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
