import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          appName: "Mesk Holding",
          navHome: "Home",
          navServices: "Services",
          navProjects: "Projects",
          navPartners: "Partners",
          navTeam: "Our Team",
          navBranches: "Our Branches",
          navAbout: "About Us",
          navContactLink: "Contact Us",
          direction: "ltr",
          heroTitle1: "Pioneering the Future",
          heroTitle2: "of Technology",
          heroTitle3: "Starts Here",
          heroSubtitle:
            "Mesk Holding spearheads innovation in sports technology, healthcare, and artificial intelligence, architecting a superior future for all.",
          heroDiscoverProjects: "Explore Our Ventures",
          heroWatchDemo: "View Demonstration",

          heroSliderSportTechTitle1: "Revolutionizing",
          heroSliderSportTechTitle2: "Sports Technology",
          heroSliderSportTechTitle3: "and Performance",
          heroSliderSportTechSubtitle:
            "Unlock peak athletic potential with our avant-garde sports technology solutions.",
          heroSliderHealthCareTitle1: "Innovating",
          heroSliderHealthCareTitle2: "Healthcare",
          heroSliderHealthCareTitle3: "Solutions",
          heroSliderHealthCareSubtitle:
            "Transforming patient care and medical services through intelligent, integrated healthcare platforms.",
          heroSliderAITitle1: "Powering the",
          heroSliderAITitle2: "AI Evolution",
          heroSliderAITitle3: "for Enterprise",
          heroSliderAISubtitle:
            "Leverage advanced Artificial Intelligence to optimize operations and catalyze growth within your organization.",

          statsProjects: "Innovative Projects",
          statsClients: "Satisfied Clients",
          statsExperts: "Technology Specialists",
          statsYears: "Years of Industry Leadership",
          servicesTitle: "Our Advanced",
          servicesTitleHighlight: "Service Offerings",
          servicesSubtitle:
            "We provide sophisticated technological solutions across three pivotal domains that are shaping the future of technology.",
          servicesSportTechTitle: "Sports Technology",
          servicesSportTechDesc:
            "Cutting-edge solutions for comprehensive sports performance analytics and fitness enhancement, utilizing the latest technological advancements.",
          servicesSportTechFeat1: "Intelligent Performance Analysis",
          servicesSportTechFeat2: "Advanced Fitness Monitoring",
          servicesSportTechFeat3: "Augmented Reality for Training",
          servicesSportTechFeat4: "Integrated Sports Ecosystems",
          servicesHealthCareTitle: "Healthcare Solutions",
          servicesHealthCareDesc:
            "Intelligent platforms designed for digital healthcare, significantly improving the quality and accessibility of medical services.",
          servicesHealthCareFeat1: "AI-Powered Diagnostic Support",
          servicesHealthCareFeat2: "Remote Patient Monitoring",
          servicesHealthCareFeat3: "Innovative Personalized Medicine",
          servicesHealthCareFeat4: "Smart Hospital Management Systems",
          servicesAITitle: "Artificial Intelligence",
          servicesAIDesc:
            "Developing sophisticated AI solutions to enhance business operations and enrich daily life.",
          servicesAIFeat1: "Advanced Machine Learning Models",
          servicesAIFeat2: "Natural Language Processing",
          servicesAIFeat3: "Precision Computer Vision",
          servicesAIFeat4: "Big Data Analytics & Insights",
          servicesLearnMore: "Discover More",
          projectsTitle: "Our Exceptional",
          projectsTitleHighlight: "Portfolio",
          projectsSubtitle:
            "We engineer innovative technology solutions that redefine industry benchmarks and fulfill the ambitious requirements of our clientele.",
          projectStatusDev: "In Development",
          projectStatusComplete: "Completed",
          projectVisit: "Visit Project",
          projectLinkUnavailableTitle: "🚧 Project Link Unavailable",
          projectLinkUnavailableDesc:
            "The project link will be accessible shortly. We appreciate your understanding. 🚀",
          aboutTitle: "About",
          aboutTitleHighlight: "Mesk Holding",
          aboutSubtitle:
            "We are a collective of creative minds and expert developers specializing in advanced technology. We firmly believe in the transformative power of innovation to enhance lives and foster societal development.",
          aboutVision:
            "Our Vision: To lead digital transformation within the region.",
          aboutMission:
            "Our Mission: To develop innovative and dependable technology solutions.",
          aboutValues: "Our Core Values: Innovation, Quality, and Excellence.",
          aboutJoinTeam: "Join Our Esteemed Team",
          ctaTitle: "Ready to Architect The",
          ctaTitleHighlight: "Future",
          ctaTitleCont: "With Us?",
          ctaSubtitle:
            "Embark on a journey of innovation and technological advancement with Mesk Holding.",
          ctaStartProject: "Initiate Your Project",
          ctaTalkToExperts: "Consult Our Experts",
          footerSlogan:
            "Spearheading the future of technology in the region through relentless innovation and strategic development.",
          footerServices: "Our Services",
          footerCompany: "Our Company",
          footerContact: "Contact Information",
          footerAbout: "About Mesk Holding",
          footerTeam: "Our Team",
          footerCareers: "Career Opportunities",
          footerNews: "Latest News",
          footerContactEmail: "info@mesk.qa",
          footerContactPhone: "+974 72053188",
          footerContactAddress:
            "Doha, Qatar, Qatar Financial Centre, 9th Floor",
          footerRights: "© {{year}} Mesk Holding. All rights reserved.",
          poweredBy: "Powered by PayTechEG For Mesk Holding",
          featureNotImplementedTitle: "🚧 Feature Not Yet Implemented",
          featureNotImplementedDesc:
            "This functionality is currently under development. Please feel free to request it in your subsequent prompt! 🚀",
          partnersTitle: "Our Esteemed Partners &",
          partnersTitleHighlight: "Supporters",
          partnersSubtitle:
            "We are honored to collaborate with leading organizations and supportive entities that share our vision.",

          projectCategorySports: "Sports Tech",
          projectCategoryHealth: "Healthcare",
          projectCategoryAI: "Artificial Intelligence",
          projectTitleHagzzdream: "Hagzzdream Platform",
          projectDescHagzzdream:
            "Connecting emerging football talent with sports clubs, facilitating player marketing and talent discovery.",
          projectTitleHagzzmrat: "Hagzzmrat Platform",
          projectDescHagzzmrat:
            "A comprehensive e-commerce solution for high-quality nutritional supplements, vitamins, and sportswear.",
          projectTitleHagzzBooking: "Hagzz Booking Platform",
          projectDescHagzzBooking:
            "An intuitive system for booking sports training sessions at various academies and sports centers.",
          projectTitleMeskHealthcare: "Mesk Healthcare Solutions",
          projectDescMeskHealthcare:
            "Integrated solutions for the efficient development and management of hospitals and healthcare facilities.",
          projectTitleVirtualDoctor: "Virtual Medical Assistant",
          projectDescVirtualDoctor:
            "An advanced AI system to assist physicians in diagnostic processes and treatment planning.",
          projectTitleSmartRecommendation: "Intelligent Recommendation Engine",
          projectDescSmartRecommendation:
            "An AI-powered system providing personalized recommendations across diverse domains.",
          branchesTitle: "Our Global",
          branchesTitleHighlight: "Presence",
          branchesSubtitle:
            "Mesk Holding operates strategically across key regional hubs to deliver innovative solutions worldwide.",
          branchDoha: "Doha",
          branchQatar: "Qatar",
          branchCairo: "Cairo",
          branchEgypt: "Egypt",
          branchAbuDhabi: "Abu Dhabi",
          branchUAE: "UAE",
          branchJeddah: "Jeddah",
          branchKSA: "Saudi Arabia",
          branchHQ: "Headquarters",
          branchRegional: "Regional Office",

          // Team Section
          teamTitle: "Our Expert",
          teamTitleHighlight: "Team",
          teamSubtitle:
            "Meet the brilliant minds behind our innovative solutions. Our diverse team of experts brings together years of experience in technology, design, and business development.",
          teamCEO: "Chief Executive Officer",
          teamCTO: "Chief Technology Officer",
          teamLeadDev: "Lead Developer",
          teamUXLead: "UX/UI Lead",
          teamDataScientist: "Data Scientist",
          teamDevOps: "DevOps Engineer",
          teamCEOBio:
            "Visionary leader with 15+ years in technology innovation and strategic development.",
          teamCTOBio:
            "Expert in AI, machine learning, and cutting-edge technology solutions.",
          teamLeadDevBio:
            "Full-stack developer specializing in modern web technologies and scalable solutions.",
          teamUXLeadBio:
            "Creative designer focused on user experience and modern interface design.",
          teamDataScientistBio:
            "Data science expert with deep knowledge in analytics and predictive modeling.",
          teamDevOpsBio:
            "Infrastructure specialist ensuring scalable and reliable deployment solutions.",
          teamLeadership: "Leadership",
          teamStrategy: "Strategy",
          teamInnovation: "Innovation",
          teamAI: "Artificial Intelligence",
          teamML: "Machine Learning",
          teamArchitecture: "Architecture",
          teamFullStack: "Full Stack",
          teamReact: "React",
          teamNodeJS: "Node.js",
          teamUX: "UX Design",
          teamUI: "UI Design",
          teamDesign: "Design",
          teamDataScience: "Data Science",
          teamAnalytics: "Analytics",
          teamDevOps: "DevOps",
          teamCloud: "Cloud",
          teamSecurity: "Security",
          teamStatsProjects: "Projects",
          teamStatsYears: "Years",
          teamStatsTeam: "Team",
          teamContactTitle: "Contact Team Member",
          teamContactDesc:
            "Contact information for {{name}} will be available soon.",
          teamJoinButton: "Join Our Team",
          teamJoinTitle: "Join Our Team",
          teamJoinDesc:
            "We're always looking for talented individuals to join our team. Send us your resume!",

          // Team Stats
          teamStatsProjects: "Projects",
          teamStatsYears: "Years",
          teamStatsTeam: "Team",
          teamContactTitle: "Contact Team Member",
          teamContactDesc:
            "Contact information for {{name}} will be available soon.",
          teamJoinButton: "Join Our Team",
          teamJoinTitle: "Join Our Team",

          // Team Categories
          teamCategoryExecutive: "Executive Team",
          teamCategoryEgypt: "Egypt Team",
          teamCategoryQatar: "Qatar Team",
          teamCategoryLegal: "Legal Team",
          teamCategoryTech: "Tech Team",
          teamCategoryMarketing: "Marketing Team",

          // Executive Team
          teamCEO: "Chief Executive Officer",
          teamCTO: "Chief Technology Officer",
          teamCEOBio:
            "Visionary leader with 20+ years in technology innovation and strategic development across the MENA region.",
          teamCTOBio:
            "Expert in AI, machine learning, and cutting-edge technology solutions with focus on regional markets.",

          // Egypt Team
          teamEgyptManager: "Egypt Regional Manager",
          teamEgyptTechLead: "Egypt Tech Lead",
          teamEgyptSales: "Egypt Sales Director",
          teamEgyptManagerBio:
            "Leading the Egyptian market expansion with expertise in local business development and technology adoption.",
          teamEgyptTechBio:
            "Specializing in local technology solutions and digital transformation for Egyptian businesses.",
          teamEgyptSalesBio:
            "Driving sales growth and client relationships in the Egyptian market with deep local knowledge.",

          // Qatar Team
          teamQatarManager: "Qatar Regional Manager",
          teamQatarTechLead: "Qatar Tech Lead",
          teamQatarHealthcare: "Qatar Healthcare Lead",
          teamQatarManagerBio:
            "Leading Qatar operations with focus on sports technology and healthcare solutions for the Qatari market.",
          teamQatarTechBio:
            "Specializing in sports technology and AI solutions for the Qatari market and regional sports industry.",
          teamQatarHealthcareBio:
            "Leading healthcare technology solutions and digital health initiatives in Qatar and the region.",

          // Legal Team
          teamLegalDirector: "Legal Director",
          teamLegalCounsel: "Senior Legal Counsel",
          teamLegalDirectorBio:
            "Leading legal affairs and compliance across all regional operations with expertise in technology law.",
          teamLegalCounselBio:
            "Specializing in intellectual property, data protection, and technology compliance across MENA region.",

          // Tech Team
          teamLeadDev: "Lead Developer",
          teamUXLead: "UX/UI Lead",
          teamDataScientist: "Data Scientist",
          teamDevOps: "DevOps Engineer",
          teamLeadDevBio:
            "Full-stack developer specializing in modern web technologies and scalable solutions for enterprise clients.",
          teamUXLeadBio:
            "Creative designer focused on user experience and modern interface design for Arabic and English markets.",
          teamDataScientistBio:
            "Data science expert with deep knowledge in analytics and predictive modeling for business intelligence.",
          teamDevOpsBio:
            "Infrastructure specialist ensuring scalable and reliable deployment solutions across all platforms.",

          // Marketing Team
          teamMarketingDirector: "Marketing Director",
          teamContentLead: "Content Lead",
          teamMarketingDirectorBio:
            "Leading digital marketing strategies and brand development across the MENA region with focus on technology sector.",
          teamContentLeadBio:
            "Creating compelling content and digital experiences that resonate with Arabic and international audiences.",

          // Expertise Areas
          teamLeadership: "Leadership",
          teamStrategy: "Strategy",
          teamInnovation: "Innovation",
          teamRegionalExpansion: "Regional Expansion",
          teamAI: "Artificial Intelligence",
          teamML: "Machine Learning",
          teamArchitecture: "Architecture",
          teamBusinessDev: "Business Development",
          teamLocalMarket: "Local Market",
          teamLocalSolutions: "Local Solutions",
          teamSales: "Sales",
          teamClientRelations: "Client Relations",
          teamMarketAnalysis: "Market Analysis",
          teamGrowth: "Growth",
          teamSportsTech: "Sports Technology",
          teamHealthcare: "Healthcare",
          teamQatarMarket: "Qatar Market",
          teamDevOps: "DevOps",
          teamCloud: "Cloud",
          teamLegal: "Legal",
          teamCompliance: "Compliance",
          teamTechLaw: "Technology Law",
          teamContracts: "Contracts",
          teamIP: "Intellectual Property",
          teamDataProtection: "Data Protection",
          teamFullStack: "Full Stack",
          teamReact: "React",
          teamNodeJS: "Node.js",
          teamUX: "UX Design",
          teamUI: "UI Design",
          teamDesign: "Design",
          teamUserResearch: "User Research",
          teamDataScience: "Data Science",
          teamAnalytics: "Analytics",
          teamBI: "Business Intelligence",
          teamInfrastructure: "Infrastructure",
          teamMarketing: "Marketing",
          teamBranding: "Branding",
          teamDigital: "Digital",
          teamContent: "Content",
          teamCopywriting: "Copywriting",
          teamSEO: "SEO",
          teamSocialMedia: "Social Media",

          // Testimonials Section
          testimonialsTitle: "What Our",
          testimonialsTitleHighlight: "Clients Say",
          testimonialsSubtitle:
            "Discover how our innovative solutions have transformed businesses across different industries and regions.",

          // Testimonial Categories
          testimonialCategoryAll: "All Testimonials",
          testimonialCategorySports: "Sports Technology",
          testimonialCategoryHealthcare: "Healthcare",
          testimonialCategoryAI: "Artificial Intelligence",
          testimonialCategoryRegional: "Regional Services",
          testimonialCategoryLegal: "Legal Services",

          // Testimonial Positions
          testimonialSportsManager: "Sports Club Manager",
          testimonialSportsCoach: "Professional Sports Coach",
          testimonialBookingManager: "Sports Center Manager",
          testimonialHospitalDirector: "Hospital Director",
          testimonialPhysician: "Senior Physician",
          testimonialTechDirector: "Technology Director",
          testimonialBusinessManager: "Business Development Manager",
          testimonialRegionalManager: "Regional Operations Manager",
          testimonialLegalCounsel: "Legal Counsel",

          // Testimonial Companies
          testimonialSportsClub: "Elite Sports Club",
          testimonialSportsAcademy: "Future Stars Academy",
          testimonialSportsCenter: "Fitness First Center",
          testimonialMedicalCenter: "Advanced Medical Center",
          testimonialClinic: "Smart Health Clinic",
          testimonialTechCompany: "Innovation Tech Solutions",
          testimonialEnterprise: "Global Enterprise Solutions",
          testimonialRegionalCompany: "MENA Business Group",
          testimonialLegalFirm: "International Legal Partners",

          // Testimonial Content
          testimonialSportsContent:
            "Mesk Holding's sports technology solutions have revolutionized how we track and improve our athletes' performance. The AI-powered analytics have helped us identify areas for improvement that we never noticed before. Our team's performance has improved by 30% since implementing their solutions.",
          testimonialSportsCoachContent:
            "The Hagzzmrat platform has transformed our nutritional supplement business. The e-commerce solution is intuitive, secure, and has increased our sales by 150%. The customer experience is outstanding, and the backend management is seamless.",
          testimonialBookingContent:
            "The Hagzz Booking system has streamlined our entire booking process. It's user-friendly for both staff and customers, and the automated scheduling has reduced our administrative workload by 60%. Highly recommended!",
          testimonialHealthcareContent:
            "Mesk Healthcare Solutions have transformed our hospital operations. The integrated management system has improved patient care efficiency by 40% and reduced administrative errors by 80%. The AI-powered diagnostic support has been invaluable for our medical staff.",
          testimonialPhysicianContent:
            "The Virtual Medical Assistant has become an essential tool in my daily practice. It helps with diagnosis suggestions, treatment planning, and patient monitoring. The accuracy and reliability are impressive, making it a trusted partner in patient care.",
          testimonialAIContent:
            "Mesk Holding's AI solutions have revolutionized our business operations. The intelligent recommendation engine has increased our customer engagement by 200% and improved our conversion rates significantly. The machine learning models are incredibly accurate and adaptive.",
          testimonialBusinessContent:
            "The AI-powered analytics and insights provided by Mesk Holding have given us unprecedented visibility into our business operations. We've been able to make data-driven decisions that have increased our efficiency by 35% and reduced costs by 25%.",
          testimonialRegionalContent:
            "Working with Mesk Holding's regional teams has been exceptional. Their understanding of local markets, cultural nuances, and business practices has made our expansion into new territories smooth and successful. Their expertise is unmatched.",
          testimonialLegalContent:
            "Mesk Holding's legal team has provided exceptional support in navigating complex technology regulations across multiple jurisdictions. Their expertise in intellectual property and data protection has been crucial for our compliance requirements.",

          // Testimonial Projects
          testimonialProjectHagzzdreamPlatform: "Hagzzdream Platform",
          testimonialProjectHagzzmratPlatform: "Hagzzmrat Platform",
          testimonialProjectHagzzBookingPlatform: "Hagzz Booking Platform",
          testimonialProjectMeskHealthcareSolutions:
            "Mesk Healthcare Solutions",
          testimonialProjectVirtualMedicalAssistant:
            "Virtual Medical Assistant",
          testimonialProjectIntelligentRecommendationEngine:
            "Intelligent Recommendation Engine",
          testimonialProjectAIAnalyticsPlatform: "AI Analytics Platform",
          testimonialProjectRegionalExpansionServices:
            "Regional Expansion Services",
          testimonialProjectLegalAdvisoryServices: "Legal Advisory Services",

          // Testimonial Stats
          testimonialStatsSatisfaction: "Client Satisfaction",
          testimonialStatsClients: "Happy Clients",
          testimonialStatsRating: "Average Rating",
          testimonialStatsRetention: "Client Retention",
        },
      },
      ar: {
        translation: {
          appName: "ميسك القابضة",
          navHome: "الرئيسية",
          navServices: "الخدمات",
          navProjects: "المشاريع",
          navPartners: "الشركاء",
          navTeam: "فريق العمل",
          navBranches: "فروعنا",
          navAbout: "من نحن",
          navContactLink: "تواصل معنا",
          direction: "rtl",
          heroTitle1: "انضم إلى التدريبات الرياضية",
          heroTitle2: "المصممة خصيصًا لك",
          heroTitle3: "ابدأ رحلتك الآن!",
          heroSubtitle:
            "انطلق في عالم من الإثارة الرياضية المصممة خصيصًا لك. نحن نهتم بالجميع، سواء كنت تبدأ خطواتك الأولى أو تطمح للاحتراف.",

          heroSliderPartnerTitle1: "ميسك القابضة",
          heroSliderPartnerTitle2: "شركاء النجاح",
          heroSliderPartnerTitle3: "شراكات نفخر بها",
          heroSliderPartnerSubtitle:
            "نفخر بالتعاون مع كبرى الجهات والشركاء الذين يشاركوننا رؤيتنا للتميز في الرياضة والتكنولوجيا.",

          heroSliderDreamTitle1: "احلم كبيرًا،",
          heroSliderDreamTitle2: "واحقق المزيد",
          heroSliderDreamTitle3: "وألهم المستقبل",
          heroSliderDreamSubtitle:
            "كل بطل كان يومًا ما حالمًا. دع شغفك بالرياضة يقودك نحو النجوم.",

          heroSliderThanksTitle1: "شكرًا لكم",
          heroSliderThanksTitle2: "على دعمكم!",
          heroSliderThanksTitle3: "معًا نصنع النجاح",
          heroSliderThanksSubtitle:
            "ثقتكم ودعمكم هما سر رحلتنا. نشكر مجتمعنا وشركاءنا وكل رياضي يلهمنا يومًا بعد يوم.",

          heroSlide1Title1: "We are the Future",
          heroSlide1Title2: "of Sports Governance",
          heroSlide1Title3: "in the Middle East",
          heroSlide1Subtitle:
            "Leading the transformation of sports governance across the region.",

          heroSlide2Title1: "Proud of",
          heroSlide2Title2: "Our Partners",
          heroSlide2Title3: "and Supporters",
          heroSlide2Subtitle:
            "We value every partnership and thank all our supporters.",

          heroSlide3Title1: "Our Core Value:",
          heroSlide3Title2: "Innovative Solutions",
          heroSlide3Title3: "for Talent Development",
          heroSlide3Subtitle: "We strive to empower and develop sports talent.",

          heroSlide4Title1: "Our Projects",
          heroSlide4Title2: "Shape the Future",
          heroSlide4Title3: "of Sports",
          heroSlide4Subtitle: "Pioneering platforms and smart solutions.",

          heroSlide5Title1: "Our Team",
          heroSlide5Title2: "is Our Strength",
          heroSlide5Title3: "and Inspiration",
          heroSlide5Subtitle: "A diverse team of experts and innovators.",

          heroSlide6Title1: "AI for",
          heroSlide6Title2: "Sports Excellence",
          heroSlide6Title3: "and Growth",
          heroSlide6Subtitle: "Smart technologies for a smarter future.",

          heroSlide7Title1: "Community",
          heroSlide7Title2: "Support",
          heroSlide7Title3: "Drives Us",
          heroSlide7Subtitle: "Together, we achieve more.",

          heroSlide8Title1: "Our Vision",
          heroSlide8Title2: "is the Future",
          heroSlide8Title3: "of Sports",
          heroSlide8Subtitle: "Join us on the journey of innovation.",

          heroSliderSportTechTitle1: "ثورة في",
          heroSliderSportTechTitle2: "التكنولوجيا الرياضية",
          heroSliderSportTechTitle3: "والأداء",
          heroSliderSportTechSubtitle:
            "أطلق العنان لأقصى الإمكانات الرياضية مع حلولنا التكنولوجية الرياضية المتطورة.",
          heroSliderHealthCareTitle1: "ابتكار",
          heroSliderHealthCareTitle2: "الرعاية الصحية",
          heroSliderHealthCareTitle3: " وحلولها",
          heroSliderHealthCareSubtitle:
            "تحويل رعاية المرضى والخدمات الطبية من خلال منصات الرعاية الصحية الذكية.",
          heroSliderAITitle1: "تعزيز تطور",
          heroSliderAITitle2: "الذكاء الاصطناعي",
          heroSliderAITitle3: "للأعمال",
          heroSliderAISubtitle:
            "استفد من الذكاء الاصطناعي المتقدم لتحسين العمليات ودفع النمو في مؤسستك.",

          statsProjects: "مشروع مبتكر",
          statsClients: "عميل سعيد",
          statsExperts: "خبير تقني متميز",
          statsYears: "سنوات من الريادة",
          servicesTitle: "خدماتنا",
          servicesTitleHighlight: "المتطورة",
          servicesSubtitle:
            "نقدم حلولاً تقنية متقدمة في ثلاثة مجالات رئيسية تشكل مستقبل التكنولوجيا.",
          servicesSportTechTitle: "التكنولوجيا الرياضية",
          servicesSportTechDesc:
            "حلول متطورة لتحليل الأداء الرياضي وتطوير اللياقة البدنية باستخدام أحدث التقنيات.",
          servicesSportTechFeat1: "تحليل الأداء الذكي",
          servicesSportTechFeat2: "تتبع اللياقة المتقدم",
          servicesSportTechFeat3: "الواقع المعزز للتدريب",
          servicesSportTechFeat4: "منصات رياضية متكاملة",
          servicesHealthCareTitle: "الرعاية الصحية",
          servicesHealthCareDesc:
            "منصات ذكية للرعاية الصحية الرقمية وتحسين جودة الخدمات الطبية.",
          servicesHealthCareFeat1: "التشخيص الذكي AI",
          servicesHealthCareFeat2: "المراقبة الصحية عن بُعد",
          servicesHealthCareFeat3: "الطب الشخصي المبتكر",
          servicesHealthCareFeat4: "إدارة المستشفيات الذكية",
          servicesAITitle: "الذكاء الاصطناعي",
          servicesAIDesc:
            "تطوير حلول الذكاء الاصطناعي المتقدمة لتحسين الأعمال والحياة اليومية.",
          servicesAIFeat1: "التعلم الآلي المتقدم",
          servicesAIFeat2: "معالجة اللغة الطبيعية",
          servicesAIFeat3: "الرؤية الحاسوبية الدقيقة",
          servicesAIFeat4: "تحليل البيانات الضخمة",
          servicesLearnMore: "اعرف المزيد",
          projectsTitle: "مشاريعنا",
          projectsTitleHighlight: "الاستثنائية",
          projectsSubtitle:
            "نصنع حلولاً تقنية مبتكرة تعيد تعريف معايير الصناعة وتلبي طموحات عملائنا.",
          projectStatusDev: "قيد التطوير",
          projectStatusComplete: "مكتمل",
          projectVisit: "زيارة المشروع",
          projectLinkUnavailableTitle: "🚧 رابط المشروع غير متوفر حاليًا",
          projectLinkUnavailableDesc:
            "سيتم إضافة الرابط قريبًا. شكرًا لتفهمك! 🚀",
          aboutTitle: "من نحن في",
          aboutTitleHighlight: "ميسك القابضة",
          aboutSubtitle:
            "نحن فريق من المبدعين والمطورين المتخصصين في التكنولوجيا المتطورة. نؤمن بقوة الابتكار في تحسين حياة الناس وتطوير المجتمعات.",
          aboutVision: "رؤيتنا: قيادة التحول الرقمي في المنطقة",
          aboutMission: "مهمتنا: تطوير حلول تقنية مبتكرة وموثوقة",
          aboutValues: "قيمنا: الابتكار، الجودة، والتميز",
          aboutJoinTeam: "انضم إلى فريقنا",
          ctaTitle: "هل أنت مستعد لبناء",
          ctaTitleHighlight: "المستقبل",
          ctaTitleCont: "معنا؟",
          ctaSubtitle: "انضم إلينا في رحلة الابتكار والتطوير التقني.",
          ctaStartProject: "ابدأ مشروعك الآن",
          ctaTalkToExperts: "تحدث مع خبرائنا",
          footerSlogan:
            "نقود مستقبل التكنولوجيا في المنطقة من خلال الابتكار والتطوير المستمر.",
          footerServices: "الخدمات",
          footerCompany: "الشركة",
          footerContact: "معلومات الاتصال",
          footerAbout: "من نحن",
          footerTeam: "فريق العمل",
          footerCareers: "الوظائف",
          footerNews: "الأخبار",
          footerContactEmail: "info@mesk.qa",
          footerContactPhone: "+974 72053188",
          footerContactAddress: "الدوحة ، قطر, مركز قطر للمال الدور التاسع",
          footerRights: "© {{year}} ميسك القابضة. جميع الحقوق محفوظة.",
          poweredBy: "مُشغل بواسطة PayTechEG لشركة ميسك القابضة",
          featureNotImplementedTitle: "🚧 هذه الميزة غير مطبقة بعد",
          featureNotImplementedDesc:
            "لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
          partnersTitle: "شركاؤنا و",
          partnersTitleHighlight: "داعمونا",
          partnersSubtitle: "نفخر بالتعاون مع منظمات رائدة وجهات داعمة.",
          projectCategorySports: "رياضة",
          projectCategoryHealth: "صحة",
          projectCategoryAI: "ذكاء اصطناعي",
          projectTitleHagzzdream: "منصة hagzzdream",
          projectDescHagzzdream:
            "ربط لاعبي كرة القدم الناشئين بالأندية الرياضية وتسهيل تسويقهم واكتشاف مواهبهم.",
          projectTitleHagzzmrat: "منصة hagzzmrat",
          projectDescHagzzmrat:
            "متجر إلكتروني متكامل لبيع المكملات الغذائية والفيتامينات والملابس الرياضية عالية الجودة.",
          projectTitleHagzzBooking: "منصة hagzz للحجوزات",
          projectDescHagzzBooking:
            "نظام سهل لحجز التدريبات الرياضية في الأكاديميات والمراكز الرياضية المختلفة.",
          projectTitleMeskHealthcare: "mesk healthcare",
          projectDescMeskHealthcare:
            "حلول شاملة لتطوير وإدارة المستشفيات والمراكز الصحية بكفاءة وفعالية.",
          projectTitleVirtualDoctor: "مساعد الطبيب الافتراضي",
          projectDescVirtualDoctor:
            "نظام ذكاء اصطناعي متقدم لمساعدة الأطباء في عمليات التشخيص ووضع خطط العلاج.",
          projectTitleSmartRecommendation: "محرك التوصيات الذكي",
          projectDescSmartRecommendation:
            "نظام ذكاء اصطناعي لتقديم توصيات مخصصة للمستخدمين في مختلف المجالات.",

          branchesTitle: "تواجدنا",
          branchesTitleHighlight: "العالمي",
          branchesSubtitle:
            "تعمل ميسك القابضة بشكل استراتيجي عبر مراكز إقليمية رئيسية لتقديم حلول مبتكرة في جميع أنحاء العالم.",
          branchDoha: "الدوحة",
          branchQatar: "قطر",
          branchCairo: "القاهرة",
          branchEgypt: "مصر",
          branchAbuDhabi: "أبوظبي",
          branchUAE: "الإمارات",
          branchJeddah: "جدة",
          branchKSA: "السعودية",
          branchHQ: "المقر الرئيسي",
          branchRegional: "مكتب إقليمي",

          // Team Section - Arabic
          teamTitle: "فريقنا",
          teamTitleHighlight: "المتخصص",
          teamSubtitle:
            "تعرف على العقول المبدعة وراء حلولنا المبتكرة. يجمع فريقنا المتنوع خبرات سنوات في التكنولوجيا والتصميم وتطوير الأعمال.",
          teamCEO: "الرئيس التنفيذي",
          teamCTO: "الرئيس التقني",
          teamLeadDev: "قائد المطورين",
          teamUXLead: "قائد تجربة المستخدم",
          teamDataScientist: "عالم البيانات",
          teamDevOps: "مهندس العمليات",
          teamCEOBio:
            "قائد رؤيوي مع أكثر من 15 عاماً في الابتكار التقني والتطوير الاستراتيجي.",
          teamCTOBio:
            "خبير في الذكاء الاصطناعي والتعلم الآلي والحلول التقنية المتطورة.",
          teamLeadDevBio:
            "مطور متكامل متخصص في تقنيات الويب الحديثة والحلول القابلة للتطوير.",
          teamUXLeadBio:
            "مصمم مبدع يركز على تجربة المستخدم وتصميم الواجهات الحديثة.",
          teamDataScientistBio:
            "خبير في علم البيانات مع معرفة عميقة في التحليلات والنمذجة التنبؤية.",
          teamDevOpsBio:
            "متخصص في البنية التحتية يضمن حلول النشر القابلة للتطوير والموثوقة.",

          // Team Categories - Arabic
          teamCategoryExecutive: "الفريق التنفيذي",
          teamCategoryEgypt: "فريق مصر",
          teamCategoryQatar: "فريق قطر",
          teamCategoryLegal: "الفريق القانوني",
          teamCategoryTech: "الفريق التقني",
          teamCategoryMarketing: "فريق التسويق",

          // Executive Team - Arabic
          teamCEO: "الرئيس التنفيذي",
          teamCTO: "الرئيس التقني",
          teamCEOBio:
            "قائد رؤيوي مع أكثر من 20 عاماً في الابتكار التقني والتطوير الاستراتيجي عبر منطقة الشرق الأوسط وشمال أفريقيا.",
          teamCTOBio:
            "خبير في الذكاء الاصطناعي والتعلم الآلي والحلول التقنية المتطورة مع التركيز على الأسواق الإقليمية.",

          // Egypt Team - Arabic
          teamEgyptManager: "مدير مصر الإقليمي",
          teamEgyptTechLead: "قائد التقنية في مصر",
          teamEgyptSales: "مدير المبيعات في مصر",
          teamEgyptManagerBio:
            "قيادة توسع السوق المصرية مع خبرة في تطوير الأعمال المحلية وتبني التكنولوجيا.",
          teamEgyptTechBio:
            "متخصص في الحلول التقنية المحلية والتحول الرقمي للشركات المصرية.",
          teamEgyptSalesBio:
            "دفع نمو المبيعات وعلاقات العملاء في السوق المصرية مع معرفة عميقة محلية.",

          // Qatar Team - Arabic
          teamQatarManager: "مدير قطر الإقليمي",
          teamQatarTechLead: "قائد التقنية في قطر",
          teamQatarHealthcare: "قائد الرعاية الصحية في قطر",
          teamQatarManagerBio:
            "قيادة عمليات قطر مع التركيز على تكنولوجيا الرياضة وحلول الرعاية الصحية للسوق القطري.",
          teamQatarTechBio:
            "متخصص في تكنولوجيا الرياضة وحلول الذكاء الاصطناعي للسوق القطري والصناعة الرياضية الإقليمية.",
          teamQatarHealthcareBio:
            "قيادة حلول تكنولوجيا الرعاية الصحية والمبادرات الصحية الرقمية في قطر والمنطقة.",

          // Legal Team - Arabic
          teamLegalDirector: "المدير القانوني",
          teamLegalCounsel: "المستشار القانوني الأول",
          teamLegalDirectorBio:
            "قيادة الشؤون القانونية والامتثال عبر جميع العمليات الإقليمية مع خبرة في قانون التكنولوجيا.",
          teamLegalCounselBio:
            "متخصص في الملكية الفكرية وحماية البيانات والامتثال التقني عبر منطقة الشرق الأوسط وشمال أفريقيا.",

          // Tech Team - Arabic
          teamLeadDev: "قائد المطورين",
          teamUXLead: "قائد تجربة المستخدم",
          teamDataScientist: "عالم البيانات",
          teamDevOps: "مهندس العمليات",
          teamLeadDevBio:
            "مطور متكامل متخصص في تقنيات الويب الحديثة والحلول القابلة للتطوير للعملاء المؤسسيين.",
          teamUXLeadBio:
            "مصمم مبدع يركز على تجربة المستخدم وتصميم الواجهات الحديثة للأسواق العربية والإنجليزية.",
          teamDataScientistBio:
            "خبير في علم البيانات مع معرفة عميقة في التحليلات والنمذجة التنبؤية لذكاء الأعمال.",
          teamDevOpsBio:
            "متخصص في البنية التحتية يضمن حلول النشر القابلة للتطوير والموثوقة عبر جميع المنصات.",

          // Marketing Team - Arabic
          teamMarketingDirector: "مدير التسويق",
          teamContentLead: "قائد المحتوى",
          teamMarketingDirectorBio:
            "قيادة استراتيجيات التسويق الرقمي وتطوير العلامة التجارية عبر منطقة الشرق الأوسط وشمال أفريقيا مع التركيز على قطاع التكنولوجيا.",
          teamContentLeadBio:
            "إنشاء محتوى مقنع وتجارب رقمية تلقى صدى لدى الجماهير العربية والدولية.",

          // Expertise Areas - Arabic
          teamLeadership: "القيادة",
          teamStrategy: "الاستراتيجية",
          teamInnovation: "الابتكار",
          teamRegionalExpansion: "التوسع الإقليمي",
          teamAI: "الذكاء الاصطناعي",
          teamML: "التعلم الآلي",
          teamArchitecture: "البنية التحتية",
          teamBusinessDev: "تطوير الأعمال",
          teamLocalMarket: "السوق المحلي",
          teamLocalSolutions: "الحلول المحلية",
          teamSales: "المبيعات",
          teamClientRelations: "علاقات العملاء",
          teamMarketAnalysis: "تحليل السوق",
          teamGrowth: "النمو",
          teamSportsTech: "تكنولوجيا الرياضة",
          teamHealthcare: "الرعاية الصحية",
          teamQatarMarket: "السوق القطري",
          teamDevOps: "عمليات التطوير",
          teamCloud: "الحوسبة السحابية",
          teamLegal: "القانوني",
          teamCompliance: "الامتثال",
          teamTechLaw: "قانون التكنولوجيا",
          teamContracts: "العقود",
          teamIP: "الملكية الفكرية",
          teamDataProtection: "حماية البيانات",
          teamFullStack: "التطوير المتكامل",
          teamReact: "React",
          teamNodeJS: "Node.js",
          teamUX: "تصميم تجربة المستخدم",
          teamUI: "تصميم الواجهة",
          teamDesign: "التصميم",
          teamUserResearch: "بحث المستخدم",
          teamDataScience: "علم البيانات",
          teamAnalytics: "التحليلات",
          teamBI: "ذكاء الأعمال",
          teamInfrastructure: "البنية التحتية",
          teamMarketing: "التسويق",
          teamBranding: "العلامة التجارية",
          teamDigital: "الرقمي",
          teamContent: "المحتوى",
          teamCopywriting: "كتابة المحتوى",
          teamSEO: "تحسين محركات البحث",
          teamSocialMedia: "وسائل التواصل الاجتماعي",

          // Testimonials Section - Arabic
          testimonialsTitle: "ماذا يقول",
          testimonialsTitleHighlight: "عملاؤنا",
          testimonialsSubtitle:
            "اكتشف كيف حولت حلولنا المبتكرة الأعمال عبر مختلف الصناعات والمناطق.",

          // Testimonial Categories - Arabic
          testimonialCategoryAll: "جميع الآراء",
          testimonialCategorySports: "التكنولوجيا الرياضية",
          testimonialCategoryHealthcare: "الرعاية الصحية",
          testimonialCategoryAI: "الذكاء الاصطناعي",
          testimonialCategoryRegional: "الخدمات الإقليمية",
          testimonialCategoryLegal: "الخدمات القانونية",

          // Testimonial Positions - Arabic
          testimonialSportsManager: "مدير النادي الرياضي",
          testimonialSportsCoach: "مدرب رياضي محترف",
          testimonialBookingManager: "مدير المركز الرياضي",
          testimonialHospitalDirector: "مدير المستشفى",
          testimonialPhysician: "طبيب أول",
          testimonialTechDirector: "مدير التقنية",
          testimonialBusinessManager: "مدير تطوير الأعمال",
          testimonialRegionalManager: "مدير العمليات الإقليمية",
          testimonialLegalCounsel: "مستشار قانوني",

          // Testimonial Companies - Arabic
          testimonialSportsClub: "نادي النخبة الرياضي",
          testimonialSportsAcademy: "أكاديمية نجوم المستقبل",
          testimonialSportsCenter: "مركز فيتنس فيرست",
          testimonialMedicalCenter: "مركز الطب المتقدم",
          testimonialClinic: "عيادة سمارت هيلث",
          testimonialTechCompany: "حلول الابتكار التقنية",
          testimonialEnterprise: "حلول المؤسسات العالمية",
          testimonialRegionalCompany: "مجموعة أعمال الشرق الأوسط",
          testimonialLegalFirm: "شركاء القانون الدوليين",

          // Testimonial Content - Arabic
          testimonialSportsContent:
            "حلول ميسك القابضة للتكنولوجيا الرياضية أحدثت ثورة في كيفية تتبع وتحسين أداء رياضيينا. التحليلات المدعومة بالذكاء الاصطناعي ساعدتنا في تحديد مجالات التحسين التي لم نلاحظها من قبل. تحسن أداء فريقنا بنسبة 30% منذ تطبيق حلولهم.",
          testimonialSportsCoachContent:
            "منصة Hagzzmrat حولت أعمالنا في المكملات الغذائية. الحل التجاري الإلكتروني بديهي وآمن وزاد مبيعاتنا بنسبة 150%. تجربة العملاء متميزة والإدارة الخلفية سلسة.",
          testimonialBookingContent:
            "نظام Hagzz Booking بسط عملية الحجز بالكامل. سهل الاستخدام للموظفين والعملاء، والجدولة التلقائية قللت عبء العمل الإداري بنسبة 60%. موصى به بشدة!",
          testimonialHealthcareContent:
            "حلول ميسك للرعاية الصحية حولت عمليات مستشفانا. نظام الإدارة المتكامل حسّن كفاءة رعاية المرضى بنسبة 40% وقلل الأخطاء الإدارية بنسبة 80%. الدعم التشخيصي المدعوم بالذكاء الاصطناعي كان لا يقدر بثمن لطاقمنا الطبي.",
          testimonialPhysicianContent:
            "المساعد الطبي الافتراضي أصبح أداة أساسية في ممارستي اليومية. يساعد في اقتراحات التشخيص وتخطيط العلاج ومراقبة المرضى. الدقة والموثوقية مثيران للإعجاب، مما يجعله شريكاً موثوقاً في رعاية المرضى.",
          testimonialAIContent:
            "حلول الذكاء الاصطناعي من ميسك القابضة أحدثت ثورة في عمليات أعمالنا. محرك التوصيات الذكي زاد تفاعل عملائنا بنسبة 200% وحسّن معدلات التحويل بشكل كبير. نماذج التعلم الآلي دقيقة بشكل لا يصدق وقابلة للتكيف.",
          testimonialBusinessContent:
            "التحليلات والرؤى المدعومة بالذكاء الاصطناعي التي قدمتها ميسك القابضة أعطتنا رؤية غير مسبوقة في عمليات أعمالنا. تمكنا من اتخاذ قرارات مدفوعة بالبيانات زادت كفاءتنا بنسبة 35% وقللت التكاليف بنسبة 25%.",
          testimonialRegionalContent:
            "العمل مع الفرق الإقليمية لميسك القابضة كان استثنائياً. فهمهم للأسواق المحلية والفروق الثقافية وممارسات الأعمال جعل توسعنا في الأراضي الجديدة سلساً وناجحاً. خبرتهم لا مثيل لها.",
          testimonialLegalContent:
            "الفريق القانوني لميسك القابضة قدم دعم استثنائي في التنقل في اللوائح التقنية المعقدة عبر ولايات قضائية متعددة. خبرتهم في الملكية الفكرية وحماية البيانات كانت حاسمة لمتطلبات الامتثال لدينا.",

          // Testimonial Projects - Arabic
          testimonialProjectHagzzdreamPlatform: "منصة Hagzzdream",
          testimonialProjectHagzzmratPlatform: "منصة Hagzzmrat",
          testimonialProjectHagzzBookingPlatform: "منصة Hagzz Booking",
          testimonialProjectMeskHealthcareSolutions: "حلول ميسك للرعاية الصحية",
          testimonialProjectVirtualMedicalAssistant: "المساعد الطبي الافتراضي",
          testimonialProjectIntelligentRecommendationEngine:
            "محرك التوصيات الذكي",
          testimonialProjectAIAnalyticsPlatform:
            "منصة تحليلات الذكاء الاصطناعي",
          testimonialProjectRegionalExpansionServices: "خدمات التوسع الإقليمي",
          testimonialProjectLegalAdvisoryServices: "خدمات الاستشارة القانونية",

          // Testimonial Stats - Arabic
          testimonialStatsSatisfaction: "رضا العملاء",
          testimonialStatsClients: "عميل سعيد",
          testimonialStatsRating: "متوسط التقييم",
          testimonialStatsRetention: "احتفاظ العملاء",

          // Team Stats - Arabic
          teamStatsProjects: "مشروع",
          teamStatsYears: "سنة",
          teamStatsTeam: "فريق",
          teamContactTitle: "تواصل مع عضو الفريق",
          teamContactDesc: "معلومات الاتصال لـ {{name}} ستكون متاحة قريباً.",
          teamJoinButton: "انضم إلى فريقنا",
          teamJoinTitle: "انضم إلى فريقنا",
          teamJoinDesc:
            "نحن نبحث دائماً عن المواهب المتميزة للانضمام إلى فريقنا. أرسل لنا سيرتك الذاتية!",
        },
      },
    },
  });

export default i18n;
