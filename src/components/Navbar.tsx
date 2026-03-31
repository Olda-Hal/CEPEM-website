import React from 'react';
import { cn } from '@/src/lib/utils';
import { useI18n } from '../i18n/I18nProvider';

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  const { language, setLanguage, availableLanguages, t } = useI18n();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'clinics', label: t('nav.clinics') },
    { id: 'reservation', label: t('nav.reservation') },
    { id: 'products', label: t('nav.products') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div 
          className="text-xl font-bold tracking-tighter text-slate-900 uppercase cursor-pointer"
          onClick={() => onPageChange('home')}
        >
          {t('nav.brand')}
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "transition-colors pb-1 border-b-2",
                activePage === item.id 
                  ? "text-cyan-700 border-cyan-600" 
                  : "text-slate-600 border-transparent hover:text-cyan-600"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{t('nav.languageLabel')}</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as typeof language)}
              className={cn(
                'rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700',
                'focus:outline-none focus:ring-2 focus:ring-cyan-600/30',
              )}
              aria-label={t('nav.languageLabel')}
            >
              {availableLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
