
import React, { useEffect, useRef, useState } from 'react';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '@/contexts/LanguageContext';

interface ArticleContentProps {
  articleId: string;
  content: string;
  translations?: Record<string, string>;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ articleId, content, translations }) => {
  const { saveProgress } = useReadingProgress();
  const { currentLanguage } = useLanguage();
  const articleRef = useRef<HTMLDivElement>(null);
  const [lastSavedProgress, setLastSavedProgress] = useState(0);
  
  // Get content in the current language if available, otherwise use default content
  const getLocalizedContent = () => {
    if (translations && translations[currentLanguage.code]) {
      return translations[currentLanguage.code];
    }
    return content;
  };
  
  useEffect(() => {
    const calculateReadingProgress = () => {
      if (articleRef.current) {
        const element = articleRef.current;
        const totalHeight = element.scrollHeight - element.clientHeight;
        const windowScrollTop = window.scrollY - element.offsetTop;
        
        if (windowScrollTop > 0) {
          let progress = (windowScrollTop / totalHeight) * 100;
          progress = Math.min(100, Math.max(0, progress));
          
          // Only save progress if it's increased by at least 2% or reached 100%
          if (progress > lastSavedProgress + 2 || progress >= 95) {
            saveProgress(articleId, progress);
            setLastSavedProgress(progress);
            console.log(`Progress saved: ${progress.toFixed(2)}% for article ${articleId}`);
          }
        }
      }
    };
    
    window.addEventListener('scroll', calculateReadingProgress);
    
    // Initial calculation when component mounts
    setTimeout(calculateReadingProgress, 500);
    
    return () => {
      window.removeEventListener('scroll', calculateReadingProgress);
    };
  }, [articleId, saveProgress, lastSavedProgress]);
  
  return (
    <div ref={articleRef} className="prose prose-lg max-w-none">
      <ReactMarkdown className="space-y-6 leading-relaxed">
        {getLocalizedContent()}
      </ReactMarkdown>
    </div>
  );
};

export default ArticleContent;
