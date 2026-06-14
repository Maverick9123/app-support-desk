/**
 * Subscription API Route
 *
 * Demo mode: validates card format and stores customer in the JSON DB.
 * For production: uncomment the Stripe section and set STRIPE_SECRET_KEY
 * in your .env.local file.
 */
import { NextResponse } from "next/server";
import { createCustomer, getCustomerByEmail } from "@/lib/db";

// ── Production Stripe integration (uncomment to enable) ─────────────────────
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-11-20.acacia" });

const PRICES: Record<string, { amount: number; currency: string; interval: string }> = {
  monthly: { amount: 499,   currency: "usd", interval: "month" },
  yearly:  { amount: 3999,  currency: "usd", interval: "year"  },
};

export async function POST(req: Request) {
  try {
    const { name, email, plan, card, expiry, cvv } = await req.json();

    // ── Validation ────────────────────────────────────────────────────────
    if (!name || !email || !plan || !card || !expiry || !cvv) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (!["monthly", "yearly"].includes(plan)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }
    if (!/^[\w.+-]+@[\w-]+\.[a-z]{2,}$/i.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check for existing subscription
    const existing = getCustomerByEmail(email);
    if (existing?.status === "active") {
      return NextResponse.json({ error: "This email already has an active subscription" }, { status: 409 });
    }

    // ── DEMO MODE: simulate card processing ───────────────────────────────
    // Remove this block and use the Stripe integration below in production.
    const cardDigits = card.replace(/\s/g, "");
    if (cardDigits.length < 13) {
      return NextResponse.json({ error: "Invalid card number" }, { status: 400 });
    }
    // Simulate a brief processing delay
    await new Promise(r => setTimeout(r, 800));

    // Simulate decline for test card 4000000000000002
    if (cardDigits === "4000000000000002") {
      return NextResponse.json({ error: "Your card was declined. Please use a different card." }, { status: 402 });
    }

    const customer = createCustomer(email, name, plan as "monthly" | "yearly");

    // ── PRODUCTION Stripe integration (replace demo block above) ─────────
    /*
    // 1. Create Stripe customer
    const stripeCustomer = await stripe.customers.create({ email, name });

    // 2. Create payment method from card details
    //    NOTE: In production, use Stripe Elements on the frontend to tokenize
    //    the card — never send raw card data to your server.
    //    See: https://stripe.com/docs/payments/accept-a-payment

    // 3. Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: stripeCustomer.id,
      items: [{ price: process.env[`STRIPE_PRICE_${plan.toUpperCase()}`] }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    const customer = createCustomer(
      email, name, plan as "monthly" | "yearly",
      stripeCustomer.id, subscription.id
    );
    */
    // ── END Stripe integration ────────────────────────────────────────────

    return NextResponse.json({
      success: true,
      customerId: customer.id,
      plan: customer.plan,
      renewsAt: customer.renewsAt,
      message: `Welcome to FishingPal Pro! Your ${plan} subscription is now active.`,
    });

  } catch (err) {
    console.error("Subscribe API error:", err);
    return NextResponse.json({ error: "Payment processing failed. Please try again." }, { status: 500 });
  }
}
