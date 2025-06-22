import { motion } from 'framer-motion';

interface CompleteStepProps {
  onReset: () => void;
  onViewJourney: () => void;
}

export default function CompleteStep({ onReset, onViewJourney }: CompleteStepProps) {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center w-full"
      >
        <div className="text-6xl mb-6">🌱</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Emotion logged!</h2>
        <p className="text-gray-700 mb-12 text-lg leading-relaxed">
          You took a beautiful step toward understanding yourself better. That takes courage and self-compassion.
        </p>

        <button
          onClick={onReset}
          className="py-4 px-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 mb-8 cursor-pointer"
        >
          Log Another Emotion
        </button>

        <div>
          <button
            onClick={onViewJourney}
            className="text-indigo-600 hover:text-indigo-800 text-lg transition-colors underline hover:no-underline cursor-pointer"
          >
            See your journey
          </button>
        </div>
      </motion.div>
    </div>
  );
} 