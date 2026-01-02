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
    <div className="control-bar sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Action buttons group */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRestart}
              className="group relative px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 
                       text-white font-semibold rounded-lg shadow-lg hover:shadow-red-500/50
                       transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Restart</span>
              </span>
            </button>
            
            <button
              onClick={onSave}
              className="group relative px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 
                       text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/50
                       transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                <span>Save</span>
              </span>
            </button>
            
            <button
              onClick={onLoad}
              disabled={!hasSavedGame}
              className={`group relative px-5 py-2.5 font-semibold rounded-lg shadow-lg
                       transition-all duration-300 transform
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
                       ${hasSavedGame 
                         ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white hover:shadow-blue-500/50 hover:scale-105 focus:ring-blue-400' 
                         : 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-50'
                       }`}
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>Load</span>
              </span>
            </button>
          </div>
          
          {/* Warriors mode toggle with modern design */}
          <div className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <span className="text-sm font-semibold text-slate-300 group-hover:text-amber-300 transition-colors">
                Warriors of Middle Earth
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={warriorsMode}
                  onChange={(e) => onWarriorsModeToggle(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500/50 
                              rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                              after:bg-white after:border-slate-300 after:border after:rounded-full 
                              after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
