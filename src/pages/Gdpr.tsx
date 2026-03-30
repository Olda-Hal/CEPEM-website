import React from 'react';
import { motion } from 'motion/react';

export const Gdpr: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          GDPR
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Zpracovani osobnich udaju</h1>
        <p className="text-slate-600 leading-relaxed">
          Vasim osobnim udajum venujeme maximalni peci. Zpracovavame je vyhradne v rozsahu nutnem pro poskytovani
          zdravotnich sluzeb a plneni pravnich povinnosti.
        </p>
      </motion.section>

      <section className="mt-12 space-y-6 text-slate-700">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Co zpracovavame</h2>
          <p className="text-sm">Identifikacni, kontaktni a zdravotni udaje nutne pro objednani a poskytovani pece.</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Pravni zaklad</h2>
          <p className="text-sm">Plneni smlouvy, pravni povinnosti a opravnene zajmy v souladu s GDPR.</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Vase prava</h2>
          <p className="text-sm">Mate pravo na pristup, opravu, omezeni zpracovani i podani stiznosti u dozoroveho uradu.</p>
        </div>
      </section>
    </div>
  );
};
