import type { VercelRequest, VercelResponse } from '@vercel/node';
import { DatabaseStorage } from '../server/storage';
import { insertWeddingGuestSchema } from '../shared/schema';

const storage = new DatabaseStorage();

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
      const guests = await storage.getWeddingGuests();
      return res.status(200).json(guests);
    }

    if (req.method === 'POST') {
      // 새 게스트 추가
      const validatedData = insertWeddingGuestSchema.parse(req.body);
      const newGuest = await storage.createWeddingGuest(validatedData);
      return res.status(201).json(newGuest);
    }

    if (req.method === 'PUT') {
      // 게스트 정보 업데이트
      const { id, ...updateData } = req.body;
      if (!id) {
        return res.status(400).json({ error: 'Guest ID is required' });
      }
      
      const updatedGuest = await storage.updateWeddingGuest(id, updateData);
      return res.status(200).json(updatedGuest);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 