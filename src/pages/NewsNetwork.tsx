import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

export const NewsNetwork: React.FC = () => {
  const { language } = useI18n();
  const isCs = language === 'cs';

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 space-y-6"
      >
        <span className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {isCs ? 'Aktualita' : 'Update'}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {isCs ? 'Rozvoj sítě center a partnerských pracovišť' : 'Center network expansion and partnerships'}
        </h1>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Pokračujeme v budování expandující sítě center preventivní medicíny. Zaměřujeme se na jednotný standard péče, moderní přístrojové vybavení a konzistentní kvalitu služeb napříč pracovišti.'
            : 'We continue building an expanding preventive medicine center network. The focus is unified care standards, modern device infrastructure, and consistent service quality across locations.'}
        </p>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Novým partnerům nabízíme metodickou podporu, onboarding týmu a provozní know-how. Cílem je rychlé a stabilní spuštění služeb bez kompromisů v odborné úrovni.'
            : 'New partners receive methodology support, team onboarding, and operational know-how. The goal is fast and stable service rollout without compromise in clinical quality.'}
        </p>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Součástí rozvoje je i digitální vrstva: sběr a vyhodnocování dat, telemedicínské konzultace a dlouhodobé sledování klienta mezi návštěvami centra.'
            : 'Expansion also includes a digital layer: data collection and interpretation, telemedicine consultations, and continuous follow-up between onsite visits.'}
        </p>
      </motion.article>
    </div>
  );
};
