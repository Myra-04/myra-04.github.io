
export interface Article {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  translations?: {
    [langCode: string]: string;
  };
  titleTranslations?: {
    [langCode: string]: string;
  };
  descriptionTranslations?: {
    [langCode: string]: string;
  };
  imageUrl: string;
  imageCredit?: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  estimatedReadingTime: number;
}
