
import React, { useState } from 'react';
import { useLanguage, t } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Quiz as QuizType, QuizQuestion } from '@/types/quiz';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { toast } from './ui/use-toast';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizProps {
  quiz: QuizType;
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const { currentLanguage } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  // Get localized question and options if available
  const getLocalizedQuestion = (question: QuizQuestion) => {
    if (
      question.translations && 
      question.translations[currentLanguage.code] && 
      question.translations[currentLanguage.code].question
    ) {
      return question.translations[currentLanguage.code].question;
    }
    return question.question;
  };

  const getLocalizedOptions = (question: QuizQuestion) => {
    if (
      question.translations && 
      question.translations[currentLanguage.code] && 
      question.translations[currentLanguage.code].options
    ) {
      return question.translations[currentLanguage.code].options;
    }
    return question.options;
  };

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      toast({
        title: t('correctAnswer'),
        description: "",
        duration: 3000
      });
    } else {
      toast({
        title: t('wrongAnswer'),
        description: currentQuestion.correctAnswer,
        duration: 3000,
        variant: "destructive"
      });
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsQuizComplete(false);
    setScore(0);
  };

  if (isQuizComplete) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-2xl text-sarawak-brown">{t('quizResults')}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="text-4xl font-bold mb-4 text-sarawak-green">
            {t('yourScore')} {score}/{quiz.questions.length}
          </p>
          <p className="text-lg mb-8">
            {score === quiz.questions.length 
              ? '🎉 Perfect score! Excellent knowledge!' 
              : score >= quiz.questions.length / 2 
                ? '👍 Good job! You know quite a bit!' 
                : '📚 Keep learning! You\'ll do better next time!'}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 pt-2">
          <Button variant="outline" onClick={restartQuiz}>
            {t('retakeQuiz')}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-sarawak-brown">{t('quizHeading')}</CardTitle>
        <CardDescription>
          {t('questionPrefix')} {currentQuestionIndex + 1} {t('of')} {quiz.questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-lg font-medium mb-4">{getLocalizedQuestion(currentQuestion)}</h3>
        <div className="space-y-3">
          {getLocalizedOptions(currentQuestion).map((option, index) => (
            <div
              key={index}
              className={`p-3 rounded-md border cursor-pointer transition-colors ${
                selectedAnswer === option && isAnswered
                  ? option === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : selectedAnswer === option
                  ? 'bg-accent border-accent-foreground/20'
                  : 'hover:bg-accent/50'
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer === option && isAnswered && (
                  option === currentQuestion.correctAnswer ? (
                    <CheckCircle size={20} className="text-green-600" />
                  ) : (
                    <XCircle size={20} className="text-red-600" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-4 pt-6">
        {isAnswered ? (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < quiz.questions.length - 1 
              ? t('nextQuestion') 
              : t('quizResults')}
          </Button>
        ) : (
          <Button 
            onClick={handleSubmitAnswer} 
            disabled={!selectedAnswer}
          >
            {t('submitAnswer')}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;
