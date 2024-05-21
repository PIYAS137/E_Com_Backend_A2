import { Product_Type } from "./products.interface";
import { Product_Model } from "./products.model";
import { Product_Zod_Schema } from "./products.zod.validation";


// Create A Product Service
const Create_Product_Service = async (newProduct: Product_Type) => {
    const validatedData = Product_Zod_Schema.parse(newProduct)
    console.log("After Validate =====>",validatedData);
    const result = await Product_Model.create(validatedData)
    console.log("After POST Data =====>",result);
    return result;
}

// Get All Product Service 
const Get_All_Product_Service = async () => {
    const result = await Product_Model.find();
    return result;
}

// Get A Product By Id Service 
const Get_A_Product_Service = async (productId: string) => {
    if (!await Product_Model.isExist(productId)) {
        throw new Error("This _id is not exist in DB **");
    }
    const result = await Product_Model.findOne({ _id: productId });
    return result;
}

// Update A Product Service 
const Update_Product_Service = async (productId: string, updatedData: Product_Type) => {
    if (!await Product_Model.isExist(productId)) {
        throw new Error("This product is not exist in DB **");
    }
    const updateDoc = {
        $set: {
            name: updatedData.name,
            description: updatedData.description,
            price: updatedData.price,
            category: updatedData.category,
            tags: updatedData.tags,
            variants: updatedData.variants,
            inventory: updatedData.inventory
        }
    }
    const result = await Product_Model.deleteOne({ _id: productId }, updateDoc);
    return result;
}

// Delete Product Serivice 
const Delete_Product_Service = async (productId: string) => {
    if (!await Product_Model.isExist(productId)) {
        throw new Error("This product is not exist in DB **");
    }
    const result = await Product_Model.findOneAndDelete({ _id: productId }, { new: true });
    return result;
}

// Search By Tag Function
const Search_By_Tag = async (tagText:string) => {
    const result = await Product_Model.aggregate([
        {
            $unwind: "$tags"
        },{
            $match : {
                $or : [
                    {tags: { $regex: tagText, $options: 'i' }},
                    {name: { $regex: tagText, $options: 'i' }}
                ]
            }
        },{
            $group : {
                _id: "$_id",
                document: { $first: "$$ROOT" }
            }
        }
    ]);
    return result;
}


export const Product_Services = {
    Create_Product_Service,
    Get_All_Product_Service,
    Get_A_Product_Service,
    Update_Product_Service,
    Delete_Product_Service,
    Search_By_Tag
}