import { Order_Type } from "./order.interface";
import { Order_Model } from "./order.model";


// Create Order Service
const Create_Order_Service = async (newOrder: Order_Type) => {

    const Available_Quantity: number | null = await Order_Model.getProduct_Quantity(newOrder.productId);
    if (Available_Quantity) {
        if (Available_Quantity < newOrder.quantity) {
            throw new Error("Insufficient quantity available in inventory")
        } else {
            const x = await Order_Model.updateProduct_Quantity(newOrder.productId, newOrder.quantity);
            if (x == -1) { // if the product is modified after query and before the update !
                throw new Error("There is an server side error")
            } else {
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