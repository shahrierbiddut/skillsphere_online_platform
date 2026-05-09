import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/authSession";

export async function POST() {
  const response = NextResponse.json(
    { authenticated: false },
    { status: 200 }
  );

  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax"
  });

  return response;
}
