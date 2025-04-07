
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useReadingProgress } from '@/contexts/ReadingProgressContext';

interface ReadingProgressIndicatorProps {
  articleId: string;
}

const ReadingProgressIndicator: React.FC<ReadingProgressIndicatorProps> = ({ articleId }) => {
  const { getProgress } = useReadingProgress();
  const progress = getProgress(articleId);
  
  return (
    <div className="sticky top-16 z-40 bg-white shadow-sm">
      <Progress value={progress} className="h-1 rounded-none" />
    </div>
  );
};

export default ReadingProgressIndicator;
