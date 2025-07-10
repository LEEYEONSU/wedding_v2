import { motion } from "framer-motion";
import heroPhotoPath from "@assets/SY_01386_1752142331214.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Black and white couple photo as background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${heroPhotoPath})` 
        }}
      />
      <div className="absolute inset-0 from-black/30 via-transparent to-black/50 bg-[#0000007a]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center text-white px-6 max-w-sm mx-auto"
      >
        <div className="mb-8">
          <p className="text-sm font-light opacity-80 mb-2">2025. 10. 18</p>
          <h1 className="font-script text-5xl mb-4 leading-tight">
            Seong Jun<br />
            <span className="text-3xl">&</span><br />
            Yeon Su
          </h1>
          <div className="text-lg font-light mb-6">
            <p>이성준 ♡ 이연수</p>
          </div>
        </div>
        
        <div className="border-t border-white/30 pt-6">
          <p className="text-sm font-light opacity-90">2024년 10월 18일 토요일 오후 5시</p>
          <p className="text-sm font-light opacity-90">선릉역 르비르모어</p>
        </div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-lg opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
