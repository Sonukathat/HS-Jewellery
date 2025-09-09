import express from 'express'
import { createCategory, deleteCategory, getCategory, updateCategory } from '../controllers/categoryController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/add', upload.single("image"),createCategory);
router.get('/get',getCategory);
router.put('/update/:id',updateCategory);
router.delete('/delete/:id',deleteCategory);

export default router;