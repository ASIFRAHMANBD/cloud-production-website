import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const url = new URL(request.url);
  // Redirect root to static index so the app router (and Server Actions) never run for /
  if (url.pathname === "/" || url.pathname === "") {
    return NextResponse.redirect(new URL("/index.html", request.url), 302);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
