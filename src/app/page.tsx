"use client";

import { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { FlowStep, ViewMode } from './types';
import { useMoodEntries } from './hooks/useMoodEntries';
import { getAIResponse } from './services/aiService';
import MoodTypeSelector from './components/MoodTypeSelector';
import EmotionSelector from './components/EmotionSelector';
import WelcomeScreen from './components/WelcomeScreen';
import NotesStep from './components/steps/NotesStep';
import AIStep from './components/steps/AIStep';
import CompleteStep from './components/steps/CompleteStep';
import JourneyView from './components/steps/JourneyView';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('main');
  const [currentStep, setCurrentStep] = useState<FlowStep>('moodType');
  const [selectedMoodType, setSelectedMoodType] = useState<string>("");
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { moodEntries, addMoodEntry } = useMoodEntries();

  const handleMoodTypeSelect = (moodType: string) => {
    setSelectedMoodType(moodType);
    setCurrentStep('emotion');
  };

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    setCurrentStep('notes');
  };

  const handleBack = () => {
    if (currentStep === 'emotion') {
      setCurrentStep('moodType');
    } else if (currentStep === 'notes') {
      setCurrentStep('emotion');
    } else if (currentStep === 'ai') {
      setCurrentStep('notes');
    }
  };

  // Handler functions
  const handleNotesSubmit = async () => {
    setIsLoading(true);
    setCurrentStep('ai');
    
    // Get AI response
    const aiReply = await getAIResponse(selectedMoodType, selectedEmotion, notes, moodEntries);
    setAiResponse(aiReply);

    // Save mood entry using the hook
    addMoodEntry(selectedMoodType, selectedEmotion, notes, aiReply);
    setIsLoading(false);
  };

  const handleSkip = () => {
    // Save mood entry without AI response using the hook
    addMoodEntry(selectedMoodType, selectedEmotion, "", "");
    setCurrentStep('complete');
  };

  const resetFlow = () => {
    setCurrentStep('moodType');
    setSelectedMoodType('');
    setSelectedEmotion('');
    setNotes('');
    setAiResponse('');
  };



  // Journey View
  if (viewMode === 'journey') {
    return (
      <JourneyView 
        moodEntries={moodEntries}
        onBack={() => setViewMode('main')}
      />
    );
  }

  // Welcome Screen
  if (showWelcome) {
    return (
      <WelcomeScreen onStart={() => setShowWelcome(false)} />
    );
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === 'moodType' && (
          <MoodTypeSelector
            onMoodTypeSelect={handleMoodTypeSelect}
          />
        )}

        {currentStep === 'emotion' && (
          <EmotionSelector
            moodType={selectedMoodType}
            onEmotionSelect={handleEmotionSelect}
            onBack={handleBack}
          />
        )}

        {currentStep === 'notes' && (
          <NotesStep
            selectedEmotion={selectedEmotion}
            notes={notes}
            setNotes={setNotes}
            onBack={handleBack}
            onSkip={handleSkip}
            onSubmit={handleNotesSubmit}
          />
        )}

        {currentStep === 'ai' && (
          <AIStep
            selectedMoodType={selectedMoodType}
            selectedEmotion={selectedEmotion}
            aiResponse={aiResponse}
            isLoading={isLoading}
            onReset={resetFlow}
            onViewJourney={() => setViewMode('journey')}
          />
        )}

        {currentStep === 'complete' && (
          <CompleteStep
            onReset={resetFlow}
            onViewJourney={() => setViewMode('journey')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

