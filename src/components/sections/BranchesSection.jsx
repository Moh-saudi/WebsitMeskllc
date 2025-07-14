import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Building2 } from 'lucide-react';

const BranchCard = ({ branch, index }) => {
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="mb-4 p-3 rounded-full bg-purple-500/20">
        {branch.icon || <MapPin className="w-10 h-10 text-purple-400" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 gradient-text">{t(branch.cityKey)}</h3>
      <p className="text-gray-400 mb-1">{t(branch.countryKey)}</p>
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        branch.typeKey === 'branchHQ' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-gray-300'
      }`}>
        <Building2 className={`w-3 h-3 ${t('direction') === 'rtl' ? 'ml-1' : 'mr-1'}`} />
        {t(branch.typeKey)}
      </span>
    </motion.div>
  );
};

const BranchesSection = ({ branches }) => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  return (
    <section id="branches" className="py-20 bg-slate-900/70 tech-pattern">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('branchesTitle')} <span className="gradient-text">{t('branchesTitleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t('branchesSubtitle')}</p>
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {branches.map((branch, index) => (
            <BranchCard key={index} branch={branch} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BranchesSection;