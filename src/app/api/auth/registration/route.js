import User from "../../../../models/User"
import connect from "@/utils/db";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    
    const { name, email, password } = await request.json();
    await connect();
   
    try {
        const hash_password = bcrypt.hashSync(password, 10);
        const user = await User.create({name, email, hash_password });
        return new Response(JSON.stringify({
            code : 200,
            status : "Registration Successfully",
            user: user
            
        }));

    } catch (err) {
        return new Response(JSON.stringify({
            code : 500,
            status : err.message,
            
        }));
    }
};