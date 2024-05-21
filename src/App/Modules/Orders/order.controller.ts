import { Request,Response } from "express"
import { Order_Services } from "./order.services"


const Create_Order_Contrller =async (req:Request,res:Response) => {
    try{
        const newOrder = req.body;
        const result = await Order_Services.Create_Order_Service(newOrder);
        res.status(200).json({
            success : true,
            message : "Order created successfully!",
            data : result
        })
    }catch(error:any){
        res.status(500).json({
            success : false,
            message : error.message || error.name,
        })
    }
}

export const Order_Controller = {
    Create_Order_Contrller,
}