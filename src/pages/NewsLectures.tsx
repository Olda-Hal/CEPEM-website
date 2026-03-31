import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

export const NewsLectures: React.FC = () => {
  const { language } = useI18n();
  const isCs = language === 'cs';

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 space-y-6"
      >
        <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {isCs ? 'Aktualita' : 'Update'}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {isCs ? 'Přednášky každý týden pro veřejnost' : 'Weekly public lectures'}
        </h1>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'V rámci osvětové činnosti organizujeme pravidelné přednášky zaměřené na prevenci, životní styl a praktické kroky pro dlouhodobé zdraví. Každý týden otevíráme jiné téma podle aktuálních potřeb klientů i veřejnosti.'
            : 'As part of our public education activity, we organize regular lectures focused on prevention, lifestyle, and practical long-term health actions. Each week addresses a different topic based on current needs.'}
        </p>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Součástí setkání je prostor pro dotazy a diskuzi s odborníky. Účastníci získávají srozumitelné informace, které mohou ihned využít v běžném režimu péče o své zdraví.'
            : 'Each session includes Q&A and discussion with specialists. Participants receive practical, understandable guidance they can immediately apply to their daily health routine.'}
        </p>

        <p className="text-slate-700 leading-relaxed">
          {isCs
            ? 'Program průběžně aktualizujeme podle zájmu účastníků. Připravujeme témata od kardiovaskulární prevence přes regeneraci až po moderní možnosti telemedicínské podpory.'
            : 'The agenda is continuously updated based on participant interest. Topics range from cardiovascular prevention and regeneration to modern telemedicine support.'}
        </p>
      </motion.article>
    </div>
  );
};
