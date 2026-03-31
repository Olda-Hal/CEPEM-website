import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

export const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <span className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {t('about.badge')}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          {t('about.title')}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          {t('about.description')}
        </p>
      </motion.section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-slate-900 mb-2">{t('about.missionTitle')}</h2>
          <p className="text-sm text-slate-600">{t('about.missionDescription')}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-slate-900 mb-2">{t('about.visionTitle')}</h2>
          <p className="text-sm text-slate-600">{t('about.visionDescription')}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-slate-900 mb-2">{t('about.valuesTitle')}</h2>
          <p className="text-sm text-slate-600">{t('about.valuesDescription')}</p>
        </div>
      </section>
    </div>
  );
};
