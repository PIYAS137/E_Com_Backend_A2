import { Order_Type } from "./order.interface";
import { Order_Model } from "./order.model";


// Create Order Service
const Create_Order_Service = async (newOrder: Order_Type) => {
    // Get the available quantity
    const Available_Quantity: number | null = await Order_Model.getProduct_Quantity(newOrder.productId);

    if (Available_Quantity) {
        if (Available_Quantity < newOrder.quantity) {
            // if avaiable quantity is lower then thee requested quantity
            throw new Error("Insufficient quantity available in inventory")
        } else {
            // if avaiable quantity is greater then thee requested quantity & before place order it is update the product quantity
            const x = await Order_Model.updateProduct_Quantity(newOrder.productId, newOrder.quantity);
            // if the product is modified after query and before the update !(Internal DB Issue)
            if (x == -1) { 
                throw new Error("There is an server side error")
            } else {
                // If every thing is ok then place order
                const result = await Order_Model.create(newOrder);
                return result;
            }
        }
    }

    // zod validation


}


export const Order_Services = {
    Create_Order_Service,
}