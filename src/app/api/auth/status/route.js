import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, decodeSession } from "@/lib/authSession";

export async function GET(request) {
  const sessionValue = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const user = decodeSession(sessionValue);

  if (!user) {
    return NextResponse.json(
      { authenticated: false, user: null },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { authenticated: true, user },
    { status: 200 }
  );
}
