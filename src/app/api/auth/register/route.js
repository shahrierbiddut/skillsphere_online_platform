import { NextResponse } from "next/server";
import { createUser } from "@/lib/userStore";

export async function POST(request) {
    const body = await request.json();
    const { name, email, photoUrl, password } = body;

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
        return NextResponse.json({ message: "Name, email, and password are required." }, { status: 400 });
    }

    const newUser = createUser(name, email, photoUrl, password);

    if (!newUser) {
        return NextResponse.json({ message: "Email already registered. Please login or use a different email." }, { status: 409 });
    }

    return NextResponse.json({ message: "Registration successful. Please login." }, { status: 201 });
}
