import { useState, useEffect } from 'react';
import { MoodEntry } from '../types';
import { getEmojiForEmotion } from '../utils/emotions';
import { formatTimestamp, formatDate } from '../utils/dateHelpers';

export const useMoodEntries = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

  // Load mood entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("moodEntries");
    if (savedEntries) {
      setMoodEntries(JSON.parse(savedEntries));
    }
  }, []);

  const addMoodEntry = (
    moodType: string,
    emotion: string,
    notes: string,
    aiResponse: string
  ) => {
    const now = new Date();
    
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      moodType,
      emotion,
      emoji: getEmojiForEmotion(emotion),
      notes,
      aiResponse,
      timestamp: formatTimestamp(now),
      date: formatDate(now),
    };

    const updatedEntries = [newEntry, ...moodEntries];
    setMoodEntries(updatedEntries);
    localStorage.setItem("moodEntries", JSON.stringify(updatedEntries));
    
    return newEntry;
  };

  return {
    moodEntries,
    addMoodEntry
  };
}; 