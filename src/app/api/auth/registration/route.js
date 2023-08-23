import User from "@/models/User"
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connect();
    const { firstName, lastName, email, phone, password } = await request.json();
    try {

        const isEmailExist = await User.findOne({ email : email });
        if (isEmailExist) {
            return new NextResponse("Email already taken", {
                code: 400,
                status: "failed",
            });
        }

        const isPhoneExist = await User.findOne({ phone : phone });
        if (isPhoneExist) {
            return new NextResponse("Phone Number already taken", {
                code: 400,
                status: "failed"
            });
        }

        const newUser = new User({ firstName, lastName, email, phone, password });
        await newUser.save();

        const token = newUser.getJwtToken();
        return new NextResponse("Registration successfully", {
            code: 200,
            status: "success",
            token : token
        });

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};