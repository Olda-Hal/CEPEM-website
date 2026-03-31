import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import cs from './resources/cs';
import en from './resources/en';

const STORAGE_KEY = 'website-language';

const resources = {
  cs,
  en,
} as const;

export type Language = keyof typeof resources;

const languageLabels: Record<Language, string> = {
  cs: 'CS',
  en: 'EN',
};

export const languageOptions = (Object.keys(resources) as Language[]).map((code) => ({
  code,
  label: languageLabels[code] ?? code.toUpperCase(),
}));

type LeafValue = string | string[];

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  availableLanguages: Array<{ code: Language; label: string }>;
  t: (key: string) => string;
  tList: (key: string) => string[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getValueByPath(source: unknown, key: string): LeafValue | undefined {
  const segments = key.split('.');
  let current: unknown = source;

  for (const segment of segments) {
    if (!current || typeof current !== 'object' || !(segment in (current as Record<string, unknown>))) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }

  if (typeof current === 'string' || Array.isArray(current)) {
    return current as LeafValue;
  }

  return undefined;
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'cs';
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'en' || saved === 'cs' ? saved : 'cs';
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(() => {
    return {
      language,
      setLanguage,
      availableLanguages: languageOptions,
      t: (key) => {
        const translated = getValueByPath(resources[language], key);
        return typeof translated === 'string' ? translated : key;
      },
      tList: (key) => {
        const translated = getValueByPath(resources[language], key);
        return Array.isArray(translated) ? translated : [];
      },
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }

  return context;
}
