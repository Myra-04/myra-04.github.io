
import { Article } from './types';
import { textilesArticles } from './textiles';
import { foodArticles } from './food';
import { cultureArticles } from './culture';

export const articles: Article[] = [
  ...textilesArticles,
  ...foodArticles,
  ...cultureArticles
];

export { Article } from './types';
export { textilesArticles } from './textiles';
export { foodArticles } from './food';
export { cultureArticles } from './culture';
