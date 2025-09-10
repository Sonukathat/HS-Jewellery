import express from 'express';
import { createUser, loginUser, getUserprofile, getUsers, deleteUser } from '../controllers/userController.js';
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get("/profile", protect, getUserprofile);
router.get('/alluser', protect, isAdmin, getUsers);
router.delete('/delete/:id', protect, isAdmin, deleteUser);



export default router;