import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Verified, Activity, Calendar, FileText, Microscope, Brain, Sprout } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useI18n } from '../i18n/I18nProvider';

export const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { t, tList } = useI18n();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span>
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest">{t('home.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
            {t('home.titleLine1')} <br />
            <span className="text-cyan-600 italic font-medium">{t('home.titleAccent')}</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {t('home.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => onNavigate('clinics')}>{t('home.ctaClinics')}</Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('products')}>{t('home.ctaProducts')}</Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 relative group">
            <img 
              alt={t('home.heroImageAlt')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRKleR5fkYp69H0hf2mzsJpf1Kl-BVmjr0YglBWTeXHuTSVuLnVOiQjK11TiLh_wwMJXNkEO4uckbMJ62-Sx_EKRof9K8RH6CUSXEMP02zgJZF0SPTDWs5v619a4DNcJNGz5TjzIUsoMUizHUNuuEcu23InKin867wxdquQMRBm5m120lV4vj_amHuSwafFUNU9I3pLRkFoJHufT4mdP6pZ1aPDi1mbQ8bDlZpLRyPeneDFshOXYfGPZMtNjJ-dEsHjpElLfiT8pk"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-tighter mb-1">{t('home.liveUpdates')}</p>
                  <p className="text-slate-900 font-bold">{t('home.auraActive')}</p>
                </div>
                <Verified className="text-teal-600 w-6 h-6" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Access Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-slate-100 rounded-xl p-10 flex flex-col justify-between overflow-hidden relative group cursor-pointer"
            onClick={() => onNavigate('clinics')}
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{t('home.premiumClinicsTitle')}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mb-8">
                {t('home.premiumClinicsDescription')}
              </p>
              <button className="flex items-center text-cyan-600 font-bold group/btn">
                {t('home.premiumClinicsAction')}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-2/3 opacity-20 group-hover:opacity-30 transition-opacity">
              <img 
                alt={t('home.clinicInteriorAlt')}
                className="rounded-full aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_bwPcFxBheL_9O6FHh3Cj3RCqYEAiZtPbiD8qIdZI1_5vq0ne0wbLv29Zp30JOI6-sOtCgHHjVQp7Ge2Et-5Qgz16zYL-FlZvTEXX1ZaCdWjIyWPSHaEyyG6V9jNZZHaX2mowdjduGmdpUwp7QmnLbVLdjy8yimrD01XmZBIM5Ki_aTza1CuvpUlg3ogtT_1h740TuDpAdeKUzo-q4vaacRpI5-5065lDaxRk05LRstD7N99-gVrUEdXQ5_OW7f0NuhlFOPuSnw"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-cyan-50 rounded-xl p-8 flex items-center justify-between border border-cyan-100 cursor-pointer"
            onClick={() => onNavigate('products')}
          >
            <div className="max-w-[60%]">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{t('home.featuredProductsTitle')}</h4>
              <p className="text-slate-600 text-sm">{t('home.featuredProductsDescription')}</p>
            </div>
            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="text-cyan-600 w-8 h-8" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-xl p-8 flex flex-col justify-between cursor-pointer"
            onClick={() => onNavigate('reservation')}
          >
            <Calendar className="text-slate-400 w-8 h-8 mb-4" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t('home.reservationTitle')}</h4>
              <p className="text-xs text-slate-500">{t('home.reservationDescription')}</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 flex flex-col justify-between shadow-sm border border-slate-100 cursor-pointer"
          >
            <FileText className="text-teal-600 w-8 h-8 mb-4" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t('home.recordsTitle')}</h4>
              <p className="text-xs text-slate-500">{t('home.recordsDescription')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <p className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-4">{t('home.expertiseBadge')}</p>
          <h2 className="text-4xl font-extrabold text-slate-900 max-w-xl">
            {t('home.expertiseTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <ServiceItem 
            icon={<Microscope className="w-8 h-8 text-slate-700" />}
            title={t('home.services.genomics.title')}
            description={t('home.services.genomics.description')}
            features={tList('home.services.genomics.features')}
          />
          <ServiceItem 
            icon={<Brain className="w-8 h-8 text-slate-700" />}
            title={t('home.services.neurology.title')}
            description={t('home.services.neurology.description')}
            features={tList('home.services.neurology.features')}
          />
          <ServiceItem 
            icon={<Sprout className="w-8 h-8 text-slate-700" />}
            title={t('home.services.longevity.title')}
            description={t('home.services.longevity.description')}
            features={tList('home.services.longevity.features')}
          />
        </div>
      </section>

      {/* Partnership Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="bg-slate-900 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t('home.partnershipTitle')}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            {t('home.partnershipDescription')}
          </p>
          <Button variant="secondary" size="lg">{t('home.partnershipCta')}</Button>
        </div>
      </section>
    </div>
  );
};

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; description: string; features: string[] }> = ({ icon, title, description, features }) => (
  <div className="space-y-6">
    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
    <ul className="space-y-3 pt-4">
      {features.map((f, i) => (
        <li key={i} className="flex items-center text-sm text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-3"></span>
          {f}
        </li>
      ))}
    </ul>
  </div>
);
