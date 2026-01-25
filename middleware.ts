import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const unauthorizedResponse = () =>
  new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"',
    },
  });

export function middleware(request: NextRequest) {
  const expectedUser = process.env.ADMIN_USER ?? "";
  const expectedPass = process.env.ADMIN_PASS ?? "";

  if (!expectedUser || !expectedPass) {
    return unauthorizedResponse();
  }

  const header = request.headers.get("authorization");

  if (!header || !header.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const encoded = header.slice(6);

  let decoded: string;

  try {
    decoded = atob(encoded);
  } catch {
    return unauthorizedResponse();
  }

  const [user, pass] = decoded.split(":");

  if (user !== expectedUser || pass !== expectedPass) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
