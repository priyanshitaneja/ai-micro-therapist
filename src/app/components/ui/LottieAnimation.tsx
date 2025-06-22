'use client';

import Lottie from 'lottie-react';
import { meditationAnimationData } from './meditationAnimation';

interface LottieAnimationProps {
  className?: string;
  size?: number;
}

export default function LottieAnimation({ className = '', size = 80 }: LottieAnimationProps) {
  return (
    <div 
      className={className}
      style={{ width: size, height: size }}
    >
      <Lottie 
        animationData={meditationAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
} 