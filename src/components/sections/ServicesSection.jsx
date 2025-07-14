import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection = ({ services }) => {
  const { t, i18n } = useTranslation();
  const handleFeatureClick = () => {
    toast({
      title: t('featureNotImplementedTitle'),
      description: t('featureNotImplementedDesc'),
    });
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('servicesTitle')} <span className="gradient-text">{t('servicesTitleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 scroll-reveal"
            >
              <div className="text-purple-400 mb-6 floating-animation">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{t(service.title)}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{t(service.description)}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-purple-300">
                    <Star className={`w-4 h-4 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t(feature)}
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleFeatureClick}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {t('servicesLearnMore')}
                {i18n.language === 'ar' ? (
                  <ArrowLeft className="w-4 h-4 mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;