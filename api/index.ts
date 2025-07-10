import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // 기본 API 응답
  if (req.method === 'GET') {
    return res.status(200).json({ 
      message: 'Wedding Invitation API is running!',
      timestamp: new Date().toISOString()
    });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
} 