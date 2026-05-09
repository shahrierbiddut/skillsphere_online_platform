import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, encodeSession } from "@/lib/authSession";
import { verifyUser } from "@/lib/userStore";

export async function POST(request) {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();
    const password = body.password?.trim();

    if (!email || !password) {
        return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    const registeredUser = verifyUser(email, password);
    if (!registeredUser) {
        return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    const sessionUser = {
        name: registeredUser.name,
        email: registeredUser.email,
        avatar: registeredUser.photoUrl
    };

    const response = NextResponse.json({ authenticated: true, user: sessionUser }, { status: 200 });

    response.cookies.set(AUTH_COOKIE_NAME, encodeSession(sessionUser), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax"
    });

    return response;
}
