import { z } from "zod";

export const Variants_Zod_Schema = z.object({
    type: z.string().min(1),
    value: z.string().min(1),
});

export const Inventory_Zod_Schema = z.object({
    quantity: z.number().min(0),
    inStock: z.boolean(),
});

export const Product_Zod_Schema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().min(0),
    category: z.string().min(1),
    tags: z.array(z.string()),
    variants: z.array(Variants_Zod_Schema),
    inventory: Inventory_Zod_Schema,
});
