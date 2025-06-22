export interface MoodEntry {
  id: string;
  moodType: string;
  emotion: string;
  emoji: string;
  notes: string;
  aiResponse: string;
  timestamp: string;
  date: string;
}

export type FlowStep = 'moodType' | 'emotion' | 'notes' | 'ai' | 'complete';
export type ViewMode = 'main' | 'journey';

export interface Emotion {
  emoji: string;
  name: string;
  description: string;
}

export interface MoodType {
  color: string;
  bgColor: string;
  label: string;
  description: string;
} 