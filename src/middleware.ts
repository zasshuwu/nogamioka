import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.method === "GET" && req.nextUrl.pathname === "/resume") {
    return NextResponse.redirect(new URL("/anh-resume.pdf", req.url));
  }
}

export const config = {
  matcher: ["/resume"],
};
