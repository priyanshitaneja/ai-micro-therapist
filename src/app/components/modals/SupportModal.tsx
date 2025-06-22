import { motion } from 'framer-motion';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-blue-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full h-full bg-white/90 backdrop-blur-sm overflow-hidden"
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          aria-label="Close support modal"
          className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer z-10"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8 pt-16 h-full overflow-y-auto">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🤗</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">You&apos;re Not Alone</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Sometimes we need more support than an app can provide. Here are trusted resources 
              available 24/7 when you need someone to talk to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Crisis Support */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🆘</div>
                <h3 className="text-xl font-semibold text-red-800">Crisis Support</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-red-700 mb-1">National Suicide Prevention Lifeline</h4>
                  <a href="tel:988" className="text-2xl font-bold text-red-600 hover:text-red-800 transition-colors">
                    988
                  </a>
                  <p className="text-sm text-red-600 mt-1">Available 24/7, free and confidential</p>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-1">Crisis Text Line</h4>
                  <p className="text-lg font-semibold text-red-600">Text HOME to 741741</p>
                  <p className="text-sm text-red-600 mt-1">24/7 crisis support via text</p>
                </div>
              </div>
            </div>

            {/* Mental Health Support */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">💙</div>
                <h3 className="text-xl font-semibold text-blue-800">Mental Health Support</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">SAMHSA National Helpline</h4>
                  <a href="tel:1-800-662-4357" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    1-800-662-HELP (4357)
                  </a>
                  <p className="text-sm text-blue-600 mt-1">Treatment referral service, 24/7</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">NAMI HelpLine</h4>
                  <a href="tel:1-800-950-6264" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    1-800-950-NAMI (6264)
                  </a>
                  <p className="text-sm text-blue-600 mt-1">Mon-Fri 10am-10pm ET</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">KIRAN Mental Health Helpline (India)</h4>
                  <a href="tel:1800-599-0019" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    1800-599-0019
                  </a>
                  <p className="text-sm text-blue-600 mt-1">24/7 Toll-Free Mental Health Rehabilitation Helpline</p>
                </div>
              </div>
            </div>

            {/* Online Resources */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🌐</div>
                <h3 className="text-xl font-semibold text-green-800">Online Resources</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="font-medium text-green-700 hover:text-green-900 transition-colors">
                    BetterHelp
                  </a>
                  <p className="text-sm text-green-600">Professional online therapy</p>
                </div>
                <div>
                  <a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer" className="font-medium text-green-700 hover:text-green-900 transition-colors">
                    7 Cups
                  </a>
                  <p className="text-sm text-green-600">Free emotional support</p>
                </div>
                <div>
                  <a href="https://mhanational.org" target="_blank" rel="noopener noreferrer" className="font-medium text-green-700 hover:text-green-900 transition-colors">
                    Mental Health America
                  </a>
                  <p className="text-sm text-green-600">Resources and screening tools</p>
                </div>
              </div>
            </div>

            {/* Self-Care Tips */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🧘‍♀️</div>
                <h3 className="text-xl font-semibold text-purple-800">Immediate Self-Care</h3>
              </div>
              <div className="space-y-2 text-sm text-purple-700">
                <p>• Take 5 deep breaths</p>
                <p>• Drink a glass of water</p>
                <p>• Call a trusted friend or family member</p>
                <p>• Go for a short walk</p>
                <p>• Listen to calming music</p>
                <p>• Practice grounding: name 5 things you can see</p>
              </div>
            </div>
          </div>

          {/* Emergency Warning */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="bg-red-100 rounded-2xl p-6 border border-red-200 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="text-2xl mr-3">🚨</div>
                <h3 className="text-xl font-semibold text-red-800">Emergency</h3>
              </div>
              <p className="text-red-800 font-medium mb-2">
                <strong>If you&apos;re having thoughts of hurting yourself or others, please reach out immediately:</strong>
              </p>
              <p className="text-red-700">
                Call 988, go to your nearest emergency room, or call 911
              </p>
            </div>
          </div>

          {/* Support Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 leading-relaxed">
              Remember: Seeking help is a sign of strength, not weakness. You deserve support, 
              and there are people who want to help you through difficult times.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}