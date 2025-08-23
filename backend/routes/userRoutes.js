import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup',createUser);
router.get('/getusers',getUsers)


export default router;