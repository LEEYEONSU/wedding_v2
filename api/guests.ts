import type { VercelRequest, VercelResponse } from '@vercel/node';

// 임시 메모리 저장소 (실제 배포시에는 데이터베이스 연결 필요)
let guests: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // 모든 게스트 조회
      return res.status(200).json({
        success: true,
        data: guests,
        message: '게스트 목록을 성공적으로 조회했습니다.'
      });
    }

    if (req.method === 'POST') {
      // 새 게스트 추가
      const { name, phone, email, side, attendance = 'pending', guestCount = 1, message } = req.body;
      
      if (!name || !side) {
        return res.status(400).json({
          success: false,
          error: '이름과 신랑/신부 측 정보는 필수입니다.'
        });
      }

      const newGuest = {
        id: Date.now(),
        name,
        phone,
        email,
        side,
        attendance,
        guestCount,
        message,
        createdAt: new Date().toISOString()
      };

      guests.push(newGuest);
      
      return res.status(201).json({
        success: true,
        data: newGuest,
        message: '게스트가 성공적으로 추가되었습니다.'
      });
    }

    if (req.method === 'PUT') {
      // 게스트 정보 업데이트
      const { id, ...updateData } = req.body;
      
      if (!id) {
        return res.status(400).json({
          success: false,
          error: '게스트 ID가 필요합니다.'
        });
      }
      
      const guestIndex = guests.findIndex(g => g.id === id);
      if (guestIndex === -1) {
        return res.status(404).json({
          success: false,
          error: '게스트를 찾을 수 없습니다.'
        });
      }
      
      guests[guestIndex] = { ...guests[guestIndex], ...updateData };
      
      return res.status(200).json({
        success: true,
        data: guests[guestIndex],
        message: '게스트 정보가 성공적으로 업데이트되었습니다.'
      });
    }

    return res.status(405).json({
      success: false,
      error: '지원하지 않는 HTTP 메서드입니다.'
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      error: '서버 내부 오류가 발생했습니다.'
    });
  }
} 