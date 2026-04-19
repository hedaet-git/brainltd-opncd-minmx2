"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onComplete?: () => void;
  minimumDuration?: number;
}

const SPLINE_SCENE = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export function LoadingScreen({ onComplete, minimumDuration = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minimumDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [minimumDuration]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleExit = () => {
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onAnimationComplete={handleExit}
          className="fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Spline
              scene={SPLINE_SCENE}
              onLoad={handleLoad}
              style={{ visibility: isLoading ? "visible" : "visible" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-playfair text-5xl md:text-7xl text-warm-off-white tracking-wider">
                BRAIN<span className="text-muted-brass">.</span>
              </h1>
              <p className="text-muted-brass tracking-[0.3em] uppercase text-sm mt-2">
                Interior Design
              </p>
            </motion.div>

            <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-muted-brass"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-warm-off-white/50 text-xs tracking-widest uppercase">
              {Math.round(progress)}%
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 text-warm-off-white/30 text-xs tracking-widest"
          >
            Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}