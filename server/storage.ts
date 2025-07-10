import { users, weddingGuests, guestbookEntries, type User, type InsertUser, type WeddingGuest, type InsertWeddingGuest, type GuestbookEntry, type InsertGuestbookEntry } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Wedding guests methods
  getWeddingGuests(): Promise<WeddingGuest[]>;
  createWeddingGuest(guest: InsertWeddingGuest): Promise<WeddingGuest>;
  updateWeddingGuest(id: number, guest: Partial<InsertWeddingGuest>): Promise<WeddingGuest>;
  
  // Guestbook methods
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getWeddingGuests(): Promise<WeddingGuest[]> {
    return await db.select().from(weddingGuests);
  }

  async createWeddingGuest(guest: InsertWeddingGuest): Promise<WeddingGuest> {
    const [newGuest] = await db
      .insert(weddingGuests)
      .values(guest)
      .returning();
    return newGuest;
  }

  async updateWeddingGuest(id: number, guest: Partial<InsertWeddingGuest>): Promise<WeddingGuest> {
    const [updatedGuest] = await db
      .update(weddingGuests)
      .set(guest)
      .where(eq(weddingGuests.id, id))
      .returning();
    return updatedGuest;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return await db.select().from(guestbookEntries);
  }

  async createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const [newEntry] = await db
      .insert(guestbookEntries)
      .values(entry)
      .returning();
    return newEntry;
  }
}

export const storage = new DatabaseStorage();
