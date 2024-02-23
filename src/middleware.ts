import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname == "/") {
		// Internal rewrite to expose homepage as the root
		return NextResponse.rewrite(new URL("/home", request.url));
	} else if (request.nextUrl.pathname == "/home") {
		// We don't expose the homepage since we map it to the root
		return NextResponse.redirect(new URL("/", request.url));
	}
}
