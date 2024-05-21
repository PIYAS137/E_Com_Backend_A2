import { Model } from "mongoose"



export type Order_Type = {
    email: string,
    productId: string,
    price: number,
    quantity: number
}

export interface Custom_Order_Model extends Model<Order_Type>{
    // Get Product Quanity By Id 
    getProduct_Quantity (id:string) : Promise<number|null>
    // Update Product Quantity after order
    updateProduct_Quantity (id:string,q:number) : Promise<string|number|null>
}
