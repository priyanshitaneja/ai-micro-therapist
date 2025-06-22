import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getAIResponseHeading } from '../../utils/emotions';
import SupportModal from '../modals/SupportModal';
import ShinyText from '../ui/ShinyText';
import LottieAnimation from '../ui/LottieAnimation';

interface AIStepProps {
  selectedMoodType: string;
  selectedEmotion: string;
  aiResponse: string;
  isLoading: boolean;
  onReset: () => void;
  onViewJourney: () => void;
}

const zenMessages = [
  "Taking a moment to understand your feelings...",
  "Gathering gentle wisdom for you...",
  "Creating a space for healing thoughts...",
  "Connecting with compassionate insights...",
  "Weaving together supportive words...",
  "Finding the right encouragement for your journey...",
  "Preparing thoughtful guidance just for you...",
  "Cultivating mindful responses...",
  "Embracing your emotions with care...",
  "Discovering pathways to inner peace..."
];

export default function AIStep({
  selectedMoodType,
  selectedEmotion,
  aiResponse,
  isLoading,
  onReset,
  onViewJourney
}: AIStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % zenMessages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center w-full"
      >
        {isLoading ? (
          <div className="py-12">
            <div className="mb-8 flex justify-center">
              <LottieAnimation size={96} />
            </div>
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="h-16 flex items-center justify-center"
            >
              <ShinyText 
                text={zenMessages[currentMessageIndex]}
                disabled={false}
                speed={3}
                className="text-lg font-light leading-relaxed max-w-md mx-auto"
              />
            </motion.div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {getAIResponseHeading(selectedMoodType, selectedEmotion)} 💙
            </h2>                  
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-6 text-left border border-white/50">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {typeof aiResponse === 'string' ? aiResponse : 'Unable to load AI response'}
              </p>
            </div>

            <button
              onClick={onReset}
              className="py-4 px-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 mb-8 cursor-pointer"
            >
              Log Another Emotion
            </button>

            {/* More Support Section */}
            <div className="mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-indigo-600 hover:text-indigo-800 text-sm transition-colors bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full cursor-pointer"
              >
                Need more support?
              </button>
            </div>

            <div>
              <button
                onClick={onViewJourney}
                className="text-indigo-600 hover:text-indigo-800 text-lg transition-colors underline hover:no-underline cursor-pointer"
              >
                See your journey
              </button>
            </div>
          </>
        )}
      </motion.div>
      
      <SupportModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
} 