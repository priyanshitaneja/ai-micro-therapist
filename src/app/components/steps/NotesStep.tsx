import { motion } from 'framer-motion';
import { getEmojiForEmotion } from '../../utils/emotions';

interface NotesStepProps {
  selectedEmotion: string;
  notes: string;
  setNotes: (notes: string) => void;
  onBack: () => void;
  onSkip: () => void;
  onSubmit: () => void;
}

export default function NotesStep({
  selectedEmotion,
  notes,
  setNotes,
  onBack,
  onSkip,
  onSubmit
}: NotesStepProps) {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4 relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        aria-label="Go back to emotion selection"
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
        className="max-w-2xl mx-auto w-full"
      >

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">{getEmojiForEmotion(selectedEmotion)}</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What&apos;s happening?</h2>
          <p className="text-gray-700 text-lg">
            You&apos;re feeling <span className="font-semibold">{selectedEmotion.toLowerCase()}</span>. 
            Share what&apos;s on your heart.
          </p>
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Share what's happening in your life, what triggered this feeling, or anything else you'd like to talk about..."
          className="w-full p-6 bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl focus:ring-2 focus:ring-white/60 focus:border-transparent resize-none text-gray-700 text-lg leading-relaxed"
          rows={6}
        />

        <div className="flex gap-4 mt-8">
          <button
            onClick={onSkip}
            className="flex-1 py-4 px-6 bg-white/40 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-white/60 transition-all duration-300 cursor-pointer"
          >
            Skip for now
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 py-4 px-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 cursor-pointer"
          >
            Help me feel better
          </button>
        </div>
      </motion.div>
    </div>
  );
} 