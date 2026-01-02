import React from 'react';

interface ControlBarProps {
  onRestart: () => void;
  onSave: () => void;
  onLoad: () => void;
  hasSavedGame: boolean;
  warriorsMode: boolean;
  onWarriorsModeToggle: (enabled: boolean) => void;
}

export const ControlBar: React.FC<ControlBarProps> = ({
  onRestart,
  onSave,
  onLoad,
  hasSavedGame,
  warriorsMode,
  onWarriorsModeToggle,
}) => {
  return (
    <div className="control-bar bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm transition-colors duration-200"
          >
            Restart
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-sm transition-colors duration-200"
          >
            Save
          </button>
          <button
            onClick={onLoad}
            disabled={!hasSavedGame}
            className={`px-4 py-2 rounded-md shadow-sm transition-colors duration-200 ${
              hasSavedGame
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            Load
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <span className="text-sm font-medium">Warriors of Middle Earth</span>
            <input
              type="checkbox"
              checked={warriorsMode}
              onChange={(e) => onWarriorsModeToggle(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
