import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import medicalLogo from '@/assets/medical-logo.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing Healthcare System...');

  const loadingTexts = [
    'Initializing Healthcare System...',
    'Loading Patient Records...',
    'Connecting to Medical Database...',
    'Preparing Advanced Diagnostics...',
    'Optimizing Treatment Protocols...',
    'Welcome to SV Healthcare!'
  ];

  useEffect(() => {
    const duration = 8000; // 8 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const progressStep = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + progressStep, 100);
        
        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
        setCurrentText(loadingTexts[textIndex]);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-hero flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Text Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Professional Business SV Logo */}
          <div className="text-8xl font-bold text-white mb-4 tracking-wider">
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8, ease: "easeOut" },
                rotateY: { duration: 0.8, ease: "easeOut" },
                textShadow: { duration: 2, repeat: 2 }
              }}
            >
              S
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              />
            </motion.span>
            <motion.span
              className="inline-block ml-4 relative"
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                rotateY: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                textShadow: { duration: 2, repeat: 2, delay: 0.2 }
              }}
            >
              V
              <motion.div
                className="absolute -top-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  delay: 1.0,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              />
            </motion.span>
          </div>
          
          {/* HEALTHCARE text */}
          <motion.div 
            className="text-3xl font-light text-white/90 tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.5,
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            HEALTHCARE
          </motion.div>
        </motion.div>

        {/* Company Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >

          <motion.p 
            className="text-xl text-white/90 font-medical"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Advanced Medical Solutions
          </motion.p>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-80 mx-auto space-y-4"
        >
          {/* ECG Style Progress Bar */}
          <div className="relative">
            <div className="w-full h-16 bg-transparent rounded-lg overflow-hidden">
              {/* ECG Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-4 opacity-10">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border-r border-white/20" />
                ))}
              </div>
              
              {/* ECG Wave Animation */}
              <motion.div
                className="relative h-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,50 L10,30 L20,70 L30,20 L40,80 L50,40 L60,60 L70,30 L80,70 L90,50 L100,50"
                    stroke="url(#ecgGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Heartbeat Pulse */}
                <motion.div
                  className="absolute top-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg"
                  style={{ left: `${progress}%` }}
                  animate={{ 
                    scale: [1, 2.5, 1],
                    opacity: [1, 0.6, 1]
                  }}
                  transition={{ 
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            className="text-white/80 font-medical text-lg"
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {currentText}
          </motion.p>

          {/* Progress Percentage */}
          <motion.div
            className="text-white font-bold text-2xl font-heading"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>


      </div>

      {/* Background Medical Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white rounded-full animate-pulse-medical" />
        <div className="absolute top-40 right-32 w-12 h-12 border border-white rotate-45 animate-rotate-medical" />
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-white rounded-full animate-heartbeat" />
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-white rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingScreen;