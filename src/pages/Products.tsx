import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Database, Activity, Shield, ArrowUpRight, Check, Settings, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useI18n } from '../i18n/I18nProvider';
import { cn } from '@/src/lib/utils';

export const Products: React.FC = () => {
  const { t, tList } = useI18n();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold mb-6 uppercase tracking-widest border border-slate-200">
            {t('products.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter mb-8 leading-[1.1]">
            {t('products.titleLine1')} <br /><span className="text-cyan-600 italic font-medium">{t('products.titleAccent')}</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
            {t('products.description')}
          </p>
        </motion.div>
      </section>

      {/* Services and Devices Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <ProductCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC63_L78O68pP2H6W0-9_Z7Yh_L_9O6FHh3Cj3RCqYEAiZtPbiD8qIdZI1_5vq0ne0wbLv29Zp30JOI6-sOtCgHHjVQp7Ge2Et-5Qgz16zYL-FlZvTEXX1ZaCdWjIyWPSHaEyyG6V9jNZZHaX2mowdjduGmdpUwp7QmnLbVLdjy8yimrD01XmZBIM5Ki_aTza1CuvpUlg3ogtT_1h740TuDpAdeKUzo-q4vaacRpI5-5065lDaxRk05LRstD7N99-gVrUEdXQ5_OW7f0NuhlFOPuSnw"
          title="ANESA"
          category={t('products.products.p1.category')}
          description={t('products.products.p1.description')}
          features={tList('products.products.p1.features')}
          detailsLabel={t('products.products.details')}
        />
        <ProductCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqLkrawLSq4-3cmdoQzSyAfvmiotLgCUG5HOWxAyZVv26P36N5BMedXLK54A4r8qW-k71pdPlorHoALhu0_hBS1TM8zCmHjAxBm0iaTtIQWNaqViyNrYblfnYX64SuvQKUh0rV2L3vcX7mvyKZY1Y-BPH8LgY_dsUTlCOzUZJNWi_wbLQ8ImFWRcjRLPuFFWw8uNqP1PWwRzDTZfKTO5Fa0ouwhl3QHzPIC14z7CJxZ1ZUfhiSgS4SPfjtlJJSErGZIVrK-rNNYQ"
          title="MEIK"
          category={t('products.products.p2.category')}
          description={t('products.products.p2.description')}
          features={tList('products.products.p2.features')}
          detailsLabel={t('products.products.details')}
          accent="teal"
        />
        <ProductCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqLkrawLSq4-3cmdoQzSyAfvmiotLgCUG5HOWxAyZVv26P36N5BMedXLK54A4r8qW-k71pdPlorHoALhu0_hBS1TM8zCmHjAxBm0iaTtIQWNaqViyNrYblfnYX64SuvQKUh0rV2L3vcX7mvyKZY1Y-BPH8LgY_dsUTlCOzUZJNWi_wbLQ8ImFWRcjRLPuFFWw8uNqP1PWwRzDTZfKTO5Fa0ouwhl3QHzPIC14z7CJxZ1ZUfhiSgS4SPfjtlJJSErGZIVrK-rNNYQ"
          title="PLASON / NO"
          category={t('products.products.p3.category')}
          description={t('products.products.p3.description')}
          features={tList('products.products.p3.features')}
          detailsLabel={t('products.products.details')}
        />
      </section>

      <section className="mb-32">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold mb-4 uppercase tracking-widest border border-amber-200">
            {t('products.supplementsBadge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t('products.supplementsTitle')}</h2>
          <p className="text-slate-600 leading-relaxed">{t('products.supplementsDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC63_L78O68pP2H6W0-9_Z7Yh_L_9O6FHh3Cj3RCqYEAiZtPbiD8qIdZI1_5vq0ne0wbLv29Zp30JOI6-sOtCgHHjVQp7Ge2Et-5Qgz16zYL-FlZvTEXX1ZaCdWjIyWPSHaEyyG6V9jNZZHaX2mowdjduGmdpUwp7QmnLbVLdjy8yimrD01XmZBIM5Ki_aTza1CuvpUlg3ogtT_1h740TuDpAdeKUzo-q4vaacRpI5-5065lDaxRk05LRstD7N99-gVrUEdXQ5_OW7f0NuhlFOPuSnw"
            title={t('products.supplements.s1Title')}
            category={t('products.supplementsBadge')}
            description={t('products.supplements.s1Desc')}
            features={tList('products.supplements.s1Features')}
            detailsLabel={t('products.products.details')}
            accent="teal"
          />
          <ProductCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_bwPcFxBheL_9O6FHh3Cj3RCqYEAiZtPbiD8qIdZI1_5vq0ne0wbLv29Zp30JOI6-sOtCgHHjVQp7Ge2Et-5Qgz16zYL-FlZvTEXX1ZaCdWjIyWPSHaEyyG6V9jNZZHaX2mowdjduGmdpUwp7QmnLbVLdjy8yimrD01XmZBIM5Ki_aTza1CuvpUlg3ogtT_1h740TuDpAdeKUzo-q4vaacRpI5-5065lDaxRk05LRstD7N99-gVrUEdXQ5_OW7f0NuhlFOPuSnw"
            title={t('products.supplements.s2Title')}
            category={t('products.supplementsBadge')}
            description={t('products.supplements.s2Desc')}
            features={tList('products.supplements.s2Features')}
            detailsLabel={t('products.products.details')}
            accent="teal"
          />
          <ProductCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqLkrawLSq4-3cmdoQzSyAfvmiotLgCUG5HOWxAyZVv26P36N5BMedXLK54A4r8qW-k71pdPlorHoALhu0_hBS1TM8zCmHjAxBm0iaTtIQWNaqViyNrYblfnYX64SuvQKUh0rV2L3vcX7mvyKZY1Y-BPH8LgY_dsUTlCOzUZJNWi_wbLQ8ImFWRcjRLPuFFWw8uNqP1PWwRzDTZfKTO5Fa0ouwhl3QHzPIC14z7CJxZ1ZUfhiSgS4SPfjtlJJSErGZIVrK-rNNYQ"
            title={t('products.supplements.s3Title')}
            category={t('products.supplementsBadge')}
            description={t('products.supplements.s3Desc')}
            features={tList('products.supplements.s3Features')}
            detailsLabel={t('products.products.details')}
            accent="teal"
          />
        </div>
      </section>

      {/* Software Showcase Section */}
      <section className="bg-slate-900 rounded-3xl overflow-hidden text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">{t('products.softwareBadge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">{t('products.softwareTitle')}</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              {t('products.softwareDescription')}
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <SoftwareFeature icon={<Shield className="w-5 h-5" />} title={t('products.softwareFeatures.securityTitle')} desc={t('products.softwareFeatures.securityDesc')} />
              <SoftwareFeature icon={<Zap className="w-5 h-5" />} title={t('products.softwareFeatures.speedTitle')} desc={t('products.softwareFeatures.speedDesc')} />
              <SoftwareFeature icon={<Activity className="w-5 h-5" />} title={t('products.softwareFeatures.analyticsTitle')} desc={t('products.softwareFeatures.analyticsDesc')} />
              <SoftwareFeature icon={<Cpu className="w-5 h-5" />} title={t('products.softwareFeatures.integrationTitle')} desc={t('products.softwareFeatures.integrationDesc')} />
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg">{t('products.requestDemo')}</Button>
            </div>
          </div>
          <div className="relative bg-slate-800 min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
            <div className="relative z-10 w-full max-w-md bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <Settings className="text-slate-500 w-5 h-5" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                <div className="h-4 bg-slate-800 rounded w-full"></div>
                <div className="h-32 bg-slate-800 rounded w-full flex items-center justify-center">
                  <Activity className="text-cyan-600 w-12 h-12 opacity-50" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-8 bg-slate-800 rounded"></div>
                  <div className="h-8 bg-slate-800 rounded"></div>
                  <div className="h-8 bg-slate-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{t('products.consultTitle')}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            {t('products.consultDescription')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-800 font-bold">
              <Download className="text-cyan-600 w-5 h-5" /> {t('products.downloadCatalog')}
            </div>
            <div className="flex items-center gap-4 text-slate-800 font-bold">
              <ArrowUpRight className="text-cyan-600 w-5 h-5" /> {t('products.faq')}
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
          <h3 className="text-xl font-bold mb-6">{t('products.contactSales')}</h3>
          <form className="space-y-4">
            <input className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none" placeholder={t('products.yourName')} />
            <input className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none" placeholder={t('products.email')} />
            <textarea className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none h-32" placeholder={t('products.helpQuestion')}></textarea>
            <Button className="w-full">{t('products.sendInquiry')}</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

const ProductCard: React.FC<{ image: string; title: string; category: string; description: string; features: string[]; detailsLabel: string; accent?: 'cyan' | 'teal' }> = ({ image, title, category, description, features, detailsLabel, accent = 'cyan' }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
  >
    <div className="h-64 relative overflow-hidden group">
      <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={image} referrerPolicy="no-referrer" />
      <div className="absolute top-4 left-4">
        <span className={cn(
          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white",
          accent === 'cyan' ? "bg-cyan-600" : "bg-teal-600"
        )}>
          {category}
        </span>
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">{description}</p>
      <div className="space-y-3 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-tight">
            <Check className="text-cyan-600 w-4 h-4" /> {f}
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">{detailsLabel}</Button>
    </div>
  </motion.div>
);

const SoftwareFeature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="text-cyan-500 mt-1">{icon}</div>
    <div>
      <p className="font-bold text-sm mb-1">{title}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);
