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
    <div className="choices-container mb-8">
      {/* Choices header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-amber-200 flex items-center space-x-3">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          <span>Make Your Choice</span>
        </h2>
      </div>

      {/* Choices grid/list */}
      <div className="grid gap-4 md:grid-cols-2">
        {choices.map((choice, idx) => {
          const processedText = addTooltips(choice.text, warriorsMode);
          
          return (
            <button
              key={choice.index}
              onClick={() => onChoiceSelect(choice.index)}
              className="group relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-amber-700/90 hover:to-amber-800/90 
                         backdrop-blur-sm border-2 border-slate-600/50 hover:border-amber-500/80
                         rounded-xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/20
                         transition-all duration-300 ease-out transform hover:scale-[1.02] hover:-translate-y-1
                         focus:outline-none focus:ring-4 focus:ring-amber-500/50 focus:border-amber-400"
            >
              {/* Choice number badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 
                            rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900
                            group-hover:scale-110 transition-transform duration-300">
                <span className="text-sm font-bold text-slate-900">{idx + 1}</span>
              </div>

              {/* Choice content */}
              <div className="px-6 py-5 text-left">
                <div className="flex items-start space-x-3">
                  {/* Icon */}
                  <svg className="w-5 h-5 mt-1 text-amber-400 flex-shrink-0 group-hover:text-amber-200 transition-colors" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  
                  {/* Text */}
                  <div 
                    className="text-slate-200 group-hover:text-white font-medium leading-relaxed transition-colors"
                    dangerouslySetInnerHTML={{ __html: processedText }}
                  />
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/0 to-amber-600/0 
                            group-hover:from-amber-400/10 group-hover:to-amber-600/10 
                            transition-all duration-300 pointer-events-none"></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
