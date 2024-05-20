import express, { Request, Response } from 'express'
import cors from 'cors'

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
app.get('/',initialController)

export default app;
