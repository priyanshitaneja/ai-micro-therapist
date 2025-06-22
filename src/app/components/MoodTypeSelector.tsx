import { motion } from 'framer-motion';
import { MoodType } from '../types';

const moodTypes: MoodType[] = [
  {
    color: 'red',
    bgColor: 'bg-rose-500',
    label: 'High Energy',
    description: 'Unpleasant'
  },
  {
    color: 'yellow',
    bgColor: 'bg-amber-500',
    label: 'High Energy', 
    description: 'Pleasant'
  },
  {
    color: 'blue',
    bgColor: 'bg-slate-500',
    label: 'Low Energy',
    description: 'Unpleasant'
  },
  {
    color: 'green',
    bgColor: 'bg-emerald-500',
    label: 'Low Energy',
    description: 'Pleasant'
  }
];

interface MoodTypeSelectorProps {
  onMoodTypeSelect: (moodType: string) => void;
}

export default function MoodTypeSelector({ onMoodTypeSelect }: MoodTypeSelectorProps) {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto"
      >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          How&apos;s your energy today?
        </h2>
        <p className="text-gray-600">
          Choose the circle that best matches your current state
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:gap-x-6 md:gap-y-16 max-w-lg mx-auto">
        {moodTypes.map((moodType, index) => (
          <div key={moodType.color} className="flex justify-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onMoodTypeSelect(moodType.color)}
              className="group cursor-pointer relative"
            >
              {/* Background Circle - Subtle and Animating */}
              <motion.div 
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1.2
                }}
                className={`
                  absolute inset-0
                  w-36 h-36 md:w-44 md:h-44 rounded-full ${moodType.bgColor}
                  opacity-30
                `}
              />
              
              {/* Main Circle with Text */}
              <motion.div 
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`
                  relative z-10
                  w-36 h-36 md:w-44 md:h-44 rounded-full ${moodType.bgColor}
                  flex flex-col items-center justify-center
                  group-hover:brightness-105 transition-all duration-500
                  border border-white/20
                `}
              >
                <div className="text-white text-center px-4">
                  <div className="font-medium text-base md:text-lg mb-1">
                    {moodType.label}
                  </div>
                  <div className="text-white/80 text-sm md:text-base font-light">
                    {moodType.description}
                  </div>
                </div>
              </motion.div>
            </motion.button>
          </div>
        ))}
      </div>


    </motion.div>
    </div>
  );
} 