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
  { code: 'zh', name: '中文 (Chinese)' },
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
    quiz: 'Quiz',
    startQuiz: 'Start Quiz',
    quizHeading: 'Test Your Knowledge',
    nextQuestion: 'Next Question',
    submitAnswer: 'Submit Answer',
    correctAnswer: 'Correct!',
    wrongAnswer: 'Incorrect. The correct answer is:',
    quizResults: 'Quiz Results',
    yourScore: 'Your Score:',
    retakeQuiz: 'Retake Quiz',
    backToArticle: 'Back to Article',
    questionPrefix: 'Question',
    of: 'of',
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
    quiz: 'Kuiz',
    startQuiz: 'Mula Kuiz',
    quizHeading: 'Uji Pengetahuan Anda',
    nextQuestion: 'Soalan Seterusnya',
    submitAnswer: 'Hantar Jawapan',
    correctAnswer: 'Betul!',
    wrongAnswer: 'Salah. Jawapan yang betul ialah:',
    quizResults: 'Keputusan Kuiz',
    yourScore: 'Skor Anda:',
    retakeQuiz: 'Cuba Lagi',
    backToArticle: 'Kembali ke Artikel',
    questionPrefix: 'Soalan',
    of: 'daripada',
  },
  zh: {
    home: '首页',
    about: '关于我们',
    articles: '文章',
    login: '登录',
    signup: '注册',
    logout: '登出',
    welcomeMessage: '欢迎来到砂拉越文化遗产连接',
    exploreMessage: '探索砂拉越丰富的文化遗产',
    readMore: '阅读更多',
    language: '语言',
    quiz: '测验',
    startQuiz: '开始测验',
    quizHeading: '测试您的知识',
    nextQuestion: '下一题',
    submitAnswer: '提交答案',
    correctAnswer: '正确！',
    wrongAnswer: '不正确。正确答案是：',
    quizResults: '测验结果',
    yourScore: '您的分数：',
    retakeQuiz: '重新测验',
    backToArticle: '返回文章',
    questionPrefix: '问题',
    of: '/',
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
    quiz: 'Kuiz',
    startQuiz: 'Mulai Kuiz',
    quizHeading: 'Uji Penemu Nuan',
    nextQuestion: 'Tanya Kedua',
    submitAnswer: 'Submit Jawapan',
    correctAnswer: 'Betul!',
    wrongAnswer: 'Salah. Jawapan ti betul iya:',
    quizResults: 'Hasil Kuiz',
    yourScore: 'Skor Nuan:',
    retakeQuiz: 'Cuba Semula',
    backToArticle: 'Pulai Ngagai Artikel',
    questionPrefix: 'Soalan',
    of: 'ari',
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
    quiz: 'Kuiz',
    startQuiz: 'Mulai Kuiz',
    quizHeading: 'Uji Pengamu Da\'an',
    nextQuestion: 'Soalan Keduo',
    submitAnswer: 'Submit Jawapan',
    correctAnswer: 'Betul!',
    wrongAnswer: 'Salah. Jawapan betul ituh:',
    quizResults: 'Hasil Kuiz',
    yourScore: 'Skor Da\'an:',
    retakeQuiz: 'Cuba Semula',
    backToArticle: 'Kibuok Ke Artikel',
    questionPrefix: 'Soalan',
    of: 'ari',
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
    quiz: 'Kuiz',
    startQuiz: 'Mulai Kuiz',
    quizHeading: 'Uji Pengetahuan Ko',
    nextQuestion: 'Pura\'un Keduo',
    submitAnswer: 'Submit Jawab',
    correctAnswer: 'Betul!',
    wrongAnswer: 'Sala. Jawab betul ituh:',
    quizResults: 'Hasil Kuiz',
    yourScore: 'Skor Ko:',
    retakeQuiz: 'Cuba Semula',
    backToArticle: 'Pulai Ngagai Artikel',
    questionPrefix: 'Pura\'un',
    of: 'ari',
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
    quiz: 'Kuiz',
    startQuiz: 'Mulai Kuiz',
    quizHeading: 'Uji Pengetahuan Kuh',
    nextQuestion: 'Soalan Kedueh',
    submitAnswer: 'Submit Jawaban',
    correctAnswer: 'Betul!',
    wrongAnswer: 'Salah. Jawaban betul ineh:',
    quizResults: 'Hasil Kuiz',
    yourScore: 'Skor Kuh:',
    retakeQuiz: 'Cuba Semula',
    backToArticle: 'Ulih Ngagai Artikel',
    questionPrefix: 'Soalan',
    of: 'lem',
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
