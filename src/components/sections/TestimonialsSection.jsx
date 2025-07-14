import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Award,
  Brain,
  ChevronLeft,
  ChevronRight,
  Globe,
  Heart,
  Quote,
  Star,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    // Sports Technology Testimonials
    {
      id: 1,
      name: "أحمد الرياضي",
      nameEn: "Ahmed Al-Riyadi",
      position: "testimonialSportsManager",
      positionEn: "Sports Club Manager",
      company: "testimonialSportsClub",
      companyEn: "Elite Sports Club",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "sports",
      categoryIcon: <Zap className="w-5 h-5" />,
      content: "testimonialSportsContent",
      contentEn:
        "Mesk Holding's sports technology solutions have revolutionized how we track and improve our athletes' performance. The AI-powered analytics have helped us identify areas for improvement that we never noticed before. Our team's performance has improved by 30% since implementing their solutions.",
      project: "Hagzzdream Platform",
    },
    {
      id: 2,
      name: "سارة المدربة",
      nameEn: "Sarah Al-Mudarriba",
      position: "testimonialSportsCoach",
      positionEn: "Professional Sports Coach",
      company: "testimonialSportsAcademy",
      companyEn: "Future Stars Academy",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "sports",
      categoryIcon: <Zap className="w-5 h-5" />,
      content: "testimonialSportsCoachContent",
      contentEn:
        "The Hagzzmrat platform has transformed our nutritional supplement business. The e-commerce solution is intuitive, secure, and has increased our sales by 150%. The customer experience is outstanding, and the backend management is seamless.",
      project: "Hagzzmrat Platform",
    },
    {
      id: 3,
      name: "محمد الحجز",
      nameEn: "Mohammed Al-Hajz",
      position: "testimonialBookingManager",
      positionEn: "Sports Center Manager",
      company: "testimonialSportsCenter",
      companyEn: "Fitness First Center",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "sports",
      categoryIcon: <Zap className="w-5 h-5" />,
      content: "testimonialBookingContent",
      contentEn:
        "The Hagzz Booking system has streamlined our entire booking process. It's user-friendly for both staff and customers, and the automated scheduling has reduced our administrative workload by 60%. Highly recommended!",
      project: "Hagzz Booking Platform",
    },

    // Healthcare Testimonials
    {
      id: 4,
      name: "د. فاطمة الطبية",
      nameEn: "Dr. Fatima Al-Tibbiya",
      position: "testimonialHospitalDirector",
      positionEn: "Hospital Director",
      company: "testimonialMedicalCenter",
      companyEn: "Advanced Medical Center",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "healthcare",
      categoryIcon: <Heart className="w-5 h-5" />,
      content: "testimonialHealthcareContent",
      contentEn:
        "Mesk Healthcare Solutions have transformed our hospital operations. The integrated management system has improved patient care efficiency by 40% and reduced administrative errors by 80%. The AI-powered diagnostic support has been invaluable for our medical staff.",
      project: "Mesk Healthcare Solutions",
    },
    {
      id: 5,
      name: "د. علي الطبيب",
      nameEn: "Dr. Ali Al-Tabib",
      position: "testimonialPhysician",
      positionEn: "Senior Physician",
      company: "testimonialClinic",
      companyEn: "Smart Health Clinic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "healthcare",
      categoryIcon: <Heart className="w-5 h-5" />,
      content: "testimonialPhysicianContent",
      contentEn:
        "The Virtual Medical Assistant has become an essential tool in my daily practice. It helps with diagnosis suggestions, treatment planning, and patient monitoring. The accuracy and reliability are impressive, making it a trusted partner in patient care.",
      project: "Virtual Medical Assistant",
    },

    // AI Technology Testimonials
    {
      id: 6,
      name: "أحمد التقني",
      nameEn: "Ahmed Al-Taqni",
      position: "testimonialTechDirector",
      positionEn: "Technology Director",
      company: "testimonialTechCompany",
      companyEn: "Innovation Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "ai",
      categoryIcon: <Brain className="w-5 h-5" />,
      content: "testimonialAIContent",
      contentEn:
        "Mesk Holding's AI solutions have revolutionized our business operations. The intelligent recommendation engine has increased our customer engagement by 200% and improved our conversion rates significantly. The machine learning models are incredibly accurate and adaptive.",
      project: "Intelligent Recommendation Engine",
    },
    {
      id: 7,
      name: "سارة المديرة",
      nameEn: "Sarah Al-Mudira",
      position: "testimonialBusinessManager",
      positionEn: "Business Development Manager",
      company: "testimonialEnterprise",
      companyEn: "Global Enterprise Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "ai",
      categoryIcon: <Brain className="w-5 h-5" />,
      content: "testimonialBusinessContent",
      contentEn:
        "The AI-powered analytics and insights provided by Mesk Holding have given us unprecedented visibility into our business operations. We've been able to make data-driven decisions that have increased our efficiency by 35% and reduced costs by 25%.",
      project: "AI Analytics Platform",
    },

    // Regional Expansion Testimonials
    {
      id: 8,
      name: "محمد الإقليمي",
      nameEn: "Mohammed Al-Iqlimi",
      position: "testimonialRegionalManager",
      positionEn: "Regional Operations Manager",
      company: "testimonialRegionalCompany",
      companyEn: "MENA Business Group",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "regional",
      categoryIcon: <Globe className="w-5 h-5" />,
      content: "testimonialRegionalContent",
      contentEn:
        "Working with Mesk Holding's regional teams has been exceptional. Their understanding of local markets, cultural nuances, and business practices has made our expansion into new territories smooth and successful. Their expertise is unmatched.",
      project: "Regional Expansion Services",
    },
    {
      id: 9,
      name: "ليلى القانونية",
      nameEn: "Layla Al-Qanuniya",
      position: "testimonialLegalCounsel",
      positionEn: "Legal Counsel",
      company: "testimonialLegalFirm",
      companyEn: "International Legal Partners",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "legal",
      categoryIcon: <Award className="w-5 h-5" />,
      content: "testimonialLegalContent",
      contentEn:
        "Mesk Holding's legal team has provided exceptional support in navigating complex technology regulations across multiple jurisdictions. Their expertise in intellectual property and data protection has been crucial for our compliance requirements.",
      project: "Legal Advisory Services",
    },
  ];

  const categories = [
    {
      id: "all",
      label: "testimonialCategoryAll",
      icon: <Star className="w-5 h-5" />,
    },
    {
      id: "sports",
      label: "testimonialCategorySports",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "healthcare",
      label: "testimonialCategoryHealthcare",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "ai",
      label: "testimonialCategoryAI",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      id: "regional",
      label: "testimonialCategoryRegional",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: "legal",
      label: "testimonialCategoryLegal",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.category === activeCategory
        );

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="testimonials"
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
            {t("testimonialsTitle")}{" "}
            <span className="gradient-text">
              {t("testimonialsTitleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("testimonialsSubtitle")}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentIndex(0);
              }}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center gap-2 px-6 py-3 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "border-purple-400 text-purple-300 hover:bg-purple-600/20"
              }`}
            >
              {category.icon}
              {t(category.label)}
            </Button>
          ))}
        </motion.div>

        {/* Testimonial Display */}
        {currentTestimonial && (
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                  {t(currentTestimonial.content)}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                  {currentTestimonial.categoryIcon}
                  {t(
                    `testimonialProject${currentTestimonial.project.replace(
                      /\s+/g,
                      ""
                    )}`
                  )}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center">
                <Avatar className="w-16 h-16 border-4 border-purple-500/30 mr-4">
                  <AvatarImage
                    src={currentTestimonial.image}
                    alt={
                      i18n.language === "ar"
                        ? currentTestimonial.name
                        : currentTestimonial.nameEn
                    }
                  />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xl font-bold">
                    {(i18n.language === "ar"
                      ? currentTestimonial.name
                      : currentTestimonial.nameEn
                    ).charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-white">
                    {i18n.language === "ar"
                      ? currentTestimonial.name
                      : currentTestimonial.nameEn}
                  </h4>
                  <p className="text-purple-400 font-medium">
                    {t(currentTestimonial.position)}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {t(currentTestimonial.company)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-6 mt-8"
        >
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="w-12 h-12 border-purple-400 text-purple-300 hover:bg-purple-600/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="flex gap-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-purple-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="w-12 h-12 border-purple-400 text-purple-300 hover:bg-purple-600/20"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              98%
            </div>
            <div className="text-gray-300">
              {t("testimonialStatsSatisfaction")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              500+
            </div>
            <div className="text-gray-300">{t("testimonialStatsClients")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              4.9
            </div>
            <div className="text-gray-300">{t("testimonialStatsRating")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              95%
            </div>
            <div className="text-gray-300">
              {t("testimonialStatsRetention")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
