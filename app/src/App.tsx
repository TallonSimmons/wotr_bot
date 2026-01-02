import { useInkStory } from './hooks/useInkStory';
import { ControlBar } from './components/ControlBar';
import { StoryDisplay } from './components/StoryDisplay';
import { Choices } from './components/Choices';
import { HistoryPanel } from './components/HistoryPanel';
import './App.css';

function App() {
  const {
    currentStep,
    history,
    isLoading,
    makeChoice,
    restart,
    saveGame,
    loadGame,
    hasSavedGame,
    warriorsOfMiddleEarth,
    toggleWarriorsMode,
  } = useInkStory();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-amber-500 border-t-transparent"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-amber-100 font-['RingbearerMedium']">
            War of the Ring Bot
          </h1>
          <p className="text-slate-400 text-lg">Loading your adventure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Header with gradient and better styling */}
      <header className="relative bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90 backdrop-blur-sm border-b border-amber-700/50 shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center font-['RingbearerMedium'] text-amber-50 drop-shadow-2xl tracking-wide">
            War of the Ring Bot
          </h1>
          <p className="text-center text-amber-200 mt-3 text-lg font-semibold tracking-wider">v1.6 - Modern Edition</p>
        </div>
      </header>

      {/* Control Bar with modern design */}
      <ControlBar
        onRestart={restart}
        onSave={saveGame}
        onLoad={loadGame}
        hasSavedGame={hasSavedGame}
        warriorsMode={warriorsOfMiddleEarth}
        onWarriorsModeToggle={toggleWarriorsMode}
      />

      {/* Main Content Area with container */}
      <main className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {currentStep && (
            <>
              {/* Story Text Display */}
              <StoryDisplay
                text={currentStep.text}
                warriorsMode={warriorsOfMiddleEarth}
              />

              {/* Choices */}
              <Choices
                choices={currentStep.choices}
                onChoiceSelect={makeChoice}
                warriorsMode={warriorsOfMiddleEarth}
              />
            </>
          )}

          {!currentStep && (
            <div className="text-center py-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl">
                <p className="text-slate-300 text-lg">
                  The story has ended. Click Restart to begin again.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* History Panel */}
      <HistoryPanel history={history} />
    </div>
  );
}

export default App;
