import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, decodeSession, encodeSession } from "@/lib/authSession";
import { updateUserProfile } from "@/lib/userStore";

export async function PATCH(request) {
    const sessionValue = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const sessionUser = decodeSession(sessionValue);

    if (!sessionUser?.email) {
        return NextResponse.json({ message: "Please log in to update your profile." }, { status: 401 });
    }

    const body = await request.json();
    const name = body.name?.trim();
    const photoUrl = body.photoUrl?.trim();

    if (!name || !photoUrl) {
        return NextResponse.json({ message: "Name and image URL are required." }, { status: 400 });
    }

    const storedUser = updateUserProfile(sessionUser.email, { name, photoUrl });
    const updatedSessionUser = {
        name: storedUser?.name ?? name,
        email: sessionUser.email,
        avatar: storedUser?.photoUrl ?? photoUrl
    };

    const response = NextResponse.json(
        { message: "Information updated successfully.", user: updatedSessionUser },
        { status: 200 }
    );

    response.cookies.set(AUTH_COOKIE_NAME, encodeSession(updatedSessionUser), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax"
    });

    return response;
}
