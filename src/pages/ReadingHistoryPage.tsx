
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';
import { getArticleById } from '@/data/articles';

const ReadingHistoryPage: React.FC = () => {
  const { getReadingHistory } = useReadingProgress();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const readingHistory = getReadingHistory();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  if (!user) {
    return null;
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-sarawak-brown mb-2">Your Reading History</h1>
        <p className="text-gray-600 mb-8">
          Track your progress and continue reading from where you left off.
        </p>
        
        {readingHistory.length > 0 ? (
          <div className="space-y-4">
            {readingHistory.map((item) => {
              const article = getArticleById(item.articleId);
              if (!article) return null;
              
              return (
                <Card key={item.articleId} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-32 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-4 md:p-6">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>Last read: {new Date(item.lastRead).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Reading progress</span>
                          <span>{Math.round(item.progress)}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {article.shortDescription}
                        </p>
                        <Link to={`/articles/${article.id}`}>
                          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sarawak-red">
                            Continue reading <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600 mb-4">
              You haven't read any articles yet.
            </p>
            <Link to="/articles">
              <Button className="bg-sarawak-red hover:bg-sarawak-red/90">
                Browse Articles
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ReadingHistoryPage;
