import express from 'express'
import { createCategory, deleteCategory, getCategory, updateCategory } from '../controllers/categoryController.js';
import { upload } from '../middleware/upload.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', protect, isAdmin, upload.array("images", 20), createCategory);
router.get('/get', getCategory);
router.put('/update', protect, isAdmin, upload.single("image"), updateCategory);
router.delete('/delete/:name', protect, isAdmin, deleteCategory);

export default router;
