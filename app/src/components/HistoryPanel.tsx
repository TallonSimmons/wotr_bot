import React, { useState } from 'react';
import type { HistoryEntry } from '../hooks/useInkStory';

interface HistoryPanelProps {
  history: HistoryEntry[];
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({ history }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (history.length === 0) return null;

  return (
    <div className="history-panel fixed bottom-4 right-4 w-80 max-w-[calc(100vw-2rem)] z-50">
      {/* Modern card design */}
      <div className="bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden">
        {/* Header button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-5 py-3 text-left font-semibold bg-gradient-to-r from-slate-700/50 to-slate-800/50
                   hover:from-slate-700/70 hover:to-slate-800/70 transition-all duration-300
                   border-b border-slate-700/50 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-200 group-hover:text-amber-300 transition-colors">
                History
              </span>
              <span className="px-2 py-0.5 text-xs font-bold bg-amber-600 text-white rounded-full">
                {history.length}
              </span>
            </div>
            <svg 
              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        
        {/* Expandable content */}
        {isExpanded && (
          <div className="max-h-96 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {history.map((entry, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-3 transition-all duration-200 hover:scale-[1.02]
                          ${entry.choice
                            ? 'bg-gradient-to-br from-amber-900/40 to-amber-800/40 border border-amber-700/50 shadow-md'
                            : 'bg-slate-700/40 border border-slate-600/50'
                          }`}
              >
                {/* Entry badge */}
                <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                              ${entry.choice ? 'bg-amber-600' : 'bg-slate-600'}`}>
                  {index + 1}
                </div>
                
                {/* Entry content */}
                <div
                  className={`text-sm leading-relaxed pl-3
                           ${entry.choice ? 'text-amber-100 font-semibold' : 'text-slate-300'}`}
                  dangerouslySetInnerHTML={{ 
                    __html: entry.text.substring(0, 150) + (entry.text.length > 150 ? '...' : '') 
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
