
import { Article } from './types';
import { textilesArticles } from './textiles';
import { foodArticles } from './food';
import { cultureArticles } from './culture';

export const articles: Article[] = [
  ...textilesArticles,
  ...foodArticles,
  ...cultureArticles
];

export { textilesArticles, foodArticles, cultureArticles };
