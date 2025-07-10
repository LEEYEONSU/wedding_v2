import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "@assets/01_SY_00057_1752144182676.jpg";
import img2 from "@assets/02_SY_00074_1752144182676.jpg";
import img3 from "@assets/03_SY_00082_1752144182676.jpg";
import img4 from "@assets/04_SY_00226_1752144194871.jpg";
import img5 from "@assets/07_SY_00533_1752144201272.jpg";
import img6 from "@assets/08_SY_00811_bw_1752144201272.jpg";
import img7 from "@assets/09_SY_00972_bw_1752144201272.jpg";
import img8 from "@assets/10_SY_00844_1752144201272.jpg";
import img9 from "@assets/11_SY_00876_bw_1752144225021.jpg";
import img10 from "@assets/12_SY_01130_1752144225021.jpg";
import img11 from "@assets/background_1752144194871.jpg";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: img1,
      alt: "신랑 신부 웨딩홀에서 손잡고 있는 모습"
    },
    {
      src: img2,
      alt: "신부 단독 웨딩드레스 포즈"
    },
    {
      src: img3,
      alt: "신부 웨딩부케 들고 웃는 모습"
    },
    {
      src: img4,
      alt: "신랑 신부 웨딩홀에서 앉아있는 모습"
    },
    {
      src: img5,
      alt: "신랑 신부 아치 앞에서 웃고 있는 모습"
    },
    {
      src: img6,
      alt: "신랑 신부 포옹하며 웃는 흑백 사진"
    },
    {
      src: img7,
      alt: "결혼반지 착용 모습 흑백 사진"
    },
    {
      src: img8,
      alt: "신랑 신부 계단에서 포즈"
    },
    {
      src: img9,
      alt: "신랑 신부 손잡고 계단에서 흑백 사진"
    },
    {
      src: img10,
      alt: "신랑 신부 정장 차림으로 서있는 모습"
    },
    {
      src: img11,
      alt: "신랑 신부 웨딩홀 흑백 배경"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-16 px-6 bg-cream">
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-script text-3xl text-warm-gold mb-4">Our Gallery</h2>
          <div className="w-12 h-px bg-warm-gold mx-auto mb-4" />
          <p className="text-sm text-gray-600">우리의 소중한 순간들</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {images.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          {images.slice(6).map((image, index) => (
            <motion.div
              key={index + 6}
              variants={itemVariants}
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Selected image"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <i className="fas fa-times" />
          </button>
        </motion.div>
      )}
    </section>
  );
}
