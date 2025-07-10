import type { VercelRequest, VercelResponse } from '@vercel/node';
import { DatabaseStorage } from '../server/storage';
import { insertGuestbookEntrySchema } from '../shared/schema';

const storage = new DatabaseStorage();

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
      const entries = await storage.getGuestbookEntries();
      return res.status(200).json(entries);
    }

    if (req.method === 'POST') {
      // 새 방명록 항목 추가
      const validatedData = insertGuestbookEntrySchema.parse(req.body);
      const newEntry = await storage.createGuestbookEntry(validatedData);
      return res.status(201).json(newEntry);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 