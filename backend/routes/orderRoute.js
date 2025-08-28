import express from 'express'
import { createOrder, getOrderbyid, getOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/add',createOrder);
router.get('/get/:id',getOrderbyid);
router.get('/getall',getOrders);

export default router;