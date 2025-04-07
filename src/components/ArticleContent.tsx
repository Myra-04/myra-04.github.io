
import React, { useEffect, useRef, useState } from 'react';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  articleId: string;
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ articleId, content }) => {
  const { saveProgress } = useReadingProgress();
  const articleRef = useRef<HTMLDivElement>(null);
  const [lastSavedProgress, setLastSavedProgress] = useState(0);
  
  useEffect(() => {
    const calculateReadingProgress = () => {
      if (articleRef.current) {
        const element = articleRef.current;
        const totalHeight = element.scrollHeight - element.clientHeight;
        const windowScrollTop = window.scrollY - element.offsetTop;
        
        if (windowScrollTop > 0) {
          let progress = (windowScrollTop / totalHeight) * 100;
          progress = Math.min(100, Math.max(0, progress));
          
          // Only save progress if it's increased by at least 5%
          if (progress > lastSavedProgress + 5 || progress >= 90) {
            saveProgress(articleId, progress);
            setLastSavedProgress(progress);
          }
        }
      }
    };
    
    window.addEventListener('scroll', calculateReadingProgress);
    
    return () => {
      window.removeEventListener('scroll', calculateReadingProgress);
    };
  }, [articleId, saveProgress, lastSavedProgress]);
  
  return (
    <div ref={articleRef} className="prose prose-lg max-w-none">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ArticleContent;
