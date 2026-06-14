import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const msg = saveContactMessage(name, email, subject, message);
    return NextResponse.json({ success: true, id: msg.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // Protected admin endpoint — add auth in production
  const { getContactMessages } = await import("@/lib/db");
  return NextResponse.json(getContactMessages());
}
