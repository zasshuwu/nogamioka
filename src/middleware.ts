import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.method === "GET" && req.nextUrl.pathname === "/resume") {
    return NextResponse.redirect(new URL("/Anh_Hoang_Nguyen_Resume.pdf", req.url));
  }
}

export const config = {
  matcher: ["/resume"],
};
