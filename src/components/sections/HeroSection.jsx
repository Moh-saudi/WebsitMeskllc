import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSlider from '@/components/HeroSlider';

const HeroSection = ({ stats }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen relative tech-pattern">
       <HeroSlider />
      <div className="absolute bottom-20 w-full z-20 hidden md:block">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 bg-slate-900/50 backdrop-blur-md p-6 rounded-lg">
                {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="text-center"
                >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                    </div>
                    <div className="text-gray-300">{t(stat.label)}</div>
                </motion.div>
                ))}
            </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;