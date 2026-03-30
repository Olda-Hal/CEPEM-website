import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <span className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          O nas
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Centra preventivni mediciny
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Pomahame lidem zit zdraveji diky kombinaci moderni diagnostiky, personalizovane pece a dlouhodobe prevence.
          Nas tym propojuje klinickou odbornost, data a lidsky pristup.
        </p>
      </motion.section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Mise</h2>
          <p className="text-sm text-slate-600">Posouvat standard prevence a zpristupnit pokrocilou pec vice lidem.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Vize</h2>
          <p className="text-sm text-slate-600">Byt nejduveryhodnejsi siti preventivnich klinik ve stredni Evrope.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-slate-900 mb-2">Hodnoty</h2>
          <p className="text-sm text-slate-600">Empatie, presnost, odpovednost a transparentnost v kazdem kroku pece.</p>
        </div>
      </section>
    </div>
  );
};
