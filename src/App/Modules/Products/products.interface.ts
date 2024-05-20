import { Model } from "mongoose"


export type Variants_Type ={
    type: string,
    value: string
}

export type Inventory_Type = {
    quantity: number,
    inStock: boolean
}

// Main Product Type =====================================================>>>
export type Product_Type = {
    name: string,
    description: string,
    price : number,
    category: string,
    tags: string[],
    variants: Variants_Type[],
    inventory: Inventory_Type
}


// Custom Static Method (isExist Product is Search by ID)
export interface Custom_Product_Model extends Model<Product_Type>{
    isExist (_id : string) : Promise<string|null>
}