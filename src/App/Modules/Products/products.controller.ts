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

// Get All Product Controller (GET API) + Query in one Api
const Get_All_Product_Controller = async (req: Request, res: Response) => {
    try {
        // search by tag (query)
        const SearchText:any = req.query.searchTerm;
        let result;
        if (SearchText) {
            result = await Product_Services.Search_By_Tag(SearchText);
        } else {
            result = await Product_Services.Get_All_Product_Service();
        }

        res.status(200).json({
            success: true,
            message: SearchText?
                result.length==0?
                    `No Product found for tag : ${SearchText}`  // if found product len is 0
                    :
                    `Products matching search term ${SearchText} fetched successfully!` // if found product len is 0 <
                :
                "Products fetched successfully!",   // for get all product api message
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

// Get A Product By Id Controller (GET API)
const Get_A_Product_Controller = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await Product_Services.Get_A_Product_Service(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
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

// Update A Product Information Controller (PUT API)
const Update_Product_Controller = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const result = await Product_Services.Update_Product_Service(productId, updatedData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
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

// Delete a Product By Id Controller (DELETE API)
const Delete_Product_Controller = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await Product_Services.Delete_Product_Service(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || error.message,
            errror: error
        })
    }
}


export const Products_Controllers = {
    Create_Product_Controller,
    Get_All_Product_Controller,
    Get_A_Product_Controller,
    Update_Product_Controller,
    Delete_Product_Controller,
}