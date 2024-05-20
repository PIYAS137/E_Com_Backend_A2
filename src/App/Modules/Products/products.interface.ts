

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