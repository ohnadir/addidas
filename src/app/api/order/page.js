import Order from "../../../models/Order"
import connect from "@/utils/db";

export const POST = async (request) => {
    
    const body = await request.json();
    await connect();
   
    try {
        
        const order = await Order.create(body);
        return new Response(JSON.stringify({
            code : 200,
            status : "Order Successfully",
            order: order
            
        }));

    } catch (err) {
        return new Response(JSON.stringify({
            code : 500,
            status : err.message,
            
        }));
    }
};