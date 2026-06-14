"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about",     label: "About"     },
  { href: "/faq",       label: "FAQ"       },
  { href: "/contact",   label: "Contact"   },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen]   = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl wave-anim select-none">🎣</span>
            <span className="text-xl font-bold text-cyan-400">FishingPal</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === l.href
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/subscribe">
              <Button
                size="sm"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background px-4 pb-4 pt-2 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === l.href
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/subscribe" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full mt-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold">
              Start Free Trial
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
