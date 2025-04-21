
import { articles, Article } from './articleData';

// Gets a single article by id
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Gets related articles by common category or tags, excluding itself
export const getRelatedArticles = (article: Article, limit: number = 3): Article[] => {
  return articles
    .filter(a => a.id !== article.id &&
      (a.category === article.category ||
       a.tags.some(tag => article.tags.includes(tag))))
    .slice(0, limit);
};
