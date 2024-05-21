import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { Product_Router } from './Modules/Products/products.router'
import { Order_Router } from './Modules/Orders/order.router'

const app = express()
// parser===========================================================>>>
app.use(express.json())
app.use(cors())



// Initial Route====================================================>>>
const initialController = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Server is Running ! 🤩 "
    })
}

// Product Router
app.use('/api', Product_Router);
// Order Router
app.use('/api',Order_Router);
// Initial Router
app.get('/', initialController);


// Route Not Found Handler Function ===============================>>>
app.use('*', (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

// If Any Server side Error =======================================>>>
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    if(error){
        res.status(500).json({
            success : false,
            message : "There is an Server Side Error ! 😥 "
        })
    }
})


export default app;
