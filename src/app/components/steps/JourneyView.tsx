import BackButton from '../ui/BackButton';
import { MoodEntry } from '../../types';

interface JourneyViewProps {
  moodEntries: MoodEntry[];
  onBack: () => void;
}

export default function JourneyView({ moodEntries, onBack }: JourneyViewProps) {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 pt-8">
          <BackButton onClick={onBack} />
          <h1 className="text-3xl font-bold text-gray-800">Your Journey</h1>
          <div className="w-16"></div>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-700 text-lg">You&apos;ve come a long way on your journey of self-discovery ✨</p>
        </div>
        
        {moodEntries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-6">📝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">No entries yet</h3>
            <p className="text-gray-700 mb-8 text-lg">Start tracking your emotions to see your journey unfold</p>
            <button
              onClick={onBack}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 cursor-pointer"
            >
              Log Your First Emotion
            </button>
          </div>
        ) : (
          <div className="space-y-4 pb-8">
            {moodEntries.map((entry) => (
              <div key={entry.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{entry.emoji}</span>
                    <span className="font-medium text-gray-800 text-lg">{entry.emotion}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">{entry.date}</div>
                    <div className="text-xs text-gray-400">{entry.timestamp}</div>
                  </div>
                </div>
                {entry.notes && (
                  <p className="text-gray-700 mb-3 leading-relaxed">{entry.notes}</p>
                )}
                {entry.aiResponse && (
                  <div className="bg-purple-100/80 backdrop-blur-sm rounded-2xl p-4 mt-3">
                    <p className="text-purple-800 leading-relaxed">
                      {typeof entry.aiResponse === 'string' ? entry.aiResponse : 'AI response unavailable'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 