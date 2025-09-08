import express from 'express';
import { createUser, loginUser, getUserprofile } from '../controllers/userController.js';
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get("/profile", protect, getUserprofile);
// router.post('/login',login);


export default router;