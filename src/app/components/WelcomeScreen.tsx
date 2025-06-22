import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: 'linear-gradient(113deg,rgba(109, 201, 237, 1) 0%, rgba(54, 173, 86, 1) 100%)'}}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        {/* Main Welcome Animation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          className="mb-12"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-6xl md:text-8xl mb-8"
          >
            🧘‍♀️
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="text-3xl md:text-4xl font-light text-white/95 mb-6 tracking-wide"
          >
            Hi, I&apos;m P
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.2 }}
            className="text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed"
          >
            Your personal mental health companion
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-20 text-3xl opacity-30"
          >
            ✨
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -top-16 -right-16 text-3xl opacity-30"
          >
            💙
          </motion.div>

          <motion.div
            animate={{ 
              y: [-5, 15, -5],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-12 -left-4 text-3xl opacity-30"
          >
            🌱
          </motion.div>
        </motion.div>

        {/* Enter Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300 shadow-lg cursor-pointer"
        >
          Let&apos;s begin your journey
        </motion.button>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="text-white/60 text-sm mt-8"
        >
          A safe space to track and understand your emotions
        </motion.p>
      </motion.div>
    </div>
  );
} 