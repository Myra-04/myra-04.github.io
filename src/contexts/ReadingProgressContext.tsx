
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface ReadingProgress {
  articleId: string;
  progress: number;
  lastRead: string;
}

interface ReadingProgressContextType {
  getProgress: (articleId: string) => number;
  saveProgress: (articleId: string, progress: number) => void;
  getReadingHistory: () => ReadingProgress[];
}

const ReadingProgressContext = createContext<ReadingProgressContextType | undefined>(undefined);

export const ReadingProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [readingProgress, setReadingProgress] = useState<ReadingProgress[]>([]);
  const { user } = useAuth();
  
  // Load reading progress from localStorage when the component mounts or user changes
  useEffect(() => {
    if (user) {
      const storedProgress = localStorage.getItem(`sarawak-reading-progress-${user.id}`);
      if (storedProgress) {
        setReadingProgress(JSON.parse(storedProgress));
      }
    } else {
      // For non-logged in users, use a generic storage key
      const guestProgress = localStorage.getItem('sarawak-guest-reading-progress');
      if (guestProgress) {
        setReadingProgress(JSON.parse(guestProgress));
      }
    }
  }, [user]);

  // Save reading progress to localStorage whenever it changes
  useEffect(() => {
    if (readingProgress.length > 0) {
      if (user) {
        localStorage.setItem(`sarawak-reading-progress-${user.id}`, JSON.stringify(readingProgress));
      } else {
        localStorage.setItem('sarawak-guest-reading-progress', JSON.stringify(readingProgress));
      }
    }
  }, [readingProgress, user]);

  const getProgress = (articleId: string): number => {
    const article = readingProgress.find(item => item.articleId === articleId);
    return article ? article.progress : 0;
  };

  const saveProgress = (articleId: string, progress: number): void => {
    setReadingProgress(prev => {
      const existingIndex = prev.findIndex(item => item.articleId === articleId);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = { 
          articleId, 
          progress, 
          lastRead: new Date().toISOString() 
        };
        return updated;
      } else {
        return [...prev, { 
          articleId, 
          progress, 
          lastRead: new Date().toISOString() 
        }];
      }
    });
  };

  const getReadingHistory = (): ReadingProgress[] => {
    // Sort by last read date, most recent first
    return [...readingProgress].sort((a, b) => {
      return new Date(b.lastRead).getTime() - new Date(a.lastRead).getTime();
    });
  };

  return (
    <ReadingProgressContext.Provider value={{ getProgress, saveProgress, getReadingHistory }}>
      {children}
    </ReadingProgressContext.Provider>
  );
};

export const useReadingProgress = () => {
  const context = useContext(ReadingProgressContext);
  if (context === undefined) {
    throw new Error('useReadingProgress must be used within a ReadingProgressProvider');
  }
  return context;
};
