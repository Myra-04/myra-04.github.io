
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
    try {
      const storageKey = user ? `sarawak-reading-progress-${user.user_id}` : 'sarawak-guest-reading-progress';
      const storedProgress = localStorage.getItem(storageKey);
      
      if (storedProgress) {
        setReadingProgress(JSON.parse(storedProgress));
        console.log('Loading reading progress from localStorage');
      }
    } catch (error) {
      console.error('Error loading reading progress:', error);
    }
  }, [user]);

  // Save reading progress to localStorage whenever it changes
  useEffect(() => {
    try {
      if (readingProgress.length > 0) {
        const storageKey = user ? `sarawak-reading-progress-${user.user_id}` : 'sarawak-guest-reading-progress';
        localStorage.setItem(storageKey, JSON.stringify(readingProgress));
        console.log('Saving reading progress to localStorage');
      }
    } catch (error) {
      console.error('Error saving reading progress:', error);
    }
  }, [readingProgress, user]);

  const getProgress = (articleId: string): number => {
    const article = readingProgress.find(item => item.articleId === articleId);
    return article ? article.progress : 0;
  };

  const saveProgress = (articleId: string, progress: number): void => {
    setReadingProgress(prev => {
      const existingIndex = prev.findIndex(item => item.articleId === articleId);
      
      // Only update if progress is higher than existing progress
      if (existingIndex !== -1) {
        const existingProgress = prev[existingIndex].progress;
        
        if (progress <= existingProgress) {
          return prev; // Don't update if new progress is lower
        }
        
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
