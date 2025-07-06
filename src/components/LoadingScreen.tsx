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
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <motion.img
            src={medicalLogo}
            alt="SV Healthcare Logo"
            className="w-32 h-32 mx-auto"
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 360]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4, repeat: Infinity, ease: "linear" }
            }}
          />
          <motion.div
            className="absolute inset-0 w-32 h-32 mx-auto border-4 border-primary-light rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Company Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1 
            className="text-6xl font-heading font-bold text-white mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SV Healthcare
          </motion.h1>
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
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-white to-primary-light rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="absolute -top-1 w-4 h-4 bg-white rounded-full shadow-glow"
              style={{ left: `${progress}%` }}
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
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

        {/* Medical Icons Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center space-x-8 mt-12"
        >
          {[
            { icon: "⚕️", delay: 0 },
            { icon: "🏥", delay: 0.2 },
            { icon: "🩺", delay: 0.4 },
            { icon: "💊", delay: 0.6 },
            { icon: "🧬", delay: 0.8 }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-3xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                delay: item.delay,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              {item.icon}
            </motion.div>
          ))}
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