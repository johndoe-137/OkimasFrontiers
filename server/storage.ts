import { inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private currentId: number;

  constructor() {
    this.inquiries = new Map();
    this.currentId = 1;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentId++;
    const inquiry: Inquiry = { 
      id,
      name: insertInquiry.name,
      title: insertInquiry.title,
      organization: insertInquiry.organization,
      email: insertInquiry.email,
      region: insertInquiry.region || null,
      category: insertInquiry.category,
      description: insertInquiry.description,
      agreedToTerms: insertInquiry.agreedToTerms,
      createdAt: new Date()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
