import Layout from "@/components/Layout";
import AboutSection from "@/components/sections/AboutSection";
import BranchesSection from "@/components/sections/BranchesSection";

import CTASection from "@/components/sections/CTASection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Brain, Heart, MapPin, Zap } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import HeroSlider from "./components/HeroSlider";
import HeroStats from "./components/HeroStats";

const App = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "servicesSportTechTitle",
      description: "servicesSportTechDesc",
      features: [
        "servicesSportTechFeat1",
        "servicesSportTechFeat2",
        "servicesSportTechFeat3",
        "servicesSportTechFeat4",
      ],
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "servicesHealthCareTitle",
      description: "servicesHealthCareDesc",
      features: [
        "servicesHealthCareFeat1",
        "servicesHealthCareFeat2",
        "servicesHealthCareFeat3",
        "servicesHealthCareFeat4",
      ],
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "servicesAITitle",
      description: "servicesAIDesc",
      features: [
        "servicesAIFeat1",
        "servicesAIFeat2",
        "servicesAIFeat3",
        "servicesAIFeat4",
      ],
    },
  ];

  const projects = [
    {
      title: "projectTitleHagzzdream",
      description: "projectDescHagzzdream",
      category: "projectCategorySports",
      status: "projectStatusDev",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "projectTitleHagzzmrat",
      description: "projectDescHagzzmrat",
      category: "projectCategorySports",
      status: "projectStatusComplete",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwbnV0cml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "projectTitleHagzzBooking",
      description: "projectDescHagzzBooking",
      category: "projectCategorySports",
      status: "projectStatusDev",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "projectTitleMeskHealthcare",
      description: "projectDescMeskHealthcare",
      category: "projectCategoryHealth",
      status: "projectStatusComplete",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "projectTitleVirtualDoctor",
      description: "projectDescVirtualDoctor",
      category: "projectCategoryHealth",
      status: "projectStatusComplete",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "projectTitleSmartRecommendation",
      description: "projectDescSmartRecommendation",
      category: "projectCategoryAI",
      status: "projectStatusComplete",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const stats = [
    { number: "4+", label: "statsProjects" },
    { number: "1220+", label: "statsClients" },
    { number: "30+", label: "statsExperts" },
    { number: "2", label: "statsYears" },
  ];

  const partners = [
    { name: "Partner A", logo: "partner_a_logo_url_placeholder" },
    { name: "Partner B", logo: "partner_b_logo_url_placeholder" },
    { name: "Partner C", logo: "partner_c_logo_url_placeholder" },
    { name: "Partner D", logo: "partner_d_logo_url_placeholder" },
    { name: "Partner E", logo: "partner_e_logo_url_placeholder" },
    { name: "Partner F", logo: "partner_f_logo_url_placeholder" },
    { name: "Partner G", logo: "partner_g_logo_url_placeholder" },
    { name: "Partner H", logo: "partner_h_logo_url_placeholder" },
  ].filter(
    (p) => !/^Partner/.test(p.name) && !p.name.toLowerCase().includes("hgd h")
  );

  const branches = [
    {
      cityKey: "branchDoha",
      countryKey: "branchQatar",
      typeKey: "branchHQ",
      icon: <MapPin className="w-8 h-8 text-purple-400" />,
    },
    {
      cityKey: "branchCairo",
      countryKey: "branchEgypt",
      typeKey: "branchRegional",
      icon: <MapPin className="w-8 h-8 text-blue-400" />,
    },
    {
      cityKey: "branchAbuDhabi",
      countryKey: "branchUAE",
      typeKey: "branchRegional",
      icon: <MapPin className="w-8 h-8 text-green-400" />,
    },
    {
      cityKey: "branchJeddah",
      countryKey: "branchKSA",
      typeKey: "branchRegional",
      icon: <MapPin className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <Layout>
      <HeroSlider />
      <HeroStats />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
      <PartnersSection partners={partners} />
      <TeamSection />
      <TestimonialsSection />
      <BranchesSection branches={branches} />
      <AboutSection />
      <CTASection />
    </Layout>
  );
};

export default App;
