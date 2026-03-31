import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

type NewsCard = {
  title: string;
  meta: string;
  description: string;
  imageAlt: string;
  page: string;
  image: string;
};

export const News: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { t } = useI18n();

  const cards: NewsCard[] = [
    {
      title: t('news.items.n1Title'),
      meta: t('news.items.n1Meta'),
      description: t('news.items.n1Description'),
      imageAlt: t('news.items.n1ImageAlt'),
      page: t('news.items.n1Page'),
      image:
        'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: t('news.items.n2Title'),
      meta: t('news.items.n2Meta'),
      description: t('news.items.n2Description'),
      imageAlt: t('news.items.n2ImageAlt'),
      page: t('news.items.n2Page'),
      image:
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: t('news.items.n3Title'),
      meta: t('news.items.n3Meta'),
      description: t('news.items.n3Description'),
      imageAlt: t('news.items.n3ImageAlt'),
      page: t('news.items.n3Page'),
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 mb-12"
      >
        <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {t('news.badge')}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">{t('news.title')}</h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">{t('news.description')}</p>
      </motion.section>

      <section className="space-y-6">
        {cards.map((card, index) => (
          <motion.button
            key={card.title}
            type="button"
            onClick={() => onNavigate(card.page)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="group w-full rounded-2xl border border-slate-200 bg-white p-0 overflow-hidden hover:shadow-md hover:border-cyan-200 transition-all text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 h-56 lg:h-full bg-slate-100">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-8 p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-widest font-bold text-cyan-700 mb-3">{card.meta}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">{card.description}</p>
                <span className="inline-flex items-center text-cyan-700 font-bold text-sm">
                  {t('news.readMore')}
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </section>
    </div>
  );
};
