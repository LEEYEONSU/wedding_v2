import { motion } from "framer-motion";

export default function ContactSection() {
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

  const handleCall = (person: string) => {
    // In a real app, this would initiate a phone call
    console.log(`Calling ${person}`);
  };

  const handleMessage = (person: string) => {
    // In a real app, this would open SMS app
    console.log(`Messaging ${person}`);
  };

  return (
    <section className="py-16 px-6 bg-cream">
      <div className="max-w-sm mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-script text-3xl text-warm-gold mb-4">Contact</h2>
          <div className="w-12 h-px bg-warm-gold mx-auto mb-4" />
          <p className="text-sm text-gray-600">궁금한 점이 있으시면 언제든 연락주세요</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-medium text-warm-brown mb-3">신랑측</h3>
            <div className="space-y-2">
              <p className="text-lg font-medium">이성준</p>
              <div className="flex justify-center space-x-4 mt-3">
                <motion.button
                  onClick={() => handleCall('이성준')}
                  className="bg-warm-gold text-white px-4 py-2 rounded-lg text-sm hover:bg-warm-brown transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-2" />
                  전화하기
                </motion.button>
                <motion.button
                  onClick={() => handleMessage('이성준')}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comment mr-2" />
                  문자하기
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-medium text-warm-brown mb-3">신부측</h3>
            <div className="space-y-2">
              <p className="text-lg font-medium">이연수</p>
              <div className="flex justify-center space-x-4 mt-3">
                <motion.button
                  onClick={() => handleCall('이연수')}
                  className="bg-warm-gold text-white px-4 py-2 rounded-lg text-sm hover:bg-warm-brown transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-2" />
                  전화하기
                </motion.button>
                <motion.button
                  onClick={() => handleMessage('이연수')}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comment mr-2" />
                  문자하기
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
