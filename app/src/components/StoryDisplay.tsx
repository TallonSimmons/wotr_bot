import React from 'react';
import { addTooltips } from '../utils/tooltips';

interface StoryDisplayProps {
  text: string;
  warriorsMode: boolean;
}

export const StoryDisplay: React.FC<StoryDisplayProps> = ({ text, warriorsMode }) => {
  const processedText = addTooltips(text, warriorsMode);
  
  return (
    <div className="story-display p-6 max-w-4xl mx-auto">
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: processedText }}
      />
    </div>
  );
};
