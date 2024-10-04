import express from 'express';
const router = express.Router();
import {registerUser, login} from '../controller/authController.js'
import {products} from '../controller/productController.js'
import { authenticateToken } from '../middleware/errMid.js';

router.post('/login', login)
router.post('/register', registerUser)
router.post('/product', authenticateToken, products)

export default router;