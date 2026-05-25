"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Use a portal or fixed full screen container.
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1117] backdrop-blur-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8 relative"
          >
            <div className="relative flex items-center justify-center">
              <motion.img 
                src="/logo.png" 
                alt="NABD Logo" 
                className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(93,127,177,0.4)] z-10 pointer-events-none"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-[-40px] rounded-[100px] border border-primary/20 pointer-events-none"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute inset-[-60px] rounded-[120px] border border-primary/10 pointer-events-none"
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <motion.div
                className="h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
