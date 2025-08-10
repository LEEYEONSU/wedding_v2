import type { Express } from "express";
import type { Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Static map preview proxy
  app.get("/api/map/preview", async (req: Request, res: Response) => {
    try {
      const width = Math.max(200, Math.min(1280, Number(req.query.w) || 640));
      const height = Math.max(120, Math.min(800, Number(req.query.h) || 200));
      // 선릉역 르비르모어 근처 좌표 (대략)
      const lon = 127.04976;
      const lat = 37.50485;
      const label = "르비르모어";

      const naverId = process.env.NCP_MAPS_ID || process.env.NAVER_CLIENT_ID;
      const naverSecret = process.env.NCP_MAPS_SECRET || process.env.NAVER_CLIENT_SECRET;

      if (naverId && naverSecret) {
        const naverUrl = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=${width}&h=${height}&center=${lon},${lat}&level=16&scale=2&markers=type:d|size:mid|pos:${lon} ${lat}|label:${encodeURIComponent(label)}`;
        const r = await fetch(naverUrl, {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": naverId,
            "X-NCP-APIGW-API-KEY": naverSecret,
          },
        });
        const contentType = r.headers.get("content-type") || "image/jpeg";
        const arrayBuf = await r.arrayBuffer();
        res.setHeader("Content-Type", contentType);
        return res.status(200).send(Buffer.from(arrayBuf));
      }

      // Fallback: OpenStreetMap static map service
      const osmUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lon}&zoom=16&size=${width}x${height}&markers=${lat},${lon},lightblue1`;
      const r = await fetch(osmUrl);
      const arrayBuf = await r.arrayBuffer();
      res.setHeader("Content-Type", "image/png");
      return res.status(200).send(Buffer.from(arrayBuf));
    } catch (err) {
      return res.status(500).json({ message: "Failed to load map preview" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
