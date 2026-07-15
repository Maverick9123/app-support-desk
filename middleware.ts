import { NextRequest, NextResponse } from "next/server"

// ─── AppSupport Desk — edge auth gate ────────────────────────────────────────
// Locks the ADMIN side (dashboard, tickets, contacts, admin APIs) behind HTTP
// Basic Auth, while leaving the PUBLIC customer surfaces open so ticket intake
// keeps working: the /portal (FAQ + submit form), the AI chat, ticket
// submission (POST /api/tickets), the contact form, and subscribe.
//
// Fail-CLOSED: anything not explicitly public requires the password, and if the
// ADMIN_USER / ADMIN_PASS env vars aren't set, the admin returns 401 (locked)
// rather than falling open. Set both in Vercel → Project → Settings →
// Environment Variables, then redeploy.

/** Customer-facing surfaces that stay open (no password). */
function isPublic(pathname: string, method: string): boolean {
  // Public customer portal + FAQ
  if (pathname === "/portal" || pathname.startsWith("/portal/")) return true

  // Public intake APIs (used by the portal and by in-app help in the iOS apps)
  if (pathname === "/api/chat") return true                            // AI chat assistant
  if (pathname === "/api/subscribe") return true                       // subscribe
  if (pathname === "/api/tickets" && method === "POST") return true    // submit a ticket (GET = admin list → locked)
  if (pathname === "/api/contact" && method === "POST") return true    // contact form submit (GET = admin → locked)

  return false
}

export function middleware(req: NextRequest) {
  if (isPublic(req.nextUrl.pathname, req.method)) {
    return NextResponse.next()
  }

  const USER = process.env.ADMIN_USER
  const PASS = process.env.ADMIN_PASS
  const header = req.headers.get("authorization")

  if (USER && PASS && header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice("Basic ".length))
      const sep = decoded.indexOf(":")
      const user = decoded.slice(0, sep)
      const pass = decoded.slice(sep + 1)
      if (user === USER && pass === PASS) {
        return NextResponse.next()
      }
    } catch {
      // malformed header → fall through to 401
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="AppSupport Desk Admin", charset="UTF-8"' },
  })
}

// Run on everything except Next.js internals and static assets.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|woff2?)).*)"],
}
