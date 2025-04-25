
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  translations?: {
    [langCode: string]: {
      question: string;
      options: string[];
    }
  };
}

export interface Quiz {
  id: string;
  articleId: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  quizId: string;
  articleId: string;
  score: number;
  totalQuestions: number;
  date: string;
}
