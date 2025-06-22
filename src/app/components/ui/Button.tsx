import { motion } from 'framer-motion';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}: ButtonProps) {
  const baseClasses = "font-medium transition-all duration-300 cursor-pointer";
  
  const variantClasses = {
    primary: "py-4 px-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full",
    secondary: "py-4 px-6 bg-white/40 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white/60",
    link: "text-indigo-600 hover:text-indigo-800 text-lg underline hover:no-underline"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
} 