import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// route for all products
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
// route for single product
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
// route for adding a review
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
