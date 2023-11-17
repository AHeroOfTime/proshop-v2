import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// route for all products
router.route('/').get(getProducts).post(protect, admin, createProduct);
// route for single product
router.route('/:id').get(getProductById).put(protect, admin, updateProduct);

export default router;
