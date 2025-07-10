import type { VercelRequest, VercelResponse } from '@vercel/node';

// 임시 메모리 저장소 (실제 배포시에는 데이터베이스 연결 필요)
let guestbookEntries: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // 모든 방명록 항목 조회
      return res.status(200).json({
        success: true,
        data: guestbookEntries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        message: '방명록을 성공적으로 조회했습니다.'
      });
    }

    if (req.method === 'POST') {
      // 새 방명록 항목 추가
      const { guestName, message } = req.body;
      
      if (!guestName || !message) {
        return res.status(400).json({
          success: false,
          error: '이름과 메시지는 필수입니다.'
        });
      }

      const newEntry = {
        id: Date.now(),
        guestName: guestName.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString()
      };

      guestbookEntries.push(newEntry);
      
      return res.status(201).json({
        success: true,
        data: newEntry,
        message: '방명록이 성공적으로 작성되었습니다.'
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