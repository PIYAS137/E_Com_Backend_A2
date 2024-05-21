import { Order_Type } from "./order.interface";
import { Order_Model } from "./order.model";
import { Order_Zod_Schema } from "./order.zod.validation";


// Create Order Service Function
const Create_Order_Service = async (newOrder: Order_Type) => {
    const validatedData = Order_Zod_Schema.parse(newOrder);
    // Get the available quantity
    const Available_Quantity: number | null = await Order_Model.getProduct_Quantity(validatedData.productId);
    if (Available_Quantity){
        if (Available_Quantity < validatedData.quantity) {
            // if avaiable quantity is lower then thee requested quantity
            throw new Error("Insufficient quantity available in inventory")
        }else {
            // if available quantity and requested quantity is same
            if(Available_Quantity==validatedData.quantity){
                const x = await Order_Model.updateInStock_Status(validatedData.productId);
                console.log("EQ======>",x);
            }
            // if avaiable quantity is greater then thee requested quantity & before place order it is update the product quantity
            const x = await Order_Model.updateProduct_Quantity(validatedData.productId, validatedData.quantity);
            // if the product is modified after query and before the update !(Internal DB Issue)
            if (x == -1) { 
                throw new Error("There is an server side error")
            } else {
                // If every thing is ok then place order
                const result = await Order_Model.create(validatedData);
                return result;
            }
        }
    }
}

// Get All Order Service Function
const Get_All_Order_Service =async () => {
    const result = await Order_Model.find();
    return result;
}

// Get Order by email fuction 
const Get_Order_By_Email =async (email:string) => {
    const result = await Order_Model.find({email});
    return result;
}

export const Order_Services = {
    Create_Order_Service,
    Get_All_Order_Service,
    Get_Order_By_Email
}