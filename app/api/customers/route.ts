/**
 * Customer Management API
 * Protected admin endpoint — add proper authentication before deploying to production.
 * Recommendation: use NextAuth.js with an admin role check.
 */
import { NextResponse } from "next/server";
import { getAllCustomers, updateCustomerStatus } from "@/lib/db";

// GET /api/customers — list all customers (admin only)
export async function GET(req: Request) {
  // TODO: add admin auth check
  // const session = await getServerSession(authOptions);
  // if (!session?.user?.isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const customers = getAllCustomers();
  const stats = {
    total:     customers.length,
    active:    customers.filter(c => c.status === "active").length,
    monthly:   customers.filter(c => c.plan === "monthly").length,
    yearly:    customers.filter(c => c.plan === "yearly").length,
    mrr:       customers.filter(c => c.status === "active" && c.plan === "monthly").length * 4.99 +
               customers.filter(c => c.status === "active" && c.plan === "yearly").length * (39.99 / 12),
  };

  return NextResponse.json({ stats, customers });
}

// PATCH /api/customers — update customer status
export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: "id and status are required" }, { status: 400 });
    }
    updateCustomerStatus(id, status);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Customer update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
