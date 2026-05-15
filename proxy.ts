import { NextResponse, type NextRequest } from "next/server";

// Next.js 16 renamed `middleware` → `proxy`. This file replaces middleware.ts.
// We avoid importing "@/lib/auth" here because it pulls in Node-only deps
// (bcryptjs, mongoose) that aren't available in the proxy runtime.
const SESSION_COOKIE = "eurovet_admin";
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
