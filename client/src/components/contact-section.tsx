import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
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

  const openTel = (phone: string) => {
    window.location.href = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  };

  const openSms = (phone: string) => {
    window.location.href = `sms:${phone.replace(/[^0-9+]/g, "")}`;
  };

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({ title: "복사되었습니다", description: `${label} • ${value}` });
    } catch {
      toast({ title: "복사에 실패했어요", description: "다시 시도해주세요." });
    }
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
              <div className="flex justify-center space-x-4 mt-3">
                <motion.button
                  onClick={() => openTel('010-9353-5323')}
                  className="bg-warm-gold text-white px-4 py-2 rounded-lg text-sm hover:bg-warm-brown transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-2" />
                  전화 010-9353-5323
                </motion.button>
                <motion.button
                  onClick={() => openSms('010-9353-5323')}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comment mr-2" />
                  문자 010-9353-5323
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-medium text-warm-brown mb-3">신부측</h3>
            <div className="space-y-2">
              <div className="flex justify-center space-x-4 mt-3">
                <motion.button
                  onClick={() => openTel('010-2920-8127')}
                  className="bg-warm-gold text-white px-4 py-2 rounded-lg text-sm hover:bg-warm-brown transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-2" />
                  전화 010-2920-8127
                </motion.button>
                <motion.button
                  onClick={() => openSms('010-2920-8127')}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comment mr-2" />
                  문자 010-2920-8127
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* 마음 전하실 곳 */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
            <h3 className="text-warm-brown text-xl font-semibold mb-4 flex items-center gap-2">
              <i className="fas fa-gift text-warm-gold" /> 마음 전하실 곳
            </h3>
            <div className="grid grid-cols-1 gap-4 text-left">
              {/* 신부 측 */}
              <div className="rounded-lg border border-amber-200/60 bg-amber-50 p-4">
                <p className="text-warm-brown font-semibold mb-2">신부 측</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base">
                      <span className="font-medium text-warm-brown mr-2">이연수</span>
                      <span className="font-semibold tracking-wide text-gray-900">신한 110-291-296280</span>
                    </div>
                    <motion.button
                      onClick={() => handleCopy("신부 이연수", "신한 110-291-296280")}
                      className="text-xs px-3 py-1 rounded-md bg-warm-gold text-white hover:bg-warm-brown"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      복사
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base">
                      <span className="font-medium text-warm-brown mr-2">모 김희아</span>
                      <span className="font-semibold tracking-wide text-gray-900">신한 000-0000-0000</span>
                    </div>
                    <motion.button
                      onClick={() => handleCopy("신부 모 김희아", "신한 000-0000-0000")}
                      className="text-xs px-3 py-1 rounded-md bg-warm-gold text-white hover:bg-warm-brown"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      복사
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base">
                      <span className="font-medium text-warm-brown mr-2">부 이용준</span>
                      <span className="font-semibold tracking-wide text-gray-900">SC은행 220-20-033013</span>
                    </div>
                    <motion.button
                      onClick={() => handleCopy("신부 부 이용준", "SC은행 220-20-033013")}
                      className="text-xs px-3 py-1 rounded-md bg-warm-gold text-white hover:bg-warm-brown"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      복사
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* 신랑 측 */}
              <div className="rounded-lg border border-amber-200/60 bg-amber-50 p-4">
                <p className="text-warm-brown font-semibold mb-2">신랑 측</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base">
                      <span className="font-medium text-warm-brown mr-2">이성준</span>
                      <span className="font-semibold tracking-wide text-gray-900">카카오뱅크 3333-336-504770</span>
                    </div>
                    <motion.button
                      onClick={() => handleCopy("신랑 이성준", "3333-336-504770")}
                      className="text-xs px-3 py-1 rounded-md bg-warm-gold text-white hover:bg-warm-brown"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      복사
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base">
                      <span className="font-medium text-warm-brown mr-2">모 정수진</span>
                      <span className="font-semibold tracking-wide text-gray-900">신한 000-0000-0000</span>
                    </div>
                    <motion.button
                      onClick={() => handleCopy("신랑 모 정수진", "신한 000-0000-0000")}
                      className="text-xs px-3 py-1 rounded-md bg-warm-g올드 text-white hover:bg-warm-brown"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      복사
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base">
                      <span className="font-medium text-warm-brown mr-2">부 이인철</span>
                      <span className="font-semibold tracking-wide text-gray-900">농협 478-02-006683</span>
                    </div>
                    <motion.button
                      onClick={() => handleCopy("신랑 부 이인철", "농협 478-02-006683")}
                      className="text-xs px-3 py-1 rounded-md bg-warm-gold text-white hover:bg-warm-brown"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      복사
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
