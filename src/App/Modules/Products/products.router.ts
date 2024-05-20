import express,{Request,Response} from 'express'
import { Products_Controllers } from './products.controller';

const Router = express.Router()

// Create A Product Router 
Router.post('/products',Products_Controllers.Create_Product_Controller);

// Get All Products Router
Router.get('/products',Products_Controllers.Get_All_Product_Controller);

// Get A Product By ID Router 
Router.get('/products/:productId',Products_Controllers.Get_A_Product_Controller);

// Update A Proudct Information Router
Router.put('/products/:productId',Products_Controllers.Update_Product_Controller); 

// Delete A Product by ID Router 
Router.delete('/products/:productId',Products_Controllers.Delete_Product_Controller);


export const Product_Router = Router;