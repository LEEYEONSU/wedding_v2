import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/splash-screen";
import HeroSection from "@/components/hero-section";
import WeddingDetails from "@/components/wedding-details";
import GallerySection from "@/components/gallery-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";

export default function WeddingInvitation() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // 3 seconds countdown + 1 second fade

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-soft-white font-korean">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
            <WeddingDetails />
            <GallerySection />
            <LocationSection />
            <ContactSection />
            
            {/* Footer */}
            <footer className="py-8 px-6 bg-charcoal text-white text-center">
              <div className="max-w-sm mx-auto">
                <p className="font-script text-2xl mb-2">Sung Jun & Yeon Su</p>
                <p className="text-sm opacity-70 mb-4">2025.10.18 | 르비르모어</p>
                <p className="text-xs opacity-60">
                  소중한 분들을 모시고<br />
                  새로운 시작을 함께 나누고자 합니다
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
