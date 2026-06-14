"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FEATURES = [
  "24-hour fishing quality chart",
  "Solunar major & minor periods",
  "Lunar phase predictions",
  "Monthly fishing calendar",
  "Farmers Almanac daily tips",
  "Real-time clock & date",
  "Location-aware forecasts",
];

const PRO_FEATURES = [
  ...FEATURES,
  "7-day extended forecast",
  "Email fishing alerts",
  "Export calendar to PDF",
  "Priority email support",
];

interface Props { highlight?: boolean }

export function PricingSection({ highlight = false }: Props) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="w-full" id="pricing">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className={cn("text-sm", billing === "monthly" ? "text-foreground" : "text-muted-foreground")}>
          Monthly
        </span>
        <button
          onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
          className={cn(
            "relative w-12 h-6 rounded-full transition-colors",
            billing === "yearly" ? "bg-cyan-500" : "bg-slate-600"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
              billing === "yearly" ? "translate-x-6" : "translate-x-0.5"
            )}
          />
        </button>
        <span className={cn("text-sm", billing === "yearly" ? "text-foreground" : "text-muted-foreground")}>
          Yearly
          <span className="ml-1.5 text-xs bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded-full">
            Save 33%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Free */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Free Trial</p>
            <div className="flex items-end gap-1 mt-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground mb-1">/7 days</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">No credit card required</p>
          </div>
          <ul className="space-y-2">
            {FEATURES.map(f => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full border-border/60 hover:border-cyan-500/50">
              Try Free — No Card Needed
            </Button>
          </Link>
        </div>

        {/* Pro */}
        <div className={cn(
          "rounded-2xl border p-6 space-y-4 relative overflow-hidden",
          highlight
            ? "border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-card glow-teal"
            : "border-cyan-500/50 bg-gradient-to-b from-cyan-500/5 to-card"
        )}>
          <div className="absolute top-3 right-3">
            <span className="text-xs bg-cyan-500 text-slate-900 font-bold px-2 py-0.5 rounded-full">
              POPULAR
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-cyan-400 uppercase tracking-wide">Pro</p>
            <div className="flex items-end gap-1 mt-1">
              <span className="text-4xl font-bold">
                {billing === "monthly" ? "$4.99" : "$3.33"}
              </span>
              <span className="text-muted-foreground mb-1">/mo</span>
            </div>
            {billing === "yearly" && (
              <p className="text-sm text-cyan-400">Billed $39.99/year — save $19.89</p>
            )}
            {billing === "monthly" && (
              <p className="text-sm text-muted-foreground">Billed $4.99/month</p>
            )}
          </div>
          <ul className="space-y-2">
            {PRO_FEATURES.map(f => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <Link href={`/subscribe?plan=${billing}`}>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold">
              Subscribe — {billing === "monthly" ? "$4.99/mo" : "$39.99/yr"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
