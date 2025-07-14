import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectsSection = ({ projects }) => {
  const { t, i18n } = useTranslation();
  const handleVisitProject = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: t('projectLinkUnavailableTitle'),
        description: t('projectLinkUnavailableDesc'),
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projectsTitle')} <span className="gradient-text">{t('projectsTitleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/70 backdrop-blur-md border border-purple-700/30 rounded-xl shadow-2xl overflow-hidden group hover:shadow-purple-500/30 transition-all duration-300 scroll-reveal flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.title)} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                <span className={`absolute top-4 ${i18n.language === 'ar' ? 'right-4' : 'left-4'} px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'مكتمل' || project.status === 'Completed'
                    ? 'bg-green-500/80 text-white' 
                    : 'bg-yellow-500/80 text-black'
                }`}>
                  {t(project.status)}
                </span>
                 <span className={`absolute top-4 ${i18n.language === 'ar' ? 'left-4' : 'right-4'} bg-purple-600/80 text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {t(project.category)}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors">{t(project.title)}</h3>
                <p className="text-gray-400 mb-5 leading-relaxed text-sm flex-grow">{t(project.description)}</p>
                
                <div className="mt-auto pt-4 border-t border-purple-700/20">
                  <Button 
                    onClick={() => handleVisitProject(project.link)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold group"
                  >
                    {t('projectVisit')}
                    <ExternalLink className={`w-4 h-4 ${i18n.language === 'ar' ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;