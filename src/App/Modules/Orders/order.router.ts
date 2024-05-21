import express from 'express'
import { Order_Controller } from './order.controller';

const Router = express.Router()


// Create a order (POST API)
Router.post('/orders',Order_Controller.Create_Order_Contrller)

// Get All Ordeer (PORT API)
Router.get('/orders',Order_Controller.Get_All_Order_Controller)



export const Order_Router = Router;