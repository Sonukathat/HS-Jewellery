import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductbyid, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/add',createProduct);
router.get('/get',getProduct);
router.get('/get/:id',getProductbyid)
router.put('/update/:id',updateProduct);
router.delete('/delete/:id',deleteProduct);


export default router;