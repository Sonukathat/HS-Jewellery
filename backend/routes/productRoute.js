import express from 'express'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/add',createProduct);
router.get('/get',getProduct);
router.put('/update/:id',updateProduct);
router.delete('/delete/:id',deleteProduct);


export default router;