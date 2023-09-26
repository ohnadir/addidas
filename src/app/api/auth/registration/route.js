import User from "../../../../models/User"
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    
    const { name, email, password } = await request.json();
    await connect();
   
    try {
        const user = await User.create({name, email, password });
        return new Response(JSON.stringify({
            code : 200,
            status : "User has been created",
            user: user
            
        }));

    } catch (err) {
        return new Response(JSON.stringify({
            code : 500,
            status : err.message,
            
        }));
    }
};