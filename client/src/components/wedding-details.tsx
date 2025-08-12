import { motion } from "framer-motion";

export default function WeddingDetails() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-6 bg-soft-white">
      <div className="max-w-sm mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-script text-3xl text-warm-gold mb-4">Wedding Details</h2>
          <div className="w-12 h-px bg-warm-gold mx-auto" />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-warm-brown mb-4">
              <i className="fas fa-heart text-warm-gold text-xl mb-2" />
              <h3 className="font-medium text-lg">신랑 & 신부</h3>
            </div>
            <div className="space-y-2 text-charcoal">
              <p className="text-lg font-medium">이성준 ♡ 이연수</p>
              <p className="text-sm text-gray-600">두 사람이 하나가 되는 날</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-warm-brown mb-4">
              <i className="fas fa-user-friends text-warm-gold text-xl mb-2" />
              <h3 className="font-medium text-lg">혼주</h3>
            </div>
            <div className="space-y-2 text-charcoal">
              <p className="text-base">
                <span className="font-bold">이용준</span> · <span className="font-bold">김희아</span>의 딸 <span className="font-bold">이연수</span>
              </p>
              <p className="text-base">
                <span className="font-bold">이인철</span> · <span className="font-bold">정수진</span>의 아들 <span className="font-bold">이성준</span>
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-warm-brown mb-4">
              <i className="fas fa-calendar-alt text-warm-gold text-xl mb-2" />
              <h3 className="font-medium text-lg">예식 일정</h3>
            </div>
            <div className="space-y-2 text-charcoal">
              <p className="text-lg font-medium">2025년 10월 18일</p>
              <p className="text-base">토요일 오후 5시</p>
              <p className="text-sm text-gray-600">가을의 따뜻한 햇살과 함께</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-warm-brown mb-4">
              <i className="fas fa-map-marker-alt text-warm-gold text-xl mb-2" />
              <h3 className="font-medium text-lg">예식 장소</h3>
            </div>
            <div className="space-y-2 text-charcoal">
              <p className="text-lg font-medium">르비르모어</p>
              <p className="text-base">선릉역</p>
              <p className="text-sm text-gray-600">아름다운 공간에서 만나요</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
