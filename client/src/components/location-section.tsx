import { motion } from "framer-motion";

export default function LocationSection() {
  const naverQueryFixed = encodeURIComponent("선릉역 르비르모어");
  const lat = 37.50485;
  const lon = 127.04976;
  const mapPreviewSvg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns='http://www.w3.org/2000/svg' width='640' height='320' viewBox='0 0 640 320'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='#e9eef3'/>
        <stop offset='100%' stop-color='#dbe5ee'/>
      </linearGradient>
      <pattern id='grid' width='32' height='32' patternUnits='userSpaceOnUse'>
        <rect width='32' height='32' fill='url(#g)'/>
        <path d='M32 0 H0 V32' fill='none' stroke='#cbd5e1' stroke-width='0.5'/>
      </pattern>
      <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'>
        <feDropShadow dx='0' dy='2' stdDeviation='3' flood-color='rgba(0,0,0,0.25)'/>
      </filter>
    </defs>
    <rect x='0' y='0' width='640' height='320' fill='url(#grid)'/>
    <g filter='url(#shadow)'>
      <path d='M320 115 C300 115 285 130 285 150 C285 180 320 210 320 210 C320 210 355 180 355 150 C355 130 340 115 320 115 Z' fill='#10b981' />
      <circle cx='320' cy='150' r='16' fill='white'/>
      <circle cx='320' cy='150' r='8' fill='#10b981'/>
    </g>
    <rect x='220' y='228' rx='8' ry='8' width='200' height='36' fill='rgba(0,0,0,0.55)'/>
    <text x='320' y='251' font-size='14' text-anchor='middle' fill='white' font-family='"Pretendard","Apple SD Gothic Neo",sans-serif'>선릉역 르비르모어</text>
    <g>
      <rect x='16' y='16' width='88' height='28' rx='6' ry='6' fill='#03C75A'/>
      <text x='60' y='35' font-size='14' text-anchor='middle' fill='white' font-family='"Pretendard",sans-serif'>NAVER MAP</text>
    </g>
  </svg>`;
  const mapPreviewUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lon}&zoom=16&size=640x200&markers=${lat},${lon},lightblue1`;
  const mapPreviewSvgDataUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(mapPreviewSvg)}`;
  const openTMap = () => {
    const name = "르비르모어";
    const address = "서울특별시 강남구 테헤란로 406 샹제리제센터 A동 1층, 2층";
    // 앱 스킴 우선: 목적지명 + 주소로 경로 안내 시도
    const appUrl = `tmap://route?goalname=${encodeURIComponent(name)}&goaladdr=${encodeURIComponent(address)}`;
    // 폴백: 웹 검색
    const webUrl = `https://tmap.life/route/search?goalName=${encodeURIComponent(name + " " + address)}`;
    const timer = setTimeout(() => window.open(webUrl, "_blank"), 1200);
    window.location.href = appUrl;
    setTimeout(() => clearTimeout(timer), 1500);
  };

  const openNaverMap = () => {
    const query = encodeURIComponent("선릉역 르비르모어");
    // 네이버 지도: 목적지를 '선릉역 르비르모어'로 고정해 검색
    window.open(`nmap://search?query=${query}`);
    setTimeout(() => {
      window.open(`https://map.naver.com/v5/search/${query}`, "_blank");
    }, 1000);
  };

  // 카카오맵 통합 제거

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
          
          {/* 카카오맵 버튼 제거 */}
        </motion.div>
        
        {/* Embedded Map Preview (clickable → Naver Map) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <button
            type="button"
            onClick={openNaverMap}
            className="w-full overflow-hidden rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <img
              src={mapPreviewUrl}
              alt="네이버 지도 미리보기: 선릉역 르비르모어"
              loading="lazy"
              className="w-full h-40 object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const stage = target.dataset.fallbackStage || "";
                if (stage === "") {
                  target.dataset.fallbackStage = "proxy";
                  target.src = `/api/map/preview?w=640&h=200`;
                } else if (stage === "proxy") {
                  target.dataset.fallbackStage = "svg";
                  target.src = mapPreviewSvgDataUrl;
                } else {
                  // final stage reached; do nothing
                }
              }}
            />
          </button>
          <div className="text-center mt-2 text-xs text-gray-500">이미지를 누르면 네이버지도로 열립니다</div>
        </motion.div>
      </div>
    </section>
  );
}
