import express from 'express'
import { createCategory, getCategory } from '../controllers/categoryController.js';


const router = express.Router();

router.post('/add',createCategory);
router.get('/getcategory',getCategory);

export default router;