
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ArticleCardProps {
  article: Article;
  showProgress?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, showProgress = true }) => {
  const { getProgress } = useReadingProgress();
  const { currentLanguage } = useLanguage();
  const progress = getProgress(article.id);
  
  // Get localized content
  const getLocalizedTitle = () => {
    if (article.translations && article.translations[currentLanguage.code]?.title) {
      return article.translations[currentLanguage.code].title;
    }
    return article.title;
  };
  
  const getLocalizedDescription = () => {
    if (article.translations && article.translations[currentLanguage.code]?.shortDescription) {
      return article.translations[currentLanguage.code].shortDescription;
    }
    return article.shortDescription;
  };
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link to={`/articles/${article.id}`}>
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={article.imageUrl} 
              alt={getLocalizedTitle()}
              className="object-cover w-full h-full"
              onError={(e) => {
                console.error("Image failed to load:", article.imageUrl);
                e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1280";
              }}
            />
            {article.category && (
              <span className="absolute top-2 right-2 bg-sarawak-yellow text-sarawak-brown text-xs font-medium px-2 py-1 rounded">
                {article.category}
              </span>
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="pt-4 pb-0 flex-grow">
        <Link to={`/articles/${article.id}`}>
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-sarawak-red transition-colors">
            {getLocalizedTitle()}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {getLocalizedDescription()}
        </p>
        <div className="flex items-center mt-3 text-xs text-gray-500">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{article.estimatedReadingTime} min read</span>
        </div>
      </CardContent>
      {showProgress && progress > 0 && (
        <CardFooter className="pt-4 pb-4">
          <div className="w-full">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Reading progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ArticleCard;
