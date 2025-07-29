import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { href: "#home", label: t("navHome") },
    { href: "#services", label: t("navServices") },
    { href: "#projects", label: t("navProjects") },
    { href: "#partners", label: t("navPartners") },
    { href: "#team", label: t("navTeam") },
    { href: "#branches", label: t("navBranches") },
    { href: "#about", label: t("navAbout") },
    { href: "#contact", label: t("navContactLink") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, x: i18n.language === "ar" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("appName")}
          </motion.div>

          <div
            className={`hidden md:flex items-center ${
              i18n.language === "ar" ? "space-x-reverse space-x-6" : "space-x-6"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-purple-300 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              className="ml-2 rtl:mr-2 rtl:ml-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  const handleFeatureClick = () => {
    toast({
      title: t("featureNotImplementedTitle"),
      description: t("featureNotImplementedDesc"),
    });
  };

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">
              {t("appName")}
            </div>
            <p className="text-gray-400 mb-4 text-sm">{t("footerSlogan")}</p>
            <div
              className={`flex space-x-4 ${
                i18n.language === "ar" ? "space-x-reverse" : ""
              }`}
            >
              <a
                href="https://www.linkedin.com/company/hagzz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/hagzz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-sky-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/hagzz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/hagzz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@hagzz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/97472053188"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-4 block">
              {t("footerServices")}
            </span>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a href="#services" className="hover:text-purple-300">
                  {t("servicesSportTechTitle")}
                </a>
              </p>
              <p>
                <a href="#services" className="hover:text-purple-300">
                  {t("servicesHealthCareTitle")}
                </a>
              </p>
              <p>
                <a href="#services" className="hover:text-purple-300">
                  {t("servicesAITitle")}
                </a>
              </p>
              <p>
                <a href="#projects" className="hover:text-purple-300">
                  {t("navProjects")}
                </a>
              </p>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-4 block">
              {t("footerCompany")}
            </span>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a href="#about" className="hover:text-purple-300">
                  {t("footerAbout")}
                </a>
              </p>
              <p>
                <a href="#branches" className="hover:text-purple-300">
                  {t("navBranches")}
                </a>
              </p>
              <p>
                <a
                  href="#"
                  onClick={handleFeatureClick}
                  className="hover:text-purple-300"
                >
                  {t("footerTeam")}
                </a>
              </p>
              <p>
                <a
                  href="#"
                  onClick={handleFeatureClick}
                  className="hover:text-purple-300"
                >
                  {t("footerCareers")}
                </a>
              </p>
              <p>
                <a
                  href="#"
                  onClick={handleFeatureClick}
                  className="hover:text-purple-300"
                >
                  {t("footerNews")}
                </a>
              </p>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-4 block">
              {t("footerContact")}
            </span>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a
                  href={`mailto:${t("footerContactEmail")}`}
                  className="hover:text-purple-300"
                >
                  {t("footerContactEmail")}
                </a>
              </p>
              <p>{t("footerContactPhone")}</p>
              <p>{t("footerContactAddress")}</p>
              <p>
                <a href="#contact" className="hover:text-purple-300">
                  {t("navContactLink")}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>{t("footerRights", { year: new Date().getFullYear() })}</p>
          <p className="mt-2 text-xs opacity-75">{t("poweredBy")}</p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Toaster />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
