
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ArticleContent from '@/components/ArticleContent';
import ReadingProgressIndicator from '@/components/ReadingProgressIndicator';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { getArticleById, getRelatedArticles } from '@/data/articleUtils';
import ArticleCard from '@/components/ArticleCard';
import { useLanguage, t } from '@/contexts/LanguageContext';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';
import { getQuizByArticleId } from '@/data/quizData';
import Quiz from '@/components/Quiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProgress } = useReadingProgress();
  const { currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');
  
  const article = id ? getArticleById(id) : undefined;
  const relatedArticles = article ? getRelatedArticles(article, 3) : [];
  const quiz = id ? getQuizByArticleId(id) : undefined;
  
  useEffect(() => {
    if (!article) {
      navigate('/articles');
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [article, navigate]);
  
  // Force re-render when language changes
  useEffect(() => {
    // This empty dependency array ensures the component re-renders when language changes
  }, [currentLanguage]);
  
  if (!article) {
    return null;
  }

  // Get localized title if available
  const getLocalizedTitle = () => {
    if (article.titleTranslations && article.titleTranslations[currentLanguage.code]) {
      return article.titleTranslations[currentLanguage.code];
    }
    return article.title;
  };
  
  // Get localized description if available
  const getLocalizedDescription = () => {
    if (article.descriptionTranslations && article.descriptionTranslations[currentLanguage.code]) {
      return article.descriptionTranslations[currentLanguage.code];
    }
    return article.shortDescription;
  };
  
  return (
    <Layout>
      <ReadingProgressIndicator articleId={article.id} />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/articles">
            <Button variant="ghost" className="pl-0 flex items-center gap-1 hover:bg-transparent hover:text-sarawak-red">
              <ChevronLeft size={20} />
              <span>Back to Articles</span>
            </Button>
          </Link>
        </div>
        
        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-sarawak-brown mb-4">
            {getLocalizedTitle()}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(article.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{article.estimatedReadingTime} min read</span>
            </div>
          </div>
        </header>
        
        {/* Tabs for Content and Quiz */}
        <Tabs defaultValue="content" className="mb-8">
          <TabsList className="mb-6 flex">
            <TabsTrigger 
              value="content" 
              className="flex-1"
              onClick={() => setActiveTab('content')}
            >
              {t('articles')}
            </TabsTrigger>
            {quiz && (
              <TabsTrigger 
                value="quiz" 
                className="flex-1"
                onClick={() => setActiveTab('quiz')}
              >
                {t('quiz')}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="content" className="mt-0">
            <ArticleContent 
              articleId={article.id} 
              content={article.content}
              imageUrl={article.imageUrl}
              imageCredit={article.imageCredit}
              translations={article.translations}
              key={`article-${article.id}-${currentLanguage.code}`}
            />
            
            {/* Article tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span 
                  key={tag} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sarawak-yellow/20 text-sarawak-brown"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Quiz button */}
            {quiz && (
              <div className="mt-8 flex justify-center">
                <Button 
                  onClick={() => setActiveTab('quiz')}
                  className="bg-sarawak-green hover:bg-sarawak-green/90"
                >
                  {t('startQuiz')}
                </Button>
              </div>
            )}
          </TabsContent>
          
          {quiz && (
            <TabsContent value="quiz" className="mt-0">
              <Quiz quiz={quiz} />
            </TabsContent>
          )}
        </Tabs>
      </article>
      
      {/* Related articles */}
      {relatedArticles.length > 0 && activeTab === 'content' && (
        <section className="bg-sarawak-cream/60 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-sarawak-brown mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(relatedArticle => (
                <ArticleCard 
                  key={relatedArticle.id} 
                  article={relatedArticle} 
                  showProgress={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticlePage;
