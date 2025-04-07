
import React, { createContext, useState, useContext, useEffect } from 'react';

type LanguageOption = {
  code: string;
  name: string;
};

interface LanguageContextType {
  currentLanguage: LanguageOption;
  languages: LanguageOption[];
  changeLanguage: (languageCode: string) => void;
  translations: Record<string, string>;
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'ms', name: 'Bahasa Malaysia' },
  { code: 'ib', name: 'Bahasa Iban' },
  { code: 'bd', name: 'Bahasa Bidayuh' },
  { code: 'ky', name: 'Bahasa Kayan' },
  { code: 'kn', name: 'Bahasa Kelabit' },
];

// Simple translations for demonstration
const translationsData: Record<string, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    articles: 'Articles',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    welcomeMessage: 'Welcome to Sarawak Heritage Connect',
    exploreMessage: 'Explore the rich cultural heritage of Sarawak',
    readMore: 'Read More',
    language: 'Language',
  },
  ms: {
    home: 'Laman Utama',
    about: 'Tentang Kami',
    articles: 'Artikel',
    login: 'Log Masuk',
    signup: 'Daftar',
    logout: 'Log Keluar',
    welcomeMessage: 'Selamat Datang ke Sarawak Heritage Connect',
    exploreMessage: 'Jelajahi warisan budaya yang kaya di Sarawak',
    readMore: 'Baca Lagi',
    language: 'Bahasa',
  },
  ib: {
    home: 'Laman Besai',
    about: 'Pasal Kami',
    articles: 'Cherita',
    login: 'Login',
    signup: 'Daftar',
    logout: 'Logout',
    welcomeMessage: 'Selamat datai ke Sarawak Heritage Connect',
    exploreMessage: 'Bejalai meda warisan budaya di Sarawak',
    readMore: 'Bacha Lagi',
    language: 'Jaku',
  },
  bd: {
    home: 'Ramin Da\'an',
    about: 'Ontok Kamih',
    articles: 'Artikin',
    login: 'Login',
    signup: 'Daftar',
    logout: 'Logout',
    welcomeMessage: 'Datai komey ke Sarawak Heritage Connect',
    exploreMessage: 'Ayon su\'ung warisan budaya Sarawak',
    readMore: 'Bacha Onggoh',
    language: 'Bahasa',
  },
  ky: {
    home: 'Uma\' Ja\'',
    about: 'Pasil Itam',
    articles: 'Cerita',
    login: 'Login',
    signup: 'Daftar',
    logout: 'Logout',
    welcomeMessage: 'Meyung lawi Sarawak Heritage Connect',
    exploreMessage: 'Pano warisan budaya Sarawak',
    readMore: 'Pacha Penih',
    language: 'Daha',
  },
  kn: {
    home: 'Ramat Ruyung',
    about: 'Ngenal Teh Kamih',
    articles: 'Cerita',
    login: 'Login',
    signup: 'Daftar',
    logout: 'Logout',
    welcomeMessage: 'Lawi ngan Sarawak Heritage Connect',
    exploreMessage: 'Mado warisan budaya Sarawak',
    readMore: 'Macha Ngelenih',
    language: 'Dalan',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(() => {
    const savedLanguage = localStorage.getItem('sarawak-language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      return lang || languages[0];
    }
    return languages[0];
  });

  const changeLanguage = (languageCode: string) => {
    const newLanguage = languages.find(l => l.code === languageCode);
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('sarawak-language', languageCode);
    }
  };

  // Get translations for the current language
  const translations = translationsData[currentLanguage.code] || translationsData.en;

  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation helper function
export const t = (key: string) => {
  const { translations } = useLanguage();
  return translations[key] || key;
};
