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

  app.get("/api/inquiries", async (_req, res) => {
    try {
      const all = await storage.getInquiries();
      return res.json(all);
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
      return res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  return httpServer;
}
