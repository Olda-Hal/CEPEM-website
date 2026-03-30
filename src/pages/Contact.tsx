import React from 'react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <span className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          Kontakt
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Jsme vam k dispozici</h1>
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          Mate dotaz k rezervaci, sluzbam nebo partnerstvi? Ozvete se nam a tym CPM se vam co nejdrive ozve.
        </p>
      </motion.section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">E-mail</h2>
          <p className="text-slate-700">info@cpm.cz</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Telefon</h2>
          <p className="text-slate-700">+420 123 456 789</p>
        </div>
      </section>
    </div>
  );
};
