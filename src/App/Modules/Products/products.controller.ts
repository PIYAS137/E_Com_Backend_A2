import { Request, Response } from "express"
import { Product_Services } from "./products.services";


// Create A Product Controller (POST API)
const Create_Product_Controller = async (req: Request, res: Response) => {
    try {
        const newProduct = req.body;
        const result = await Product_Services.Create_Product_Service(newProduct)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.name || error.message,
            errror: error
        })
    }
}

// Get All Product Controller (GET API)
const Get_All_Product_Controller = async (req: Request, res: Response) => {
    try {
        const result = await Product_Services.Get_All_Product_Service();
        res.status(200).json({
            success : true,
            message : "Products fetched successfully!",
            data : result
        })
    }catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.name || error.message,
            errror: error
        })
    }
}

// Get A Product By Id Controller (GET API)
const Get_A_Product_Controller =async (req:Request,res:Response) => {
    const {productId} = req.params;
    const result = await Product_Services.Get_A_Product_Service(productId);
    res.status(200).json({
        success : true,
        message : "Products fetched successfully!",
        data : result
    })
}


export const Products_Controllers = {
    Create_Product_Controller,
    Get_All_Product_Controller,
    Get_A_Product_Controller
}