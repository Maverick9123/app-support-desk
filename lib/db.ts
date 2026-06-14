/**
 * FishingPal Customer Database
 * Simple file-based JSON store.
 * Replace with Prisma + PostgreSQL / MySQL for production.
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";

const DB_PATH = path.join(process.cwd(), "data", "customers.json");

export type Plan = "monthly" | "yearly";
export type CustomerStatus = "active" | "cancelled" | "trial" | "expired";

export interface Customer {
  id: string;
  email: string;
  name: string;
  plan: Plan;
  status: CustomerStatus;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  createdAt: string;
  renewsAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

interface DB {
  customers: Customer[];
  contacts: ContactMessage[];
}

function readDB(): DB {
  try {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    if (!fs.existsSync(DB_PATH)) {
      const empty: DB = { customers: [], contacts: [] };
      fs.writeFileSync(DB_PATH, JSON.stringify(empty, null, 2));
      return empty;
    }
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8")) as DB;
  } catch {
    return { customers: [], contacts: [] };
  }
}

function writeDB(data: DB): void {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ─── Customers ────────────────────────────────────────────────────────────────

export function createCustomer(
  email: string,
  name: string,
  plan: Plan,
  stripeCustomerId?: string,
  stripeSubscriptionId?: string
): Customer {
  const db = readDB();
  const renewsAt = new Date(
    Date.now() + (plan === "yearly" ? 365 : 30) * 86_400_000
  ).toISOString();

  const customer: Customer = {
    id:                   crypto.randomUUID(),
    email,
    name,
    plan,
    status:               "active",
    stripeCustomerId,
    stripeSubscriptionId,
    createdAt:            new Date().toISOString(),
    renewsAt,
  };
  db.customers.push(customer);
  writeDB(db);
  return customer;
}

export function getCustomerByEmail(email: string): Customer | undefined {
  return readDB().customers.find((c) => c.email === email);
}

export function getAllCustomers(): Customer[] {
  return readDB().customers;
}

export function updateCustomerStatus(id: string, status: CustomerStatus): void {
  const db = readDB();
  const c  = db.customers.find((c) => c.id === id);
  if (c) { c.status = status; writeDB(db); }
}

// ─── Contact Messages ─────────────────────────────────────────────────────────

export function saveContactMessage(
  name: string,
  email: string,
  subject: string,
  message: string
): ContactMessage {
  const db = readDB();
  const msg: ContactMessage = {
    id:        crypto.randomUUID(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
    read:      false,
  };
  db.contacts.push(msg);
  writeDB(db);
  return msg;
}

export function getContactMessages(): ContactMessage[] {
  return readDB().contacts;
}
