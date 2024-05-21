import { Request, Response } from "express"
import { Order_Services } from "./order.services"

// Create a order controller
const Create_Order_Contrller = async (req: Request, res: Response) => {
    try {
        const newOrder = req.body;
        const result = await Order_Services.Create_Order_Service(newOrder);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || error.name,
        })
    }
}

// Get all order controller
const Get_All_Order_Controller = async (req: Request, res: Response) => {
    try {
        const email:any = req.query.email;
        let result ;
        if (req.query.email) {
            result = await Order_Services.Get_Order_By_Email(email);
        } else {
            result = await Order_Services.Get_All_Order_Service();
        }
        res.status(200).json({
            success: true,
            message: email ? "Orders fetched successfully for user email!" : "Orders fetched successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || error.name,
        })
    }
}


export const Order_Controller = {
    Create_Order_Contrller,
    Get_All_Order_Controller
}