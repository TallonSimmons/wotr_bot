import React from 'react';
import { addTooltips } from '../utils/tooltips';

interface StoryDisplayProps {
  text: string;
  warriorsMode: boolean;
}

export const StoryDisplay: React.FC<StoryDisplayProps> = ({ text, warriorsMode }) => {
  const processedText = addTooltips(text, warriorsMode);
  
  return (
    <div className="story-display mb-8">
      {/* Main story card with modern design */}
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Card header with accent */}
        <div className="bg-gradient-to-r from-amber-700/20 to-amber-800/20 border-b border-amber-700/30 px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-amber-200 tracking-wide uppercase">Current Story</span>
          </div>
        </div>
        
        {/* Card content */}
        <div className="p-8">
          <div
            className="prose prose-lg prose-invert prose-amber max-w-none
                       prose-headings:text-amber-100 prose-headings:font-bold
                       prose-p:text-slate-200 prose-p:leading-relaxed
                       prose-strong:text-amber-300 prose-strong:font-bold
                       prose-ul:text-slate-300 prose-li:text-slate-300
                       prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300"
            dangerouslySetInnerHTML={{ __html: processedText }}
          />
        </div>
      </div>
    </div>
  );
};
