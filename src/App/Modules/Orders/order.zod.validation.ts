import { z } from "zod";



export const Order_Zod_Schema = z.object({
    email: z.string().email().min(1),
    productId: z.string().min(1), 
    price: z.number().positive().min(1), 
    quantity: z.number().int().positive()
  });