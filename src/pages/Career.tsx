import React from 'react';
import { motion } from 'motion/react';

const positions = [
  {
    title: 'Lekar/ka preventivni mediciny',
    location: 'Praha',
    type: 'Plny uvazek',
  },
  {
    title: 'Specialista/ka laboratorni diagnostiky',
    location: 'Brno',
    type: 'Plny uvazek',
  },
  {
    title: 'Koordinator/ka pece o klienty',
    location: 'Hybrid',
    type: 'Plny uvazek',
  },
];

export const Career: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <span className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          Kariera
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Pridat se k CPM</h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Stavime tym lidi, kteri chteji realne zlepsovat zdravotni vysledky klientu. Nabizime moderni prostredi,
          smysluplnou praci a prostor pro rust.
        </p>
      </motion.section>

      <section className="mt-14 space-y-4">
        {positions.map((position) => (
          <article key={position.title} className="rounded-xl border border-slate-200 p-6 bg-white">
            <h2 className="text-xl font-bold text-slate-900">{position.title}</h2>
            <p className="text-sm text-slate-600 mt-2">
              {position.location} • {position.type}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};
