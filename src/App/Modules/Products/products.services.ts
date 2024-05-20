import { Product_Type } from "./products.interface";
import { Product_Model } from "./products.model";
import { Product_Zod_Schema } from "./products.zod.validation";


// Create A Product Service
const Create_Product_Service =async (newProduct:Product_Type) => {
    const validatedData = Product_Zod_Schema.parse(newProduct)
    const result = await Product_Model.create(validatedData)
    return result;
}

// Get All Product Service 
const Get_All_Product_Service =async () => {
    const result = await Product_Model.find();
    return result;
}

// Get A Product By Id Service 
const Get_A_Product_Service =async (productId:string) => {
    const result = await Product_Model.findOne({_id : productId});
    return result;
}

export const Product_Services = {
    Create_Product_Service,
    Get_All_Product_Service,
    Get_A_Product_Service
}