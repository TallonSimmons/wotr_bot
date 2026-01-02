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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            War of the Ring Bot
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center font-['RingbearerMedium']">
            War of the Ring Bot
          </h1>
          <p className="text-center text-gray-300 mt-2">v1.6 - Modern Edition</p>
        </div>
      </header>

      {/* Control Bar */}
      <ControlBar
        onRestart={restart}
        onSave={saveGame}
        onLoad={loadGame}
        hasSavedGame={hasSavedGame}
        warriorsMode={warriorsOfMiddleEarth}
        onWarriorsModeToggle={toggleWarriorsMode}
      />

      {/* Main Content Area */}
      <main className="py-8">
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
            <p className="text-gray-600 dark:text-gray-400">
              The story has ended. Click Restart to begin again.
            </p>
          </div>
        )}
      </main>

      {/* History Panel */}
      <HistoryPanel history={history} />
    </div>
  );
}

export default App;
