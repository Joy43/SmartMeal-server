import { Router } from 'express';
import { customersController } from './customer.controller';


const router = Router();

//  custormar routes
router.get('/', customersController.getAll);

export const customerRouter=router;