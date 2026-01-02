import { useState, useEffect, useCallback, useRef } from 'react';
import { Story } from 'inkjs';
import { storyContent } from '../data/storyContent';

export interface StoryStep {
  text: string;
  tags: string[];
  choices: Array<{
    index: number;
    text: string;
  }>;
}

export interface HistoryEntry {
  text: string;
  choice?: string;
  timestamp: Date;
}

export const useInkStory = () => {
  const storyRef = useRef<Story | null>(null);
  const [currentStep, setCurrentStep] = useState<StoryStep | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [warriorsOfMiddleEarth, setWarriorsOfMiddleEarth] = useState(false);

  // Initialize story
  useEffect(() => {
    try {
      const story = new Story(storyContent as any);
      storyRef.current = story;
      
      // Set initial variable
      story.variablesState['warriors_of_middle_earth'] = warriorsOfMiddleEarth;
      
      setIsLoading(false);
      continueStory();
    } catch (error) {
      console.error('Failed to initialize story:', error);
      setIsLoading(false);
    }
  }, []);

  const continueStory = useCallback(() => {
    const story = storyRef.current;
    if (!story) return;

    let textParts: string[] = [];
    let allTags: string[] = [];

    // Collect all text until we hit choices
    while (story.canContinue) {
      const text = story.Continue();
      if (text && text.trim()) {
        textParts.push(text);
      }
      // Handle currentTags which can be string[] or null
      const tags = story.currentTags;
      if (tags && Array.isArray(tags)) {
        allTags = [...allTags, ...tags];
      }
    }

    const fullText = textParts.join('');
    const choices = story.currentChoices.map((choice) => ({
      index: choice.index,
      text: choice.text,
    }));

    setCurrentStep({
      text: fullText,
      tags: allTags,
      choices,
    });

    // Add to history
    if (fullText.trim()) {
      setHistory((prev) => [
        ...prev,
        {
          text: fullText,
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  const makeChoice = useCallback((choiceIndex: number) => {
    const story = storyRef.current;
    if (!story) return;

    const choiceText = story.currentChoices.find(c => c.index === choiceIndex)?.text;
    
    story.ChooseChoiceIndex(choiceIndex);
    
    // Add choice to history
    if (choiceText) {
      setHistory((prev) => [
        ...prev,
        {
          text: `> ${choiceText}`,
          choice: choiceText,
          timestamp: new Date(),
        },
      ]);
    }

    continueStory();
  }, [continueStory]);

  const restart = useCallback(() => {
    const story = storyRef.current;
    if (!story) return;

    story.ResetState();
    story.variablesState['warriors_of_middle_earth'] = warriorsOfMiddleEarth;
    setHistory([]);
    continueStory();
  }, [warriorsOfMiddleEarth, continueStory]);

  const saveGame = useCallback(() => {
    const story = storyRef.current;
    if (!story) return false;

    try {
      const saveState = story.state.toJson();
      localStorage.setItem('wotr-save-state', saveState);
      localStorage.setItem('wotr-warriors-mode', warriorsOfMiddleEarth.toString());
      setSavedGameExists(true);
      return true;
    } catch (error) {
      console.error('Failed to save game:', error);
      return false;
    }
  }, [warriorsOfMiddleEarth]);

  const loadGame = useCallback(() => {
    const story = storyRef.current;
    if (!story) return false;

    try {
      const savedState = localStorage.getItem('wotr-save-state');
      const savedWarriorsMode = localStorage.getItem('wotr-warriors-mode');
      
      if (savedState) {
        story.state.LoadJson(savedState);
        if (savedWarriorsMode) {
          setWarriorsOfMiddleEarth(savedWarriorsMode === 'true');
        }
        
        // Get current state after loading
        const choices = story.currentChoices.map((choice) => ({
          index: choice.index,
          text: choice.text,
        }));
        
        setCurrentStep({
          text: '[Game Loaded]',
          tags: [],
          choices,
        });
        
        setHistory([{ text: '[Game Loaded]', timestamp: new Date() }]);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to load game:', error);
      return false;
    }
  }, []);

  const toggleWarriorsMode = useCallback((enabled: boolean) => {
    setWarriorsOfMiddleEarth(enabled);
    const story = storyRef.current;
    if (story) {
      story.variablesState['warriors_of_middle_earth'] = enabled;
    }
  }, []);

  const hasSavedGame = useCallback(() => {
    return localStorage.getItem('wotr-save-state') !== null;
  }, []);

  // Track if game has been saved
  const [savedGameExists, setSavedGameExists] = useState(hasSavedGame());

  useEffect(() => {
    setSavedGameExists(hasSavedGame());
  }, [hasSavedGame, currentStep]);

  return {
    currentStep,
    history,
    isLoading,
    makeChoice,
    restart,
    saveGame,
    loadGame,
    hasSavedGame: savedGameExists,
    warriorsOfMiddleEarth,
    toggleWarriorsMode,
  };
};
