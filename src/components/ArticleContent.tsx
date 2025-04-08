
import React, { useEffect, useRef, useState } from 'react';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from './ui/aspect-ratio';

interface ArticleContentProps {
  articleId: string;
  content: string;
  imageUrl?: string;
  imageCredit?: string;
  translations?: Record<string, string | { title: string; shortDescription: string; content: string }>;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ 
  articleId, 
  content, 
  imageUrl,
  imageCredit,
  translations 
}) => {
  const { saveProgress } = useReadingProgress();
  const { currentLanguage } = useLanguage();
  const articleRef = useRef<HTMLDivElement>(null);
  const [lastSavedProgress, setLastSavedProgress] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  // Get content in the current language if available, otherwise use default content
  const getLocalizedContent = () => {
    if (translations && translations[currentLanguage.code]) {
      if (typeof translations[currentLanguage.code] === 'string') {
        return translations[currentLanguage.code] as string;
      } else if (typeof translations[currentLanguage.code] === 'object') {
        return (translations[currentLanguage.code] as any).content || content;
      }
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
  
  // Force the image to reload by clearing cache
  const getImageUrl = () => {
    if (imageUrl) {
      // Add a cache-busting query parameter to force reload
      return imageError ? getFallbackImage() : `${imageUrl}?t=${Date.now()}`;
    }
    return getFallbackImage();
  };
  
  // Get fallback image if the primary one fails
  const getFallbackImage = () => {
    return "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1280";
  };
  
  return (
    <div ref={articleRef} className="prose prose-lg max-w-none">
      {imageUrl && (
        <div className="mb-8 w-full">
          <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={getImageUrl()} 
              alt="Article feature" 
              className="object-cover w-full h-full"
              onError={(e) => {
                console.error("Image failed to load:", imageUrl);
                setImageError(true);
              }}
            />
          </AspectRatio>
          {imageCredit && (
            <div className="text-xs text-gray-500 mt-1 text-right">
              {imageCredit}
            </div>
          )}
        </div>
      )}
      <div className="space-y-6 leading-relaxed">
        <div>
          <ReactMarkdown>
            {getLocalizedContent()}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
