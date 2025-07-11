import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import splashPhotoPath from "@assets/SY_01386_1752141650714.jpg";

export default function SplashScreen() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Black and white couple photo as background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${splashPhotoPath})` }}
      />
      
      <div className="relative text-center text-white z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-script text-4xl mb-2 opacity-90">Sung Jun & Yeon Su</h1>
          <p className="text-lg font-light tracking-wide opacity-80">이성준 ♡ 이연수</p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center space-x-2 text-sm opacity-70"
        >
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="text-xs font-semibold">
              {countdown > 0 ? countdown : ""}
            </div>
          </div>
          <span className="text-xs">Wedding Invitation</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
