import { motion } from 'framer-motion';
import { Emotion } from '../types';

const emotionsByMoodType: Record<string, Emotion[]> = {
  red: [
    { emoji: "😤", name: "Frustrated", description: "Feeling blocked or annoyed" },
    { emoji: "😡", name: "Angry", description: "Feeling intense irritation" },
    { emoji: "🤬", name: "Furious", description: "Feeling extreme anger" },
    { emoji: "😠", name: "Mad", description: "Feeling upset and angry" },
    { emoji: "🔥", name: "Heated", description: "Feeling fired up or intense" },
    { emoji: "⚡", name: "Charged", description: "Feeling electric and agitated" }
  ],
  yellow: [
    { emoji: "😊", name: "Happy", description: "Feeling joyful and content" },
    { emoji: "🎉", name: "Excited", description: "Feeling thrilled and energetic" },
    { emoji: "😆", name: "Ecstatic", description: "Feeling extremely happy" },
    { emoji: "🤩", name: "Amazed", description: "Feeling wonderstruck" },
    { emoji: "🥳", name: "Celebratory", description: "Feeling like partying" },
    { emoji: "✨", name: "Energized", description: "Feeling full of positive energy" }
  ],
  blue: [
    { emoji: "😢", name: "Sad", description: "Feeling down or melancholy" },
    { emoji: "😔", name: "Dejected", description: "Feeling disappointed" },
    { emoji: "😞", name: "Disappointed", description: "Feeling let down" },
    { emoji: "😪", name: "Weary", description: "Feeling emotionally drained" },
    { emoji: "💙", name: "Blue", description: "Feeling quiet sadness" },
    { emoji: "🌧️", name: "Gloomy", description: "Feeling under a cloud" }
  ],
  green: [
    { emoji: "😌", name: "Peaceful", description: "Feeling calm and serene" },
    { emoji: "🧘", name: "Zen", description: "Feeling centered and balanced" },
    { emoji: "😴", name: "Sleepy", description: "Feeling drowsy and relaxed" },
    { emoji: "🤗", name: "Content", description: "Feeling satisfied and at ease" },
    { emoji: "🍃", name: "Tranquil", description: "Feeling quietly happy" },
    { emoji: "💚", name: "Grateful", description: "Feeling thankful and appreciative" }
  ]
};

interface EmotionSelectorProps {
  moodType: string;
  onEmotionSelect: (emotion: string) => void;
  onBack: () => void;
}

export default function EmotionSelector({ moodType, onEmotionSelect, onBack }: EmotionSelectorProps) {
  const emotions = emotionsByMoodType[moodType] || [];
  
  const getMoodTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      red: "High Energy, Unpleasant",
      yellow: "High Energy, Pleasant", 
      blue: "Low Energy, Unpleasant",
      green: "Low Energy, Pleasant"
    };
    return labels[type] || type;
  };

  const getMoodTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      red: "text-red-500",
      yellow: "text-yellow-500",
      blue: "text-blue-500", 
      green: "text-green-500"
    };
    return colors[type] || "text-gray-500";
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4 relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        aria-label="Go back to mood type selection"
        className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer z-10"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto"
      >

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How exactly are you feeling?
        </h2>
        <p className={`text-lg font-medium ${getMoodTypeColor(moodType)} mb-2`}>
          {getMoodTypeLabel(moodType)}
        </p>
        <p className="text-gray-700">
          Choose the emotion that best describes your current state
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {emotions.map((emotion, index) => (
          <motion.button
            key={emotion.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 120,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onEmotionSelect(emotion.name)}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/90 transition-all duration-300 border border-white/50 group cursor-pointer"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
              {emotion.emoji}
            </div>
            <div className="font-semibold text-gray-800 mb-1">
              {emotion.name}
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              {emotion.description}
            </div>
          </motion.button>
        ))}
      </div>


    </motion.div>
    </div>
  );
} 