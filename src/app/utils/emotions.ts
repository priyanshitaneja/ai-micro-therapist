export const getEmojiForEmotion = (emotion: string): string => {
  const emojiMap: Record<string, string> = {
    // Red emotions
    "Frustrated": "😤", "Angry": "😡", "Furious": "🤬", "Mad": "😠", "Heated": "🔥", "Charged": "⚡",
    // Yellow emotions  
    "Happy": "😊", "Excited": "🎉", "Ecstatic": "😆", "Amazed": "🤩", "Celebratory": "🥳", "Energized": "✨",
    // Blue emotions
    "Sad": "😢", "Dejected": "😔", "Disappointed": "😞", "Weary": "😪", "Blue": "💙", "Gloomy": "🌧️",
    // Green emotions
    "Peaceful": "😌", "Zen": "🧘", "Sleepy": "😴", "Content": "🤗", "Tranquil": "🍃", "Grateful": "💚"
  };
  return emojiMap[emotion] || "😐";
};

export const getMoodTypeDescription = (moodType: string): string => {
  const descriptions: Record<string, string> = {
    red: "High Energy, Unpleasant (feeling activated but distressed)",
    yellow: "High Energy, Pleasant (feeling activated and positive)",
    blue: "Low Energy, Unpleasant (feeling low and distressed)",
    green: "Low Energy, Pleasant (feeling calm and positive)"
  };
  return descriptions[moodType] || moodType;
};

export const getAIResponseHeading = (moodType: string, emotion: string): string => {
  // For positive emotions (yellow, green), use encouraging language
  if (moodType === 'yellow' || moodType === 'green') {
    return `It's great that you are feeling ${emotion.toLowerCase()}`;
  }
  // For difficult emotions (red, blue), use more supportive language
  return "I'm here to help";
};

export const getFallbackResponse = (moodType: string): string => {
  const fallbacks: Record<string, string> = {
    red: "I understand you're experiencing intense feelings right now. When emotions run high, it can help to take a few deep breaths and remind yourself that this feeling will pass.",
    yellow: "It's wonderful that you're feeling energized and positive! These moments of joy and excitement are precious. Consider taking a moment to savor this feeling.",
    blue: "I hear that you're going through a difficult time, and that takes courage to acknowledge. When we're feeling low, sometimes the smallest acts of self-care can make a difference.",
    green: "It sounds like you're in a peaceful space right now, which is beautiful. These moments of calm and contentment are worth appreciating."
  };
  return fallbacks[moodType] || "Thank you for sharing how you're feeling. Recognizing and acknowledging our emotions is an important step in taking care of our mental health.";
}; 