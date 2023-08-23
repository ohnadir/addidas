import User from "@/models/User"
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connect();
    const { email, password } = await request.json();
    try {

        const user = await User.findOne({ email : email });
        if (user) {
            return new NextResponse("Incorrect credential", {
                code: 404,
                status: "failed",
            });
        }

        const isPasswordMatched = await user.comparePassword(password);
        if (isPasswordMatched) {
            return new NextResponse("Incorrect password", {
                code: 404,
                status: "failed",
            });
        }
        const token = user.getJwtToken();
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