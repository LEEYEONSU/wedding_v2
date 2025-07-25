import { motion } from "framer-motion";

export default function LocationSection() {
  const openTMap = () => {
    const location = "르비르모어";
    const address = "서울특별시 강남구 테헤란로 406 샹제리제센터";
    
    // Try T맵 app scheme first, fallback to web
    const tmapAppUrl = `tmap://route?goalname=${encodeURIComponent(location)}&goaladdr=${encodeURIComponent(address)}`;
    const tmapWebUrl = `https://tmap.life/route/search?goalName=${encodeURIComponent(location + " " + address)}`;
    
    // Try to open T맵 app, if fails, open web version
    try {
      window.location.href = tmapAppUrl;
      // Fallback to web version if app doesn't open
      setTimeout(() => {
        window.open(tmapWebUrl, '_blank');
      }, 1000);
    } catch (error) {
      window.open(tmapWebUrl, '_blank');
    }
  };

  const openNaverMap = () => {
    const location = "르비르모어";
    const address = "서울특별시 강남구 테헤란로 406 샹제리제센터";
    window.open(`https://map.naver.com/v5/search/${encodeURIComponent(location + " " + address)}`, '_blank');
  };

  const openKakaoMap = () => {
    const location = "르비르모어";
    const address = "서울특별시 강남구 테헤란로 406 샹제리제센터";
    window.open(`https://map.kakao.com/link/search/${encodeURIComponent(location + " " + address)}`, '_blank');
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-6 bg-soft-white">
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-script text-3xl text-warm-gold mb-4">Location</h2>
          <div className="w-12 h-px bg-warm-gold mx-auto mb-4" />
          <p className="text-sm text-gray-600">오시는 길</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-sm mb-6"
        >
          <div className="text-center mb-4">
            <h3 className="font-medium text-lg text-warm-brown mb-2">르비르모어 선릉</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              서울특별시 강남구 테헤란로 406<br />
              샹제리제센터 A동 1층, 2층<br />
              지하철 2호선, 분당선 선릉역 1번 출구 도보 1분
            </p>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-medium text-warm-brown mb-2">교통 안내</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 지하철: 2호선, 분당선 선릉역 1번 출구</li>
              <li>• 버스: 선릉역 정류장 이용</li>
              <li>• 주차: 450대 주차 가능 (2시간 무료)</li>
            </ul>
          </div>
        </motion.div>
        
        {/* Map Integration Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          <motion.button
            variants={itemVariants}
            onClick={openTMap}
            className="w-full bg-warm-gold text-white py-3 px-6 rounded-lg font-medium hover:bg-warm-brown transition-colors duration-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-map-marked-alt" />
            <span>티맵으로 길찾기</span>
          </motion.button>
          
          <motion.button
            variants={itemVariants}
            onClick={openNaverMap}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-map" />
            <span>네이버지도로 길찾기</span>
          </motion.button>
          
          <motion.button
            variants={itemVariants}
            onClick={openKakaoMap}
            className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-location-arrow" />
            <span>카카오맵으로 길찾기</span>
          </motion.button>
        </motion.div>
        
        {/* Embedded Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 bg-gray-100 rounded-lg p-8 text-center"
        >
          <i className="fas fa-map text-gray-400 text-3xl mb-3" />
          <p className="text-gray-500 text-sm">선릉역 르비르모어 위치</p>
          <p className="text-xs text-gray-400 mt-2">지도 앱을 통해 정확한 위치를 확인하세요</p>
        </motion.div>
      </div>
    </section>
  );
}
