import React from 'react';
import { addTooltips } from '../utils/tooltips';

interface Choice {
  index: number;
  text: string;
}

interface ChoicesProps {
  choices: Choice[];
  onChoiceSelect: (index: number) => void;
  warriorsMode: boolean;
}

export const Choices: React.FC<ChoicesProps> = ({ choices, onChoiceSelect, warriorsMode }) => {
  if (choices.length === 0) return null;

  return (
    <div className="choices-container p-6 max-w-4xl mx-auto">
      <div className="space-y-3">
        {choices.map((choice) => {
          const processedText = addTooltips(choice.text, warriorsMode);
          
          return (
            <button
              key={choice.index}
              onClick={() => onChoiceSelect(choice.index)}
              className="w-full text-left px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div
                dangerouslySetInnerHTML={{ __html: processedText }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
