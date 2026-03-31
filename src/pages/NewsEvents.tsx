import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

export const NewsEvents: React.FC = () => {
  const { language } = useI18n();
  const isCs = language === 'cs';

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 space-y-6"
      >
        <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {isCs ? 'Aktualita' : 'Update'}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {isCs ? 'Reporty z akcí a preventivních programů' : 'Reports from events and prevention programs'}
        </h1>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Pravidelně realizujeme firemní i komunitní akce zaměřené na prevenci. Sdílíme z nich praktické výstupy, které pomáhají lépe plánovat návaznou péči a edukaci klientů.'
            : 'We regularly run company and community prevention events. We share practical outcomes that support better follow-up planning and health education.'}
        </p>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'V reportech se věnujeme nejčastějším tématům, zpětné vazbě účastníků i doporučením odborníků. Díky tomu vzniká průběžný přehled toho, co v prevenci skutečně funguje.'
            : 'Reports include recurring topics, participant feedback, and expert recommendations. This creates an ongoing overview of what works in real preventive practice.'}
        </p>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Aktuality navazují na dlouhodobou práci týmu Premedicalu v oblasti osvěty, diagnostiky a rozvoje moderního telemedicínského přístupu.'
            : 'These updates follow Premedical’s long-term work in education, diagnostics, and modern telemedicine-enabled care development.'}
        </p>
      </motion.article>
    </div>
  );
};
