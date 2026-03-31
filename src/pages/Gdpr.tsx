import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

export const Gdpr: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {t('gdpr.badge')}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">{t('gdpr.title')}</h1>
        <p className="text-slate-600 leading-relaxed">
          {t('gdpr.description')}
        </p>
      </motion.section>

      <section className="mt-12 space-y-6 text-slate-700">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">{t('gdpr.section1Title')}</h2>
          <p className="text-sm">{t('gdpr.section1Description')}</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">{t('gdpr.section2Title')}</h2>
          <p className="text-sm">{t('gdpr.section2Description')}</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">{t('gdpr.section3Title')}</h2>
          <p className="text-sm">{t('gdpr.section3Description')}</p>
        </div>
      </section>
    </div>
  );
};
