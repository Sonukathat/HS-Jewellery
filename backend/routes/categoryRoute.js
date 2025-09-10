import express from 'express'
import { createCategory, deleteCategory, getCategory, updateCategory } from '../controllers/categoryController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/add', upload.array("images", 10), createCategory);
router.get('/get',getCategory);
router.put('/update/:id',upload.single("image"),updateCategory);
router.delete('/delete/:id',deleteCategory);

export default router;