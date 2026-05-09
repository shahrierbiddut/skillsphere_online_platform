import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, encodeSession } from "@/lib/authSession";
import { createUser, getUserByEmail } from "@/lib/userStore";

async function getGoogleProfile(credential) {
    if (!credential) {
        return null;
    }

    const response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        return null;
    }

    const profile = await response.json();

    if (!profile.email) {
        return null;
    }

    return {
        email: profile.email,
        name: profile.name || profile.email.split("@")[0],
        photoUrl: profile.picture || ""
    };
}

export async function POST(request) {
    const body = await request.json();
    const profile = await getGoogleProfile(body.credential);

    if (!profile) {
        return NextResponse.json({ message: "Google authentication failed. Please try again." }, { status: 401 });
    }

    const normalizedEmail = profile.email.trim().toLowerCase();
    let user = getUserByEmail(normalizedEmail);

    if (!user) {
        user = createUser(
            profile.name,
            normalizedEmail,
            profile.photoUrl,
            "google-oauth"
        );
    }

    const sessionUser = {
        name: user.name,
        email: user.email,
        avatar: user.photoUrl
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
