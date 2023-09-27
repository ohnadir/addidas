import User from "../../../../models/User"
import connect from "@/utils/db";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    await connect();
    const { email, password } = await request.json();
    try {
        const user = await User.findOne({ email : email });
        if (!user) {
            return new Response(JSON.stringify({
                code : 404,
                status : "This Email never user for registration purpose"
                
            }));
        }
        const comparePassword = bcrypt.compareSync(password, user.hash_password);
        if (comparePassword === false) {
            return new Response(JSON.stringify({
                code : 404,
                status : "Incorrect credential"
                
            }));
        }
        return new Response(JSON.stringify({
            code : 200,
            status : "Login Successfully",
            user: user
            
        }));

    } catch (err) {
        return new Response(JSON.stringify({
            code : 500,
            status : err.message,
            
        }));
    }
};