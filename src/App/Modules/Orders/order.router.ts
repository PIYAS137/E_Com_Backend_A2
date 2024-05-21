import express from 'express'
import { Order_Controller } from './order.controller';

const Router = express.Router()


// Create a order (POST API)
Router.post('/orders',Order_Controller.Create_Order_Contrller)


export const Order_Router = Router;