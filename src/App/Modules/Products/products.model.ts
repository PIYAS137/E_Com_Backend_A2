import { Schema, model } from "mongoose";
import { Inventory_Type, Product_Type, Variants_Type } from "./products.interface";


const Variants_Schema = new Schema<Variants_Type>({
    type: {
        type : String,
        required : true
    },
    value: {
        type : String,
        required : true
    }
})

const Inventory_Schema = new Schema<Inventory_Type>({
    quantity: {
        type : Number,
        required : true
    },
    inStock: {
        type : Boolean,
        required : true
    }
})

const Product_Schema = new Schema<Product_Type>({
    name: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category: {
        type : String,
        required : true
    },
    tags: {
        type : [String],
        required : true
    },
    variants: [Variants_Schema],
    inventory: [Inventory_Schema]
})


export const Product_Model = model<Product_Type>('products',Product_Schema);