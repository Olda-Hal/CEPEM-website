import React from 'react';
import { useI18n } from '../i18n/I18nProvider';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  const footerLinks = [
    { id: 'about', label: t('footer.about') },
    { id: 'career', label: t('footer.career') },
    { id: 'gdpr', label: t('footer.gdpr') },
    { id: 'contact', label: t('footer.contact') },
  ];

  return (
    <footer className="bg-slate-50 w-full py-12 px-6 mt-auto border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 text-sm text-slate-500">
        <div className="font-bold text-slate-900 uppercase">
          CPM
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className="hover:text-cyan-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="opacity-80">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
