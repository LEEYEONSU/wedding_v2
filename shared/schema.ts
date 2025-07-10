import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const weddingGuests = pgTable("wedding_guests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone"),
  email: text("email"),
  side: text("side").notNull(), // 'bride' or 'groom'
  attendance: text("attendance").notNull().default('pending'), // 'attending', 'not_attending', 'pending'
  guestCount: integer("guest_count").notNull().default(1),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const guestbookEntries = pgTable("guestbook_entries", {
  id: serial("id").primaryKey(),
  guestName: text("guest_name").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWeddingGuestSchema = createInsertSchema(weddingGuests).pick({
  name: true,
  phone: true,
  email: true,
  side: true,
  attendance: true,
  guestCount: true,
  message: true,
});

export const insertGuestbookEntrySchema = createInsertSchema(guestbookEntries).pick({
  guestName: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWeddingGuest = z.infer<typeof insertWeddingGuestSchema>;
export type WeddingGuest = typeof weddingGuests.$inferSelect;
export type InsertGuestbookEntry = z.infer<typeof insertGuestbookEntrySchema>;
export type GuestbookEntry = typeof guestbookEntries.$inferSelect;
