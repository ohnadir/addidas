import User from "@/models/User"
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    
    const { name, email, phone, password } = await request.json();
    await connect();
    const newUser = new User({
        name,
        email,
        phone,
        password
    });
    try {
        await newUser.save();
        console.log("Mador")
        return new NextResponse("User has been created", {
        status: 201,
        });

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};