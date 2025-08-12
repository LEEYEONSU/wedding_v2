import { motion } from "framer-motion";
import { useRef, useState } from "react";
// Full images
import img1Full from "@assets/01_SY_00057_1752144182676.jpg";
import img2Full from "@assets/02_SY_00074_1752144182676.jpg";
import img3Full from "@assets/03_SY_00082_1752144182676.jpg";
import img4Full from "@assets/04_SY_00226_1752144194871.jpg";
import img5Full from "@assets/07_SY_00533_1752144201272.jpg";
import img6Full from "@assets/08_SY_00811_bw_1752144201272.jpg";
import img7Full from "@assets/09_SY_00972_bw_1752144201272.jpg";
import img8Full from "@assets/10_SY_00844_1752144201272.jpg";
import img9Full from "@assets/11_SY_00876_bw_1752144225021.jpg";
import img10Full from "@assets/12_SY_01130_1752144225021.jpg";
import img11Full from "@assets/background_1752144194871.jpg";
// Thumbnails (lighter variants in assets)
import img1 from "@assets/01_SY_00057_1752142923925.jpg";
import img2 from "@assets/02_SY_00074_1752142929175.jpg";
import img3 from "@assets/03_SY_00082_1752142934238.jpg";
import img4 from "@assets/04_SY_00226_1752142934238.jpg";
import img5 from "@assets/07_SY_00533_1752142939990.jpg";
import img6 from "@assets/08_SY_00811_bw_1752142939990.jpg";
import img7 from "@assets/09_SY_00972_bw_1752142939990.jpg";
import img8 from "@assets/10_SY_00844_1752142939990.jpg";
// Fallback to full where no light variant exists
import img9 from "@assets/11_SY_00876_bw_1752144225021.jpg";
import img10 from "@assets/12_SY_01130_1752144225021.jpg";
import img11 from "@assets/background_1752144194871.jpg";

// Dynamically include any user-uploaded images placed under `attached_assets/uploads/`
// Files: .jpg, .jpeg, .png, .webp
const uploadedImageModules = import.meta.glob("@assets/uploads/*.{jpg,jpeg,png,webp}", {
  eager: true,
});
const uploadedImagesSrc: string[] = Object.values(uploadedImageModules)
  .map((mod: any) => mod?.default as string)
  .filter(Boolean);

type GalleryImage = { src: string; alt: string; full?: string };

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isPanningRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const curatedImages: GalleryImage[] = [
    {
      src: img1,
      full: img1Full,
      alt: "신랑 신부 웨딩홀에서 손잡고 있는 모습"
    },
    {
      src: img2,
      full: img2Full,
      alt: "신부 단독 웨딩드레스 포즈"
    },
    {
      src: img3,
      full: img3Full,
      alt: "신부 웨딩부케 들고 웃는 모습"
    },
    {
      src: img4,
      full: img4Full,
      alt: "신랑 신부 웨딩홀에서 앉아있는 모습"
    },
    {
      src: img5,
      full: img5Full,
      alt: "신랑 신부 아치 앞에서 웃고 있는 모습"
    },
    {
      src: img6,
      full: img6Full,
      alt: "신랑 신부 포옹하며 웃는 흑백 사진"
    },
    {
      src: img7,
      full: img7Full,
      alt: "결혼반지 착용 모습 흑백 사진"
    },
    {
      src: img8,
      full: img8Full,
      alt: "신랑 신부 계단에서 포즈"
    },
    {
      src: img9,
      full: img9Full,
      alt: "신랑 신부 손잡고 계단에서 흑백 사진"
    },
    {
      src: img10,
      full: img10Full,
      alt: "신랑 신부 정장 차림으로 서있는 모습"
    },
    {
      src: img11,
      full: img11Full,
      alt: "신랑 신부 웨딩홀 흑백 배경"
    }
  ];

  // Map dynamically discovered images into the gallery model (full == src)
  // Recent-first by filename for a predictable order
  const dynamicImages: GalleryImage[] = uploadedImagesSrc
    .sort((a, b) => (a > b ? -1 : 1))
    .map((src) => ({ src, full: src, alt: "추가 갤러리 사진" }));

  const images: GalleryImage[] = [...dynamicImages, ...curatedImages];

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
          className="mb-8"
        >
          <div className="grid grid-cols-4 gap-2 h-[420px] overflow-y-auto pr-1">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => {
                  setSelectedImage(image.full ?? image.src);
                  setScale(1);
                  setTranslate({ x: 0, y: 0 });
                }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover will-change-transform"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <div
            className="relative max-w-full max-h-full overflow-hidden"
            onWheel={(e) => {
              e.preventDefault();
              const delta = e.deltaY > 0 ? -0.1 : 0.1;
              setScale((s) => Math.min(5, Math.max(1, s + delta)));
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              isPanningRef.current = true;
              lastPointRef.current = { x: e.clientX, y: e.clientY };
            }}
            onMouseMove={(e) => {
              if (!isPanningRef.current || !lastPointRef.current) return;
              const dx = e.clientX - lastPointRef.current.x;
              const dy = e.clientY - lastPointRef.current.y;
              setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
              lastPointRef.current = { x: e.clientX, y: e.clientY };
            }}
            onMouseUp={() => {
              isPanningRef.current = false;
              lastPointRef.current = null;
            }}
            onMouseLeave={() => {
              isPanningRef.current = false;
              lastPointRef.current = null;
            }}
            onTouchStart={(e) => {
              if (e.touches.length === 1) {
                lastPointRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                isPanningRef.current = true;
              }
            }}
            onTouchMove={(e) => {
              if (isPanningRef.current && e.touches.length === 1 && lastPointRef.current) {
                const dx = e.touches[0].clientX - lastPointRef.current.x;
                const dy = e.touches[0].clientY - lastPointRef.current.y;
                setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
                lastPointRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
              }
            }}
            onTouchEnd={() => {
              isPanningRef.current = false;
              lastPointRef.current = null;
            }}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Selected image"
              className="max-w-none max-h-none object-contain rounded-lg select-none"
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                maxWidth: "100vw",
                maxHeight: "100vh",
                cursor: isPanningRef.current ? "grabbing" : "grab",
                touchAction: "none",
                willChange: "transform",
              }}
              draggable={false}
            />
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="text-white text-2xl px-3 py-1 rounded hover:bg-white/10"
              aria-label="닫기"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-3">
            <button
              onClick={() => setScale((s) => Math.max(1, s - 0.2))}
              className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm"
            >
              축소
            </button>
            <button
              onClick={() => setScale((s) => Math.min(5, s + 0.2))}
              className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm"
            >
              확대
            </button>
            <button
              onClick={() => {
                setScale(1);
                setTranslate({ x: 0, y: 0 });
              }}
              className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm"
            >
              초기화
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
