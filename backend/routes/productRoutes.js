import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

// route for all products
router.route('/').get(getProducts);
// route for single product
router.route('/:id').get(getProductById);

export default router;
