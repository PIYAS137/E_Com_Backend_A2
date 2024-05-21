import { Schema, model } from "mongoose";
import { Custom_Order_Model, Order_Type } from "./order.interface";
import { Product_Model } from "../Products/products.model";
import { Product_Type } from "../Products/products.interface";



const Order_Schema = new Schema<Order_Type, Custom_Order_Model>({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})


// Get Quantity Custom Static Method
Order_Schema.statics.getProduct_Quantity = async function (id: string) {
    const product = await Product_Model.findOne({ _id: id });
    return product?.inventory.quantity;
}
// After palce order, update the product quanity field
Order_Schema.statics.updateProduct_Quantity = async function (id: string, q: number) {
    const product: Product_Type | null = await Product_Model.findOne({ _id: id });
    if (product) {
        const newQ = product.inventory.quantity - q;
        const updatedDoc = {
            $set: {
                "inventory.quantity": newQ
            }
        }
        const result = await Product_Model.updateOne({ _id: id }, updatedDoc);
        return result;
    } else {
        return -1; // if the product is modified after query and before the update !
    }
}
// Update inStock property
Order_Schema.statics.updateInStock_Status = async function (id: string) {
    const product: Product_Type | null = await Product_Model.findOne({ _id: id });
    if (product) {
        const updatedDoc = {
            $set: {
                "inventory.inStock": false
            }
        }
        const result = await Product_Model.updateOne({ _id: id }, updatedDoc);
        return result;
    }
}


export const Order_Model = model<Order_Type, Custom_Order_Model>('Order', Order_Schema);