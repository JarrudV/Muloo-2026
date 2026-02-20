import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const parsed = insertInquirySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.flatten() });
      }
      const inquiry = await storage.createInquiry(parsed.data);
      return res.status(201).json(inquiry);
    } catch (err) {
      console.error("Failed to create inquiry:", err);
      return res.status(500).json({ error: "Failed to submit inquiry" });
    }
  });

  // Explicit JSON 404 for unknown API routes.
  app.use("/api/{*path}", (_req, res) => {
    return res.status(404).json({ error: "Not Found" });
  });

  return httpServer;
}
