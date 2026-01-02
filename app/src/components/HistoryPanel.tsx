import React, { useState } from 'react';
import type { HistoryEntry } from '../hooks/useInkStory';

interface HistoryPanelProps {
  history: HistoryEntry[];
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({ history }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (history.length === 0) return null;

  return (
    <div className="history-panel fixed bottom-0 right-0 max-w-md m-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
      >
        {isExpanded ? '▼' : '▲'} History ({history.length})
      </button>
      
      {isExpanded && (
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {history.map((entry, index) => (
            <div
              key={index}
              className={`text-sm p-2 rounded ${
                entry.choice
                  ? 'bg-blue-100 dark:bg-blue-900 font-semibold'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <div
                className="text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: entry.text.substring(0, 200) + (entry.text.length > 200 ? '...' : '') }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
